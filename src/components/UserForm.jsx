import {useState} from "react";

const initialUserForm = {
    username: '',
    password: '',
    email: ''
}


export const UserForm = ({handlerAddUser}) => {
    const [userForm, setUserForm] = useState(initialUserForm);

    const {username, password, email} = userForm;
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
        console.log(userForm)
        handlerAddUser(userForm);
        setUserForm(initialUserForm);
    }

  return (
      <>
          <form onSubmit={onSubmit}>
              <input value={username} onChange={onInputChabge} type="text" className={"form-control my-3 w-75"} placeholder={"Username"} name={"username"}/>
              <input value={password} onChange={onInputChabge} type="password" className={"form-control my-3 w-75"} placeholder={"Password"} name={"password"}/>
              <input value={email} onChange={onInputChabge} type="text" className={"form-control my-3 w-75"} placeholder={"Email"} name={"email"}/>
              <button className={"btn btn-primary"} type={"submit"}>
                  Crear
              </button>
          </form>
      </>
  )
}