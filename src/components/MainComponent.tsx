import * as THREE from 'three';
import { MapControls } from 'three/examples/jsm/controls/OrbitControls';
import { ORBITS } from '@/constants/orbits';
import { PLANETS } from '@/constants/planets';
import { getScaledDistance, createSunOrPlanetMesh, createPlanetOrbit, createIntersectionSphere } from '@/helpers/utils';
import { useEffect, useRef } from 'react';
import { SUN_RADIUS } from '@/constants/constants';

export const MainComponent = () => {
    const scene = useRef(new THREE.Scene())
    const camera = useRef(new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ))
    const renderer = useRef(new THREE.WebGLRenderer({ antialias: true }))
    const controls = useRef(new MapControls(camera.current, renderer.current.domElement))
    const renderedPlanets = useRef<THREE.Mesh[]>([]);
    // Raycaster works poorly for small spheres, so we create an invisible sphere with a bigger radius to compensate that
    const intersectionSpheres = useRef<THREE.Mesh[]>([]);
    const currentlyIntersectedObject = useRef<THREE.Object3D<THREE.Object3DEventMap>>(undefined)
    // initialize object to perform world/screen calculations
    const raycaster = useRef(new THREE.Raycaster())
    const mousePosition = useRef(new THREE.Vector2())
    const sun = useRef<THREE.Mesh>(undefined)
    const sunIntersectionSphere = useRef<THREE.Mesh>(undefined)

    const initializeScene = () => {
        camera.current.position.x = -80;
        camera.current.position.y = 20;
        
        renderer.current.setSize( window.innerWidth, window.innerHeight );
        document.getElementById('canvas')!.appendChild(renderer.current.domElement);

        // Controls
        controls.current.enableDamping = true;
        controls.current.rotateSpeed = 0.3;
        controls.current.target.set(0, 0, 0)
        
        // SUN
        // Radius: 696.340 km
        sun.current = createSunOrPlanetMesh('Sun', SUN_RADIUS, 'assets/textures/8k_sun.jpeg', false);
        scene.current.add(sun.current);
        
        sunIntersectionSphere.current = createIntersectionSphere('Sun', SUN_RADIUS, 1.5, false);
        scene.current.add(sunIntersectionSphere.current);

        PLANETS.forEach(({ name, radius, maxDistanceFromSun, intersectionSphereScale, textureFileName }, index) => {
            // Add planet
            renderedPlanets.current[index] = createSunOrPlanetMesh(name, radius, textureFileName)
            renderedPlanets.current[index].position.z = getScaledDistance(maxDistanceFromSun)
            scene.current.add(renderedPlanets.current[index])

            // render intersection sphere ()
            intersectionSpheres.current[index] = createIntersectionSphere(name, radius, intersectionSphereScale)
            intersectionSpheres.current[index].position.z = getScaledDistance(maxDistanceFromSun)
            scene.current.add(intersectionSpheres.current[index])

            // Add planet orbit
            const { focalDistance, axis, orbitColor } = ORBITS[index]
            const planetOrbit = createPlanetOrbit(focalDistance, axis, orbitColor)
            scene.current.add(planetOrbit)
        })

    }

    const verifyMouseIntersections = () => {
        const sunAndPlanets = [sunIntersectionSphere.current!, ...intersectionSpheres.current]

        raycaster.current.setFromCamera( mousePosition.current, camera.current ); 

        const intersectedObjects = raycaster.current.intersectObjects(sunAndPlanets, false);

        if (intersectedObjects.length > 0) {
            currentlyIntersectedObject.current = intersectedObjects[0].object;
        } else {
            currentlyIntersectedObject.current = undefined;
        }
        if (sunIntersectionSphere.current !== undefined) {
            sunIntersectionSphere.current.material.opacity = (currentlyIntersectedObject && currentlyIntersectedObject.name === sunIntersectionSphere.name) ? 0.2 : 0;
        }


        intersectionSpheres.current.forEach((object, index) => {
            if (currentlyIntersectedObject && object.name === currentlyIntersectedObject.current?.name) {
                intersectionSpheres.current[index].material.opacity = 0.2;
            } else {
                intersectionSpheres.current[index].material.opacity = 0;
            }
        })
    }

    const update = () => {
        verifyMouseIntersections()
    }

    const render = () => {
        renderer.current.render( scene.current, camera.current );
    }

    const animate = (): void => {
        update();

        if (sun.current) {
            sun.current.rotation.y -= 0.001;
        }

        render();
        requestAnimationFrame(animate);
    }



    const onMouseMove = (event: MouseEvent) => {
        mousePosition.current.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        mousePosition.current.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    }

    const onWindowResize = (): void =>  {
        const aspectRatio = window.innerWidth / window.innerHeight;
        camera.current.aspect = aspectRatio;
        camera.current.updateProjectionMatrix();
        controls.current.update()
        renderer.current.setSize(window.innerWidth, window.innerHeight);
    }

    useEffect(() => {
        initializeScene()
        animate()

        // Event Listeners
        window.addEventListener('mousemove', onMouseMove, false)
        window.addEventListener('resize', onWindowResize);

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
            window.removeEventListener('resize', onWindowResize)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <div id="canvas"></div>
}