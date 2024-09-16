import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const storedUser = JSON.parse(localStorage.getItem('user'));
                if (storedUser) {
                    setUser(storedUser);
                    setLoading(false);
                } else {
                    setError('No user data found in localStorage');
                }
            } catch (error) {
                setError('Error fetching user data');
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);
    const handleEdit = (userId) => {
        // Redirect or handle editing for the user with userId
        console.log("Edit user with ID:", userId);
    };

    const imageSrc = user?.profileImage
        ? `http://localhost:3000/${user.profileImage}`
        : `https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg`;

    return (
        <div
            className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: "url('https://img.freepik.com/free-photo/3d-gym-equipment_23-2151114221.jpg?ga=GA1.1.1259705577.1723903805&semt=ais_hybrid')"
            }}
        >
            {/* Black overlay with light opacity */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Blurred profile section */}
            <div className="relative backdrop-blur-lg max-w-md w-full z-10 p-8 bg-white bg-opacity-10 rounded-lg shadow-lg">
                <h2 className="text-center text-3xl font-extrabold font-oswald text-gray-100 mb-4">Profile</h2>

                {loading ? (
                    <p className="text-lg text-gray-600">Loading...</p>
                ) : user ? (
                    <div className="bg-transparent overflow-hidden w-full max-w-md text-gray-100">
                        <div className="w-fit h-fit flex items-center justify-center">
                            <img
                                src={imageSrc}
                                alt="Profile"
                                className="h-2/3 w-2/3 object-cover"
                                onError={(e) => (e.currentTarget.src = 'default-profile.png')}
                            />
                        </div>
                        <div className="py-5 flex flex-col items-center">
                            <p className="text-lg font-oswald mb-2">
                                <strong className='font-oswald'>Username:</strong> {user.username}
                            </p>
                            <p className="text-lg mb-4 font-oswald">
                                <strong className='font-oswald'>Email:</strong> {user.email}
                            </p>
                            <Link to={`/update/${user._id}`}>
                                <button className="relative flex h-10 w-full items-center justify-center overflow-hidden bg-transparent text-white  transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orangecolor before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56">
                                <span className='relative w-96 font-oswald '>EDIT PROFILE</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <p className="text-lg text-red-600">{error}</p>
                )}
            </div>
        </div>

    );
};

export default ProfilePage;
