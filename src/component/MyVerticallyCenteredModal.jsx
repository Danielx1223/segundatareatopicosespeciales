import { useEffect, useState } from "react";
import { Button, Form, Modal, Stack } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (props.editTask.description) {
            setDescription(props.editTask.description);
        }
    }, [props.editTask.description]);


    const handleSubmit = (e) => {
        e.preventDefault();
        props.onConfirmEdit(props.editTask.id, description);
    }

    const onTodoChange = (value) => {
        setDescription(value);
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit Task
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Label htmlFor="inputPassword5">Task Description</Form.Label>
                    <Stack direction="horizontal" gap={3}>
                        <Form.Control
                            value={description}
                            onChange={e => onTodoChange(e.target.value)}
                            className="me-auto"
                            placeholder="Edit your task here..." />
                        <Button variant="secondary" type="submit">Edit</Button>
                        <div className="vr" />
                        <Button variant="outline-danger" type="reset">Reset</Button>
                    </Stack>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;