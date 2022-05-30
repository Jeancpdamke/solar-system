import * as THREE from 'three';

// Constant used to keep proportions, while rendering smaller objects
const SCALE_FACTOR = 100000;

// Constant used to diminish distances, so that the planets are easier to visualize
// (Using this with a value different than 1 will make the proportions become not-realistic)
const DISTANCE_FACTOR = 30;

// Constant to increase the size of the planets, so that they are easier to visualize
const PLANETS_SIZE_FACTOR = 20;

export const getScaledStarRadius = (starRadius) => starRadius / SCALE_FACTOR;

export const getScaledPlanetRadius = (planetRadius) => planetRadius * (PLANETS_SIZE_FACTOR / SCALE_FACTOR);

export const getScaledDistance = (distance) => distance / (SCALE_FACTOR * DISTANCE_FACTOR);

export const createSunOrPlanetMesh = (name, radius, textureFileName, isPlanet = true) => {
    const scaledRadius = isPlanet ? getScaledPlanetRadius(radius) : getScaledStarRadius(radius);
    const geometry = new THREE.SphereGeometry(scaledRadius);
    const texture = new THREE.TextureLoader().load(textureFileName);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.name = name;

    return mesh;
}

export const createIntersectionSphere = (name, radius, radiusFactor = 2, isPlanet = true) => {
    const scaledRadius = isPlanet ? getScaledPlanetRadius(radius) : getScaledStarRadius(radius);
    const geometry = new THREE.SphereGeometry(scaledRadius * radiusFactor);
    const material = new THREE.MeshBasicMaterial({
        color: '#ffffff',
        opacity: 0,
        transparent: true,
        depthWrite: false,
        depthTest: false,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.name = name;

    return mesh;
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