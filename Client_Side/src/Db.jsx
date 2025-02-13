import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './components/Dashboard/Sidebar';
import Header from './components/Dashboard/DbHeader';
import CategoryList from './components/Dashboard/Workout_Tracking/Category/CategoryList';
import CreateCategory from './components/Dashboard/Workout_Tracking/Category/CreateCategory';
import CategoryEdit from './components/Dashboard/Workout_Tracking/Category/CategoryEdit';
import TagList from './components/Dashboard/Workout_Tracking/Tags/TagList';
import CreateTag from './components/Dashboard/Workout_Tracking/Tags/CreateTag';
import EditTag from './components/Dashboard/Workout_Tracking/Tags/EditTag';
import CreateRoutine from './components/Dashboard/Workout_Tracking/Routine/CreateRoutine';
import RoutineList from './components/Dashboard/Workout_Tracking/Routine/RoutineList';
import EditRoutine from './components/Dashboard/Workout_Tracking/Routine/EditRoutine';
import CreateMealType from './components/Dashboard/Nutrition_Tracking/Meal Type/CreateMealType';
import MealTypeList from './components/Dashboard/Nutrition_Tracking/Meal Type/MealTypeList';
import EditMealType from './components/Dashboard/Nutrition_Tracking/Meal Type/EditMealType';
import CreateNutrition from './components/Dashboard/Nutrition_Tracking/Nutrition/CreateNutrition';
import NutritionList from './components/Dashboard/Nutrition_Tracking/Nutrition/NutritionList';
import EditNutrition from './components/Dashboard/Nutrition_Tracking/Nutrition/EditNutrition';
import NutritionAnalyticsPage from './components/Dashboard/Nutrition_Tracking/Nutrition/NutritionAnalyticsPage';
import CreateProgress from './components/Dashboard/Progress_Tracking/CreateProgress';
import ProgressList from './components/Dashboard/Progress_Tracking/ProgressList';
import EditProgress from './components/Dashboard/Progress_Tracking/EditProgress';
import ProgressChart from './components/Dashboard/Progress_Tracking/ProgressChart';
import Dashboard from './components/Dashboard/Dashboard';
import FitnessApp from './components/Dashboard/FitnessApp';
import MainReminder from './components/Dashboard/MainReminder';
import Logout from './components/user_account/Logout';

const Db = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isAuthPage =  location.pathname === '';

  return (
    <div className={`flex flex-col ${isAuthPage ? '' : 'lg:flex-row'} min-h-full bg-gray-100`}>
      {!isAuthPage && <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
      <div className="flex flex-col flex-1">
        {!isAuthPage && <Header toggleSidebar={toggleSidebar} />}
      <div>
      
        <Routes>
        
      
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createCategory" element={<CreateCategory />} />
          <Route path="/categoryList" element={<CategoryList />} />
          <Route path="/category/:id" element={<CategoryEdit />} />
          <Route path="/createTag" element={<CreateTag />} />
          <Route path="/tagList" element={<TagList />} />
          <Route path="/editTag/:id" element={<EditTag />} />
          <Route path="/createRoutine" element={<CreateRoutine />} />
          <Route path="/routineList" element={<RoutineList />} />
          <Route path="/editRoutine/:id" element={<EditRoutine />} />
          <Route path="/createMealType" element={<CreateMealType />} />
          <Route path="/mealTypeList" element={<MealTypeList />} />
          <Route path="/editMealType/:id" element={<EditMealType />} />
          <Route path="/createNutrition" element={<CreateNutrition />} />
          <Route path="/nutritionList" element={<NutritionList />} />
          <Route path="/editNutrition/:id" element={<EditNutrition />} />
          <Route path="/nutritionAnalytics" element={<NutritionAnalyticsPage />} />
          <Route path="/createProgress" element={<CreateProgress />} />
          <Route path="/progressList" element={<ProgressList />} />
          <Route path="/editProgress/:id" element={<EditProgress />} />
          <Route path="/progressChart" element={<ProgressChart />} />
          <Route path="/fitnessApp" element={<FitnessApp />} /> 
          <Route path="/mainReminder" element={<MainReminder/>} /> 
          <Route path="/logout" element={<Logout />} />
        </Routes>
        </div>
      </div>
    </div>
  );
};

export default Db;
