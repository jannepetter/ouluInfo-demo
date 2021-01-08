import React from 'react';
import Announcement from './Announcement';


const TrafficAnnPage = ({ page, trafficAnnouncements }) => {
    if (page !== 'trafficann' || trafficAnnouncements.loading) {
        return <div></div>
    }
    const announcementData = trafficAnnouncements.data.trafficAnnouncements
    return (
        <div>
            {announcementData.map(a => <Announcement key={a.id} announcement={a}></Announcement>)}
        </div>)
}

export default TrafficAnnPage