import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Task from './Task';
import Register from './Register';
import Login from './Login';
import RequireAuth from './RequireAuth';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route element={<RequireAuth />}>
                    <Route path='/' element={<Task />} />
                </Route>
                <Route path='*' element={<Login />} />
            </Routes>
        </>
    );
}

export default App;