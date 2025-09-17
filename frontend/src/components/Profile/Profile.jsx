import { Edit3 } from 'lucide-react';
import { useAuth } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router';

const Profile = () => {
    const {user}=useAuth()
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="p-8">
                        {/* Profile Image */}
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <img
                                    src={user?.photoURL}
                                    alt="Profile"
                                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                                />
                            </div>
                        </div>

                        {/* User Information */}
                        <div className="text-center space-y-4">
                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {user?.displayName}
                                </h2>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
                                <p className="text-lg text-gray-700">
                                    {user?.email}
                                </p>
                            </div>
                        </div>

                        {/* Edit Button */}
                        <div className="mt-8">
                            <button className="w-full bg-white bg-opacity-20 backdrop-blur-sm border border-blue-500 border-opacity-50 text-blue-600 py-3 px-6 rounded-xl font-semibold hover:bg-blue-50 hover:bg-opacity-50 hover:border-opacity-70 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2">
                                <Edit3 className="w-5 h-5" />
                                <Link to={'/dashboard/profile/edit'}>Edit Profile</Link>
                            </button>
                        </div>

                        {/* Optional: Additional Info */}
                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <div className="text-center text-sm text-gray-500">
                                <p>Member since January 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;