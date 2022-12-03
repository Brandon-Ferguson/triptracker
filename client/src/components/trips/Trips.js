import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import TripList from './TripList';
import TripForm from './TripForm';

const Trips = () => {
  const [trips, setTrips] = useState([])

  const { user_ID } = useParams()

  useEffect( () => {
    axios.get(`/api/users/${user_ID}/trips`)
      .then( res => setTrips(res.data))
      .catch( err => console.log(err))
  }, [])

  const addTrip = (trip) => {
    axios.post(`/api/users/${user_ID}/trips`, { trip })
      .then( res => setTrips([...trips, res.data]))
      .catch( err => console.log(err))
  }

  const updateTrip = (id, trip) => {
    axios.put(`/api/users/${user_ID}/trips/${id}`, { trip })
      .then( res => {
        const newUpdatedTrip = trips.map( t => {
          if (t.id === id) {
            return res.data
          }
          return t
        })
        setTrips(newUpdatedTrip)
      })
      .catch( err => console.log(err))
  }

  const deleteTrip = (id) => {
    axios.delete(`/api/users/${user_ID}/trips/${id}`)
      .then( res => setTrips( trips.filter( t => t.id !== id)))
      .catch( err => console.log(err))
  }

  return(
    <>
      <TripForm addTrip={addTrip} />
      <h1>All Trips</h1>
      <TripList
        trips={trips}
        updateTrip={updateTrip}
        deleteTrip={deleteTrip}
      />
    </>
  )
}

export default Trips;