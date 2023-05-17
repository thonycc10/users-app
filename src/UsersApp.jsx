import {UserList} from "./components/UserList.jsx";
import {UserForm} from "./components/UserForm.jsx";

const initialUsers = [
    {
        id: 1,
        username: 'thony',
        password: '1234',
        email: 'thon@papi.com'
    }
];
export const UsersApp = () => {

    const handlerAddUser = (user) => {
        console.log(user);
    }

    return (
        <>
            <div className="container my-4">
                <h2>Users App</h2>
                <div className="row">
                    <div className="col">
                        <UserForm handlerAddUser={handlerAddUser}/>
                    </div>
                    <div className="col">
                        <UserList users={initialUsers}/>
                    </div>
                </div>
            </div>
        </>
    )
}