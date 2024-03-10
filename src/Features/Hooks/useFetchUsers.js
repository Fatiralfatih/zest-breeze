import { fetchAllUser } from "@utils/api";
import { useState, useEffect } from "react";

const useFetchUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getAllUsers = async () => {
            const { data } = await fetchAllUser();
            setUsers(data)
        }
        getAllUsers();
    }, [])

    return { users };
}

export { useFetchUsers };
