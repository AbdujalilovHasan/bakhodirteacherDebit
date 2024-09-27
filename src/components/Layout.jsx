import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import Sidebar from './sidebar/SideBar'
const Layout = () => {
	return (
		<>
			<Navbar />
			<Sidebar />
			<Outlet />
		</>
	)
}

export default Layout
