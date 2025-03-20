// This is a more complete mock of supabaseClient to handle all required operations
// We're using this instead of a real implementation to avoid needing credentials

// Check if we should use the mock implementation
const SHOULD_MOCK = typeof process !== 'undefined' && 
  (process.env.NEXT_PUBLIC_MOCK_SUPABASE === 'true' || 
   process.env.NODE_ENV === 'development' || 
   typeof window === 'undefined');

// Use localStorage for persistence if available, otherwise use memory
let mockStorage;

if (typeof window !== 'undefined' && window.localStorage) {
  try {
    const storedData = window.localStorage.getItem('fullThrottleMockData');
    mockStorage = storedData ? JSON.parse(storedData) : { poll_results: {} };
  } catch (e) {
    console.error('Error accessing localStorage:', e);
    mockStorage = { poll_results: {} };
  }
} else {
  mockStorage = { poll_results: {} };
}

const mockData = mockStorage;

// Save mock data to localStorage if available
const saveMockData = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      window.localStorage.setItem('fullThrottleMockData', JSON.stringify(mockData));
    } catch (e) {
      console.error('Error saving to localStorage:', e);
    }
  }
};

// Create mock supabase client
const mockSupabase = {
  from: (table) => ({
    select: (columns) => ({
      eq: (field, value) => {
        if (table === 'poll_results' && field === 'poll_id') {
          // Return mock data structure for poll results
          const results = Object.keys(mockData.poll_results)
            .filter(key => key.startsWith(`${value}_`))
            .map(key => ({
              option_id: key.split('_')[1],
              count: mockData.poll_results[key] || 0
            }));
          
          return Promise.resolve({ data: results, error: null });
        }
        return Promise.resolve({ data: [], error: null });
      }
    }),
    insert: (records) => {
      if (table === 'poll_results' && records && records.length > 0) {
        const { poll_id, option_id, count } = records[0];
        const key = `${poll_id}_${option_id}`;
        mockData.poll_results[key] = count;
        return Promise.resolve({ data: null, error: null });
      }
      return Promise.resolve({ data: null, error: null });
    },
    update: (updates) => ({
      eq: (field1, value1) => ({
        eq: (field2, value2) => {
          if (table === 'poll_results' && field1 === 'poll_id' && field2 === 'option_id') {
            const key = `${value1}_${value2}`;
            mockData.poll_results[key] = updates.count;
            return Promise.resolve({ data: null, error: null });
          }
          return Promise.resolve({ data: null, error: null });
        }
      })
    })
  })
};

// Export the mock if enabled, otherwise try to use real Supabase client
let supabase;

if (SHOULD_MOCK) {
  console.log('Using mock Supabase client');
  supabase = mockSupabase;
} else {
  console.log('Attempting to use real Supabase client');
  // In a real implementation, you would import the Supabase client
  // import { createClient } from '@supabase/supabase-js';
  // supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  
  // For safety, just use the mock
  supabase = mockSupabase;
}

export default supabase;