import { useState, useEffect } from 'react';

const UserForm = ({ addUser, id, email, password, updateUser, setEdit }) => {
  const [user, setUser] = useState({ email: '', password: '' })

  useEffect(() => {
    if (id) {
      setUser({ email, password })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateUser(id, user)
      setEdit(false)
    } else {
      addUser(user)
    }
    setUser({ email: '', password: '' })
  }

  return (
    <>
      <h1>{id ? "Update" : "Create"} User</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input 
          name='email' 
          value={user.email} 
          onChange={(e) => setUser({ ...user, email: e.target.value })} 
          required
        />
        <label>Password</label>
        <input
          name='password' 
          value={user.password} 
          onChange={(e) => setUser({ ...user, password: e.target.value })} 
          required
        ></input>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default UserForm;