import gql from 'graphql-tag';

export const GetAllCameras = gql`
query GetAllCameras { 
    cameras {
      cameraId
      name
      lat
      lon
      presets {
        presetId
        presentationName
        imageUrl
        measuredTime
      }
    }
  }
`;

export const GetAllCarParks = gql`
query GetAllCarParks {
    carParks {
      carParkId
      name
      lat
      lon
      maxCapacity
      spacesAvailable
    }
  }
`;

export const GetAllRoadworks = gql`
query GetAllRoadworks { 
  roadworks {
    id
    roadworkId
    severity
    status
    startTime
    endTime
    description {
      fi
    }
  } 
}
`;

export const GetAllTrafficAnnouncements = gql`
query GetAllTrafficAnnouncements { 
  trafficAnnouncements {
    id
    announcementId
    title {
      fi
    }
    description {
      fi
    }
    startTime
    endTime
  }
}
`;
