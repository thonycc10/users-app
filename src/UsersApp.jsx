import {UserList} from "./components/UserList.jsx";
import {UserForm} from "./components/UserForm.jsx";
import {useUsers} from "./hooks/useUsers.js";
import {UserModalForm} from "./components/UserModalForm.jsx";

export const UsersApp = () => {

    const {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handlerAddUser,
        handlerUserSelectedForm,
        handlerRemoveUser,
        handlerCloseForm,
        handlerOpenForm
    } = useUsers()

    return (
        <>
            {
                !visibleForm ||
                <UserModalForm userSelected={userSelected} handlerCloseForm={handlerCloseForm}
                               handlerAddUser={handlerAddUser} initialUserForm={initialUserForm}/>
            }
            <div className="container my-4">
                <h2>Users App</h2>
                <div className="row">
                    <div className="col">
                        {
                            visibleForm ||
                            <button onClick={handlerOpenForm} className={"btn btn-primary mx-2"} type={"button"}>
                                Nuevo Usuario
                            </button>
                        }

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