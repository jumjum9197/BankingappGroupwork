
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Nav = ({}) => {
    return (
        <Navbar>
        <Container>
          <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="/" className="about">logout</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    );
};

export default Nav;