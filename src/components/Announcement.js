import React from 'react';
import '../css/trafficannouncement.css'

const Announcement = ({ announcement }) => {
    const alkaa = announcement.startTime ? announcement.startTime.replace('T', ' ') : ''
    const loppuu = announcement.endTime ? announcement.endTime.replace('T', ' ') : ''
    const otsikko = announcement.title['fi'] ? announcement.title['fi'] : ''
    const kuvaus = announcement.description['fi'] ? announcement.description['fi'] : ''
    return (
        <div className='announcementBox'>
            <h4>{otsikko}</h4>
            <p>{kuvaus}</p>
            <div>Alkaa: {alkaa}</div>
            <div>Päättyy: {loppuu}</div>
        </div>)
}

export default Announcement