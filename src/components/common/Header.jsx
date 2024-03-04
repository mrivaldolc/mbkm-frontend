import React, { useState } from 'react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Implement logout logic here
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-end items-center ">
      <div className="relative">
        <button 
          className="inline-flex items-center focus:outline-none" 
          onClick={handleDropdownToggle}
        >
          <div className="rounded-full flex items-center justify-center bg-gray-700 hover:bg-gray-900 cursor-pointer">
            <img
                className="h-8 w-8 rounded-full mr-3"
                src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
                alt="User Avatar"
            />
            <div className="flex items-center mr-3">
                <span className="font-bold">Ferdy Sambo</span>
            </div>
          </div>
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
            <div className="py-1">
              <button
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 w-full text-left"
                onClick={handleLogout}
              >
                Profil
              </button>
              <button
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 w-full text-left"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

// return (
//     <header className="bg-gray-800 text-white p-4 flex justify-end items-center ">
//       <div className="flex items-center mr-3">
//         <div className="mr-2">
//           <img
//             className="h-8 w-8 rounded-full"
//             src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
//             alt="User Avatar"
//           />
//         </div>
//         <span className="font-bold">Ferdy Sambo</span>
//       </div>
//       <div className="relative">
//         <button 
//           className="inline-flex items-center focus:outline-none" 
//           onClick={handleDropdownToggle}
//         >
//           <div className="rounded-full w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-900 cursor-pointer">
//             &#8942;
//           </div>
//         </button>
//         {isDropdownOpen && (
//           <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
//             <div className="py-1">
//               <button
//                 className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 w-full text-left"
//                 onClick={handleLogout}
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };