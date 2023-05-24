import {useReducer, useState} from "react";
import {usersReducer} from "../reducers/usersReducer.js";
import Swal from "sweetalert2";

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
    const [visibleForm, setVisibleForm] = useState(false);

    const handlerAddUser = (user) => {
        dispatch({
            type: user.id === 0 ? 'addUser' : 'updateUser',
            payload: user
        });

        Swal.fire(
            (user.id === 0 ? 'Usuario Creado' : 'Usuario Actualizado'),
            (user.id === 0 ? 'Usuario ha sido creado con exito!' : 'Usuario ha sido actualizado con exito'),
            'success'
        )

        handlerCloseForm();
        setUserSelected(initialUserForm);
    }

    const handlerUserSelectedForm = (user) => {
        handlerOpenForm();
        setUserSelected({...user});
    }

    const handlerRemoveUser = (id) => {
        console.log(id);


        Swal.fire({
            title: 'Estas seguro?',
            text: "Cuidado el usuario será eliminado",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: 'removeUser',
                    payload: id
                });

                Swal.fire(
                    'Usuario Eliminado!',
                    'El usuario ha sido eliminado con exito!',
                    'success'
                )
            }
        })
    }

    const handlerOpenForm = () => {
        setVisibleForm(true);
    }
    const handlerCloseForm = () => {
        setVisibleForm(false);
        setUserSelected(initialUserForm)
    }

    return {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handlerAddUser,
        handlerUserSelectedForm,
        handlerRemoveUser,
        handlerOpenForm,
        handlerCloseForm
    }
}