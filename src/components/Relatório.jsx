import { Card, CardBody, Container, Row, Table, Spinner, CardText } from 'react-bootstrap';
import Loading from './Loading';
import { useEffect, useState } from 'react';

function Relatorio({ data }) {
	const [dataAtual, setDataAtual] = useState("")
	const users = data

	useEffect(() => {
		geraDataHoraRelatorio()
	})

	const geraDataHoraRelatorio = () => {
		let data = new Date()
		let hora = new Date()
		data = data.toLocaleDateString('pt-BR', { timeZone: 'UTC' })
		hora = hora.toLocaleTimeString('pt-BR', { hour12: false })

		let dataHora = `${data} ás ${hora}`
		setDataAtual(dataHora)
	}

	return (
		<Container className='p-4 mt-4'>
			<Container id="content-id">
				<Card className='p-4' style={{
					borderBottomRightRadius: 0,
					borderBottomLeftRadius: 0
				}}>
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
				<Table striped hover className='m-0'>
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
				{
					users && (
						<Card bg='dark' text='white' className='text-center' style={{
							borderTopRightRadius: 0,
							borderTopLeftRadius: 0
						}}>
							<CardBody>
								<CardText>
									Gerado pelo App <strong>VReport</strong> {dataAtual}
								</CardText>
							</CardBody>
						</Card>
					)
				}
			</Container>
		</Container>
	)
}

export default Relatorio

