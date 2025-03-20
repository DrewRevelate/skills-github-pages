import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import supabase from '../utils/supabaseClient';

const PollComponent = ({ pollId, question, options }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [results, setResults] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState(null);
  const [totalVotes, setTotalVotes] = useState(0);

  // Fetch current results when component mounts
  useEffect(() => {
    fetchResults();
  }, []);

  // Fetch poll results from Supabase
  const fetchResults = async () => {
    try {
      const { data, error } = await supabase
        .from('poll_results')
        .select('option_id, count')
        .eq('poll_id', pollId);
      
      if (error) throw error;
      
      // Process and format the results
      if (data && data.length > 0) {
        const formattedResults = {};
        let total = 0;
        
        data.forEach(item => {
          formattedResults[item.option_id] = item.count;
          total += item.count;
        });
        
        setResults(formattedResults);
        setTotalVotes(total);
      }
    } catch (err) {
      console.error('Error fetching poll results:', err);
      setError('Failed to load poll results');
    }
  };

  // Submit vote to Supabase
  const submitVote = async () => {
    if (!selectedOption) return;
    
    setIsSubmitting(true);
    try {
      // First, check if the option exists in poll_results
      const { data: existingOption, error: fetchError } = await supabase
        .from('poll_results')
        .select('count')
        .eq('poll_id', pollId)
        .eq('option_id', selectedOption);
      
      if (fetchError) throw fetchError;
      
      if (existingOption && existingOption.length > 0) {
        // Option exists, update the count
        const newCount = existingOption[0].count + 1;
        const { error: updateError } = await supabase
          .from('poll_results')
          .update({ count: newCount })
          .eq('poll_id', pollId)
          .eq('option_id', selectedOption);
        
        if (updateError) throw updateError;
      } else {
        // Option doesn't exist, insert a new record
        const { error: insertError } = await supabase
          .from('poll_results')
          .insert([
            { poll_id: pollId, option_id: selectedOption, count: 1 }
          ]);
        
        if (insertError) throw insertError;
      }
      
      // Fetch updated results
      await fetchResults();
      setShowResults(true);
    } catch (err) {
      console.error('Error submitting vote:', err);
      setError('Failed to submit your vote');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculate percentage for an option
  const calculatePercentage = (optionId) => {
    if (!results || totalVotes === 0) return 0;
    const count = results[optionId] || 0;
    return Math.round((count / totalVotes) * 100);
  };

  return (
    <motion.div
      className="poll-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        padding: '1.5rem',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        maxWidth: '700px',
        margin: '2rem auto',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Racing stripe accents */}
      <motion.div
        className="poll-racing-stripes"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '4px',
          background: 'linear-gradient(90deg, var(--racing-red), transparent)'
        }}
      />
      
      {/* Poll question */}
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{
          fontSize: '1.4rem',
          marginBottom: '1.5rem',
          textAlign: 'center',
          color: 'white'
        }}
      >
        {question}
      </motion.h3>
      
      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            color: 'var(--racing-red)',
            textAlign: 'center',
            marginBottom: '1rem'
          }}
        >
          {error}
        </motion.div>
      )}
      
      <AnimatePresence mode="wait">
        {!showResults ? (
          /* Poll options */
          <motion.div
            key="options"
            className="poll-options"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
            }}
          >
            {options.map((option, index) => (
              <motion.button
                key={option.id}
                whileHover={{ scale: 1.02, boxShadow: '0 5px 15px rgba(225, 6, 0, 0.2)' }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedOption(option.id)}
                style={{
                  background: selectedOption === option.id ? 'rgba(225, 6, 0, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                  padding: '1rem',
                  borderRadius: '8px',
                  border: selectedOption === option.id ? '1px solid var(--racing-red)' : '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: selectedOption === option.id ? '0 5px 15px rgba(225, 6, 0, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.1)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease'
                }}
              >
                <motion.span
                  animate={selectedOption === option.id ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.3 }}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: selectedOption === option.id ? 'var(--racing-red)' : 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '0.8rem'
                  }}
                >
                  {selectedOption === option.id ? '✓' : index + 1}
                </motion.span>
                {option.text}
              </motion.button>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(225, 6, 0, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={submitVote}
              disabled={!selectedOption || isSubmitting}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: selectedOption ? 1 : 0.5, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{
                background: 'var(--racing-red)',
                color: 'white',
                padding: '0.8rem 1.5rem',
                borderRadius: '8px',
                border: 'none',
                marginTop: '1rem',
                cursor: selectedOption ? 'pointer' : 'not-allowed',
                fontWeight: 'bold',
                boxShadow: '0 5px 15px rgba(225, 6, 0, 0.2)',
                alignSelf: 'center',
                opacity: selectedOption ? 1 : 0.5
              }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Vote'}
            </motion.button>
          </motion.div>
        ) : (
          /* Results view */
          <motion.div
            key="results"
            className="poll-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            {options.map((option) => {
              const percentage = calculatePercentage(option.id);
              
              return (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    marginBottom: '0.8rem'
                  }}
                >
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    marginBottom: '0.3rem'
                  }}>
                    <span>{option.text}</span>
                    <span>{percentage}%</span>
                  </div>
                  
                  <div style={{
                    height: '12px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      style={{
                        height: '100%',
                        background: 'var(--racing-red)',
                        borderRadius: '6px'
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              style={{
                textAlign: 'center',
                fontSize: '0.9rem',
                color: 'var(--racing-silver)',
                marginTop: '0.5rem'
              }}
            >
              Total votes: {totalVotes}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Racing checkered flag pattern */}
      <motion.div
        className="poll-checkered-flag"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '150px',
          height: '150px',
          backgroundImage: 'repeating-conic-gradient(#fff 0% 25%, transparent 0% 50%)',
          backgroundSize: '20px 20px',
          zIndex: 0,
          pointerEvents: 'none',
          mixBlendMode: 'overlay'
        }}
      />
    </motion.div>
  );
};

export default PollComponent;