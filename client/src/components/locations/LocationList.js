import LocationShow from './LocationShow';

const LocationList = ({ locations, updateLocation, deleteLocation }) => (
  <>
    { locations.map( l => 
      <LocationShow
        key={l.id}
        {...l}
        updateLocation={updateLocation}
        deleteLocation={deleteLocation}
      />
    )}
  </>
) 

export default LocationList;