import { Card, CardBody, Container, Row, Table, Spinner } from 'react-bootstrap';
import Loading from './Loading';

function Relatorio({ data }) {
	const users = data

	return (
		<Container className='p-4 mt-4'>
			<Container id="content-id">
				<Card className='p-4'>
					<CardBody className='d-flex align-items-center justify-content-between'>
						<h1>Relatório de Contatos de Clientes</h1>
						<img
							src="logo2.png"
							width="200"
							height="100"
							className="d-inline-block align-top"
							alt="React Bootstrap logo"
						/>
					</CardBody>
				</Card>
				<Table striped hover className='mt-5'>
					<thead className='table-dark'>
						<tr>
							<th>Cliente</th>
							<th>Usuário</th>
							<th>Email</th>
							<th>Telefone</th>
						</tr>
					</thead>
					<tbody>
						{
							users !== undefined ? 
								users.map((user, i) => (
									<tr key={i}>
										<td>
											{user.name.first} {user.name.last}
										</td>
										<td>
											{user.login.username}
										</td> 
										<td>
											{user.email}
										</td>
										<td>
											{user.phone}
										</td>
									</tr>
								)) 
							: 
								<div className='loader'>
									<Loading />
								</div>
						}
					</tbody>
				</Table>
			</Container>
		</Container>
	)
}

export default Relatorio

