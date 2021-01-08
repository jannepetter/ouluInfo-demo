import React from 'react';
import CameraComp from './CameraComp'
import PresetImage from './PresetImage'

const cameraPage = ({ page, cameras }) => {

    if (page !== 'cameras' || cameras.loading) {
        return <div></div>
    }
    const cameraList = cameras.data.cameras

    return (
        <div>
            <div className='cameraBox'>
                <PresetImage key='ouluntoriwebcam1' imageUrl='https://kamerat.oulunkaupunki.fi/Kauppatori/picture1.jpg'
                    time='' presentationName='Kauppatori'></PresetImage>
            </div>
            {cameraList.map(k => <CameraComp key={k.cameraId} name={k.name} presets={k.presets}></CameraComp>)}
        </div>)
}

export default cameraPage