
import type { Orbit } from "@/interfaces";

// Focal distance calculation:
// Given that Semi-major axis = SMajA
// AND Semi-minor axis = SMinA
// Focal Distance =  Square root of (SMajA^2 + SMinA^2)

// Minor axis calculation
// Give eccentricity = ecc
// AND Semi-major axis = SMaxA
// Semi-minor axis = SMaxA * sqrt(1 - ecc^2)

export const ORBITS: Orbit[] = [
    // MERCURY
    // Orbit Duration: 87.97 days
    // Semi-major axis: 57 909 050 km (0.387098 AU)
    // Semi-minor axis: 56 671 523 km (0.378826 AU)
    // Focal distance: 11 907 835,77 km
    // Orbital Eccentricity: 0.205630
    {
        focalDistance: 11907835.77,
        axis: {
            semiMajor: 57909050,
            semiMinor: 56671523,
        },
        orbitColor: '#ffffff',
    },
    // VENUS
    // Orbit Duration: 225 days
    // Semi-major axis: 108 208 926 km (0.72333199 AU)
    // Semi-minor axis: 108 206 443 km (0.72331539 AU)
    // Focal distance: 733 047.99 km
    // Orbital eccentricity: 0.00677323
    {
        focalDistance: 733047.99,
        axis: {
            semiMajor: 108208926,
            semiMinor: 108206443,
        },
        orbitColor: '#f77e4a',
    },
    // EARTH
    // Orbit Duration: 365 days
    // Semi-major axis: 149 597 887.5 km (1.000 000 112 4 AU)
    // Semi-minor axis: 149 576 999.826 km (0.999 860 486 9 AU)
    // Focal distance: 2499813.496 km
    // Orbital eccentricity	0.016710219
    {
        focalDistance: 2499813.496,
        axis: {
            semiMajor: 149597887.5,
            semiMinor: 149576999.826,
        },
        orbitColor: '#809fff',
    }
]