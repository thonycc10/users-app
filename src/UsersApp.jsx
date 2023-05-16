import {UserList} from "./components/UserList.jsx";
import {UserForm} from "./components/UserForm.jsx";

export const UsersApp = () => {
    return (
        <>
            <div className="container my-4">
                <h2>Users App</h2>
                <div className="row">
                    <div className="col">
                        <UserForm />
                    </div>
                    <div className="col">
                        <UserList />
                    </div>
                </div>
            </div>
        </>
    )
}