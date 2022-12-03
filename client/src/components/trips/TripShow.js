import { useState } from 'react';
import TripForm from './TripForm'; 

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
          <button>Locations EDIT ME LATER </button>
        </>
      }    
    </>
  )
}

export default TripShow;