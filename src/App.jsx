import React, { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { v4 } from 'uuid'
import Layout from './components/Layout'
import Call from './pages/Call'
import Debit from './pages/Debit'
import Home from './pages/Home'
import Login from './pages/Login'
import Transactions from './pages/Transactions'

const App = () => {
	const [isLogin, setIsLogin] = useState(localStorage.getItem('isLogin'))
	const [show, setShow] = useState(false)
	const [validated, setValidated] = useState(false)
	const [selected, setSelected] = useState(null)
	const [search, setSearch] = useState('')
	const [debt, setDebt] = useState({
		firstName: '',
		lastName: '',
		phone: '+998',
		date: '',
		debt: '',
	})
	const [debts, setDebts] = useState([
		// {
		// 	id: 1,
		// 	firstName: 'Bahodir',
		// 	lastName: 'Abduqahhorov',
		// 	phone: '+998994853117',
		// 	date: '2014/12/12',
		// 	debt: '120000',
		// },
		// {
		// 	id: 2,
		// 	firstName: 'Ilyos',
		// 	lastName: 'Adashov',
		// 	phone: '+998993023362',
		// 	date: '2024/12/12',
		// 	debt: '120000',
		// },
	])

	const handleClose = () => {
		setValidated(false)
		setShow(false)
	}
	const handleShow = () => {
		setValidated(false)
		setShow(true)
	}

	const handleChange = e => {
		setDebt({ ...debt, [e.target.id]: e.target.value })
	}

	const handleSubmit = e => {
		e.preventDefault()

		if (e.currentTarget.checkValidity()) {
			if (selected === null) {
				setDebts([...debts, { ...debt, id: v4() }])
				toast.success('Added debt')
			} else {
				const newDetbs = debts.map(item => (debt.id === selected ? debt : item))
				setDebts(newDetbs)
				toast.success('Updated debt')
			}
			handleClose()
			setDebt({
				firstName: '',
				lastName: '',
				phone: '+998',
				date: '',
				debt: '',
			})
			setValidated(false)
		} else {
			setValidated(true)
			toast.error('Please fill!')
		}
	}

	const deleteDebt = id => {
		const newDebts = debts.filter(debt => debt.id !== id)
		setDebts(newDebts)
	}

	const editDebt = id => {
		setSelected(id)
		const editDebt = debts.find(item => item.id == id)
		setDebt(editDebt)
		handleShow()
	}

	const openModal = () => {
		handleShow()
		setSelected(null)
		setDebt({
			firstName: '',
			lastName: '',
			phone: '+998',
			date: '',
			debt: '',
		})
	}

	const DebtProps = {
		debts,
		show,
		validated,
		debt,
		selected,
		search,
		setSearch,
		handleSubmit,
		handleClose,
		handleShow,
		handleChange,
		deleteDebt,
		editDebt,
		openModal,
	}
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/login' element={<Login setIsLogin={setIsLogin} />} />
					<Route element={<Layout />}>
						<Route
							index
							element={isLogin ? <Home /> : <Navigate to={'/login'} />}
						/>
						<Route
							path='/debit'
							element={
								isLogin ? <Debit {...DebtProps} /> : <Navigate to={'/login'} />
							}
						/>
						<Route
							path='/transactions'
							element={isLogin ? <Transactions /> : <Navigate to={'/login'} />}
						/>
						<Route
							path='/call'
							element={isLogin ? <Call /> : <Navigate to={'/login'} />}
						/>
					</Route>
				</Routes>

				<ToastContainer />
			</BrowserRouter>
		</>
	)
}

export default App
