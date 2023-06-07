import React, { useEffect, useRef, useState } from 'react';
import './front-page.css';
import Globe from 'react-globe.gl';
import * as topojson from 'topojson-client';
import * as THREE from 'three';
import Button from '../../Components/Button/Button';
import Doodles from '../../Components/Doodles/Doodles';
import Services from '../../Components/Services/Services';
import Contacts from '../../Components/Contacts/Contacts';

const FrontPage = () => {
  const globeRef = useRef(null);
  const [landPolygons, setLandPolygons] = useState([]);
  const polygonsMaterial = new THREE.MeshLambertMaterial({
    color: '#207178',
    side: THREE.DoubleSide,
  });
  useEffect(() => {
    fetch('//unpkg.com/world-atlas/land-110m.json')
      .then((res) => res.json())
      .then((landTopo) => {
        setLandPolygons(
          topojson.feature(landTopo, landTopo.objects.land).features
        );
      });
  }, []);
  useEffect(() => {
    if (globeRef && globeRef.current) {
      globeRef.current.controls().enableZoom = false;
      globeRef.current.camera().zoom = 1.4;
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 2;
    }
  }, []);
  return (
    <div className='cont'>
      <section className='heroCont'>
        <div className='textCont'>
          <div className='heroText'>
            your best <span>IT</span> partners
          </div>
          <Button
            text={'EXPLORE OUR SERVICES'}
            height={'3vmin'}
            width={'55vmin'}
          />
        </div>
        <div className='globePosition'>
          <Globe
            ref={globeRef}
            backgroundColor='rgba(0,0,250,0)'
            showGlobe={false}
            showAtmosphere={false}
            polygonsData={landPolygons}
            polygonSideColor={() => 'rgba(0, 0,00, 0.05)'}
            polygonCapMaterial={polygonsMaterial}
            width={400}
            height={400}
            waitForGlobeReady={true}
          />
        </div>
      </section>
      <section className='whyUs' id='about'>
        <div className='whyUsText'>Why</div>
        <div className='whyUsText'> Choose Us?</div>
        <Doodles />
      </section>
      <section className='belief'>
        <div className='beliefTitle'>
          We believe that <span className='thin'>technology</span> can
          <span className='hollow'> change</span> the world
        </div>
        <p>
          Thats why we are commited to delivering innovative IT solutions to
          businesses of all sizes. We will help you achieve your goals and
          thrive in a rapidly evolving digital landscape
        </p>
        <div class='separator'>100% Client Satisfaction</div>
      </section>
      <Services />
      <Contacts />
    </div>
  );
};

export default FrontPage;
