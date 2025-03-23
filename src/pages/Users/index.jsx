import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import config from "@/config";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://api01.f8team.dev/api/users", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            });
    }, []);

    return (
        <div>
            <h1>Users page</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`${config.routes.users}/${user.username}`}>
                            {user.firstName}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Users;

// SPA - Single Page Application
