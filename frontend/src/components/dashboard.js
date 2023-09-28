import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavComponent from './NavComponent';
import TaskTable from './TaskTable';


const Dashboard = () => {
    const [userName, setUserName] = useState('');
    // const history = useHistory();

    const handleLogout = () => {

        localStorage.removeItem('token');
        // history.push('/login');
    };

    useEffect(() => {

        const token = localStorage.getItem('token');
        axios
            .get('api/user', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setUserName(response.data.name);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <NavComponent />
            {/* <h2>Welcome, {userName}!</h2>
            <button onClick={handleLogout}>Logout</button> */}
            <TaskTable />
        </div>
    );
};



export default Dashboard;
