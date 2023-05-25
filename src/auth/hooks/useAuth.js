import {loginReducer} from "../reducers/loginReducer.js";
import Swal from "sweetalert2";
import {useReducer} from "react";
import {authServices} from "../services/authServices.js";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined
}
export const useAuth = () => {
    const [login, dispatch] = useReducer(loginReducer, initialLogin);

    const handlerLogin = ({username, password}) => {
        if (authServices({username, password})) {
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