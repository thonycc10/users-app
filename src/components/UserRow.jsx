export const UserRow = ({id, username, email}) => {
  return (
      <tr key={id}>
          <td>{id}</td>
          <td>{username}</td>
          <td>{email}</td>
          <td>
              <button className={"btn btn-secondary btn-sm"} type={"button"}>Update</button>
          </td>
          <td>
              <button className={"btn btn-danger btn-sm"} type={"button"}>Delete</button>

          </td>
      </tr>
  )
}