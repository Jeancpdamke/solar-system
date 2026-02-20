export interface OrbitAxis {
    semiMinor: number
    semiMajor: number
}

export interface Orbit {
    focalDistance: number
    axis: OrbitAxis
    orbitColor: string
}

export interface Planet {
    name: string
    radius: number
    maxDistanceFromSun: number
    textureFileName: string
    /**
     * Variable used to create the intersection sphere. For small planets, we need a bigger intersection sphere
     * Default value is 2
     */
    intersectionSphereScale?: number
}