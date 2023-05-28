import React, { useState } from 'react';

const Dashboard = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Dashboard</h1>

      <h3>Counter: {count}</h3>

      <div>
        <button onClick={() => setCount((c) => c + 1)}>Increase</button>
        <button onClick={() => setCount((c) => c - 1)}>Decrease</button>
      </div>
    </div>
  );
};

export default Dashboard;