import AddressShow from './AddressShow';

const AddressList = ({ addresses, updateAddress, deleteAddress }) => (
  <>
    { addresses.map( a => 
      <AddressShow
        key={a.id}
        {...a}
        updateAddress={updateAddress}
        deleteAddress={deleteAddress}
      />
    )}
  </>
) 

export default AddressList; 