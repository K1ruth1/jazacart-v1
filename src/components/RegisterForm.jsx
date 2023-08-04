// import React, { useState } from 'react';
// import './registerForm.css';
// import axios from 'axios';

// const BASE_URL = 'http://ecommerce.muersolutions.com/api/v1';
// const SIGN_UP_URL = 'http://ecommerce.muersolutions.com/api/v1/user/signup';

// const RegisterForm = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [firstname, setFirstname] = useState('');
//   const [lastname, setLastname] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleToggleVisibility = () => {
//     setIsVisible(!isVisible);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(SIGN_UP_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type" : "application/json"
//         },
//         body: JSON.stringify({})
//       })

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Firstname:
//           <input
//             type="text"
//             value={firstname}
//             onChange={(e) => setFirstname(e.target.value)}
//             required
//           />
//         </label>

//         <label>
//           Lastname:
//           <input
//             type="text"
//             value={lastname}
//             onChange={(e) => setLastname(e.target.value)}
//             required
//           />
//         </label>

//         <label>
//           Email:
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </label>

//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </label>

//         <button type="submit">Register</button>
//       </form>
//       <button className="toggle-button" onClick={handleToggleVisibility}>
//         {isVisible ? 'Close' : 'Open'}
//       </button>
//     </div>
//   );
// };

// export default RegisterForm;

// import React, { useState } from 'react';
// import './registerForm.css';

// const BASE_URL = 'http://ecommerce.muersolutions.com/api/v1';
// const SIGN_UP_URL = 'http://ecommerce.muersolutions.com/api/v1/user/signup';

// const RegisterForm = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [firstname, setFirstname] = useState('');
//   const [lastname, setLastname] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleToggleVisibility = () => {
//     setIsVisible(!isVisible);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(SIGN_UP_URL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           first_name: firstname,
//           last_name: lastname,
//           email,
//           password,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Registration failed!');
//       }

//       const data = await response.json();
//       console.log('Registration success! Server response:', data);
//       //
//     } catch (error) {
//       console.error('Registration failed! Error:', error);
//       //
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Firstname:
//           <input
//             type="text"
//             value={firstname}
//             onChange={(e) => setFirstname(e.target.value)}
//             required
//           />
//         </label>

//         <label>
//           Lastname:
//           <input
//             type="text"
//             value={lastname}
//             onChange={(e) => setLastname(e.target.value)}
//             required
//           />
//         </label>

//         <label>
//           Email:
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </label>

//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </label>

//         <button type="submit">Register</button>
//       </form>
//       <button className="toggle-button" onClick={handleToggleVisibility}>
//         {isVisible ? 'Close' : 'Open'}
//       </button>
//     </div>
//   );
// };

// export default RegisterForm;

////////////////////////////////////////////////////////

import React, { useState } from 'react';
import './registerForm.css';

const BASE_URL = 'http://ecommerce.muersolutions.com/api/v1';
const SIGN_UP_URL = `${BASE_URL}/user/signup`;

const RegisterForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple client-side validation
    if (!firstname || !lastname || !email || !password) {
      setError('All fields are required.');
      return;
    }

    setError('');

    try {
      const response = await fetch(SIGN_UP_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: firstname,
          last_name: lastname,
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error('Registration failed.');
      }

      const data = await response.json();
      console.log('Registration success! Server response:', data);
      //
    } catch (error) {
      console.error('Registration failed! Error:', error.message);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Firstname:
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </label>

        <label>
          Lastname:
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit">Register</button>
      </form>
      <button className="toggle-button" onClick={handleToggleVisibility}>
        {isVisible ? 'Close' : 'Open'}
      </button>
    </div>
  );
};

export default RegisterForm;
