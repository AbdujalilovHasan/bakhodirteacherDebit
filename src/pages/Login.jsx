import React from 'react'

import PropTypes from 'prop-types'

import FormLogin from '../components/formlogin/FormLogin'

const Login = ({ setIsLogin }) => {
	return (
		<div className=''>
			<FormLogin setIsLogin={setIsLogin} />
		</div>
	)
}

Login.propTypes = {
	setIsLogin: PropTypes.func,
}

export default Login
