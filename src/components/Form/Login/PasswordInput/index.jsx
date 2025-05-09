import React, { useState } from 'react';
import { HiEye, HiEyeOff } from "react-icons/hi";

export default function PasswordInput() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
        <label htmlFor="password" className="relative text-gray-400 block">
      <div className='cursor-pointer absolute w-5 h-5 top-[56%] -translate-y-1/2 inset-[92%]' id="togglePassword" onClick={togglePasswordVisibility}> {passwordVisible ? <HiEyeOff /> : <HiEye />}</div>
      <input type={passwordVisible ? 'text' : 'password'} id="id_password" name="password" placeholder='* Senha' className="w-full block border focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 p-2.5 text-sm pr-10 rounded-lg" required/>
      </label>
    </div>
  );
}











// export default function PasswordInput() {
//   return (
//     <>
//       <label htmlFor="password" className="relative text-gray-400 block">
//         <HiEye className="cursor-pointer absolute w-5 h-5 top-1/2 -translate-y-1/2 inset-[91%]" />
//         <input
//           type="text"
//           name="password"
//           id="password"
//           placeholder="* Senha"
//           className="w-full block border focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 p-2.5 text-sm pr-10 rounded-lg"
//           required
//         ></input>
//       </label>
//     </>
//   );
// }
