import { useEffect, useRef, useState } from 'react';
import generatePDF from 'react-to-pdf';
import { Resolution, Margin } from 'react-to-pdf';
import { Button, Container, Row, Col, Table, Navbar } from 'react-bootstrap';

function App() {
  const [users, setUsers] = useState()

  useEffect(() => {
    loadUsers()
  }, []);

  const loadUsers = async () => {
    const response = await fetch('https://randomuser.me/api/?results=20')
    const data = await response.json()

    if (response.ok) {
      setUsers(data.results)
    }
  }

  const options = {
      // default is `save`
      method: 'open',
      // default is Resolution.MEDIUM = 3, which should be enough, higher values
      // increases the image quality but also the size of the PDF, so be careful
      // using values higher than 10 when having multiple pages generated, it
      // might cause the page to crash or hang.
      page: {
        // margin is in MM, default is Margin.NONE = 0
        margin: Margin.SMALL,
        // default is 'A4'
        format: 'A4',
        // default is 'portrait'
        orientation: 'portrait',
      },
  };

  const getTargetElement = () => document.getElementById('content-id')

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
          <img
              src="logo2.png"
              width="80"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
          />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
              <Button onClick={() => generatePDF(getTargetElement, options)} variant="success">Gerar Relatório</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
    </>
  )
}

export default App
