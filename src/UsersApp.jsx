import {UserList} from "./components/UserList.jsx";
import {UserForm} from "./components/UserForm.jsx";
import {usersReducer} from "./reducers/usersReducer.js";
import {useReducer, useState} from "react";

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
export const UsersApp = () => {
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

    return (
        <>
            <div className="container my-4">
                <h2>Users App</h2>
                <div className="row">
                    <div className="col">
                        <UserForm userSelected={userSelected} initialUserForm={initialUserForm} handlerAddUser={handlerAddUser}/>
                    </div>
                    <div className="col">
                        {
                            users.length === 0 ?
                                <div className="alert alert-warning">No hay usuarios en el sistema!</div>
                                :
                                <UserList users={users}
                                          handlerRemoveUser={handlerRemoveUser}
                                          handlerUserSelectedForm={handlerUserSelectedForm}/>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}