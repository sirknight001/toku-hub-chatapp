import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'
import Footer from '../../components/footer/Footer'

const SignUp = () => {

  const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

  const handleSubmit = async (e) => {
		e.preventDefault();
    await signup(inputs)
	};

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="w-full p-6 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-white/30 shadow-lg">
        <h1 className='text-4xl font-semibold text-center text-gray-300' style={{ fontFamily: 'Poppins' }}>
					SignUp
					<span className='text-4xl bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text'> TokuHub </span>
				</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2 font-semibold'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input type='text' placeholder='John Doe' className='w-full input input-bordered h-10' 
              value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
          </div>

          <div>
            <label className='label p-2 font-semibold'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type='text' placeholder='johndoe' className='w-full input input-bordered h-10' 
              value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
          </div>

          <div>
            <label className='label p-2 font-semibold'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10' 
              value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>

          <div>
            <label className='label p-2 font-semibold'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input type='password' placeholder='Confirm Password' className='w-full input input-bordered h-10' 
              value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>
          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} /> 
          <Link to='/login' className='text-sm cursor-pointer hover:text-blue-300 mt-2 inline-block'>
            Already have an account?
          </Link>
           <div>
            <button className="btn btn-block btn-sm mt-2 rounded-lg bg-white/20 backdrop-blur-sm text-white font-semibold border border-white/30 shadow-md hover:bg-white/30 hover:shadow-lg hover:scale-105 transition-all duration-200"
            disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
            </button>
          </div>
        </form>
        <Footer />
      </div>
    </div>
  )
}

export default SignUp


// STARTER CODE FOR THE SIGNUP COMPONENT
// import React from 'react'
// import GenderCheckbox from './GenderCheckbox'

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className="w-full p-6 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-white/30 shadow-lg">
//         <h1 className='text-4xl font-semibold text-center text-gray-300' style={{ fontFamily: 'Poppins' }}>
// 					SignUp
// 					<span className='text-4xl bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text'> TokuHub </span>
// 				</h1>
//         <form>
//           <div>
//             <label className='label p-2 font-semibold'>
//               <span className='text-base label-text'>Full Name</span>
//             </label>
//             <input type='text' placeholder='John Doe' className='w-full input input-bordered h-10' />
//           </div>

//           <div>
//             <label className='label p-2 font-semibold'>
//               <span className='text-base label-text'>Username</span>
//             </label>
//             <input type='text' placeholder='johndoe' className='w-full input input-bordered h-10' />
//           </div>

//           <div>
//             <label className='label p-2 font-semibold'>
//               <span className='text-base label-text'>Password</span>
//             </label>
//             <input type='text' placeholder='Enter Password' className='w-full input input-bordered h-10' />
//           </div>

//           <div>
//             <label className='label p-2 font-semibold'>
//               <span className='text-base label-text'>Confirm Password</span>
//             </label>
//             <input type='text' placeholder='Confirm Password' className='w-full input input-bordered h-10' />
//           </div>
//           <GenderCheckbox /> 
//           <a href='#' className='text-sm cursor-pointer hover:text-blue-300 mt-2 inline-block'>
//             Already have an account?
//           </a>
//            <div>
//             <button className="btn btn-block btn-sm mt-2 rounded-lg bg-white/20 backdrop-blur-sm text-white font-semibold border border-white/30 shadow-md hover:bg-white/30 hover:shadow-lg hover:scale-105 transition-all duration-200">Sign Up</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default SignUp