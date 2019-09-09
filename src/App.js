import React, { Component } from 'react'
import './App.css'
import * as THREE from 'three'

export default class App extends Component {
  componentDidMount() {
    const scene = new THREE.Scene()
    const aspectRatio = window.innerWidth / window.innerHeight
    const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    // document.body.appendChild(renderer.domElement)
    this.mount.appendChild(renderer.domElement)
    const geometry = new THREE.BoxGeometry(30, 30, 30)
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      wireframe: true
    })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)
    const clock = new THREE.Clock(true)
    camera.position.z = 600
    var animate = () => {
      const t = clock.getElapsedTime()
      requestAnimationFrame(animate)
      if (t < 20) {
        cube.position.x = 5 * t
        cube.position.y = 5 * t
        cube.rotation.y = (Math.PI * 18 * t) / 180
      }

      // cube.rotation.y = 18 * t
      renderer.render(scene, camera)
    }
    animate()
  }
  render() {
    return (
      <div
        ref={ref => {
          this.mount = ref
        }}
      ></div>
    )
  }
}
