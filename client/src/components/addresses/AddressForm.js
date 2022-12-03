import { useState, useEffect } from 'react';

const AddressForm = ({ addAddress, id, street, state, city, county, region, zip, updateAddress, setEdit }) => {
  const [address, setAddress] = useState({ street: '', state: '', city: '', county: '', region: '', zip: '' })

  useEffect( () => {
    if (id) {
      setAddress({ street: '', state: '', city: '', county: '', region: '', zip: '' })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateAddress(id, address)
      setEdit(false)
    } else {
      addAddress(address)
    }
    setAddress({ street: '', state: '', city: '', county: '', region: '', zip: '' })
  }

  return(
    <>
      <h1>{id ? "Update" : "Create"} Address</h1>
      <form onSubmit={handleSubmit}>
        <label>Street</label>
        <input 
          street='street'
          value={address.street}
          onChange={(e) => setAddress({...address, street: e.target.value })}
          required
        />
        <label>City</label>
        <input 
          city='city'
          value={address.city}
          onChange={(e) => setAddress({...address, city: e.target.value })}
          required
        />
        <label>State</label>
        <input 
          state='state'
          value={address.state}
          onChange={(e) => setAddress({...address, state: e.target.value })}
          required
        />
        <label>Zip</label>
        <input 
          zip='zip'
          value={address.zip}
          onChange={(e) => setAddress({...address, zip: e.target.value })}
          required
        />
        <label>County</label>
        <input 
          county='county'
          value={address.county}
          onChange={(e) => setAddress({...address, county: e.target.value })}
          required
        />
        <label>Region</label>
        <input 
          region='region'
          value={address.region}
          onChange={(e) => setAddress({...address, region: e.target.value })}
          required
        />
        
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default AddressForm; 