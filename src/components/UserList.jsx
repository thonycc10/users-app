import {UserRow} from "./UserRow.jsx";

export const UserList = ({users = []}) => {
    return (
        <>
            <p>Listado de usuarios</p>
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
                    users.map(({id, username, email }) => (
                        <UserRow key={id}
                                 id={id}
                                 username={username}
                                 email={email}
                        />
                    ))
                }
                </tbody>
            </table>
        </>
    )
}