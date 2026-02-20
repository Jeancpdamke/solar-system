import { DISTANCE_FACTOR, PLANETS_SIZE_FACTOR, SCALE_FACTOR } from '@/constants/constants';
import type { OrbitAxis } from '@/interfaces';
import * as THREE from 'three';



export const getScaledStarRadius = (starRadius: number): number => starRadius / SCALE_FACTOR;

export const getScaledPlanetRadius = (planetRadius: number): number => planetRadius * (PLANETS_SIZE_FACTOR / SCALE_FACTOR);

export const getScaledDistance = (distance: number): number => distance / (SCALE_FACTOR * DISTANCE_FACTOR);

export const createSunOrPlanetMesh = (name: string, radius: number, textureFileName: string, isPlanet = true): THREE.Mesh => {
    const scaledRadius = isPlanet ? getScaledPlanetRadius(radius) : getScaledStarRadius(radius);
    const geometry = new THREE.SphereGeometry(scaledRadius);
    const texture = new THREE.TextureLoader().load(textureFileName);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.name = name;

    return mesh;
}

export const createIntersectionSphere = (name: string, radius: number, radiusFactor = 2, isPlanet = true): THREE.Mesh => {
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

export const createPlanetOrbit = (focalDistance: number, radius: OrbitAxis, color: string, tilt = 0): THREE.Line => {
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