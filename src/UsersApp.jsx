import {UserList} from "./components/UserList.jsx";
import {UserForm} from "./components/UserForm.jsx";
import {useUsers} from "./hooks/useUsers.js";

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
            <div className="container my-4">
                <h2>Users App</h2>
                <div className="row">
                    {
                        !visibleForm ||
                        <div className="col">
                            <UserForm handlerCloseForm={handlerCloseForm} userSelected={userSelected} initialUserForm={initialUserForm}
                                      handlerAddUser={handlerAddUser}/>
                        </div>
                    }

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