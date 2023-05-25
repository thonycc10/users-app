import {LoginPage} from "./auth/pages/LoginPage.jsx";
import Swal from "sweetalert2";
import {UsersPage} from "./pages/UsersPage.jsx";
import {loginReducer} from "./auth/reducers/loginReducer.js";
import {useReducer} from "react";

// pagina publica
const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined
}
export const UsersApp = () => {
    const [login, dispach] = useReducer(loginReducer, initialLogin);

    const handlerLogin = ({username, password}) => {
        if (username === 'admin' && password === '12345') {
            dispach({
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

    return (
        <>
            {
                login.isAuth ?
                    <UsersPage />
                    :
                    <LoginPage handlerLogin={handlerLogin} />
            }
        </>
    )
}