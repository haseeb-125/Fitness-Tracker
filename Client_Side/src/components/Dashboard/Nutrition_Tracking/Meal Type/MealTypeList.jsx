import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {
  PencilIcon,
  TrashIcon,
  SortAscendingIcon,
  SortDescendingIcon
} from '@heroicons/react/outline';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MealTypeList = () => {
  const [mealTypes, setMealTypes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [mealTypesPerPage] = useState(5);

  const navigate = useNavigate();

  useEffect(() => {
    fetchMealTypes();
  }, []);

  const fetchMealTypes = async () => {
    try {
      const token = localStorage.getItem('token'); 
      const response = await axios.get('http://localhost:3000/type/mealTypes',{
        headers: {
          Authorization: `Bearer ${token}` // Include token in headers
        }
      });
      setMealTypes(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token'); 
      await axios.delete(`http://localhost:3000/type/mealTypes/${id}`,{
        headers: {
          Authorization: `Bearer ${token}` // Include token in headers
        }
      });
      fetchMealTypes();
      toast.success('Meal type deleted successfully!');
    } catch (error) {
      console.error('Error deleting meal type:', error);
      toast.error('Failed to delete meal type.');
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredMealTypes = mealTypes.filter(mealType => {
    return mealType.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const sortedMealTypes = [...filteredMealTypes].sort((a, b) => {
    const aValue = (a[sortColumn] || '').toString().toLowerCase();
    const bValue = (b[sortColumn] || '').toString().toLowerCase();
    if (sortOrder === 'asc') {
      return aValue.localeCompare(bValue);
    } else {
      return bValue.localeCompare(aValue);
    }
  });

  const indexOfLastMealType = currentPage * mealTypesPerPage;
  const indexOfFirstMealType = indexOfLastMealType - mealTypesPerPage;
  const currentMealTypes = sortedMealTypes.slice(indexOfFirstMealType, indexOfLastMealType);

  if (loading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-4 text-red-500">Error: {error.message}</div>;
  }

  const SortableHeader = ({ column, children }) => {
    const isCurrentColumn = sortColumn === column;
    return (
      <th
        className="px-4 py-2 cursor-pointer whitespace-nowrap border border-black"
        onClick={() => handleSort(column)}
      >
        {children}
        <SortAscendingIcon
          className={`w-4 h-4 inline ml-1 ${isCurrentColumn && sortOrder === 'asc' ? 'text-textgray' : 'text-orangecolor'}`}
        />
        <SortDescendingIcon
          className={`w-4 h-4 inline ml-1 ${isCurrentColumn && sortOrder === 'desc' ? 'text-textgray' : 'text-orangecolor'}`}
        />
      </th>
    );
  };

  return (
    <div className="flex h-screen items-start font-oswald text-textgray justify-center bg-black">
      <div className="max-w-2xl w-full mx-auto mt-8 p-4 bg-bg_black rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Meal Type List</h1>
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div className="flex flex-col md:flex-row items-center mb-2 md:mb-0">
            <input
              type="text"
              placeholder="Search Meal Types"
              value={searchTerm}
              onChange={handleSearch}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-orangecolor mb-2 md:mb-0"
            />
          </div>
          <button
            onClick={() => navigate('/db/createMealType')}
            className="bg-orangecolor text-white px-4 py-2 rounded flex items-center hover:bg-black duration-500 transition-all focus:outline-none"
          >
            Add Meal-Type
          </button>
        </div>
        <div className="overflow-x-auto">
          <div className="overflow-y-auto max-h-96">
            <table className="min-w-full bg-bg_black border border-black divide-y divide-black">
              <thead className="divide-y divide-black bg-bg_black">
                <tr className="divide-x divide-black">
                  <SortableHeader column="name">
                    Name
                  </SortableHeader>
                  <th className="px-4 py-2 border border-black">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black">
                {currentMealTypes.map(mealType => (
                  <tr key={mealType._id} className=" divide-x divide-black text-center">
                    <td className="px-4 py-2 border border-black">{mealType.name}</td>
                    <td className="px-4 py-2 flex space-x-2 justify-center">
                      <button
                        onClick={() => navigate(`/db/editMealType/${mealType._id}`)}
                        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mr-2 focus:outline-none"
                      >
                        <PencilIcon className="w-6 h-6" />
                      </button>
                      <button
                        onClick={() => handleDelete(mealType._id)}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 focus:outline-none"
                      >
                        <TrashIcon className="w-6 h-6" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <ul className="flex list-none rounded border border-gray-300 divide-x divide-gray-300">
            <li
              className={`px-3 py-2 cursor-pointer ${
                currentPage === 1 ? 'bg-gray-300' : 'hover:bg-gray-200'
              }`}
              onClick={() => handlePageChange(1)}
            >
              First
            </li>
            {Array.from({ length: Math.ceil(sortedMealTypes.length / mealTypesPerPage) }).map(
              (item, index) => (
                <li
                  key={index}
                  className={`px-3 py-2 cursor-pointer ${
                    currentPage === index + 1 ? 'bg-gray-300' : 'hover:bg-gray-200'
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </li>
              ))}
            <li
              className={`px-3 py-2 cursor-pointer ${
                currentPage === Math.ceil(sortedMealTypes.length / mealTypesPerPage)
                  ? 'bg-gray-300'
                  : 'hover:bg-gray-200'
              }`}
              onClick={() => handlePageChange(Math.ceil(sortedMealTypes.length / mealTypesPerPage))}
            >
              Last
            </li>
          </ul>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default MealTypeList;
