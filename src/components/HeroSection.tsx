"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import * as THREE from "three";

const HeroSection = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  const STATS_DATA = [
    { label: "Rating Stars", value: "4.7+" },
    { label: "Satisfied Customers", value: "32K" },
    { label: "Projects Delivered", value: "1200+" },
  ];

  useEffect(() => {
    if (!canvasRef.current) return;

    const container = canvasRef.current;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.z = 3.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    const geo = new THREE.IcosahedronGeometry(1.1, 1);
    const wireMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.18 });
    const wireMesh = new THREE.Mesh(geo, wireMat);
    scene.add(wireMesh);

    const solidMat = new THREE.MeshPhongMaterial({ color: 0xffffff, emissive: 0xccccff, specular: 0xffffff, shininess: 90, transparent: true, opacity: 0.12 });
    const solidMesh = new THREE.Mesh(geo, solidMat);
    scene.add(solidMesh);

    const coreGeo = new THREE.SphereGeometry(0.55, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.2 });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    scene.add(coreMesh);

    const ringGeo = new THREE.TorusGeometry(1.55, 0.012, 8, 120);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.55 });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2.8;
    scene.add(ringMesh);

    const ring2Geo = new THREE.TorusGeometry(1.75, 0.007, 8, 120);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.3 });
    const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2Mesh.rotation.x = -Math.PI / 4;
    ring2Mesh.rotation.y = Math.PI / 5;
    scene.add(ring2Mesh);

    const particlesGeo = new THREE.BufferGeometry();
    const count = 180;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1.9 + Math.random() * 0.9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    particlesGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particlesMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.028, transparent: true, opacity: 0.85 });
    const particles = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particles);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const pointLight1 = new THREE.PointLight(0xffffff, 3, 10);
    pointLight1.position.set(3, 3, 3);
    scene.add(pointLight1);
    const pointLight2 = new THREE.PointLight(0x3b82f6, 2, 10);
    pointLight2.position.set(-3, -2, 2);
    scene.add(pointLight2);

    let mouseX = 0, mouseY = 0;
    const handleMouse = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouse);

    let frame = 0;
    let rafId: number;
    const animate = () => {
      frame++;
      const t = frame * 0.008;
      solidMesh.rotation.y = t * 0.4 + mouseX * 0.3;
      solidMesh.rotation.x = t * 0.15 + mouseY * 0.2;
      wireMesh.rotation.y = t * 0.4 + mouseX * 0.3;
      wireMesh.rotation.x = t * 0.15 + mouseY * 0.2;
      ringMesh.rotation.z = t * 0.3;
      ring2Mesh.rotation.z = -t * 0.2;
      particles.rotation.y = t * 0.06;
      particles.rotation.x = t * 0.03;
      const pulse = 0.9 + Math.sin(t * 2) * 0.12;
      coreMesh.scale.setScalar(pulse);
      (coreMat as THREE.MeshBasicMaterial).opacity = 0.12 + Math.sin(t * 2) * 0.08;
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-background py-20 lg:py-0">
      <video
        autoPlay loop muted playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40"
      >
        <source src="/videos/bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-background/20 to-background/80 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">

        <div className="flex-1 mt-16 text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-foreground font-black tracking-tight leading-[0.9] mb-6 uppercase"
            style={{ fontSize: "clamp(2.5rem, 10vw, 5rem)" }}>
            Build the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground to-foreground/40">
              Future.
            </span>
          </h1>

          <p className="text-muted-foreground font-medium mb-8 max-w-lg mx-auto lg:mx-0 text-base md:text-lg leading-relaxed border-l-0 lg:border-l-2 border-primary/30 lg:pl-6">
            We architect high-performance software and digital legacies for brands that refuse to settle for ordinary.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-12">
            <Link href="/consultant">
              <button className="w-full sm:w-auto px-10 py-4 bg-foreground text-background font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(var(--foreground),0.2)]">
                Start Project
              </button>
            </Link>

            <Link href="/portfolio" className="group flex items-center gap-2 text-foreground font-semibold">
              <span className="border-b-2 border-transparent group-hover:border-foreground transition-all duration-300">View Work</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>


          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-10">
            {STATS_DATA.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-lg md:text-2xl font-bold text-foreground whitespace-nowrap">
                  {stat.value}
                </span>

                <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-muted-foreground font-semibold leading-tight mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex-shrink-0 order-1 lg:order-2">
          <div className="absolute inset-0 bg-secondary/20 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
          <div
            ref={canvasRef}
            className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] relative z-10 mx-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;