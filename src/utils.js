import * as THREE from 'three';

// Constant used to keep proportions, while rendering smaller objects
const SCALE_FACTOR = 1000000;

// Constant used to diminish distances, so that the planets are easier to visualize
// (Using this with a value different than 1 will make the proportions become not-realistic)
const DISTANCE_FACTOR = 30;

// Constant to increase the size of the planets, so that they are easier to visualize
const PLANETS_SIZE_FACTOR = 15;

export const getScaledStarRadius = (starRadius) => starRadius / SCALE_FACTOR;

export const getScaledPlanetRadius = (planetRadius) => planetRadius * (PLANETS_SIZE_FACTOR / SCALE_FACTOR);

export const getScaledDistance = (distance) => distance / (SCALE_FACTOR * DISTANCE_FACTOR);

export const createPlanetMesh = (planetRadius, textureFileName) => {
    const scaledRadius = getScaledPlanetRadius(planetRadius);
    const geometry = new THREE.SphereGeometry(scaledRadius, 50, 50);
    const texture = new THREE.TextureLoader().load(textureFileName);
    const material = new THREE.MeshBasicMaterial({ map: texture });

    return new THREE.Mesh(geometry, material)
}

export const createPlanetOrbit = (focalDistance, radius, color, tilt = 0) => {
    const scaledFocalDistance = getScaledDistance(focalDistance)
    const radiusX = getScaledDistance(radius.semiMinor)
    const radiusY = getScaledDistance(radius.semiMajor)

    const orbit = new THREE.EllipseCurve(
        0,  scaledFocalDistance,      // ax, aY
        radiusX, radiusY,             // xRadius, yRadius
        0,  2 * Math.PI,              // aStartAngle, aEndAngle
        false,                        // aClockwise
        0                             // aRotation
    );
    const orbitPoints = orbit.getPoints(radiusY * 100);
    const orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints);
    const orbitMaterial = new THREE.LineBasicMaterial({ color, opacity: 0.4, transparent: true });
    
    const ellipse = new THREE.Line( orbitGeometry, orbitMaterial );
    ellipse.rotateX((Math.PI / 2) + tilt)
    return ellipse;
}