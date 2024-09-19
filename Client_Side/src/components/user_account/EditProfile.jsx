import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const EditProfile = () => {
    const { userId } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        profileImage: ''
    });
    const [message, setMessage] = useState('');
    const [preview, setPreview] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/user/users/${userId}`);
                const { username, email, profileImage } = res.data;
                setFormData({
                    username: username || '',
                    email: email || '',
                    password: '', // Do not pre-fill password for security reasons
                    profileImage: profileImage || ''
                });
                setPreview(profileImage ? `http://localhost:3000/${profileImage}` : '');
            } catch (err) {
                console.error('Error fetching user data:', err);
            }
        };

        fetchUserData();
    }, [userId]);

    const { username, email, password } = formData;

    const onChange = e => {
        if (e.target.name === 'profileImage') {
            const file = e.target.files[0];
            setFormData({ ...formData, profileImage: file });
            setPreview(URL.createObjectURL(file));
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = async e => {
        e.preventDefault();
        const data = new FormData();
        data.append('username', formData.username);
        data.append('email', formData.email);
        data.append('password', formData.password);
        data.append('profileImage', formData.profileImage);

        try {
            const res = await axios.put(`http://localhost:3000/user/users/${userId}`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            navigate('/');
            setMessage(res.data.message);

        } catch (err) {
            console.error('Error updating profile:', err);
            setMessage(err.response?.data?.error || 'Error updating profile');
        }
    };

    return (
        <div className="w-auto min-h-screen bg-cover" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/3d-gym-equipment_23-2151114221.jpg?ga=GA1.1.1259705577.1723903805&semt=ais_hybrid')" }}>
            <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col items-center">
                 {/* Black overlay with light opacity */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
                {/* Container with background blur */}
                <div className="backdrop-blur-lg font-oswald tracking-widest bg-opacity-10 rounded-lg shadow-lg max-w-md mx-auto">
                <h2 className="text-3xl font-bold  mb-4 text-center text-gray-100">Update Profile</h2>
                    <form onSubmit={onSubmit} className="max-w-md mx-auto rounded-lg shadow-md">
                        <div className="mb-4 px-6 py-4">
                            {preview && (
                                <img
                                    src={preview}
                                    alt="Profile Preview"
                                    className="w-40 h-40 object-contain rounded-full mb-4 mx-auto" // Ensure the image is shown in a round frame
                                />
                            )}
                            <input
                                type="file"
                                name="profileImage"
                                accept="image/*"
                                onChange={onChange}
                                className="block w-full px-4 py-2 bg-transparent  file:bg-gray-400 file:text-white rounded-lg focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="mb-4 px-6">
                            <label className="block text-gray-100  font-semibold mb-2">Username:</label>
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={onChange}
                                className="block w-full px-4 py-2 bg-transparent border-gray-500 text-gray-100 border rounded-lg focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>

                        <div className="mb-4 px-6">
                            <label className="block text-gray-100 font-semibold mb-2">Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={onChange}
                                className="block w-full px-4 py-2 bg-transparent border-gray-500 text-gray-100 border rounded-lg focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>

                        <div className="mb-4 px-6">
                            <label className="block text-gray-100 font-semibold mb-2">Password:</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={password}
                                    onChange={onChange}
                                    className="block w-full px-4 py-2 bg-transparent border-gray-500 text-gray-100 border rounded-lg focus:outline-none focus:shadow-outline"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute top-0 right-0 mr-4 mt-3 text-gray-100"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                        <div className="px-6 py-6">
                            <button
                                type="submit"
                                className="relative flex h-10 w-full items-center justify-center overflow-hidden bg-transparent text-white  transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orangecolor before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56"
                            >
                                <span className='relative w-96 font-oswald '>Update Profile</span>
                            </button>
                        </div>
                    </form>

                    {message && <p className="mt-4 text-center text-red-500">{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
