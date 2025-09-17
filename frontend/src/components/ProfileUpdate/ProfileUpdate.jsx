import { useState } from 'react';
import { useAuth } from '../../AuthProvider/AuthProvider';
import auth from '../../firebase/firebase.init';

export default function ProfileUpdate() {
    const { user, updateUser } = useAuth()
    const [profile, setProfile] = useState({
        name: user?.displayName,
        email: user?.email,
        photoUrl: user?.photoURL
    });

    const [isUpdating, setIsUpdating] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;


        setProfile(prev => ({
            ...prev,
            [name]: value
        }));
        console.log(profile);

    };

    const handleUpdate = async () => {
        setIsUpdating(true);
        updateUser(profile.name, profile.photoUrl).then(() => {

            fetch('http://localhost:3000/updateuser', {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    name: auth.currentUser.displayName,
                    email: auth.currentUser.email,
                    photoUrl: auth.currentUser.photoURL,
                    creationTime: auth.currentUser.metadata.createdAt,
                    lastLogin: auth.currentUser.metadata.lastLoginAt
                })
            }).then(res => res.json()).then(data => {
                console.log(data);

            });

        }
        )

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        setIsUpdating(false);
        alert('Profile updated successfully!');
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Update Profile</h2>

            <div className="space-y-4">
                {/* Profile Photo Preview */}
                <div className="flex justify-center mb-6">
                    <img
                        src={profile.photoUrl}
                        alt="Profile"
                        className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
                        onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/150x150/cccccc/666666?text=User';
                        }}
                    />
                </div>

                {/* Name Field */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={profile.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your name"
                    />
                </div>

                {/* Email Field (Disabled) */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={profile.email}
                        disabled
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500 cursor-not-allowed"
                    />
                    <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
                </div>

                {/* Photo URL Field */}
                <div>
                    <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-700 mb-1">
                        Photo URL
                    </label>
                    <input
                        type="url"
                        id="photoUrl"
                        name="photoUrl"
                        value={profile.photoUrl}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter photo URL"
                    />
                </div>

                {/* Update Button */}
                <button
                    onClick={handleUpdate}
                    disabled={isUpdating}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    {isUpdating ? 'Updating...' : 'Update Profile'}
                </button>
            </div>
        </div>
    );
}