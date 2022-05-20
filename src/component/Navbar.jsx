import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/Auth";
import { getUser } from "../services/User";

function App() {
    const navigate = useNavigate();
    const [user, setUser] = useState('');

    useEffect(() => {
        setUser(getUser());
    }, []);

    const handleLogOut = () => {
        logout();
        setUser('');
        navigate('/login');
        window.location.reload();
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to='/'>Things</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {
                            user ?
                                <>
                                    <Nav.Link as={Link} to='/'>Tasks</Nav.Link>
                                    <Nav.Link onClick={handleLogOut}>Logout</Nav.Link>
                                </>
                                :
                                <>
                                    <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                                    <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                                </>

                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default App;