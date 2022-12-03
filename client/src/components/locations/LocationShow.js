import { useState } from 'react';
import LocationForm from './LocationForm'; 

const LocationShow = ({ id, loc_name, updateLocation, deleteLocation }) => {
  const [editing, setEdit] = useState(false)
  
  return (
    <>
      {
        editing ?
        <>
          <LocationForm 
            id={id}
            loc_name={loc_name}
            updateLocation={updateLocation}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}> 
            Cancel
          </button>
        </>
        :
        <>
          <h2>{loc_name}</h2>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteLocation(id)}>
            Delete
          </button>
          <button>Addresses EDIT ME LATER </button>
        </>
      }    
    </>
  )
}

export default LocationShow;