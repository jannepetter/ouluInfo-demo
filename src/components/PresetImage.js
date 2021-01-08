import React, { useState } from 'react';
import '../css/cameraComponents.css'

const PresetImage = ({ imageUrl, time, presentationName }) => {
    const [showlarge, setShowLarge] = useState(false)
    const aika = time ? time.replace('T', ' ').replace('Z', '').replace('.000', '') : ''
    const suunta = presentationName ? presentationName : ''

    const toggleImage = (info) => {
        setShowLarge(!info)
    }
    let imageclass = showlarge ? 'largeImage' : 'smallImage'
    return (
        <div >
            <img onClick={() => toggleImage(showlarge)} className={imageclass} src={imageUrl} alt='not found' ></img>
            <br></br>
            <label className='timestamp'>{aika + ' ' + suunta}</label>

        </div>)
}

export default PresetImage