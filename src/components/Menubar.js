import React from 'react';
import '../css/menubar.css'

const Menubar = ({ setPage, page }) => {
    let styleParkki = page === 'parking' ? 'clickedB' : ''
    let styleCameras = page === 'cameras' ? 'clickedB' : ''
    let styleRoadW = page === 'roadworks' ? 'clickedB' : ''
    let styleTrafficAnn = page === 'trafficann' ? 'clickedB' : ''

    const clickHandler = (pageinfo) => {
        setPage(pageinfo)
        window.scrollTo(0, 0)
    }
    return (
        <div id='navbar' className='menubarContainer'>
            <div onClick={() => clickHandler('cameras')} className={'menubarButton ' + styleCameras}>Kamerat</div>
            <div onClick={() => clickHandler('parking')} className={'menubarButton ' + styleParkki}>Parkkitilat</div>
            <div onClick={() => clickHandler('roadworks')} className={'menubarButton ' + styleRoadW}>Tietyöt</div>
            <div onClick={() => clickHandler('trafficann')} className={'menubarButton ' + styleTrafficAnn}>Tiedotteet</div>
        </div>)
}

export default Menubar