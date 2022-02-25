import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";


const defaultCenter = { lat: 19.3939754, lng: -99.1748682 };
    const defaultOptions = { scrollwheel: false };

const RegularMap = withScriptjs(
    withGoogleMap(props => (
      <GoogleMap
        defaultZoom={16}
        defaultCenter={ defaultCenter }
        defaultOptions={ defaultOptions }
      >
        <Marker position={ defaultCenter } />
      </GoogleMap>
    ))
  );

const Mapa = () => {
    
    const loadingElementStyle = { height: '100%' };
    const containerElementStyle = { height: '100%' };
    const mapElementStyle = { height: '100%' };

    return ( 
        <div className='h-full w-full relative'>
           <RegularMap
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDRd9OVrtU1vfI_Ezcrj5Ced4NKns3BJvo"
              loadingElement={<div style={ loadingElementStyle } />}
              containerElement={<div style={ containerElementStyle } />}
              mapElement={<div style={ mapElementStyle } />}
            />
            <div className='hidden md:block absolute w-72 h-45 bg-cyan-900 bottom-[5%] left-2 rounded-sm rounded-br-[80px]'>
              <div className='flex flex-row p-2 h-full'>
                <div className='w-1/3 h-full flex flex-row justify-center items-center'>
                  <img className='object-contain w-full' src='/img/calendar.png' alt='Imagen calendar' />
                </div>
                <div className='2/3 text-white p-2 '>
                  <h3 className='font-bold'>Horario de atención</h3>
                  <div>
                    <div>
                      <p className='uppercase font-semibold text-xs'>LUNES - VIERNES</p>
                      <p className='font-light text-xs'>8 AM - 8 PM</p>
                    </div>
                    <div>
                      <p className='uppercase font-semibold text-xs'>Sábados</p>
                      <p className='font-light text-xs'>8 AM - 5 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
     );
}
 
export default Mapa;