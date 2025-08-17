import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import LogoutButton from '../../components/sidebar/LogoutButton';
import MessageContainer from '../../components/messages/MessageContainer';
import Footer from '../../components/footer/Footer';

const Home = () => {
	return (
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-white/30 shadow-lg'>
			<Sidebar />
      		<MessageContainer />
		</div>
	);
};
export default Home;