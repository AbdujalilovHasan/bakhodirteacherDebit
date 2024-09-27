import React from 'react'
import { BsWindowSidebar } from 'react-icons/bs'
import { FaCoins } from 'react-icons/fa'
import { GiRotaryPhone } from 'react-icons/gi'
import { LiaListSolid } from 'react-icons/lia'
import { NavLink } from 'react-router-dom'
import style from './SideBar.module.css'

const SideBar = () => {
	return (
		<div className={style['sidebar']}>
			<div className={style['logo']}>
				<img className={style['logo-img']} src='/Recuva 1.svg' alt='' />
				<img
					className={style['logo-background']}
					src='/Group 3515.png'
					alt=''
				/>
			</div>
			<ul className={style['list-item']}>
				<li className={style['list-items']}>
					<NavLink to={'/'}>
						<BsWindowSidebar size={24} />
						Home
					</NavLink>
				</li>
				<li className={style['list-items']}>
					<NavLink to={'/debit'}>
						<LiaListSolid size={24} />
						Debit
					</NavLink>
				</li>
				<li className={style['list-items']}>
					<NavLink to={'/transactions'}>
						<FaCoins size={24} />
						Transactions
					</NavLink>
				</li>
				<li className={style['list-items']}>
					<NavLink to={'/call'}>
						<GiRotaryPhone size={24} />
						Call
					</NavLink>
				</li>
			</ul>
		</div>
	)
}

export default SideBar
