import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { createTask, deleteTask, getAllTasks } from "../services/Task";
import CreateTask from "./CreateTask";
import ListTasks from "./ListTasks";

function Task() {
    const [tasks, setTasks] = useState([]);

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

    return (
        <Container>
            <h1>Tasks</h1>
            <CreateTask onNewTask={handleNewTask} />
            <ListTasks
                tasks={tasks}
                onComplete={handleOnCompleteTask}
                onDelete={handleOnDelete} />
        </Container>
    );
}

export default Task;