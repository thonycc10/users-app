import {UserRow} from "./UserRow.jsx";

export const UserList = ({handlerUserSelectedForm, handlerRemoveUser, users = []}) => {
    return (
        <>
            <table className={"table table-hover"}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Update</th>
                    <th>Remove</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map(({id, username, email, password }) => (
                        <UserRow key={id}
                                 id={id}
                                 username={username}
                                 email={email}
                                 password={password}
                                 handlerRemoveUser={handlerRemoveUser}
                                 handlerUserSelectedForm={handlerUserSelectedForm}
                        />
                    ))
                }
                </tbody>
            </table>
        </>
    )
}