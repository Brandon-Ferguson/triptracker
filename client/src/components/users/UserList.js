import UserShow from './UserShow';

const UserList = ({ users, updateUser, deleteUser }) => (
  <>
    { users.map(u =>
      <UserShow
        key={u.id}
        {...u}
        updateUser={updateUser}
        deleteUser={deleteUser}
      />
    )}
  </>
)

export default UserList;