import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/User";

const { Container, Form, Button, Alert } = require("react-bootstrap");

function Register() {
    const navigate = useNavigate();
    const [success, setSuccess] = useState(false);
    const [issues, setIssues] = useState([]);

    const handleSubmit = async (e) => {
        try {
            setIssues([]);
            e.preventDefault();
            await register({
                firstname: e.target[0].value,
                lastname: e.target[1].value,
                email: e.target[2].value,
                password: e.target[3].value
            });
            setSuccess(true);
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (error) {
            const errors = error.response.data.errors;
            for (const error of errors) {
                setIssues(o => [...o, error.msg]);
            }
        }
    }

    return (
        <Container>
            <h1>Register</h1>
            {
                success &&
                <Alert variant="success">
                    User register sucessfully. Now you can login!
                </Alert>
            }

            {
                issues.length > 0 &&
                <Alert variant="danger">
                    {
                        issues.map((i, index) => {
                            console.log(i);
                            return (
                                <p key={index}>{i}</p>
                            );
                        })
                    }
                </Alert>
            }

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" placeholder="Last name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create
                </Button>
            </Form>
        </Container>
    )
}

export default Register;