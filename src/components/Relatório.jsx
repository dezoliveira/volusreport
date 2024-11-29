function Relatorio({ data }) {
	return (
		<Container className='p-4'>
			<Container id="content-id">
				<Row className='text-center p-4'>
					<h1>Relatório de Contatos de Clientes</h1>  
				</Row>
				<Table className='mt-4'>
					<thead>
						<tr>
							<th>Cliente</th>
							<th>Usuário</th>
							<th>Email</th>
							<th>Telefone</th>
						</tr>
					</thead>
					<tbody>
						{
							users &&  
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
						}
					</tbody>
				</Table>
			</Container>
		</Container>
	)
}

export default Relatorio

