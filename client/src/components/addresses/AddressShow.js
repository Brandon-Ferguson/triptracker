import { useState } from 'react';
import AddressForm from './AddressForm'; 

const AddressShow = ({ id, street, state, city, county, region, zip, updateAddress, deleteAddress }) => {
  const [editing, setEdit] = useState(false)
  
  return (
    <>
      {
        editing ?
        <>
          <AddressForm 
            id={id}
            street={street}
            state={state}
            city={city}
            county={county}
            region={region}
            zip={zip}
            updateAddress={updateAddress}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}> 
            Cancel
          </button>
        </>
        :
        <>
          <h2>{street}, {city}, {state} {zip}</h2>
          <h2>{county}, {region}</h2>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteAddress(id)}>
            Delete
          </button>
        </>
      }    
    </>
  )
}

export default AddressShow;