import React from 'react';

const Dashboard = ({ strikes, balls, foul, clearStats }) => {
  return (
    <div>
      <button
        onClick={strikes}>
        Strike
      </button>
      <button
        onClick={balls}>
        Ball
      </button>
      <button
        onClick={foul}>
        Foul
      </button>
      <button
        onClick={clearStats}>
        Clear Stats
      </button>
    </div>
  );
}

export default Dashboard;