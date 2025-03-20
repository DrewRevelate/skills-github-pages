// This is a mock of supabaseClient to avoid errors
// In a real implementation, you would use the actual Supabase client

const supabase = {
  from: (table) => ({
    insert: () => ({
      error: null
    })
  })
};

export default supabase;