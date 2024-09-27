import React from 'react'
import { Button, Form, InputGroup, Modal } from 'react-bootstrap'
import DebtItem from '../components/debtItem/DebtItem'
import Empty from '../components/Empty'

const Debit = ({
	debts,
	debt,
	show,
	validated,
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
}) => {
	return (
		<div className='container'>
			<InputGroup className='mb-3'>
				<Form.Control
					value={search}
					onChange={e => setSearch(e.target.value)}
				/>
				<Button onClick={openModal} variant='primary' id='button-addon1'>
					Add debt
				</Button>
			</InputGroup>
			<div className='page'>
				{debts.length ? (
					debts
						?.filter(item =>
							item.firstName.toLowerCase().includes(search.toLowerCase().trim())
						)
						.map(item => (
							<DebtItem
								key={item.id}
								{...item}
								editDebt={editDebt}
								deleteDebt={deleteDebt}
							/>
						))
				) : (
					<Empty />
				)}
			</div>

			<Modal show={show} onHide={handleClose}>
				<Form noValidate validated={validated} onSubmit={handleSubmit}>
					<Modal.Header className='w-100' closeButton>
						<Modal.Title>Add debt</Modal.Title>
					</Modal.Header>
					<Modal.Body className='w-100'>
						<Form.Group className='mb-3' controlId='firstName'>
							<Form.Label>First name</Form.Label>
							<Form.Control
								onChange={handleChange}
								required
								type='text'
								value={debt.firstName}
							/>
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
							<Form.Control.Feedback type='invalid'>
								Please fill!
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group className='mb-3' controlId='lastName'>
							<Form.Label>Last name</Form.Label>
							<Form.Control
								onChange={handleChange}
								required
								type='text'
								value={debt.lastName}
							/>
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
							<Form.Control.Feedback type='invalid'>
								Please fill!
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group className='mb-3' controlId='phone'>
							<Form.Label>Phone</Form.Label>
							<Form.Control
								onChange={handleChange}
								required
								type='text'
								value={debt.phone}
							/>
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
							<Form.Control.Feedback type='invalid'>
								Please fill!
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group className='mb-3' controlId='debt'>
							<Form.Label>Debt coin</Form.Label>
							<Form.Control
								onChange={handleChange}
								required
								type='number'
								value={debt.debt}
							/>
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
							<Form.Control.Feedback type='invalid'>
								Please fill!
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group className='mb-3' controlId='date'>
							<Form.Label>Date</Form.Label>
							<Form.Control
								onChange={handleChange}
								required
								type='date'
								value={debt.date}
							/>
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
							<Form.Control.Feedback type='invalid'>
								Please fill!
							</Form.Control.Feedback>
						</Form.Group>
					</Modal.Body>
					<Modal.Footer className='w-100'>
						<Button variant='secondary' onClick={handleClose}>
							Close
						</Button>
						<Button type='submit' variant='primary'>
							{selected == null ? 'Add debt' : 'Update'}
						</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</div>
	)
}

export default Debit
