import { useState } from "react";
import { Alert, Button, Form, Row, Stack } from "react-bootstrap";

function CreateTask({ onNewTask }) {
    const [success, setSuccess] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess(true);
        const description = e.target[0].value;
        if (description) {
            onNewTask(description);
        } else {
            setSuccess(false);
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            {
                !success &&
                <Alert variant="danger">
                    Invalid description!
                </Alert>
            }
            <Row>
                <Form.Label htmlFor="inputPassword5">Task Description</Form.Label>
                <Stack direction="horizontal" gap={3}>
                    <Form.Control className="me-auto" placeholder="Add your task here..." />
                    <Button variant="secondary" type="submit">New</Button>
                    <div className="vr" />
                    <Button variant="outline-danger" type="reset">Reset</Button>
                </Stack>
            </Row>
        </Form>
    )
}

export default CreateTask;