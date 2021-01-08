import React from 'react';
import RoadWork from './RoadWork';


const RoadWorksPage = ({ roadworks, page }) => {

    if (page !== 'roadworks' || roadworks.loading) {
        return <div></div>
    }
    const roadW = roadworks.data.roadworks
    return (
        <div>
            {roadW.map(w => <RoadWork key={w.id} work={w}></RoadWork>)}
        </div>)
}

export default RoadWorksPage