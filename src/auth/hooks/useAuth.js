import {loginReducer} from "../reducers/loginReducer.js";
import Swal from "sweetalert2";
import {useReducer} from "react";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined
}
export const useAuth = () => {
    const [login, dispatch] = useReducer(loginReducer, initialLogin);

    const handlerLogin = ({username, password}) => {
        if (username === 'admin' && password === '12345') {
            dispatch({
                type: 'login',
                payload: username
            })
            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                user: username
            }));
        } else {
            Swal.fire('Error Login', 'Username o password son invalidos', 'error')
        }
    }

    const handlerLogout = () => {
        dispatch({
            type: 'logout'
        });

        sessionStorage.removeItem('login');
    }

    return {
        login,
        handlerLogin,
        handlerLogout
    }
}