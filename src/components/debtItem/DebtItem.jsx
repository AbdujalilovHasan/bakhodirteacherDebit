import React from 'react'
import { Alert, Button } from 'react-bootstrap'

const DebtItem = ({
	id,
	firstName,
	lastName,
	phone,
	debt,
	date,
	deleteDebt,
	editDebt,
}) => {
	return (
		<Alert className='d-flex justify-content-between'>
			<div>
				<h4>
					{firstName} {lastName}
				</h4>
				<a href='tel:+998994853117'>{phone}</a>
			</div>
			<div className='text-center'>
				<p>{debt}</p>
				<p>{date}</p>
			</div>
			<div className='d-flex gap-3 align-items-center'>
				<Button onClick={() => editDebt(id)} variant='warning'>
					Edit
				</Button>
				<Button onClick={() => deleteDebt(id)} variant='danger'>
					Delete
				</Button>
				<Button variant='primary'>More</Button>
			</div>
		</Alert>
	)
}

export default DebtItem
