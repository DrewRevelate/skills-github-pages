import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-supabase-url.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key';

// Mock supabase for development/preview if credentials aren't set
const isMockMode = !process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create the client
const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

// Create a mock/wrapper with placeholder functionality
const supabase = {
  from: (table) => ({
    select: () => ({
      eq: (field, value) => ({
        then: (callback) => callback({ data: [], error: isMockMode ? null : 'No data' })
      })
    }),
    insert: (data) => ({
      then: (callback) => callback({ data: isMockMode ? data : null, error: isMockMode ? null : 'Mock mode' })
    }),
    update: (data) => ({
      eq: (field, value) => ({
        then: (callback) => callback({ data: isMockMode ? data : null, error: isMockMode ? null : 'Mock mode' })
      })
    })
  }),
  storage: {
    from: (bucket) => ({
      upload: (path, file) => Promise.resolve({ data: { path }, error: null }),
      getPublicUrl: (path) => ({ data: { publicUrl: `/placeholder/${path}` } })
    })
  },
  auth: {
    signUp: () => Promise.resolve({ data: null, error: isMockMode ? null : 'Mock mode' }),
    signIn: () => Promise.resolve({ data: null, error: isMockMode ? null : 'Mock mode' }),
    signOut: () => Promise.resolve({ error: null }),
    user: () => null,
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } })
  }
};

// If we have real credentials, use the actual client instead of the mock
if (!isMockMode) {
  // Use the actual client methods instead of our mock ones
  Object.assign(supabase, supabaseClient);
}

export default supabase;