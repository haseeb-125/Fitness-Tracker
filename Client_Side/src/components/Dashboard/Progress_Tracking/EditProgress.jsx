import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditProgress() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        weight: '',
        chest: '',
        waist: '',
        hips: '',
        runTime: '',
        benchPress: '',
        squat: '',
        deadlift: ''
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        const token = localStorage.getItem('token');
        axios.get(`http://localhost:3000/progress/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                setFormData(response.data);
            })
            .catch(error => {
                console.error('Error fetching progress data:', error);
                toast.error('Error fetching progress data.');
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.put(`http://localhost:3000/progress/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            toast.success('Progress updated successfully!');
            navigate('/db/progressList');
        } catch (error) {
            console.error('Error updating progress data:', error);
            toast.error('Error updating progress. Please try again.');
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 bg-black h-screen">
            <ToastContainer />

            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-bg_black font-oswald text-textgray p-6 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-5 ">Edit Fitness Progress</h1>
                {[
                    { label: 'Lifting Weight (lbs):', name: 'weight' },
                    { label: 'Chest (in):', name: 'chest' },
                    { label: 'Waist (in):', name: 'waist' },
                    { label: 'Hips (in):', name: 'hips' },
                    { label: 'Run Time (mins):', name: 'runTime' },
                    { label: 'Bench Press (lbs):', name: 'benchPress' },
                    { label: 'Squat (lbs):', name: 'squat' },
                    { label: 'Deadlift (lbs):', name: 'deadlift' }
                ].map(({ label, name }) => (
                    <div key={name} className="mb-4">
                        <div className="grid grid-cols-2 gap-4 flex  items-center">
                            <label htmlFor={name} className="block mb-1  font-semibold">{label}</label>
                            <input
                                type="number"
                                name={name}
                                id={name}
                                value={formData[name]}
                                onChange={handleInputChange}
                                className="mt-1  block w-full px-3 py-2 bg-transparent text-textgray  border-black border-2 rounded-md shadow-sm focus:outline-none focus:ring-orangecolor focus:border-orangecolor sm:text-sm"
                                step="0.01"
                                min="0"
                                required
                            />
                        </div>
                    </div>
                ))}
                <button
                    type="submit"
                    
                    className="relative flex h-10 w-full items-center justify-center overflow-hidden bg-transparent text-white  transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orangecolor before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56"
                >
                    <span className='relative z-10 tracking-widest'>Update</span>
                </button>
            </form>
        </div>
    );
}

export default EditProgress;
