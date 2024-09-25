import React, { useState } from 'react';

const GoalSetter = ({ onAddGoal }) => {
  const [goal, setGoal] = useState('');

  const handleAddGoal = (e) => {
    e.preventDefault();
    onAddGoal(goal);
    setGoal('');
  };

  return (
    <div>
    <h1 className="text-1xl font-bold mb-4 mt-10 text-center">Add Your Fitness Goal</h1>
    <form onSubmit={handleAddGoal} className="flex items-center justify-center mt-4 mb-4">
      <input
        type="text"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="Set a new goal"
        className="p-2 border rounded mr-2 max-w-md focus:outline-none focus:ring-orangecolor focus:border-orangecolor"
        required
      />
      <button
        type="submit"
        className="bg-orangecolor hover:bg-black duration-500 transition-all text-white font-bold py-2 px-4 rounded"
      >
        Set Goal
      </button>
    </form>
    </div>
  );
};

export default GoalSetter;
