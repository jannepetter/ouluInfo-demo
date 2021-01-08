import './css/App.css';
import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks';
import { GetAllCameras, GetAllCarParks, GetAllRoadworks, GetAllTrafficAnnouncements } from './graphql/queries'
import Menubar from './components/Menubar';
import CameraPage from './components/CameraPage';
import ParkingPage from './components/ParkingPage';
import { scrollListener } from './utils/functions'
import RoadWorksPage from './components/RoadWorksPage';
import TrafficAnnPage from './components/TrafficAnnPage';

function App() {
  const cameras = useQuery(GetAllCameras)
  const parking = useQuery(GetAllCarParks)
  const roadworks = useQuery(GetAllRoadworks)
  const trafficAnnouncements = useQuery(GetAllTrafficAnnouncements)

  const [page, setPage] = useState('cameras')


  scrollListener()
  return (
    <div >
      <Menubar setPage={setPage} page={page}></Menubar>
      <CameraPage page={page} cameras={cameras}></CameraPage>
      <ParkingPage page={page} parking={parking}></ParkingPage>
      <RoadWorksPage page={page} roadworks={roadworks}></RoadWorksPage>
      <TrafficAnnPage page={page} trafficAnnouncements={trafficAnnouncements}></TrafficAnnPage>
    </div>
  );
}

export default App;
