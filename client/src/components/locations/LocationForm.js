import { useState, useEffect } from 'react';

const LocationForm = ({ addLocation, id, loc_name, updateLocation, setEdit }) => {
  const [location, setLocation] = useState({ loc_name: '' })

  useEffect( () => {
    if (id) {
      setLocation({ loc_name })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateLocation(id, location)
      setEdit(false)
    } else {
      addLocation(location)
    }
    setLocation({ loc_name: '' })
  }

  return(
    <>
      <h1>{id ? "Update" : "Create"} Location</h1>
      <form onSubmit={handleSubmit}>
        <label>Location Name</label>
        <input 
          loc_name='loc_name'
          value={location.loc_name}
          onChange={(e) => setLocation({...location, loc_name: e.target.value })}
          required
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default LocationForm; 