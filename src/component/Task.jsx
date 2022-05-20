import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { createTask, deleteTask, getAllTasks, updateTask } from "../services/Task";
import CreateTask from "./CreateTask";
import ListTasks from "./ListTasks";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";

function Task() {
    const [tasks, setTasks] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [editTask, setEditTask] = useState({});

    const getAll = async () => {
        const { data } = await getAllTasks();
        setTasks(data);
    }

    const complete = async (id) => {
        await deleteTask(id);
        await getAll();
    }

    useEffect(() => {
        getAll();
    }, []);

    const handleNewTask = async (description) => {
        try {
            const response = await createTask(description);
            setTasks(t => [...t, response.data]);
        } catch (error) {
        }
    }

    const handleOnCompleteTask = (id) => {
        complete(id);
    }

    const handleOnDelete = (id) => {
        complete(id);
    }

    const handleOnEdit = (id, description) => {
        setEditTask({ id, description });
        setModalShow(true);
    }

    const handleOnConfirmEdit = async (id, description) => {
        await updateTask(id, description);
        setModalShow(false);
        await getAll();
    }

    return (
        <Container>
            <h1>Tasks</h1>
            <CreateTask onNewTask={handleNewTask} />
            <ListTasks
                tasks={tasks}
                onComplete={handleOnCompleteTask}
                onEdit={handleOnEdit}
                onDelete={handleOnDelete} />
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                onConfirmEdit={handleOnConfirmEdit}
                editTask={editTask}
            />
        </Container>
    );
}

export default Task;