import {useEffect, useState} from "react";
import Swal from "sweetalert2";

export const UserForm = ({userSelected, handlerAddUser, initialUserForm, handlerCloseForm}) => {
    const [userForm, setUserForm] = useState(initialUserForm);
    const {username, password, email, id} = userForm;

    useEffect(() => {
        setUserForm({...userSelected, password: ''})
    }, [userSelected]);

    const onInputChabge = ({target}) => {
        const {name, value} = target;
        setUserForm({
            ...userForm,
            [name]: value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault(); // ayuda a evitar recargo de la pagina
        if (!username || (!password && id === 0) || !email) {
            Swal.fire(
                'Error de validación',
                'Complete los formularios',
                'error'
            )
            return;
        }
        handlerAddUser(userForm);
        setUserForm(initialUserForm);
    }

  return (
      <>
          <form onSubmit={onSubmit}>
              <input value={username} onChange={onInputChabge} type="text" className={"form-control my-3 w-75"} placeholder={"Username"} name={"username"}/>
              {
                  id > 0 ?
                      ''
                      :
                      <input value={password} onChange={onInputChabge} type="password" className={"form-control my-3 w-75"} placeholder={"Password"} name={"password"}/>
              }
              <input value={email} onChange={onInputChabge} type="text" className={"form-control my-3 w-75"} placeholder={"Email"} name={"email"}/>
              <input value={id} onChange={onInputChabge} type="hidden" name={"id"}/>
              <button className={"btn btn-primary"} type={"submit"}>
                  {id > 0 ? 'Editar' : 'Crear'}
              </button>
              <button onClick={handlerCloseForm} className={"btn btn-primary mx-2"} type={"button"}>
                  Cerrar
              </button>
          </form>
      </>
  )
}