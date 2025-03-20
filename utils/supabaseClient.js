// This is a more complete mock of supabaseClient to handle all required operations
// We're using this instead of a real implementation to avoid needing credentials

const mockData = {
  poll_results: {}
};

const supabase = {
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

export default supabase;