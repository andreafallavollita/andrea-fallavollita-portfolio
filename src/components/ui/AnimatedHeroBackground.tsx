import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

const AuroraShader: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    const material = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      },
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float iTime;
        uniform vec2 iResolution;

        float rand(vec2 co) {
          return fract(sin(dot(co * 12.9898, vec2(78.233))) * 43758.5453);
        }

        float noise(vec2 p) {
          vec2 ip = floor(p);
          vec2 fp = fract(p);
          float f = fp.x * fp.y * (1.0 - fp.x) * (1.0 - fp.y);
          float a = rand(ip);
          float b = rand(ip + vec2(1.0, 0.0));
          float c = rand(ip + vec2(0.0, 1.0));
          float d = rand(ip + vec2(1.0, 1.0));
          return mix(a, b, fp.x) + f * (c - a) + (d - b);
        }

        void main() {
          vec2 uv = gl_FragCoord.xy / iResolution.xy;
          vec2 center = vec2(0.5, 0.5);
          
          float t = iTime * 0.2;
          vec2 p1 = (uv - center) * 2.0;
          vec2 p2 = (uv - center) * 2.0;
          
          float n1 = noise(p1 * 3.0 + t * 0.5);
          float n2 = noise(p2 * 2.5 - t * 0.3);
          
          vec3 aurora1 = 0.5 + 0.5 * cos(t + uv.xyx + vec3(0.0, 2.0, 4.0));
          vec3 aurora2 = 0.5 + 0.5 * cos(t + uv.yxz + vec3(2.0, 0.0, 3.0));
          
          vec3 color = mix(
            vec3(0.10, 0.25, 0.40),
            vec3(0.15, 0.10, 0.40),
            n1 * 0.5 + n2 * 0.5
          );
          
          vec3 glow = vec3(0.0, 0.8, 1.0) * 0.3 * (0.5 - length(uv - vec2(0.3, 0.7)));
          glow += vec3(0.5, 0.2, 1.0) * 0.3 * (0.5 - length(uv - vec2(0.7, 0.3)));
          
          color += glow;
          
          gl_FragColor = vec4(color * 0.7, 1.0);
        }
      `,
      transparent: true,
    })

    const geometry = new THREE.PlaneGeometry(2, 2)
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    let frameId = 0
    const animate = () => {
      material.uniforms.iTime.value += 0.01
      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      material.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', handleResize)
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  )
}

export default AuroraShader