/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar _three = __webpack_require__(/*! three */ \"./node_modules/three/build/three.cjs\");\n\nvar THREE = _interopRequireWildcard(_three);\n\nvar _OrbitControls = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n\nvar _orbits = __webpack_require__(/*! ./orbits */ \"./src/orbits.js\");\n\nvar _planets = __webpack_require__(/*! ./planets */ \"./src/planets.js\");\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nvar scene = void 0,\n    camera = void 0,\n    renderer = void 0,\n    controls = void 0;\nvar sun = void 0,\n    sunIntersectionSphere = void 0;\nvar currentlyIntersectedObject = void 0;\nvar renderedPlanets = [];\n// Raycaster works poorly for small spheres, so we create an invisible sphere with a bigger radius to compensate that\nvar intersectionSpheres = [];\nvar raycaster = void 0;\nvar mousePosition;\n\nvar init = function init() {\n  scene = new THREE.Scene();\n  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n  camera.position.x = -80;\n  camera.position.y = 20;\n\n  renderer = new THREE.WebGLRenderer({ antialias: true });\n  renderer.setSize(window.innerWidth, window.innerHeight);\n  document.getElementById('app').appendChild(renderer.domElement);\n\n  // Controls\n  controls = new _OrbitControls.MapControls(camera, renderer.domElement);\n  controls.enableDamping = true;\n  controls.rotateSpeed = 0.3;\n  controls.target.set(0, 0, 0);\n\n  // initialize object to perform world/screen calculations\n  raycaster = new THREE.Raycaster();\n  mousePosition = new THREE.Vector2();\n\n  // SUN\n  // Radius: 696.340 km\n  var SUN_RADIUS = 696340;\n  sun = (0, _utils.createSunOrPlanetMesh)('Sun', SUN_RADIUS, 'assets/textures/8k_sun.jpeg', false);\n  scene.add(sun);\n\n  sunIntersectionSphere = (0, _utils.createIntersectionSphere)('Sun', SUN_RADIUS, 1.5, false);\n  scene.add(sunIntersectionSphere);\n\n  _planets.planets.forEach(function (_ref, index) {\n    var name = _ref.name,\n        radius = _ref.radius,\n        maxDistanceFromSun = _ref.maxDistanceFromSun,\n        intersectionSphereScale = _ref.intersectionSphereScale,\n        textureFileName = _ref.textureFileName;\n\n    // Add planet\n    renderedPlanets[index] = (0, _utils.createSunOrPlanetMesh)(name, radius, textureFileName);\n    renderedPlanets[index].position.z = (0, _utils.getScaledDistance)(maxDistanceFromSun);\n    scene.add(renderedPlanets[index]);\n\n    // render intersection sphere ()\n    intersectionSpheres[index] = (0, _utils.createIntersectionSphere)(name, radius, intersectionSphereScale);\n    intersectionSpheres[index].position.z = (0, _utils.getScaledDistance)(maxDistanceFromSun);\n    scene.add(intersectionSpheres[index]);\n\n    // Add planet orbit\n    var _orbits$index = _orbits.orbits[index],\n        focalDistance = _orbits$index.focalDistance,\n        axis = _orbits$index.axis,\n        orbitColor = _orbits$index.orbitColor;\n\n    var planetOrbit = (0, _utils.createPlanetOrbit)(focalDistance, axis, orbitColor);\n    scene.add(planetOrbit);\n  });\n};\n\nvar animate = function animate() {\n  update();\n  sun.rotation.y -= 0.001;\n  render();\n  requestAnimationFrame(animate);\n};\n\nvar update = function update() {\n  verifyMouseIntersections();\n};\n\nvar render = function render() {\n  renderer.render(scene, camera);\n};\n\nvar verifyMouseIntersections = function verifyMouseIntersections() {\n  var sunAndPlanets = [sunIntersectionSphere].concat(intersectionSpheres);\n\n  raycaster.setFromCamera(mousePosition, camera);\n\n  var intersectedObjects = raycaster.intersectObjects(sunAndPlanets, false);\n\n  if (intersectedObjects.length > 0) {\n    currentlyIntersectedObject = intersectedObjects[0].object;\n  } else {\n    currentlyIntersectedObject = null;\n  }\n\n  sunIntersectionSphere.material.opacity = currentlyIntersectedObject && currentlyIntersectedObject.name === sunIntersectionSphere.name ? 0.2 : 0;\n\n  intersectionSpheres.forEach(function (object, index) {\n    if (currentlyIntersectedObject && object.name === currentlyIntersectedObject.name) {\n      intersectionSpheres[index].material.opacity = 0.2;\n    } else {\n      intersectionSpheres[index].material.opacity = 0;\n    }\n  });\n};\n\nvar onMouseMove = function onMouseMove(event) {\n  mousePosition.x = event.clientX / window.innerWidth * 2 - 1;\n  mousePosition.y = -(event.clientY / window.innerHeight) * 2 + 1;\n};\n\nvar onWindowResize = function onWindowResize() {\n  var aspectRatio = window.innerWidth / window.innerHeight;\n  camera.aspect = aspectRatio;\n  camera.updateProjectionMatrix();\n  controls.update();\n  renderer.setSize(window.innerWidth, window.innerHeight);\n};\n\n// Event Listeners\nwindow.addEventListener('mousemove', onMouseMove, false);\nwindow.addEventListener('resize', onWindowResize);\n\ninit();\nanimate();\n\n//# sourceURL=webpack://solar-system/./src/index.js?");

/***/ }),

/***/ "./src/orbits.js":
/*!***********************!*\
  !*** ./src/orbits.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n// Focal distance calculation:\n// Given that Semi-major axis = SMajA\n// AND Semi-minor axis = SMinA\n// Focal Distance =  Square root of (SMajA^2 + SMinA^2)\n\n\n// Minor axis calculation\n// Give eccentricity = ecc\n// AND Semi-major axis = SMaxA\n// Semi-minor axis = SMaxA * sqrt(1 - ecc^2)\n\n\nvar orbits = exports.orbits = [\n// MERCURY\n// Orbit Duration: 87.97 days\n// Semi-major axis: 57 909 050 km (0.387098 AU)\n// Semi-minor axis: 56 671 523 km (0.378826 AU)\n// Focal distance: 11 907 835,77 km\n// Orbital Eccentricity: 0.205630\n{\n    focalDistance: 11907835.77,\n    axis: {\n        semiMajor: 57909050,\n        semiMinor: 56671523\n    },\n    orbitColor: '#ffffff'\n},\n// VENUS\n// Orbit Duration: 225 days\n// Semi-major axis: 108 208 926 km (0.72333199 AU)\n// Semi-minor axis: 108 206 443 km (0.72331539 AU)\n// Focal distance: 733 047.99 km\n// Orbital eccentricity: 0.00677323\n{\n    focalDistance: 733047.99,\n    axis: {\n        semiMajor: 108208926,\n        semiMinor: 108206443\n    },\n    orbitColor: '#f77e4a'\n},\n// EARTH\n// Orbit Duration: 365 days\n// Semi-major axis: 149 597 887.5 km (1.000 000 112 4 AU)\n// Semi-minor axis: 149 576 999.826 km (0.999 860 486 9 AU)\n// Focal distance: 2499813.496 km\n// Orbital eccentricity\t0.016710219\n{\n    focalDistance: 2499813.496,\n    axis: {\n        semiMajor: 149597887.5,\n        semiMinor: 149576999.826\n    },\n    orbitColor: '#809fff'\n}];\n\n//# sourceURL=webpack://solar-system/./src/orbits.js?");

/***/ }),

/***/ "./src/planets.js":
/*!************************!*\
  !*** ./src/planets.js ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n// Intersection Sphere Scale:\n// Variable used to create the intersection sphere. For small planets, we need a bigger intersection sphere\n// Default value is 2\n\nvar planets = exports.planets = [\n// MERCURY\n// Radius: 2.439,7 km\n// Distance from the sun (Average): 58.000.000 km\n// Aphelion: 69.816.900 km (0.466697 AU)\n// Perihelion: 46,001,200 km (0.307499 AU)\n{\n    name: 'Mercury',\n    radius: 2439.7,\n    intersectionSphereScale: 4,\n    maxDistanceFromSun: 69816900,\n    textureFileName: 'assets/textures/mercury.jpeg'\n},\n// VENUS\n// Radius: 6.051,8  km\n// Distance from the sun (Average): 108.200.000 km\n// Aphelion: 108.939.000 km (0.728213 AU)\n// Perihelion: 107.477.000 km (0.718440 AU)\n{\n    name: 'Venus',\n    radius: 6051.8,\n    maxDistanceFromSun: 108200000,\n    textureFileName: 'assets/textures/venus.jpeg'\n},\n// EARTH\n// Radius: 6.371 km\n// Distance from the sun (Average): 151.020.000 km\n// Aphelion: 152.100.000 km\n// Perihelion: 147.095.000 km\n// Axial tilt: 23.4 degrees\n{\n    name: 'Earth',\n    radius: 6371,\n    maxDistanceFromSun: 152100000,\n    textureFileName: 'assets/textures/earth.jpeg'\n}];\n\n//# sourceURL=webpack://solar-system/./src/planets.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.createPlanetOrbit = exports.createIntersectionSphere = exports.createSunOrPlanetMesh = exports.getScaledDistance = exports.getScaledPlanetRadius = exports.getScaledStarRadius = undefined;\n\nvar _three = __webpack_require__(/*! three */ \"./node_modules/three/build/three.cjs\");\n\nvar THREE = _interopRequireWildcard(_three);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\n// Constant used to keep proportions, while rendering smaller objects\nvar SCALE_FACTOR = 100000;\n\n// Constant used to diminish distances, so that the planets are easier to visualize\n// (Using this with a value different than 1 will make the proportions become not-realistic)\nvar DISTANCE_FACTOR = 30;\n\n// Constant to increase the size of the planets, so that they are easier to visualize\nvar PLANETS_SIZE_FACTOR = 20;\n\nvar getScaledStarRadius = exports.getScaledStarRadius = function getScaledStarRadius(starRadius) {\n    return starRadius / SCALE_FACTOR;\n};\n\nvar getScaledPlanetRadius = exports.getScaledPlanetRadius = function getScaledPlanetRadius(planetRadius) {\n    return planetRadius * (PLANETS_SIZE_FACTOR / SCALE_FACTOR);\n};\n\nvar getScaledDistance = exports.getScaledDistance = function getScaledDistance(distance) {\n    return distance / (SCALE_FACTOR * DISTANCE_FACTOR);\n};\n\nvar createSunOrPlanetMesh = exports.createSunOrPlanetMesh = function createSunOrPlanetMesh(name, radius, textureFileName) {\n    var isPlanet = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;\n\n    var scaledRadius = isPlanet ? getScaledPlanetRadius(radius) : getScaledStarRadius(radius);\n    var geometry = new THREE.SphereGeometry(scaledRadius);\n    var texture = new THREE.TextureLoader().load(textureFileName);\n    var material = new THREE.MeshBasicMaterial({ map: texture });\n    var mesh = new THREE.Mesh(geometry, material);\n    mesh.name = name;\n\n    return mesh;\n};\n\nvar createIntersectionSphere = exports.createIntersectionSphere = function createIntersectionSphere(name, radius) {\n    var radiusFactor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;\n    var isPlanet = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;\n\n    var scaledRadius = isPlanet ? getScaledPlanetRadius(radius) : getScaledStarRadius(radius);\n    var geometry = new THREE.SphereGeometry(scaledRadius * radiusFactor);\n    var material = new THREE.MeshBasicMaterial({\n        color: '#ffffff',\n        opacity: 0,\n        transparent: true,\n        depthWrite: false,\n        depthTest: false\n    });\n    var mesh = new THREE.Mesh(geometry, material);\n    mesh.name = name;\n\n    return mesh;\n};\n\nvar createPlanetOrbit = exports.createPlanetOrbit = function createPlanetOrbit(focalDistance, radius, color) {\n    var tilt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n\n    var scaledFocalDistance = getScaledDistance(focalDistance);\n    var radiusX = getScaledDistance(radius.semiMinor);\n    var radiusY = getScaledDistance(radius.semiMajor);\n\n    var orbit = new THREE.EllipseCurve(0, scaledFocalDistance, // ax, aY\n    radiusX, radiusY, // xRadius, yRadius\n    0, 2 * Math.PI, // aStartAngle, aEndAngle\n    false, // aClockwise\n    0 // aRotation\n    );\n    var orbitPoints = orbit.getPoints(radiusY * 100);\n    var orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints);\n    var orbitMaterial = new THREE.LineBasicMaterial({ color: color, opacity: 0.4, transparent: true });\n\n    var ellipse = new THREE.Line(orbitGeometry, orbitMaterial);\n    ellipse.rotateX(Math.PI / 2 + tilt);\n    return ellipse;\n};\n\n//# sourceURL=webpack://solar-system/./src/utils.js?");

/***/ }),

/***/ "./node_modules/three/build/three.cjs":
/*!********************************************!*\
  !*** ./node_modules/three/build/three.cjs ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


/***/ }),

/***/ "./node_modules/three/examples/jsm/controls/OrbitControls.js":
/*!*******************************************************************!*\
  !*** ./node_modules/three/examples/jsm/controls/OrbitControls.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MapControls\": () => (/* binding */ MapControls),\n/* harmony export */   \"OrbitControls\": () => (/* binding */ OrbitControls)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\n// This set of controls performs orbiting, dollying (zooming), and panning.\n// Unlike TrackballControls, it maintains the \"up\" direction object.up (+Y by default).\n//\n//    Orbit - left mouse / touch: one-finger move\n//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish\n//    Pan - right mouse, or left mouse + ctrl/meta/shiftKey, or arrow keys / touch: two-finger move\n\nconst _changeEvent = { type: 'change' };\nconst _startEvent = { type: 'start' };\nconst _endEvent = { type: 'end' };\n\nclass OrbitControls extends three__WEBPACK_IMPORTED_MODULE_0__.EventDispatcher {\n\n\tconstructor( object, domElement ) {\n\n\t\tsuper();\n\n\t\tif ( domElement === undefined ) console.warn( 'THREE.OrbitControls: The second parameter \"domElement\" is now mandatory.' );\n\t\tif ( domElement === document ) console.error( 'THREE.OrbitControls: \"document\" should not be used as the target \"domElement\". Please use \"renderer.domElement\" instead.' );\n\n\t\tthis.object = object;\n\t\tthis.domElement = domElement;\n\t\tthis.domElement.style.touchAction = 'none'; // disable touch scroll\n\n\t\t// Set to false to disable this control\n\t\tthis.enabled = true;\n\n\t\t// \"target\" sets the location of focus, where the object orbits around\n\t\tthis.target = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();\n\n\t\t// How far you can dolly in and out ( PerspectiveCamera only )\n\t\tthis.minDistance = 0;\n\t\tthis.maxDistance = Infinity;\n\n\t\t// How far you can zoom in and out ( OrthographicCamera only )\n\t\tthis.minZoom = 0;\n\t\tthis.maxZoom = Infinity;\n\n\t\t// How far you can orbit vertically, upper and lower limits.\n\t\t// Range is 0 to Math.PI radians.\n\t\tthis.minPolarAngle = 0; // radians\n\t\tthis.maxPolarAngle = Math.PI; // radians\n\n\t\t// How far you can orbit horizontally, upper and lower limits.\n\t\t// If set, the interval [ min, max ] must be a sub-interval of [ - 2 PI, 2 PI ], with ( max - min < 2 PI )\n\t\tthis.minAzimuthAngle = - Infinity; // radians\n\t\tthis.maxAzimuthAngle = Infinity; // radians\n\n\t\t// Set to true to enable damping (inertia)\n\t\t// If damping is enabled, you must call controls.update() in your animation loop\n\t\tthis.enableDamping = false;\n\t\tthis.dampingFactor = 0.05;\n\n\t\t// This option actually enables dollying in and out; left as \"zoom\" for backwards compatibility.\n\t\t// Set to false to disable zooming\n\t\tthis.enableZoom = true;\n\t\tthis.zoomSpeed = 1.0;\n\n\t\t// Set to false to disable rotating\n\t\tthis.enableRotate = true;\n\t\tthis.rotateSpeed = 1.0;\n\n\t\t// Set to false to disable panning\n\t\tthis.enablePan = true;\n\t\tthis.panSpeed = 1.0;\n\t\tthis.screenSpacePanning = true; // if false, pan orthogonal to world-space direction camera.up\n\t\tthis.keyPanSpeed = 7.0;\t// pixels moved per arrow key push\n\n\t\t// Set to true to automatically rotate around the target\n\t\t// If auto-rotate is enabled, you must call controls.update() in your animation loop\n\t\tthis.autoRotate = false;\n\t\tthis.autoRotateSpeed = 2.0; // 30 seconds per orbit when fps is 60\n\n\t\t// The four arrow keys\n\t\tthis.keys = { LEFT: 'ArrowLeft', UP: 'ArrowUp', RIGHT: 'ArrowRight', BOTTOM: 'ArrowDown' };\n\n\t\t// Mouse buttons\n\t\tthis.mouseButtons = { LEFT: three__WEBPACK_IMPORTED_MODULE_0__.MOUSE.ROTATE, MIDDLE: three__WEBPACK_IMPORTED_MODULE_0__.MOUSE.DOLLY, RIGHT: three__WEBPACK_IMPORTED_MODULE_0__.MOUSE.PAN };\n\n\t\t// Touch fingers\n\t\tthis.touches = { ONE: three__WEBPACK_IMPORTED_MODULE_0__.TOUCH.ROTATE, TWO: three__WEBPACK_IMPORTED_MODULE_0__.TOUCH.DOLLY_PAN };\n\n\t\t// for reset\n\t\tthis.target0 = this.target.clone();\n\t\tthis.position0 = this.object.position.clone();\n\t\tthis.zoom0 = this.object.zoom;\n\n\t\t// the target DOM element for key events\n\t\tthis._domElementKeyEvents = null;\n\n\t\t//\n\t\t// public methods\n\t\t//\n\n\t\tthis.getPolarAngle = function () {\n\n\t\t\treturn spherical.phi;\n\n\t\t};\n\n\t\tthis.getAzimuthalAngle = function () {\n\n\t\t\treturn spherical.theta;\n\n\t\t};\n\n\t\tthis.getDistance = function () {\n\n\t\t\treturn this.object.position.distanceTo( this.target );\n\n\t\t};\n\n\t\tthis.listenToKeyEvents = function ( domElement ) {\n\n\t\t\tdomElement.addEventListener( 'keydown', onKeyDown );\n\t\t\tthis._domElementKeyEvents = domElement;\n\n\t\t};\n\n\t\tthis.saveState = function () {\n\n\t\t\tscope.target0.copy( scope.target );\n\t\t\tscope.position0.copy( scope.object.position );\n\t\t\tscope.zoom0 = scope.object.zoom;\n\n\t\t};\n\n\t\tthis.reset = function () {\n\n\t\t\tscope.target.copy( scope.target0 );\n\t\t\tscope.object.position.copy( scope.position0 );\n\t\t\tscope.object.zoom = scope.zoom0;\n\n\t\t\tscope.object.updateProjectionMatrix();\n\t\t\tscope.dispatchEvent( _changeEvent );\n\n\t\t\tscope.update();\n\n\t\t\tstate = STATE.NONE;\n\n\t\t};\n\n\t\t// this method is exposed, but perhaps it would be better if we can make it private...\n\t\tthis.update = function () {\n\n\t\t\tconst offset = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();\n\n\t\t\t// so camera.up is the orbit axis\n\t\t\tconst quat = new three__WEBPACK_IMPORTED_MODULE_0__.Quaternion().setFromUnitVectors( object.up, new three__WEBPACK_IMPORTED_MODULE_0__.Vector3( 0, 1, 0 ) );\n\t\t\tconst quatInverse = quat.clone().invert();\n\n\t\t\tconst lastPosition = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();\n\t\t\tconst lastQuaternion = new three__WEBPACK_IMPORTED_MODULE_0__.Quaternion();\n\n\t\t\tconst twoPI = 2 * Math.PI;\n\n\t\t\treturn function update() {\n\n\t\t\t\tconst position = scope.object.position;\n\n\t\t\t\toffset.copy( position ).sub( scope.target );\n\n\t\t\t\t// rotate offset to \"y-axis-is-up\" space\n\t\t\t\toffset.applyQuaternion( quat );\n\n\t\t\t\t// angle from z-axis around y-axis\n\t\t\t\tspherical.setFromVector3( offset );\n\n\t\t\t\tif ( scope.autoRotate && state === STATE.NONE ) {\n\n\t\t\t\t\trotateLeft( getAutoRotationAngle() );\n\n\t\t\t\t}\n\n\t\t\t\tif ( scope.enableDamping ) {\n\n\t\t\t\t\tspherical.theta += sphericalDelta.theta * scope.dampingFactor;\n\t\t\t\t\tspherical.phi += sphericalDelta.phi * scope.dampingFactor;\n\n\t\t\t\t} else {\n\n\t\t\t\t\tspherical.theta += sphericalDelta.theta;\n\t\t\t\t\tspherical.phi += sphericalDelta.phi;\n\n\t\t\t\t}\n\n\t\t\t\t// restrict theta to be between desired limits\n\n\t\t\t\tlet min = scope.minAzimuthAngle;\n\t\t\t\tlet max = scope.maxAzimuthAngle;\n\n\t\t\t\tif ( isFinite( min ) && isFinite( max ) ) {\n\n\t\t\t\t\tif ( min < - Math.PI ) min += twoPI; else if ( min > Math.PI ) min -= twoPI;\n\n\t\t\t\t\tif ( max < - Math.PI ) max += twoPI; else if ( max > Math.PI ) max -= twoPI;\n\n\t\t\t\t\tif ( min <= max ) {\n\n\t\t\t\t\t\tspherical.theta = Math.max( min, Math.min( max, spherical.theta ) );\n\n\t\t\t\t\t} else {\n\n\t\t\t\t\t\tspherical.theta = ( spherical.theta > ( min + max ) / 2 ) ?\n\t\t\t\t\t\t\tMath.max( min, spherical.theta ) :\n\t\t\t\t\t\t\tMath.min( max, spherical.theta );\n\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t\t// restrict phi to be between desired limits\n\t\t\t\tspherical.phi = Math.max( scope.minPolarAngle, Math.min( scope.maxPolarAngle, spherical.phi ) );\n\n\t\t\t\tspherical.makeSafe();\n\n\n\t\t\t\tspherical.radius *= scale;\n\n\t\t\t\t// restrict radius to be between desired limits\n\t\t\t\tspherical.radius = Math.max( scope.minDistance, Math.min( scope.maxDistance, spherical.radius ) );\n\n\t\t\t\t// move target to panned location\n\n\t\t\t\tif ( scope.enableDamping === true ) {\n\n\t\t\t\t\tscope.target.addScaledVector( panOffset, scope.dampingFactor );\n\n\t\t\t\t} else {\n\n\t\t\t\t\tscope.target.add( panOffset );\n\n\t\t\t\t}\n\n\t\t\t\toffset.setFromSpherical( spherical );\n\n\t\t\t\t// rotate offset back to \"camera-up-vector-is-up\" space\n\t\t\t\toffset.applyQuaternion( quatInverse );\n\n\t\t\t\tposition.copy( scope.target ).add( offset );\n\n\t\t\t\tscope.object.lookAt( scope.target );\n\n\t\t\t\tif ( scope.enableDamping === true ) {\n\n\t\t\t\t\tsphericalDelta.theta *= ( 1 - scope.dampingFactor );\n\t\t\t\t\tsphericalDelta.phi *= ( 1 - scope.dampingFactor );\n\n\t\t\t\t\tpanOffset.multiplyScalar( 1 - scope.dampingFactor );\n\n\t\t\t\t} else {\n\n\t\t\t\t\tsphericalDelta.set( 0, 0, 0 );\n\n\t\t\t\t\tpanOffset.set( 0, 0, 0 );\n\n\t\t\t\t}\n\n\t\t\t\tscale = 1;\n\n\t\t\t\t// update condition is:\n\t\t\t\t// min(camera displacement, camera rotation in radians)^2 > EPS\n\t\t\t\t// using small-angle approximation cos(x/2) = 1 - x^2 / 8\n\n\t\t\t\tif ( zoomChanged ||\n\t\t\t\t\tlastPosition.distanceToSquared( scope.object.position ) > EPS ||\n\t\t\t\t\t8 * ( 1 - lastQuaternion.dot( scope.object.quaternion ) ) > EPS ) {\n\n\t\t\t\t\tscope.dispatchEvent( _changeEvent );\n\n\t\t\t\t\tlastPosition.copy( scope.object.position );\n\t\t\t\t\tlastQuaternion.copy( scope.object.quaternion );\n\t\t\t\t\tzoomChanged = false;\n\n\t\t\t\t\treturn true;\n\n\t\t\t\t}\n\n\t\t\t\treturn false;\n\n\t\t\t};\n\n\t\t}();\n\n\t\tthis.dispose = function () {\n\n\t\t\tscope.domElement.removeEventListener( 'contextmenu', onContextMenu );\n\n\t\t\tscope.domElement.removeEventListener( 'pointerdown', onPointerDown );\n\t\t\tscope.domElement.removeEventListener( 'pointercancel', onPointerCancel );\n\t\t\tscope.domElement.removeEventListener( 'wheel', onMouseWheel );\n\n\t\t\tscope.domElement.removeEventListener( 'pointermove', onPointerMove );\n\t\t\tscope.domElement.removeEventListener( 'pointerup', onPointerUp );\n\n\n\t\t\tif ( scope._domElementKeyEvents !== null ) {\n\n\t\t\t\tscope._domElementKeyEvents.removeEventListener( 'keydown', onKeyDown );\n\n\t\t\t}\n\n\t\t\t//scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?\n\n\t\t};\n\n\t\t//\n\t\t// internals\n\t\t//\n\n\t\tconst scope = this;\n\n\t\tconst STATE = {\n\t\t\tNONE: - 1,\n\t\t\tROTATE: 0,\n\t\t\tDOLLY: 1,\n\t\t\tPAN: 2,\n\t\t\tTOUCH_ROTATE: 3,\n\t\t\tTOUCH_PAN: 4,\n\t\t\tTOUCH_DOLLY_PAN: 5,\n\t\t\tTOUCH_DOLLY_ROTATE: 6\n\t\t};\n\n\t\tlet state = STATE.NONE;\n\n\t\tconst EPS = 0.000001;\n\n\t\t// current position in spherical coordinates\n\t\tconst spherical = new three__WEBPACK_IMPORTED_MODULE_0__.Spherical();\n\t\tconst sphericalDelta = new three__WEBPACK_IMPORTED_MODULE_0__.Spherical();\n\n\t\tlet scale = 1;\n\t\tconst panOffset = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();\n\t\tlet zoomChanged = false;\n\n\t\tconst rotateStart = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n\t\tconst rotateEnd = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n\t\tconst rotateDelta = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n\n\t\tconst panStart = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n\t\tconst panEnd = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n\t\tconst panDelta = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n\n\t\tconst dollyStart = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n\t\tconst dollyEnd = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n\t\tconst dollyDelta = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n\n\t\tconst pointers = [];\n\t\tconst pointerPositions = {};\n\n\t\tfunction getAutoRotationAngle() {\n\n\t\t\treturn 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;\n\n\t\t}\n\n\t\tfunction getZoomScale() {\n\n\t\t\treturn Math.pow( 0.95, scope.zoomSpeed );\n\n\t\t}\n\n\t\tfunction rotateLeft( angle ) {\n\n\t\t\tsphericalDelta.theta -= angle;\n\n\t\t}\n\n\t\tfunction rotateUp( angle ) {\n\n\t\t\tsphericalDelta.phi -= angle;\n\n\t\t}\n\n\t\tconst panLeft = function () {\n\n\t\t\tconst v = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();\n\n\t\t\treturn function panLeft( distance, objectMatrix ) {\n\n\t\t\t\tv.setFromMatrixColumn( objectMatrix, 0 ); // get X column of objectMatrix\n\t\t\t\tv.multiplyScalar( - distance );\n\n\t\t\t\tpanOffset.add( v );\n\n\t\t\t};\n\n\t\t}();\n\n\t\tconst panUp = function () {\n\n\t\t\tconst v = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();\n\n\t\t\treturn function panUp( distance, objectMatrix ) {\n\n\t\t\t\tif ( scope.screenSpacePanning === true ) {\n\n\t\t\t\t\tv.setFromMatrixColumn( objectMatrix, 1 );\n\n\t\t\t\t} else {\n\n\t\t\t\t\tv.setFromMatrixColumn( objectMatrix, 0 );\n\t\t\t\t\tv.crossVectors( scope.object.up, v );\n\n\t\t\t\t}\n\n\t\t\t\tv.multiplyScalar( distance );\n\n\t\t\t\tpanOffset.add( v );\n\n\t\t\t};\n\n\t\t}();\n\n\t\t// deltaX and deltaY are in pixels; right and down are positive\n\t\tconst pan = function () {\n\n\t\t\tconst offset = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();\n\n\t\t\treturn function pan( deltaX, deltaY ) {\n\n\t\t\t\tconst element = scope.domElement;\n\n\t\t\t\tif ( scope.object.isPerspectiveCamera ) {\n\n\t\t\t\t\t// perspective\n\t\t\t\t\tconst position = scope.object.position;\n\t\t\t\t\toffset.copy( position ).sub( scope.target );\n\t\t\t\t\tlet targetDistance = offset.length();\n\n\t\t\t\t\t// half of the fov is center to top of screen\n\t\t\t\t\ttargetDistance *= Math.tan( ( scope.object.fov / 2 ) * Math.PI / 180.0 );\n\n\t\t\t\t\t// we use only clientHeight here so aspect ratio does not distort speed\n\t\t\t\t\tpanLeft( 2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix );\n\t\t\t\t\tpanUp( 2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix );\n\n\t\t\t\t} else if ( scope.object.isOrthographicCamera ) {\n\n\t\t\t\t\t// orthographic\n\t\t\t\t\tpanLeft( deltaX * ( scope.object.right - scope.object.left ) / scope.object.zoom / element.clientWidth, scope.object.matrix );\n\t\t\t\t\tpanUp( deltaY * ( scope.object.top - scope.object.bottom ) / scope.object.zoom / element.clientHeight, scope.object.matrix );\n\n\t\t\t\t} else {\n\n\t\t\t\t\t// camera neither orthographic nor perspective\n\t\t\t\t\tconsole.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' );\n\t\t\t\t\tscope.enablePan = false;\n\n\t\t\t\t}\n\n\t\t\t};\n\n\t\t}();\n\n\t\tfunction dollyOut( dollyScale ) {\n\n\t\t\tif ( scope.object.isPerspectiveCamera ) {\n\n\t\t\t\tscale /= dollyScale;\n\n\t\t\t} else if ( scope.object.isOrthographicCamera ) {\n\n\t\t\t\tscope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom * dollyScale ) );\n\t\t\t\tscope.object.updateProjectionMatrix();\n\t\t\t\tzoomChanged = true;\n\n\t\t\t} else {\n\n\t\t\t\tconsole.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );\n\t\t\t\tscope.enableZoom = false;\n\n\t\t\t}\n\n\t\t}\n\n\t\tfunction dollyIn( dollyScale ) {\n\n\t\t\tif ( scope.object.isPerspectiveCamera ) {\n\n\t\t\t\tscale *= dollyScale;\n\n\t\t\t} else if ( scope.object.isOrthographicCamera ) {\n\n\t\t\t\tscope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom / dollyScale ) );\n\t\t\t\tscope.object.updateProjectionMatrix();\n\t\t\t\tzoomChanged = true;\n\n\t\t\t} else {\n\n\t\t\t\tconsole.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );\n\t\t\t\tscope.enableZoom = false;\n\n\t\t\t}\n\n\t\t}\n\n\t\t//\n\t\t// event callbacks - update the object state\n\t\t//\n\n\t\tfunction handleMouseDownRotate( event ) {\n\n\t\t\trotateStart.set( event.clientX, event.clientY );\n\n\t\t}\n\n\t\tfunction handleMouseDownDolly( event ) {\n\n\t\t\tdollyStart.set( event.clientX, event.clientY );\n\n\t\t}\n\n\t\tfunction handleMouseDownPan( event ) {\n\n\t\t\tpanStart.set( event.clientX, event.clientY );\n\n\t\t}\n\n\t\tfunction handleMouseMoveRotate( event ) {\n\n\t\t\trotateEnd.set( event.clientX, event.clientY );\n\n\t\t\trotateDelta.subVectors( rotateEnd, rotateStart ).multiplyScalar( scope.rotateSpeed );\n\n\t\t\tconst element = scope.domElement;\n\n\t\t\trotateLeft( 2 * Math.PI * rotateDelta.x / element.clientHeight ); // yes, height\n\n\t\t\trotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight );\n\n\t\t\trotateStart.copy( rotateEnd );\n\n\t\t\tscope.update();\n\n\t\t}\n\n\t\tfunction handleMouseMoveDolly( event ) {\n\n\t\t\tdollyEnd.set( event.clientX, event.clientY );\n\n\t\t\tdollyDelta.subVectors( dollyEnd, dollyStart );\n\n\t\t\tif ( dollyDelta.y > 0 ) {\n\n\t\t\t\tdollyOut( getZoomScale() );\n\n\t\t\t} else if ( dollyDelta.y < 0 ) {\n\n\t\t\t\tdollyIn( getZoomScale() );\n\n\t\t\t}\n\n\t\t\tdollyStart.copy( dollyEnd );\n\n\t\t\tscope.update();\n\n\t\t}\n\n\t\tfunction handleMouseMovePan( event ) {\n\n\t\t\tpanEnd.set( event.clientX, event.clientY );\n\n\t\t\tpanDelta.subVectors( panEnd, panStart ).multiplyScalar( scope.panSpeed );\n\n\t\t\tpan( panDelta.x, panDelta.y );\n\n\t\t\tpanStart.copy( panEnd );\n\n\t\t\tscope.update();\n\n\t\t}\n\n\t\tfunction handleMouseWheel( event ) {\n\n\t\t\tif ( event.deltaY < 0 ) {\n\n\t\t\t\tdollyIn( getZoomScale() );\n\n\t\t\t} else if ( event.deltaY > 0 ) {\n\n\t\t\t\tdollyOut( getZoomScale() );\n\n\t\t\t}\n\n\t\t\tscope.update();\n\n\t\t}\n\n\t\tfunction handleKeyDown( event ) {\n\n\t\t\tlet needsUpdate = false;\n\n\t\t\tswitch ( event.code ) {\n\n\t\t\t\tcase scope.keys.UP:\n\t\t\t\t\tpan( 0, scope.keyPanSpeed );\n\t\t\t\t\tneedsUpdate = true;\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase scope.keys.BOTTOM:\n\t\t\t\t\tpan( 0, - scope.keyPanSpeed );\n\t\t\t\t\tneedsUpdate = true;\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase scope.keys.LEFT:\n\t\t\t\t\tpan( scope.keyPanSpeed, 0 );\n\t\t\t\t\tneedsUpdate = true;\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase scope.keys.RIGHT:\n\t\t\t\t\tpan( - scope.keyPanSpeed, 0 );\n\t\t\t\t\tneedsUpdate = true;\n\t\t\t\t\tbreak;\n\n\t\t\t}\n\n\t\t\tif ( needsUpdate ) {\n\n\t\t\t\t// prevent the browser from scrolling on cursor keys\n\t\t\t\tevent.preventDefault();\n\n\t\t\t\tscope.update();\n\n\t\t\t}\n\n\n\t\t}\n\n\t\tfunction handleTouchStartRotate() {\n\n\t\t\tif ( pointers.length === 1 ) {\n\n\t\t\t\trotateStart.set( pointers[ 0 ].pageX, pointers[ 0 ].pageY );\n\n\t\t\t} else {\n\n\t\t\t\tconst x = 0.5 * ( pointers[ 0 ].pageX + pointers[ 1 ].pageX );\n\t\t\t\tconst y = 0.5 * ( pointers[ 0 ].pageY + pointers[ 1 ].pageY );\n\n\t\t\t\trotateStart.set( x, y );\n\n\t\t\t}\n\n\t\t}\n\n\t\tfunction handleTouchStartPan() {\n\n\t\t\tif ( pointers.length === 1 ) {\n\n\t\t\t\tpanStart.set( pointers[ 0 ].pageX, pointers[ 0 ].pageY );\n\n\t\t\t} else {\n\n\t\t\t\tconst x = 0.5 * ( pointers[ 0 ].pageX + pointers[ 1 ].pageX );\n\t\t\t\tconst y = 0.5 * ( pointers[ 0 ].pageY + pointers[ 1 ].pageY );\n\n\t\t\t\tpanStart.set( x, y );\n\n\t\t\t}\n\n\t\t}\n\n\t\tfunction handleTouchStartDolly() {\n\n\t\t\tconst dx = pointers[ 0 ].pageX - pointers[ 1 ].pageX;\n\t\t\tconst dy = pointers[ 0 ].pageY - pointers[ 1 ].pageY;\n\n\t\t\tconst distance = Math.sqrt( dx * dx + dy * dy );\n\n\t\t\tdollyStart.set( 0, distance );\n\n\t\t}\n\n\t\tfunction handleTouchStartDollyPan() {\n\n\t\t\tif ( scope.enableZoom ) handleTouchStartDolly();\n\n\t\t\tif ( scope.enablePan ) handleTouchStartPan();\n\n\t\t}\n\n\t\tfunction handleTouchStartDollyRotate() {\n\n\t\t\tif ( scope.enableZoom ) handleTouchStartDolly();\n\n\t\t\tif ( scope.enableRotate ) handleTouchStartRotate();\n\n\t\t}\n\n\t\tfunction handleTouchMoveRotate( event ) {\n\n\t\t\tif ( pointers.length == 1 ) {\n\n\t\t\t\trotateEnd.set( event.pageX, event.pageY );\n\n\t\t\t} else {\n\n\t\t\t\tconst position = getSecondPointerPosition( event );\n\n\t\t\t\tconst x = 0.5 * ( event.pageX + position.x );\n\t\t\t\tconst y = 0.5 * ( event.pageY + position.y );\n\n\t\t\t\trotateEnd.set( x, y );\n\n\t\t\t}\n\n\t\t\trotateDelta.subVectors( rotateEnd, rotateStart ).multiplyScalar( scope.rotateSpeed );\n\n\t\t\tconst element = scope.domElement;\n\n\t\t\trotateLeft( 2 * Math.PI * rotateDelta.x / element.clientHeight ); // yes, height\n\n\t\t\trotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight );\n\n\t\t\trotateStart.copy( rotateEnd );\n\n\t\t}\n\n\t\tfunction handleTouchMovePan( event ) {\n\n\t\t\tif ( pointers.length === 1 ) {\n\n\t\t\t\tpanEnd.set( event.pageX, event.pageY );\n\n\t\t\t} else {\n\n\t\t\t\tconst position = getSecondPointerPosition( event );\n\n\t\t\t\tconst x = 0.5 * ( event.pageX + position.x );\n\t\t\t\tconst y = 0.5 * ( event.pageY + position.y );\n\n\t\t\t\tpanEnd.set( x, y );\n\n\t\t\t}\n\n\t\t\tpanDelta.subVectors( panEnd, panStart ).multiplyScalar( scope.panSpeed );\n\n\t\t\tpan( panDelta.x, panDelta.y );\n\n\t\t\tpanStart.copy( panEnd );\n\n\t\t}\n\n\t\tfunction handleTouchMoveDolly( event ) {\n\n\t\t\tconst position = getSecondPointerPosition( event );\n\n\t\t\tconst dx = event.pageX - position.x;\n\t\t\tconst dy = event.pageY - position.y;\n\n\t\t\tconst distance = Math.sqrt( dx * dx + dy * dy );\n\n\t\t\tdollyEnd.set( 0, distance );\n\n\t\t\tdollyDelta.set( 0, Math.pow( dollyEnd.y / dollyStart.y, scope.zoomSpeed ) );\n\n\t\t\tdollyOut( dollyDelta.y );\n\n\t\t\tdollyStart.copy( dollyEnd );\n\n\t\t}\n\n\t\tfunction handleTouchMoveDollyPan( event ) {\n\n\t\t\tif ( scope.enableZoom ) handleTouchMoveDolly( event );\n\n\t\t\tif ( scope.enablePan ) handleTouchMovePan( event );\n\n\t\t}\n\n\t\tfunction handleTouchMoveDollyRotate( event ) {\n\n\t\t\tif ( scope.enableZoom ) handleTouchMoveDolly( event );\n\n\t\t\tif ( scope.enableRotate ) handleTouchMoveRotate( event );\n\n\t\t}\n\n\t\t//\n\t\t// event handlers - FSM: listen for events and reset state\n\t\t//\n\n\t\tfunction onPointerDown( event ) {\n\n\t\t\tif ( scope.enabled === false ) return;\n\n\t\t\tif ( pointers.length === 0 ) {\n\n\t\t\t\tscope.domElement.setPointerCapture( event.pointerId );\n\n\t\t\t\tscope.domElement.addEventListener( 'pointermove', onPointerMove );\n\t\t\t\tscope.domElement.addEventListener( 'pointerup', onPointerUp );\n\n\t\t\t}\n\n\t\t\t//\n\n\t\t\taddPointer( event );\n\n\t\t\tif ( event.pointerType === 'touch' ) {\n\n\t\t\t\tonTouchStart( event );\n\n\t\t\t} else {\n\n\t\t\t\tonMouseDown( event );\n\n\t\t\t}\n\n\t\t}\n\n\t\tfunction onPointerMove( event ) {\n\n\t\t\tif ( scope.enabled === false ) return;\n\n\t\t\tif ( event.pointerType === 'touch' ) {\n\n\t\t\t\tonTouchMove( event );\n\n\t\t\t} else {\n\n\t\t\t\tonMouseMove( event );\n\n\t\t\t}\n\n\t\t}\n\n\t\tfunction onPointerUp( event ) {\n\n\t\t    removePointer( event );\n\n\t\t    if ( pointers.length === 0 ) {\n\n\t\t        scope.domElement.releasePointerCapture( event.pointerId );\n\n\t\t        scope.domElement.removeEventListener( 'pointermove', onPointerMove );\n\t\t        scope.domElement.removeEventListener( 'pointerup', onPointerUp );\n\n\t\t    }\n\n\t\t    scope.dispatchEvent( _endEvent );\n\n\t\t    state = STATE.NONE;\n\n\t\t}\n\n\t\tfunction onPointerCancel( event ) {\n\n\t\t\tremovePointer( event );\n\n\t\t}\n\n\t\tfunction onMouseDown( event ) {\n\n\t\t\tlet mouseAction;\n\n\t\t\tswitch ( event.button ) {\n\n\t\t\t\tcase 0:\n\n\t\t\t\t\tmouseAction = scope.mouseButtons.LEFT;\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 1:\n\n\t\t\t\t\tmouseAction = scope.mouseButtons.MIDDLE;\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 2:\n\n\t\t\t\t\tmouseAction = scope.mouseButtons.RIGHT;\n\t\t\t\t\tbreak;\n\n\t\t\t\tdefault:\n\n\t\t\t\t\tmouseAction = - 1;\n\n\t\t\t}\n\n\t\t\tswitch ( mouseAction ) {\n\n\t\t\t\tcase three__WEBPACK_IMPORTED_MODULE_0__.MOUSE.DOLLY:\n\n\t\t\t\t\tif ( scope.enableZoom === false ) return;\n\n\t\t\t\t\thandleMouseDownDolly( event );\n\n\t\t\t\t\tstate = STATE.DOLLY;\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase three__WEBPACK_IMPORTED_MODULE_0__.MOUSE.ROTATE:\n\n\t\t\t\t\tif ( event.ctrlKey || event.metaKey || event.shiftKey ) {\n\n\t\t\t\t\t\tif ( scope.enablePan === false ) return;\n\n\t\t\t\t\t\thandleMouseDownPan( event );\n\n\t\t\t\t\t\tstate = STATE.PAN;\n\n\t\t\t\t\t} else {\n\n\t\t\t\t\t\tif ( scope.enableRotate === false ) return;\n\n\t\t\t\t\t\thandleMouseDownRotate( event );\n\n\t\t\t\t\t\tstate = STATE.ROTATE;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase three__WEBPACK_IMPORTED_MODULE_0__.MOUSE.PAN:\n\n\t\t\t\t\tif ( event.ctrlKey || event.metaKey || event.shiftKey ) {\n\n\t\t\t\t\t\tif ( scope.enableRotate === false ) return;\n\n\t\t\t\t\t\thandleMouseDownRotate( event );\n\n\t\t\t\t\t\tstate = STATE.ROTATE;\n\n\t\t\t\t\t} else {\n\n\t\t\t\t\t\tif ( scope.enablePan === false ) return;\n\n\t\t\t\t\t\thandleMouseDownPan( event );\n\n\t\t\t\t\t\tstate = STATE.PAN;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tdefault:\n\n\t\t\t\t\tstate = STATE.NONE;\n\n\t\t\t}\n\n\t\t\tif ( state !== STATE.NONE ) {\n\n\t\t\t\tscope.dispatchEvent( _startEvent );\n\n\t\t\t}\n\n\t\t}\n\n\t\tfunction onMouseMove( event ) {\n\n\t\t\tif ( scope.enabled === false ) return;\n\n\t\t\tswitch ( state ) {\n\n\t\t\t\tcase STATE.ROTATE:\n\n\t\t\t\t\tif ( scope.enableRotate === false ) return;\n\n\t\t\t\t\thandleMouseMoveRotate( event );\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase STATE.DOLLY:\n\n\t\t\t\t\tif ( scope.enableZoom === false ) return;\n\n\t\t\t\t\thandleMouseMoveDolly( event );\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase STATE.PAN:\n\n\t\t\t\t\tif ( scope.enablePan === false ) return;\n\n\t\t\t\t\thandleMouseMovePan( event );\n\n\t\t\t\t\tbreak;\n\n\t\t\t}\n\n\t\t}\n\n\t\tfunction onMouseWheel( event ) {\n\n\t\t\tif ( scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE ) return;\n\n\t\t\tevent.preventDefault();\n\n\t\t\tscope.dispatchEvent( _startEvent );\n\n\t\t\thandleMouseWheel( event );\n\n\t\t\tscope.dispatchEvent( _endEvent );\n\n\t\t}\n\n\t\tfunction onKeyDown( event ) {\n\n\t\t\tif ( scope.enabled === false || scope.enablePan === false ) return;\n\n\t\t\thandleKeyDown( event );\n\n\t\t}\n\n\t\tfunction onTouchStart( event ) {\n\n\t\t\ttrackPointer( event );\n\n\t\t\tswitch ( pointers.length ) {\n\n\t\t\t\tcase 1:\n\n\t\t\t\t\tswitch ( scope.touches.ONE ) {\n\n\t\t\t\t\t\tcase three__WEBPACK_IMPORTED_MODULE_0__.TOUCH.ROTATE:\n\n\t\t\t\t\t\t\tif ( scope.enableRotate === false ) return;\n\n\t\t\t\t\t\t\thandleTouchStartRotate();\n\n\t\t\t\t\t\t\tstate = STATE.TOUCH_ROTATE;\n\n\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\tcase three__WEBPACK_IMPORTED_MODULE_0__.TOUCH.PAN:\n\n\t\t\t\t\t\t\tif ( scope.enablePan === false ) return;\n\n\t\t\t\t\t\t\thandleTouchStartPan();\n\n\t\t\t\t\t\t\tstate = STATE.TOUCH_PAN;\n\n\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\tdefault:\n\n\t\t\t\t\t\t\tstate = STATE.NONE;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 2:\n\n\t\t\t\t\tswitch ( scope.touches.TWO ) {\n\n\t\t\t\t\t\tcase three__WEBPACK_IMPORTED_MODULE_0__.TOUCH.DOLLY_PAN:\n\n\t\t\t\t\t\t\tif ( scope.enableZoom === false && scope.enablePan === false ) return;\n\n\t\t\t\t\t\t\thandleTouchStartDollyPan();\n\n\t\t\t\t\t\t\tstate = STATE.TOUCH_DOLLY_PAN;\n\n\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\tcase three__WEBPACK_IMPORTED_MODULE_0__.TOUCH.DOLLY_ROTATE:\n\n\t\t\t\t\t\t\tif ( scope.enableZoom === false && scope.enableRotate === false ) return;\n\n\t\t\t\t\t\t\thandleTouchStartDollyRotate();\n\n\t\t\t\t\t\t\tstate = STATE.TOUCH_DOLLY_ROTATE;\n\n\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\tdefault:\n\n\t\t\t\t\t\t\tstate = STATE.NONE;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tdefault:\n\n\t\t\t\t\tstate = STATE.NONE;\n\n\t\t\t}\n\n\t\t\tif ( state !== STATE.NONE ) {\n\n\t\t\t\tscope.dispatchEvent( _startEvent );\n\n\t\t\t}\n\n\t\t}\n\n\t\tfunction onTouchMove( event ) {\n\n\t\t\ttrackPointer( event );\n\n\t\t\tswitch ( state ) {\n\n\t\t\t\tcase STATE.TOUCH_ROTATE:\n\n\t\t\t\t\tif ( scope.enableRotate === false ) return;\n\n\t\t\t\t\thandleTouchMoveRotate( event );\n\n\t\t\t\t\tscope.update();\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase STATE.TOUCH_PAN:\n\n\t\t\t\t\tif ( scope.enablePan === false ) return;\n\n\t\t\t\t\thandleTouchMovePan( event );\n\n\t\t\t\t\tscope.update();\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase STATE.TOUCH_DOLLY_PAN:\n\n\t\t\t\t\tif ( scope.enableZoom === false && scope.enablePan === false ) return;\n\n\t\t\t\t\thandleTouchMoveDollyPan( event );\n\n\t\t\t\t\tscope.update();\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase STATE.TOUCH_DOLLY_ROTATE:\n\n\t\t\t\t\tif ( scope.enableZoom === false && scope.enableRotate === false ) return;\n\n\t\t\t\t\thandleTouchMoveDollyRotate( event );\n\n\t\t\t\t\tscope.update();\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tdefault:\n\n\t\t\t\t\tstate = STATE.NONE;\n\n\t\t\t}\n\n\t\t}\n\n\t\tfunction onContextMenu( event ) {\n\n\t\t\tif ( scope.enabled === false ) return;\n\n\t\t\tevent.preventDefault();\n\n\t\t}\n\n\t\tfunction addPointer( event ) {\n\n\t\t\tpointers.push( event );\n\n\t\t}\n\n\t\tfunction removePointer( event ) {\n\n\t\t\tdelete pointerPositions[ event.pointerId ];\n\n\t\t\tfor ( let i = 0; i < pointers.length; i ++ ) {\n\n\t\t\t\tif ( pointers[ i ].pointerId == event.pointerId ) {\n\n\t\t\t\t\tpointers.splice( i, 1 );\n\t\t\t\t\treturn;\n\n\t\t\t\t}\n\n\t\t\t}\n\n\t\t}\n\n\t\tfunction trackPointer( event ) {\n\n\t\t\tlet position = pointerPositions[ event.pointerId ];\n\n\t\t\tif ( position === undefined ) {\n\n\t\t\t\tposition = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n\t\t\t\tpointerPositions[ event.pointerId ] = position;\n\n\t\t\t}\n\n\t\t\tposition.set( event.pageX, event.pageY );\n\n\t\t}\n\n\t\tfunction getSecondPointerPosition( event ) {\n\n\t\t\tconst pointer = ( event.pointerId === pointers[ 0 ].pointerId ) ? pointers[ 1 ] : pointers[ 0 ];\n\n\t\t\treturn pointerPositions[ pointer.pointerId ];\n\n\t\t}\n\n\t\t//\n\n\t\tscope.domElement.addEventListener( 'contextmenu', onContextMenu );\n\n\t\tscope.domElement.addEventListener( 'pointerdown', onPointerDown );\n\t\tscope.domElement.addEventListener( 'pointercancel', onPointerCancel );\n\t\tscope.domElement.addEventListener( 'wheel', onMouseWheel, { passive: false } );\n\n\t\t// force an update at start\n\n\t\tthis.update();\n\n\t}\n\n}\n\n\n// This set of controls performs orbiting, dollying (zooming), and panning.\n// Unlike TrackballControls, it maintains the \"up\" direction object.up (+Y by default).\n// This is very similar to OrbitControls, another set of touch behavior\n//\n//    Orbit - right mouse, or left mouse + ctrl/meta/shiftKey / touch: two-finger rotate\n//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish\n//    Pan - left mouse, or arrow keys / touch: one-finger move\n\nclass MapControls extends OrbitControls {\n\n\tconstructor( object, domElement ) {\n\n\t\tsuper( object, domElement );\n\n\t\tthis.screenSpacePanning = false; // pan orthogonal to world-space direction camera.up\n\n\t\tthis.mouseButtons.LEFT = three__WEBPACK_IMPORTED_MODULE_0__.MOUSE.PAN;\n\t\tthis.mouseButtons.RIGHT = three__WEBPACK_IMPORTED_MODULE_0__.MOUSE.ROTATE;\n\n\t\tthis.touches.ONE = three__WEBPACK_IMPORTED_MODULE_0__.TOUCH.PAN;\n\t\tthis.touches.TWO = three__WEBPACK_IMPORTED_MODULE_0__.TOUCH.DOLLY_ROTATE;\n\n\t}\n\n}\n\n\n\n\n//# sourceURL=webpack://solar-system/./node_modules/three/examples/jsm/controls/OrbitControls.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("21af41eb85fda81e7561")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "solar-system:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatesolar_system"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;