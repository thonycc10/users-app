import {useReducer, useState} from "react";
import {usersReducer} from "../reducers/usersReducer.js";

const initialUsers = [
    {
        id: 1,
        username: 'thony',
        password: '1234',
        email: 'thon@papi.com'
    }
];
const initialUserForm = {
    id: 0,
    username: '',
    password: '',
    email: ''
}
export const useUsers = () => {
    const [users, dispatch] = useReducer(usersReducer, initialUsers); // es recomendable cuando tiene muchas acciones
    const [userSelected, setUserSelected] = useState(initialUserForm); // cuando solo tiene una accion

    const handlerAddUser = (user) => {
        dispatch({
            type: user.id === 0 ? 'addUser' : 'updateUser',
            payload: user
        });
    }

    const handlerUserSelectedForm = (user) => {
        setUserSelected({...user})
    }

    const handlerRemoveUser = (id) => {
        console.log(id);
        dispatch({
            type: 'removeUser',
            payload: id
        });
    }

    return {
        users,
        userSelected,
        initialUserForm,
        handlerAddUser,
        handlerUserSelectedForm,
        handlerRemoveUser
    }
}