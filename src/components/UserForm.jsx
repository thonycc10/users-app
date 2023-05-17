import {useEffect, useState} from "react";

export const UserForm = ({userSelected, handlerAddUser, initialUserForm}) => {
    const [userForm, setUserForm] = useState(initialUserForm);
    const {username, password, email, id} = userForm;

    useEffect(() => {
        setUserForm({...userSelected})
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
        if (!username || !password || !email) {
            alert("Complete los formularios");
            return;
        }
        handlerAddUser(userForm);
        setUserForm(initialUserForm);
    }

  return (
      <>
          <form onSubmit={onSubmit}>
              <input value={username} onChange={onInputChabge} type="text" className={"form-control my-3 w-75"} placeholder={"Username"} name={"username"}/>
              <input value={password} onChange={onInputChabge} type="password" className={"form-control my-3 w-75"} placeholder={"Password"} name={"password"}/>
              <input value={email} onChange={onInputChabge} type="text" className={"form-control my-3 w-75"} placeholder={"Email"} name={"email"}/>
              <input value={id} onChange={onInputChabge} type="hidden" name={"id"}/>
              <button className={"btn btn-primary"} type={"submit"}>
                  {id > 0 ? 'Editar' : 'Crear'}
              </button>
          </form>
      </>
  )
}