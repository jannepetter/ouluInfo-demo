import React from 'react';
import ParkCard from './ParkCard';
import '../css/parking.css'


const ParkingPage = ({ parking, page }) => {

    if (page !== 'parking' || parking.loading) {
        return <div></div>
    }
    const parkingData = parking.data.carParks
    return (
        <div className='parkingContainer'>
            {parkingData.map(p => <ParkCard key={p.carParkId} place={p}></ParkCard>)}
            <br></br>
        </div>)
}

export default ParkingPage