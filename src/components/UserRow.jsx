export const UserRow = ({handlerUserSelectedForm, handlerRemoveUser, id, username, email, password}) => {

  return (
      <tr key={id}>
          <td>{id}</td>
          <td>{username}</td>
          <td>{email}</td>
          <td>
              <button onClick={() => handlerUserSelectedForm({id, username, email, password})} className={"btn btn-secondary btn-sm"} type={"button"}>Update</button>
          </td>
          <td>
              <button onClick={() => handlerRemoveUser(id)} className={"btn btn-danger btn-sm"} type={"button"}>Delete</button>

          </td>
      </tr>
  )
}