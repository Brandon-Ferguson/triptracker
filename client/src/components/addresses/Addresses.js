import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AddressList from './AddressList';
import AddressForm from './AddressForm';

const Address = () => {
  const [addresses, setAddresses] = useState([])

  const { location_ID } = useParams()

  useEffect( () => {
    axios.get(`/api/locations/${location_ID}/addresses`)
      .then( res => setAddresses(res.data))
      .catch( err => console.log(err))
  }, [])

  const addAddress = (address) => {
    axios.post(`/api/locations/${location_ID}/addresses`, { address })
      .then( res => setAddresses([...addresses, res.data]))
      .catch( err => console.log(err))
  }

  const updateAddress = (id, address) => {
    axios.put(`/api/locations/${location_ID}/addresses/${id}`, { address })
      .then( res => {
        const newUpdatedAddress = addresses.map( a => {
          if (a.id === id) {
            return res.data
          }
          return a
        })
        setAddresses(newUpdatedAddress)
      })
      .catch( err => console.log(err))
  }

  const deleteAddress = (id) => {
    axios.delete(`/api/locations/${location_ID}/addresses/${id}`)
      .then( res => setAddresses( addresses.filter( a => a.id !== id)))
      .catch( err => console.log(err))
  }

  return(
    <>
      <AddressForm addAddress={addAddress} />
      <h1>All Addresses</h1>
      <AddressList
        addresses={addresses}
        updateAddress={updateAddress}
        deleteAddress={deleteAddress}
      />
    </>
  )
}

export default Address;