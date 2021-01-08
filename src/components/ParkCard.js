import React from 'react';
import '../css/parking.css'


const ParkCard = ({ place }) => {
    const placeName = place.name ? place.name : ''
    const max = place.maxCapacity ? place.maxCapacity : ''
    const available = place.spacesAvailable ? place.spacesAvailable : ''
    return (
        <div className='parkCard'>
            <h3>{placeName}</h3>
            <p>Paikkoja yhteensä: {max}</p>
            <p>Vapaana: {available}</p>
        </div>)
}

export default ParkCard