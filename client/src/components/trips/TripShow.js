import { useState } from 'react';
import TripForm from './TripForm'; 
import { Link } from 'react-router-dom';

const TripShow = ({ id, name, updateTrip, deleteTrip }) => {
  const [editing, setEdit] = useState(false)
  
  return (
    <>
      {
        editing ?
        <>
          <TripForm 
            id={id}
            name={name}
            updateTrip={updateTrip}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}> 
            Cancel
          </button>
        </>
        :
        <>
          <h2>{name}</h2>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteTrip(id)}>
            Delete
          </button>
          <Link to={`/${id}/locations`}>
            <button>Locations</button>
          </Link>
        </>
      }    
    </>
  )
}

export default TripShow;