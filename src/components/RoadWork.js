import React from 'react';
import '../css/roadwork.css'

const RoadWork = ({ work }) => {

    const kuvaus = work.description['fi'] ? work.description['fi'] : ''
    const aloitettu = work.startTime ? work.startTime.replace('T', ' ').replace('Z', '') : ''
    const loppuu = work.endTime ? work.endTime.replace('T', ' ').replace('Z', '').replace('.999', '') : ''
    return (
        <div className='roadWorkContainer'>
            <p>{kuvaus}</p>
            <div>Työ aloitettu: {aloitettu}</div>
            <div>Työ päättyy: {loppuu}</div>
        </div>)
}

export default RoadWork