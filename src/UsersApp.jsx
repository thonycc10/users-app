import {LoginPage} from "./auth/pages/LoginPage.jsx";
import Swal from "sweetalert2";
import {UsersPage} from "./pages/UsersPage.jsx";
import {loginReducer} from "./auth/reducers/loginReducer.js";
import {useReducer} from "react";
import {Navbar} from "./components/layout/Navbar.jsx";

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

    const handlerLogout = () => {
      dispach({
          type: 'logout'
      });

      sessionStorage.removeItem('login');
    }

    return (
        <>
            {
                login.isAuth ?
                    (
                        <>
                            <Navbar login={login} handlerLogout={handlerLogout}/>
                            <UsersPage />
                        </>
                    )
                    :
                    <LoginPage handlerLogin={handlerLogin} />
            }
        </>
    )
}