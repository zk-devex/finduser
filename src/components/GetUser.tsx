'use client'

// import React, { useState } from 'react';
// import toast from 'react-hot-toast';

// interface UserData {
//   name: string;
//   email: string;
//   username: string;
//   address: {
//     street: string;
//     suite: string;
//     city: string;
//     zipcode: string;
//   };
//   phone: string;
//   website: string;
//   company: {
//     name: string;
//     catchPhrase: string;
//     bs: string;
//   };
// }

// const GetUserComponent: React.FC = () => {
//   const [userId, setUserId] = useState<string>('');
//   const [userData, setUserData] = useState<UserData | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   const fetchUserData = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//       if (!response.ok) {
//         alert('User not found');
//         throw new Error('User not found');
//       }
//       const userData: UserData = await response.json();
//       setUserData(userData);
//     } catch (error) {
//       toast.error('User not found');
//       setUserData(null); // Reset user data if user not found
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setUserId(event.target.value);
//   };

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     if (!userId.trim()) {
//       toast.error('Please enter a user ID');
//     } else {
//       await fetchUserData();
//     }
//   };

//   return (
//     <div className="p-4">
//       <form onSubmit={handleSubmit} className="mb-4mb-4 flex flex-col md:flex-row md:items-center">
//         <label className="block mb-2 md:mb-0 md:mr-2">
//           Enter User ID:
//           <input
//             type="text"
//             value={userId}
//             onChange={handleInputChange}
//             className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-blue-500 ml-2"
//           />
//         </label>
//         <button
//           type="submit"
//           className={`bg-blue-500 text-white px-4 py-2 rounded ${userId.trim() === '' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}          disabled={isLoading || userId.trim() === ''}
//         >
//           {isLoading ? 'Loading...' : 'Get User'}
//         </button>
//       </form>
//       {userData && (
//         <div className="bg-gray-100 p-4 rounded shadow">
//           <h2 className="text-xl font-bold mb-4 text-center">User Details</h2>
//           <p className="font-semibold">Name: <span className="text-gray-700">{userData.name}</span></p>
//           <p className="font-semibold">Username: <span className="text-gray-700">{userData.username}</span></p>
//           <p className="font-semibold">Email: <span className="text-gray-700">{userData.email}</span></p>
//           <p className="font-semibold">Phone: <span className="text-gray-700">{userData.phone}</span></p>
//           <p className="font-semibold">Website: <span className="text-gray-700">{userData.website}</span></p>
//           {userData.address && (
//             <div>
//               <p className="font-semibold">Address:</p>
//               <p className="ml-4"><span className="text-gray-700">{userData.address.street}</span>, <span className="text-gray-700">{userData.address.suite}</span>, <span className="text-gray-700">{userData.address.city}</span>, <span className="text-gray-700">{userData.address.zipcode}</span></p>
//             </div>
//           )}
//           <p className="font-semibold">Company: <span className="text-gray-700">{userData.company.name}</span></p>
//           <p className="font-semibold">Catch Phrase: <span className="text-gray-700">{userData.company.catchPhrase}</span></p>
//           <p className="font-semibold">BS: <span className="text-gray-700">{userData.company.bs}</span></p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GetUserComponent;


import React, { useState } from 'react';
import toast from 'react-hot-toast';

interface UserData {
  id: number;
  name: string;
  email: string;
  username: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const GetUserComponent: React.FC = () => {
  const [userId, setUserId] = useState<string>('');
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchUserData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      if (!response.ok) {
        throw new Error('User not found');
      }
      const userData: UserData = await response.json();
      setUserData(userData);
    } catch (error) {
      toast.error('User not found');
      setUserData(null); // Reset user data if user not found
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!userId.trim()) {
      toast.error('Please enter a user ID');
    } else {
      await fetchUserData();
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="mb-4 flex flex-wrap items-center justify-center">
        <label className="block mb-2">
          Enter User ID:
          <input
            type="text"
            value={userId}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-blue-500 ml-2"
          />
        </label>
        <button
          type="submit"
          className={`bg-blue-500 text-white px-4 py-2 rounded ${userId.trim() === '' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600 ml-2'}`}
          disabled={isLoading || userId.trim() === ''}
        >
          {isLoading ? 'Loading...' : 'Get User'}
        </button>
      </form>
      {userData && (
        <div className="overflow-x-auto">
          <h2 className="text-xl font-bold mb-4">User Details</h2>
          <table className="table-auto border-collapse border border-gray-600 w-full">
            <tbody>
              <tr>
                <td className="border px-4 py-2 font-semibold">Name</td>
                <td className="border px-4 py-2">{userData.name}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Username</td>
                <td className="border px-4 py-2">{userData.username}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Email</td>
                <td className="border px-4 py-2">{userData.email}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Phone</td>
                <td className="border px-4 py-2">{userData.phone}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Website</td>
                <td className="border px-4 py-2">{userData.website}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Address</td>
                <td className="border px-4 py-2">{userData.address.street}, {userData.address.suite}, {userData.address.city}, {userData.address.zipcode}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Company</td>
                <td className="border px-4 py-2">{userData.company.name}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Catch Phrase</td>
                <td className="border px-4 py-2">{userData.company.catchPhrase}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">BS</td>
                <td className="border px-4 py-2">{userData.company.bs}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GetUserComponent;

