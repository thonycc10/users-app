import {useState} from "react";
import Swal from "sweetalert2";

const initialLoginForm = {
    username: '',
    password: '',
}
export const LoginPage = ({handlerLogin}) => {

    const [loginForm, setLoginForm] = useState(initialLoginForm);
    const {username, password} = loginForm;

    const onInputChange = ({target}) => {
      const {name, value} = target;
      setLoginForm({
          ...loginForm,
          [name]: value
      })
    }

    const onSumit = (event) => {
      event.preventDefault();
        console.log(username)
        console.log(password)
      if (!username || !password) {
          Swal.fire('Error de validacion', 'Username y Password son requeridos', 'error')
      }

      // aca implemetar backend
        handlerLogin({username, password});

        setLoginForm(initialLoginForm);
    }

    return (
        <>
            <div className="modal" style={{display: "block"}} tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login Page</h5>
                        </div>
                        <form onSubmit={onSumit}>
                            <div className="modal-body">
                                <input name={"username"} value={username} onChange={onInputChange} type="text"
                                       className={"form-control my-3 w-75"} placeholder={"Username"}/>
                                <input name={"password"} value={password} onChange={onInputChange} type="password"
                                       className={"form-control my-3 w-75"} placeholder={"Password"}/>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}