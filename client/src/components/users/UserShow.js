import { useState } from 'react';
import UserForm from './UserForm';
import { Link } from 'react-router-dom';

const UserShow = ({ id, email, password, updateUser, deleteUser }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      {
        editing ?
          <>
            <UserForm 
              id={id}
              email={email}
              password={password}
              updateUser={updateUser}
              setEdit={setEdit}
            />
            <button onClick={() => setEdit(false)}>
              Cancel
            </button>
          </>
        :
        <>
          <h1>{email}</h1>
          <p>{password}</p>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteUser(id)}>
            Delete
          </button>
          <Link to={`/${id}/trips`}>
            <button>Trips</button>
          </Link>
        </>
      }
    </>
  )
}

export default UserShow;