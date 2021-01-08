import React from 'react';
import '../css/cameraComponents.css'
import PresetImage from './PresetImage'

const CameraComp = ({ name, presets }) => {

    return (
        <div className='cameraBox'>
            <span className='headLine'>{name}</span>
            {presets.map(i => <PresetImage key={i.presetId} imageUrl={i.imageUrl}
                time={i.measuredTime} presentationName={i.presentationName}></PresetImage>)}
        </div>)
}

export default CameraComp 