import { memo } from 'react'

import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import actions from '../stores/actions'

const MainMenu = ({ children }) => {

    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container fluid>
                    <Navbar.Brand onClick={() => actions.navigate.show('/')}>Code Clean</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link
                                className='active'
                                onClick={() => actions.navigate.show('/')}
                            >Inicio</Nav.Link>
                            <Nav.Link
                                onClick={() => actions.navigate.show('/tarefas')}
                            >Tarefas</Nav.Link>
                            <Nav.Link
                                onClick={() => actions.navigate.show('/contato')}
                            >Contato</Nav.Link>
                            <Nav.Link
                                onClick={() => actions.navigate.show('/quemsomos')}
                            >Quem Somos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                {children}
            </div>
        </div>
    )
}

export default memo(MainMenu)