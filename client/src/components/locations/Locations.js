import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import LocationList from './LocationList';
import LocationForm from './LocationForm';

const Locations = () => {
  const [locations, setLocations] = useState([])

  const { trip_ID } = useParams()

  useEffect( () => {
    axios.get(`/api/trips/${trip_ID}/locations`)
      .then( res => setLocations(res.data))
      .catch( err => console.log(err))
  }, [])

  const addLocation = (location) => {
    axios.post(`/api/trips/${trip_ID}/locations`, { location })
      .then( res => setLocations([...locations, res.data]))
      .catch( err => console.log(err))
  }

  const updateLocation = (id, location) => {
    axios.put(`/api/trips/${trip_ID}/locations/${id}`, { location })
      .then( res => {
        const newUpdatedLocation = locations.map( l => {
          if (l.id === id) {
            return res.data
          }
          return l
        })
        setLocations(newUpdatedLocation)
      })
      .catch( err => console.log(err))
  }

  const deleteLocation = (id) => {
    axios.delete(`/api/trips/${trip_ID}/locations/${id}`)
      .then( res => setLocations( locations.filter( l => l.id !== id)))
      .catch( err => console.log(err))
  }

  return(
    <>
      <LocationForm addLocation={addLocation} />
      <h1>All Locations</h1>
      <LocationList
        locations={locations}
        updateLocation={updateLocation}
        deleteLocation={deleteLocation}
      />
    </>
  )
}

export default Locations;