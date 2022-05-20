import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

function ListTasks({ tasks, onComplete, onDelete, onEdit }) {
    const [listTasks, setListTasks] = useState([]);

    useEffect(() => {
        setListTasks([...tasks]);
    }, [tasks])

    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Descripton</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {
                    listTasks.map((task, index) => {
                        return (
                            <tr key={task._id}>
                                <td>{index + 1}</td>
                                <td className="col-auto">{task.description}</td>
                                <td className="col-sm-auto">
                                    <Button
                                        variant="secondary"
                                        onClick={() => { onComplete(task._id) }}>
                                        Done
                                    </Button>
                                    <div className="vr" />
                                    <Button
                                        variant="outline-info"
                                        onClick={() => { onEdit(task._id, task.description) }}>
                                        Edit
                                    </Button>
                                    <div className="vr" />
                                    <Button
                                        variant="outline-danger"
                                        onClick={() => { onDelete(task._id) }}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}

export default ListTasks;