import 'bootstrap/dist/css/bootstrap.min.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>
)
