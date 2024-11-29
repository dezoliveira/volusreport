// Imports

// react to pdf
import generatePDF from 'react-to-pdf';
import { Margin } from 'react-to-pdf';

// bootstrap
import { 
  Button,
  Container,
  Navbar
} from 'react-bootstrap';

function MainNavbar(){
  // react to pdf params
  const options = {
      // default is `save`
      method: 'open',
      page: {
        margin: Margin.SMALL,
        format: 'A4',
        orientation: 'portrait',
      },
  };

  const getTargetElement = () => document.getElementById('content-id')

  return (
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
            <Button
              onClick={() => generatePDF(getTargetElement, options)}
              variant="success"
            >
              Gerar Relatório
            </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MainNavbar