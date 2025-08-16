import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login (username, password)
  }
 
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
		<div className="w-full p-6 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-white/30 shadow-lg">
				<h1 className='text-4xl font-semibold text-center text-gray-300' style={{ fontFamily: 'Poppins' }}>
					Login
					<span className='text-4xl bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text'> TokuHub </span>
				</h1>

        <form onSubmit={handleSubmit}>

          <div>
            <label className='label p-2 font-semibold'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className='label p-2 font-semibold'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link to='/signup' className='text-sm cursor-pointer hover:text-blue-300 mt-2 inline-block'>
            {"Don't"} have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2 rounded-lg bg-white/20 backdrop-blur-sm text-white font-semibold border border-white/30 shadow-md hover:bg-white/30 hover:shadow-lg hover:scale-105 transition-all duration-200"
            disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : "Login"}
            </button>
          </div>

        </form>

        </div>
    </div>
  )
}

export default Login


// STARTER CODE FOR THIS FILE
// import React from 'react'

// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
// 		<div className="w-full p-6 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-white/30 shadow-lg">
// 				<h1 className='text-4xl font-semibold text-center text-gray-300' style={{ fontFamily: 'Poppins' }}>
// 					Login
// 					<span className='text-4xl bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text'> TokuHub </span>
// 				</h1>

//         <form>
//           <div>
//             <label className='label p-2 font-semibold'>
//               <span className='text-base label-text'>Username</span>
//             </label>
//             <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
//           </div>
//           <div>
//             <label className='label p-2 font-semibold'>
//               <span className='text-base label-text'>Password</span>
//             </label>
//             <input type='text' placeholder='Enter password' className='w-full input input-bordered h-10' />
//           </div>
//           <a href='#' className='text-sm cursor-pointer hover:text-blue-300 mt-2 inline-block'>
//             {"Don't"} have an account?
//           </a>
//           <div>
//             <button className="btn btn-block btn-sm mt-2 rounded-lg bg-white/20 backdrop-blur-sm text-white font-semibold border border-white/30 shadow-md hover:bg-white/30 hover:shadow-lg hover:scale-105 transition-all duration-200">Login</button>
//           </div>
//         </form>

//         </div>
//     </div>
//   )
// }

// export default Login