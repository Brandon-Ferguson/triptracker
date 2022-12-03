import { useState, useEffect } from 'react';

const TripForm = ({ addTrip, id, name, updateTrip, setEdit }) => {
  const [trip, setTrip] = useState({ name: '' })

  useEffect( () => {
    if (id) {
      setTrip({ name })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateTrip(id, trip)
      setEdit(false)
    } else {
      addTrip(trip)
    }
    setTrip({ name: '' })
  }

  return(
    <>
      <h1>{id ? "Update" : "Create"} Trip</h1>
      <form onSubmit={handleSubmit}>
        <label>Trip Name</label>
        <input 
          name='name'
          value={trip.name}
          onChange={(e) => setTrip({...trip, name: e.target.value })}
          required
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default TripForm;