import * as THREE from 'three';
import { MapControls } from 'three/examples/jsm/controls/OrbitControls';
import { orbits } from './orbits';
import { planets } from './planets';
import { getScaledDistance, createPlanetMesh, getScaledStarRadius, createPlanetOrbit } from './utils';


let scene, camera, renderer, controls;
let sun;
let renderedPlanets = [];

const init = () => {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.getElementById('app').appendChild( renderer.domElement );
  camera.position.z = 38.3;

  // Controls
  controls = new MapControls(camera, renderer.domElement)
  controls.enableDamping = true;
  controls.rotateSpeed = 0.3;
  controls.target.set(0, 0, 0)
  
  // SUN
  // Radius: 696.340 km
  const SUN_RADIUS = 696340;
  const scaledSunRadius = getScaledStarRadius(SUN_RADIUS);
  const sunGeometry = new THREE.SphereGeometry( scaledSunRadius, 100, 100 );
  const sunTexture = new THREE.TextureLoader().load('assets/textures/8k_sun.jpeg')
  const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture })
  sun = new THREE.Mesh(sunGeometry, sunMaterial);
  scene.add(sun);
  

  planets.forEach(({ radius: planetRadius, maxDistanceFromSun, textureFileName: planetTexture }, index) => {
    // Create the final object to add to the scene
    const { focalDistance, axis, orbitColor } = orbits[index]
    renderedPlanets[index] = createPlanetMesh(planetRadius, planetTexture)
    renderedPlanets[index].orbit = createPlanetOrbit(focalDistance, axis, orbitColor)
    scene.add(renderedPlanets[index])
    scene.add(renderedPlanets[index].orbit)
    renderedPlanets[index].position.z = getScaledDistance(maxDistanceFromSun)
  })

}

const animate = () => {
    requestAnimationFrame( animate );

    sun.rotation.y -= 0.001;

    renderer.render( scene, camera );
};

const onWindowResize = () =>  {
    const aspectRatio = window.innerWidth / window.innerHeight;
    camera.aspect = aspectRatio;
    camera.updateProjectionMatrix();
    controls.update()
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize);



init();
animate();