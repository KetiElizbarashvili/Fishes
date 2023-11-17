import { fishesBackground } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

const bg = fishesBackground({
    el: document.getElementById('app'),
    eventsEl: document.body,
    gpgpuSize: 48,
    background: 0x031F48,
    fogDensity: 0.025,
    texture: 'https://assets.codepen.io/33787/fishes.png',
    textureCount: 8,
    material: 'phong', 
    lights: [
        { type: 'ambient', params: [0xffffff, 0.8] },
        { type: 'directional', params: [0xffffff, 1], props: { position: [10, 0, 0] } }
    ],
    materialParams: {
        transparent: true,
        alphaTest: 0.7
    },
    fishScale: [1, 1, 1],
    fishWidthSegments: 8,
    fishSpeed: 1.0,
    noiseCoordScale: 0.01,
    noiseTimeCoef: 0.0005,
    noiseIntensity: 0.0005,
    attractionRadius1: 50,
    attractionRadius2: 150,
    maxVelocity: 0.1
});
 