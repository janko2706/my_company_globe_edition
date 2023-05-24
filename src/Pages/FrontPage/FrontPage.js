import React, { useEffect, useRef, useState } from 'react';
import './front-page.css';
import Globe from 'react-globe.gl';
import * as topojson from 'topojson-client';
import * as THREE from 'three';
import ScrollingHalf from '../../Components/ScrollingHalf/ScrollingHalf';
const FrontPage = () => {
  const globeRef = useRef(null);
  const [landPolygons, setLandPolygons] = useState([]);
  const polygonsMaterial = new THREE.MeshLambertMaterial({
    color: 'black',
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
    <div>
      <div>
        <div className='title'>evolve technologies</div>
        <div
          style={{
            opacity: '1',
            background: 'transparent',
          }}
        >
          <Globe
            ref={globeRef}
            backgroundColor='rgba(0,0,250,0)'
            showGlobe={false}
            showAtmosphere={false}
            polygonsData={landPolygons}
            polygonSideColor={() => 'rgba(0, 0,00, 0.05)'}
            polygonCapMaterial={polygonsMaterial}
          />
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        <ScrollingHalf />
      </div>
    </div>
  );
};

export default FrontPage;
