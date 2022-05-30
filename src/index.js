import * as THREE from 'three';
import { MapControls } from 'three/examples/jsm/controls/OrbitControls';
import { orbits } from './orbits';
import { planets } from './planets';
import { getScaledDistance, createSunOrPlanetMesh, getScaledStarRadius, createPlanetOrbit, createIntersectionSphere } from './utils';


let scene, camera, renderer, controls;
let sun, sunIntersectionSphere;
let currentlyIntersectedObject;
let renderedPlanets = [];
// Raycaster works poorly for small spheres, so we create an invisible sphere with a bigger radius to compensate that
let intersectionSpheres = [];
let raycaster;
var mousePosition;

const init = () => {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  camera.position.x = -80;
  camera.position.y = 20;
  
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.getElementById('app').appendChild( renderer.domElement );

  // Controls
  controls = new MapControls(camera, renderer.domElement)
  controls.enableDamping = true;
  controls.rotateSpeed = 0.3;
  controls.target.set(0, 0, 0)

  // initialize object to perform world/screen calculations
  raycaster = new THREE.Raycaster();
  mousePosition = new THREE.Vector2();
  
  // SUN
  // Radius: 696.340 km
  const SUN_RADIUS = 696340;
  sun = createSunOrPlanetMesh('Sun', SUN_RADIUS, 'assets/textures/8k_sun.jpeg', false);
  scene.add(sun);
  
  sunIntersectionSphere = createIntersectionSphere('Sun', SUN_RADIUS, 1.5, false);
  scene.add(sunIntersectionSphere);

  planets.forEach(({ name, radius, maxDistanceFromSun, intersectionSphereScale, textureFileName }, index) => {
    // Add planet
    renderedPlanets[index] = createSunOrPlanetMesh(name, radius, textureFileName)
    renderedPlanets[index].position.z = getScaledDistance(maxDistanceFromSun)
    scene.add(renderedPlanets[index])

    // render intersection sphere ()
    intersectionSpheres[index] = createIntersectionSphere(name, radius, intersectionSphereScale)
    intersectionSpheres[index].position.z = getScaledDistance(maxDistanceFromSun)
    scene.add(intersectionSpheres[index])

    // Add planet orbit
    const { focalDistance, axis, orbitColor } = orbits[index]
    const planetOrbit = createPlanetOrbit(focalDistance, axis, orbitColor)
    scene.add(planetOrbit)
  })

}

const animate = () => {
  update();
  sun.rotation.y -= 0.001;
  render();
  requestAnimationFrame( animate );
};

const update = () => {
  verifyMouseIntersections()
}


const render = () => {
  renderer.render( scene, camera );
}

const verifyMouseIntersections = () => {
  const sunAndPlanets = [sunIntersectionSphere, ...intersectionSpheres];

  raycaster.setFromCamera( mousePosition, camera ); 

  const intersectedObjects = raycaster.intersectObjects(sunAndPlanets, false);

  if (intersectedObjects.length > 0) {
    currentlyIntersectedObject = intersectedObjects[0].object;
  } else {
    currentlyIntersectedObject = null;
  }

  sunIntersectionSphere.material.opacity = (currentlyIntersectedObject && currentlyIntersectedObject.name === sunIntersectionSphere.name) ? 0.2 : 0;

  intersectionSpheres.forEach((object, index) => {
    if (currentlyIntersectedObject && object.name === currentlyIntersectedObject.name) {
      intersectionSpheres[index].material.opacity = 0.2;
    } else {
      intersectionSpheres[index].material.opacity = 0;
    }
  })
}

const onMouseMove = (event) => {
	mousePosition.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mousePosition.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

const onWindowResize = () =>  {
  const aspectRatio = window.innerWidth / window.innerHeight;
  camera.aspect = aspectRatio;
  camera.updateProjectionMatrix();
  controls.update()
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// Event Listeners
window.addEventListener('mousemove', onMouseMove, false)
window.addEventListener('resize', onWindowResize);



init();
animate();