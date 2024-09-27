import React, { useState } from 'react'

import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'

import USER from '../../utils/index'

import style from './FormLogin.module.css'

const FormLogin = ({ setIsLogin }) => {
	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()

	const submit = e => {
		e.preventDefault()

		if (
			userName.toLowerCase() === USER.username &&
			password === USER.password
		) {
			toast.success('Welcome to Cartmon!')
			setIsLogin(1)
			navigate('/')
			localStorage.setItem('isLogin', 1)
		} else {
			toast.error('Username or password is incorrect, please try again!')
		}
	}

	return (
		<div className={style['form-login']}>
			<div className={style['logo']}>
				<img src='/Recuva 1.svg' alt='' />
			</div>
			<form onSubmit={submit}>
				<input
					value={userName}
					onChange={e => setUserName(e.target.value)}
					placeholder='Username'
					type='text'
				/>
				<input
					value={password}
					onChange={e => setPassword(e.target.value)}
					placeholder='Password'
					type='password'
				/>
				<button type='submit' className={style['send-btn']}>
					Send
				</button>
			</form>
		</div>
	)
}

FormLogin.propTypes = {
	setIsLogin: PropTypes.func,
}
export default FormLogin
