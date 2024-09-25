import React from 'react';
import calori_icon from '../../../assets/calories.png'
import nutrition_icon from '../../../assets/plan.png'
import dailyConsumption_icon from '../../../assets/nutrition.png'

const NutritionAnalytics = ({ nutritions }) => {
  // Calculate total calories
  const totalCalories = nutritions.reduce((acc, curr) => acc + curr.calories, 0);

  // Calculate macronutrient distribution
  const totalCarbohydrates = nutritions.reduce((acc, curr) => acc + curr.carbohydrates, 0);
  const totalProteins = nutritions.reduce((acc, curr) => acc + curr.proteins, 0);
  const totalFats = nutritions.reduce((acc, curr) => acc + curr.fats, 0);

  // Calculate daily consumption trends
  const dailyConsumptionTrends = nutritions.reduce((acc, curr) => {
    const date = new Date(curr.createdAt).toDateString();
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-textgray">

        {/* Total Calories Section */}
        <div className="bg-bg_black flex gap-20 rounded-md p-4 shadow justify-center items-center">
          <img src={calori_icon} alt="calori Icon" className='h-16' />
          <div className='flex flex-col'>
            <h3 className="text-lg font-semibold mb-2">Total Calories</h3>
            <p className='text-white text-5xl'>{totalCalories}</p>
          </div>
        </div>

        {/* Macronutrient Distribution Section */}
        <div className="bg-bg_black rounded-md p-10 shadow flex justify-center items-center gap-20">
          <img src={nutrition_icon} alt="calori Icon" className='h-16' />
          <div className='flex flex-col'>
            <h3 className="text-lg font-semibold mb-2">MacroNutrients Distribution</h3>
            <p className='text-white text-1xl'>Carbohydrates: {totalCarbohydrates}</p>
            <p className='text-white text-1xl'>Proteins: {totalProteins}</p>
            <p className='text-white text-1xl'>Fats: {totalFats}</p>
          </div>
        </div>

        {/* Daily Consumption Trends Section */}
        <div className="bg-bg_black rounded-md p-4 shadow flex justify-center items-center gap-20">
          <img src={dailyConsumption_icon} alt="calori Icon" className='h-16' />
         <div  className='flex flex-col'>
         <h3 className="text-lg font-semibold mb-2">Daily Consumption Trends</h3>
          <ul>
            {Object.keys(dailyConsumptionTrends).map(date => (
              <li key={date}>{date}: {dailyConsumptionTrends[date]}</li>
            ))}
          </ul>
         </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionAnalytics;
