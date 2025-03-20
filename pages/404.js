import React from 'react';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundImage: 'linear-gradient(135deg, #121212, #1e1e1e, #2a2a2a)',
      color: 'white',
      textAlign: 'center',
      padding: '0 20px'
    }}>
      <h1 style={{
        fontSize: '3rem',
        marginBottom: '1rem',
        color: '#E10600'
      }}>404 - Pit Stop</h1>
      
      <p style={{
        fontSize: '1.2rem',
        marginBottom: '2rem',
        maxWidth: '600px'
      }}>
        Looks like you've veered off the track! Let's get you back to the starting grid.
      </p>
      
      <Link href="/" style={{
        backgroundColor: '#E10600',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 'bold',
        boxShadow: '0 4px 10px rgba(225, 6, 0, 0.3)',
        transition: 'all 0.3s ease'
      }}>
        Back to Start
      </Link>
    </div>
  );
}
