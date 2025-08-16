import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import toast from 'react-hot-toast';
import useConversation from '../../zustand/useConversation'
import useGetConversations from '../../hooks/useGetConversations'

const SearchInput = () => {

  const [ search, setSearch ] = useState("");
  const { setSelectedConversation } = useConversation()
  const { conversations } = useGetConversations()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!search) return
    if (search.length < 3) {
      return toast.error('Search term must be at least 3 characters long')
    }
    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))
    
    if(conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found!")
  }
  
  return (
    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
        <input type='text' placeholder='Search...' className='input input-bordered rounded-full'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="p-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white shadow-md hover:bg-white/30 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer">
			<FiSearch size={18} />
		</button>
    </form>
  )
}

export default SearchInput


{/* <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
            <IoSearchSharp className='w-6 h-6 outline-none' />
</button>  */}


// STARTER CODE

// import React from 'react'
// // import { IoSearchSharp } from "react-icons/io5";
// import { FiSearch } from "react-icons/fi";

// const SearchInput = () => {
//   return (
//     <form className='flex items-center gap-2'>
//         <input type='text' placeholder='Search...' className='input input-bordered rounded-full' />
//         <button className="p-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white shadow-md hover:bg-white/30 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer">
// 			<FiSearch size={18} />
// 		</button>
//     </form>
//   )
// }