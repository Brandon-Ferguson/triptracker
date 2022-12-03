import TripShow from './TripShow';

const TripList = ({ trips, updateTrip, deleteTrip }) => (
  <>
    { trips.map( t => 
      <TripShow
        key={t.id}
        {...t}
        updateTrip={updateTrip}
        deleteTrip={deleteTrip}
      />
    )}
  </>
) 

export default TripList;