import React , {useState , useEffect} from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { Marker, InfoWindow ,Traf} from '@react-google-maps/api';
import Skeleton from '@mui/material/Skeleton';
import Camion from '../../../Global/images/camion.svg'
import ZoneDepotImage from '../../../Global/images/zoneDepot.svg'
import EtablissementIcon from "../../../Global/images/etablissement-icon.svg"
import {CardMapDetails} from '../../../style';

const urlMap ="http://127.0.0.1:8000/api/auth-responsable-etablissement/responsable-map";

const containerStyle = {
  width: '100%',
  height: '84vh',
};

const center = {
  lat: 36.79707659935575,
  lng:  10.198563045367104
};

const divStyle = {
  background: `white`,
  padding: 2,
  width: 150,
  height: 30, 
}

export default function MapResponsable() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey:"AIzaSyCM_y_hH1jw8ucuvhzfmGdKMloxPwBjbAo" ,
  });
  const [etablissement, setEtablissement] = useState([]);
  const [camion, setCamion] = useState([]);
  const [zoneDepot, setZoneDepot] = useState([]);

  const [uniqueEtablissement, setUniqueEtablissement] = useState([]);
  const [uniquecamion, setUniqueCamion] = useState([]);
  const [uniqueZoneDepot, setUniqueZoneDepot] = useState([]);

  const [showUniqueEtablissement, setShowUniqueEtablissement] = useState(null);
  const [showUniqueCamion, setShowUniqueCamion] = useState(null);
  const [showUniqueZoneDepot, setShowUniqueZoneDepot] = useState(null);

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token_responsable')}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

  useEffect(() => {
  fetch(urlMap, requestOptions)
  .then((e) => {return e.json();}).then((data) => { setEtablissement(data.etablissement);setCamion(data.camion);  setZoneDepot(data.zone_depot); });
  },[])

  
  const [activeMarkerEtablissement, setActiveMarkerEtablissement] = useState(null);
  const [activeMarkerCamion, setActiveMarkerCamion] = useState(null);
  const [activeMarkerZoneDepot, setActiveMarkerZoneDepot] = useState(null);

  async function handleActiveMarkerEtablissement  (marker) {
    if (marker === activeMarkerEtablissement) {
      return;
    }
    setActiveMarkerEtablissement(marker);
    if(marker!==null){
      setUniqueEtablissement(etablissement);
    }
  };
  
  async function handleActiveMarkerCamion  (marker) {
    if (marker === activeMarkerCamion) {
      return;
    }
    setActiveMarkerCamion(marker);
    setUniqueCamion(camion);
  };

  async function handleActiveMarkerZoneDepot  (marker) {
    if (marker === activeMarkerZoneDepot) {
      return;
    }
    setActiveMarkerZoneDepot(marker);
      if(marker!==null){
        setUniqueZoneDepot(zoneDepot);
      };
  };

  console.clear();

  if (!isLoaded) return <div> <Skeleton sx={{ height:500 }} animation="wave" variant="rectangular" /> </div>;
  return (
    <div style={{display:"flex", justifyContent:"space-between"}}> 
      <GoogleMap mapContainerStyle={containerStyle} onMouseOver={() =>{ setActiveMarkerEtablissement(null); 
        setUniqueEtablissement(null) ;setShowUniqueEtablissement(true);
        setActiveMarkerCamion(null); setUniqueCamion(null) ;setShowUniqueCamion(true);
        setActiveMarkerZoneDepot(null); setUniqueZoneDepot(null) ;setShowUniqueZoneDepot(true);}} center={center} zoom={11.2}>                  
          {etablissement.length!==0?(  
            <>
              <> 
                <Marker onClick={() => handleActiveMarkerEtablissement(etablissement[0].id)} icon={ EtablissementIcon} 
                  position={ {lat:etablissement[0].latitude, lng:etablissement[0].longitude} }> 
                </Marker>     
                {activeMarkerEtablissement === etablissement[0].id ? ( 
                  <InfoWindow 
                    onCloseClick={() => setActiveMarkerEtablissement(null)} 
                    position={ {lat:etablissement[0].latitude+0.025, lng:etablissement[0].longitude}}>
                    <div style={divStyle}> 
                      <p>{etablissement[0].nom_etablissement}</p> 
                    </div>
                  </InfoWindow>
                ) : null}
              </> 
              <>
                <Marker  onClick={() => handleActiveMarkerCamion(camion.id)} icon={Camion} 
                  position={ {lat:camion.latitude, lng:camion.longitude} }/>       
                {activeMarkerCamion === camion.id ? ( 
                  <InfoWindow onCloseClick={() => setActiveMarkerCamion(null)} 
                    position={ {lat:camion.latitude+0.025, lng:camion.longitude}} >
                    <div style={divStyle}> 
                      <p>{camion.matricule}</p> 
                    </div>
                  </InfoWindow>
                ) : null}
              </> 
          
              <>
                <Marker onClick={() => handleActiveMarkerZoneDepot(zoneDepot.id)} icon={ZoneDepotImage}  
                  position={ {lat:zoneDepot.latitude, lng:zoneDepot.longitude} }/>     
                {activeMarkerZoneDepot === zoneDepot.id ? ( 
                  <InfoWindow onCloseClick={() => setActiveMarkerZoneDepot(null)} 
                    position={ {lat:zoneDepot.latitude+0.025, lng:zoneDepot.longitude}} >
                    <div style={divStyle}> 
                      <p>{zoneDepot.adresse}</p> 
                    </div>
                  </InfoWindow>
                ) : null}
              </>         
            </>        
          ):null}
      </GoogleMap>        
    </div>
  )
}

  