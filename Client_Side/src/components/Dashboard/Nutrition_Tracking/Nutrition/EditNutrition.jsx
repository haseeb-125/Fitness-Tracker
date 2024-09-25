import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditNutrition() {
  const { id } = useParams(); // Get the ID from the URL params
  const navigate = useNavigate();
  const [nutrition, setNutrition] = useState({
    name: '',
    quantity: '',
    calories: '',
    carbohydrates: '',
    proteins: '',
    fats: '',
    mealType: ''
  });
  const [mealTypes, setMealTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    // Fetch the nutrition entry to be edited
    axios.get(`http://localhost:3000/nutrition/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        setNutrition(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });

    // Fetch meal types
    axios.get('http://localhost:3000/type/mealTypes', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        setMealTypes(response.data);
      })
      .catch(error => {
        console.error('Error fetching meal types:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNutrition({ ...nutrition, [name]: value });
  };

  const handleSubmit = (e) => {
    const token = localStorage.getItem('token');
    e.preventDefault();

    axios.put(`http://localhost:3000/nutrition/${id}`, nutrition, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        console.log('Nutrition entry updated:', response.data);

        toast.success('Nutrition entry updated successfully!');
        navigate('/db/nutritionList');
      })
      .catch(error => {
        console.error('Error updating nutrition entry:', error);

        toast.error('Failed to update nutrition entry.');
      });
  };

  if (loading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-4 text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="container h-screen mx-auto px-4 py-8 bg-black">
      <ToastContainer />

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-bg_black font-oswald text-textgray p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Edit Nutrition Entry</h1>
        <label className="block mb-4">
          <span >Meal Type:</span>
          <select
            name="mealType"
            value={nutrition.mealType}
            onChange={handleChange}
            className="mt-1  block w-full px-3 py-2 bg-transparent text-textgray  border-black border-2 rounded-md shadow-sm focus:outline-none focus:ring-orangecolor focus:border-orangecolor sm:text-sm"
            required
          >
            <option value="">Select Meal Type</option>
            {mealTypes.map(mealType => (
              <option key={mealType._id} value={mealType._id}>{mealType.name}</option>
            ))}
          </select>
        </label>
        <label className="block mb-4">
          <span >Name:</span>
          <input
            type="text"
            name="name"
            value={nutrition.name}
            onChange={handleChange}
            className="mt-1  block w-full px-3 py-2 bg-transparent text-textgray  border-black border-2 rounded-md shadow-sm focus:outline-none focus:ring-orangecolor focus:border-orangecolor sm:text-sm"
            required
          />
        </label>
        <label className="block mb-4">
          <span >Quantity:</span>
          <input
            type="text"
            name="quantity"
            value={nutrition.quantity}
            onChange={handleChange}
            className="mt-1  block w-full px-3 py-2 bg-transparent text-textgray  border-black border-2 rounded-md shadow-sm focus:outline-none focus:ring-orangecolor focus:border-orangecolor sm:text-sm"
            required
          />
        </label>
        <label className="block mb-4">
          <span >Calories:</span>
          <input
            type="number"
            name="calories"
            value={nutrition.calories}
            onChange={handleChange}
            className="mt-1  block w-full px-3 py-2 bg-transparent text-textgray  border-black border-2 rounded-md shadow-sm focus:outline-none focus:ring-orangecolor focus:border-orangecolor sm:text-sm"
            required
          />
        </label>
        <label className="block mb-4">
          <span >Carbohydrates:</span>
          <input
            type="number"
            name="carbohydrates"
            value={nutrition.carbohydrates}
            onChange={handleChange}
            className="mt-1  block w-full px-3 py-2 bg-transparent text-textgray  border-black border-2 rounded-md shadow-sm focus:outline-none focus:ring-orangecolor focus:border-orangecolor sm:text-sm"
            required
          />
        </label>
        <label className="block mb-4">
          <span >Proteins:</span>
          <input
            type="number"
            name="proteins"
            value={nutrition.proteins}
            onChange={handleChange}
            className="mt-1  block w-full px-3 py-2 bg-transparent text-textgray  border-black border-2 rounded-md shadow-sm focus:outline-none focus:ring-orangecolor focus:border-orangecolor sm:text-sm"
            required
          />
        </label>
        <label className="block mb-6">
          <span >Fats:</span>
          <input
            type="number"
            name="fats"
            value={nutrition.fats}
            onChange={handleChange}
            className="mt-1  block w-full px-3 py-2 bg-transparent text-textgray  border-black border-2 rounded-md shadow-sm focus:outline-none focus:ring-orangecolor focus:border-orangecolor sm:text-sm" required
          />
        </label>
        <button
          type="submit"
          disabled={loading}
          className="relative flex h-10 w-full items-center justify-center overflow-hidden bg-transparent text-white  transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orangecolor before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56"
        >
          <span className='relative z-10 tracking-widest'>Update</span>
        </button>
      </form>

    </div>
  );
}

export default EditNutrition;
