import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Coversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col h-full'>
      <SearchInput />
    <div className='divider px-3'></div>

    {/* Conversations limited to show 6 people */}
    <div className="overflow-y-auto max-h-[23rem]">
      <Conversations />
    </div>

    <div className='mt-auto'>
      <LogoutButton />
    </div>
</div>
  )
}

export default Sidebar


// Edit in LogoutButton: Remove the div inside LogoutButton to change to default

// STARTER CODE

// import React from 'react'
// import SearchInput from './SearchInput'
// import Conversations from './Coversations'
// import LogoutButton from './LogoutButton'

// const Sidebar = () => {
//   return (
//     <div className='border-r border-slate-500 p-4 flex flex-col'>
//         <SearchInput />
//         <div className='divider px-3'>
//         </div>
//         <Conversations />
//         <LogoutButton />
//     </div>
//   )
// }

// export default Sidebar