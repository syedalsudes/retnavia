"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import * as THREE from "three";

const HeroSection = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  const STATS_DATA = [
    { label: "Rating Stars", value: "4.7+" },
    { label: "Client Satisfaction", value: "99.9%" },
    { label: "Projects Delivered", value: "50+" },
  ];

  useEffect(() => {
    if (!canvasRef.current) return;

    const container = canvasRef.current;
    const scene = new THREE.Scene();

    // Setup Camera
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.z = 7; 

    // Setup Renderer
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

    // --- MATERIALS ---
    const matWhite = new THREE.MeshStandardMaterial({ color: 0xf4f7fb, roughness: 0.2, metalness: 0.1 });
    const matBlack = new THREE.MeshStandardMaterial({ color: 0x050505, roughness: 0.1, metalness: 0.8 }); 
    const matCyanGlow = new THREE.MeshStandardMaterial({ color: 0x00ffff, emissive: 0x00ffff, emissiveIntensity: 2 }); 

    // --- 3D ROBOT SETUP ---
    const robotGroup = new THREE.Group();
    robotGroup.position.y = -0.2; 
    robotGroup.scale.set(1.05, 1.05, 1.05); 
    scene.add(robotGroup);

    // 1. HEAD GROUP
    const headGroup = new THREE.Group();
    headGroup.position.y = 1.3;
    robotGroup.add(headGroup);

    // Main Head
    const skull = new THREE.Mesh(new THREE.SphereGeometry(0.9, 64, 64), matWhite);
    skull.scale.set(1.15, 0.85, 0.95);
    headGroup.add(skull);

    // Black Glossy Face Screen
    const screen = new THREE.Mesh(new THREE.SphereGeometry(0.86, 64, 64), matBlack);
    screen.scale.set(1.02, 0.7, 0.65);
    screen.position.set(0, -0.02, 0.38);
    headGroup.add(screen);

    // Round Cyan Glowing Eyes
    const eyeGeo = new THREE.SphereGeometry(0.18, 32, 32);
    
    const leftEye = new THREE.Mesh(eyeGeo, matCyanGlow);
    leftEye.scale.set(1, 1, 0.2); 
    leftEye.position.set(-0.35, 0.05, 0.92);
    headGroup.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeo, matCyanGlow);
    rightEye.scale.set(1, 1, 0.2);
    rightEye.position.set(0.35, 0.05, 0.92);
    headGroup.add(rightEye);

    // Cyan Mouth Line
    const mouth = new THREE.Mesh(new THREE.CapsuleGeometry(0.012, 0.12, 8, 8), matCyanGlow);
    mouth.rotation.z = Math.PI / 2;
    mouth.position.set(0, -0.25, 0.94);
    headGroup.add(mouth);

    // Top Head Nubs
    const nubGeo = new THREE.BoxGeometry(0.15, 0.1, 0.2);
    const leftNub = new THREE.Mesh(nubGeo, matWhite);
    leftNub.position.set(-0.35, 0.78, 0.1);
    leftNub.rotation.z = 0.15;
    headGroup.add(leftNub);

    const rightNub = new THREE.Mesh(nubGeo, matWhite);
    rightNub.position.set(0.35, 0.78, 0.1);
    rightNub.rotation.z = -0.15;
    headGroup.add(rightNub);

    // Side Headphones & Detailed Ears
    const earGeo = new THREE.CylinderGeometry(0.28, 0.28, 0.15, 32);
    earGeo.rotateZ(Math.PI / 2);
    const earRingGeo = new THREE.TorusGeometry(0.15, 0.02, 16, 32);
    
    const leftEar = new THREE.Mesh(earGeo, matWhite);
    leftEar.position.set(-1.0, 0, 0);
    headGroup.add(leftEar);
    
    const leftEarRing = new THREE.Mesh(earRingGeo, matCyanGlow);
    leftEarRing.rotateZ(Math.PI / 2);
    leftEarRing.position.set(-1.08, 0, 0);
    headGroup.add(leftEarRing);

    const rightEar = new THREE.Mesh(earGeo, matWhite);
    rightEar.position.set(1.0, 0, 0);
    headGroup.add(rightEar);

    const rightEarRing = new THREE.Mesh(earRingGeo, matCyanGlow);
    rightEarRing.rotateZ(Math.PI / 2);
    rightEarRing.position.set(1.08, 0, 0);
    headGroup.add(rightEarRing);

    // Upward White Antennas with Glowing Tips
    const antGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.35, 16);
    const tipGeo = new THREE.SphereGeometry(0.06, 16, 16);

    const leftAnt = new THREE.Mesh(antGeo, matWhite);
    leftAnt.position.set(-1.05, 0.3, 0);
    headGroup.add(leftAnt);
    const leftTip = new THREE.Mesh(tipGeo, matCyanGlow);
    leftTip.position.set(-1.05, 0.5, 0);
    headGroup.add(leftTip);

    const rightAnt = new THREE.Mesh(antGeo, matWhite);
    rightAnt.position.set(1.05, 0.3, 0);
    headGroup.add(rightAnt);
    const rightTip = new THREE.Mesh(tipGeo, matCyanGlow);
    rightTip.position.set(1.05, 0.5, 0);
    headGroup.add(rightTip);


    // 2. BODY GROUP (With Enhanced Details)
    const bodyGroup = new THREE.Group();
    bodyGroup.position.y = 0.1;
    robotGroup.add(bodyGroup);

    // Main Torso 
    const torso = new THREE.Mesh(new THREE.SphereGeometry(0.85, 64, 64), matWhite);
    torso.scale.set(0.95, 1.15, 0.85); 
    bodyGroup.add(torso);

    // Glowing Neck Ring
    const neckRing = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.015, 16, 64), matCyanGlow);
    neckRing.rotation.x = Math.PI / 2;
    neckRing.position.y = 0.95;
    bodyGroup.add(neckRing);



    const chestInner = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.1, 32), matBlack);
    chestInner.scale.set(1.2, 0.8, 1);
    chestInner.position.set(0, -0.2, 0.8);
    chestInner.rotation.x = 1.42; // Match the torso curve
    bodyGroup.add(chestInner);

// --- FIX: ELECTRIC CURRENT (LIGHTNING BOLT) ICON ---
    const boltShape = new THREE.Shape();
    boltShape.moveTo(0.02, 0.12);        // Top point
    boltShape.lineTo(-0.06, 0.02);       // Zig left
    boltShape.lineTo(0.01, 0.02);        // Flat right
    boltShape.lineTo(-0.04, -0.12);      // Zag bottom point
    boltShape.lineTo(0.05, -0.01);       // Zig right up
    boltShape.lineTo(-0.01, -0.01);      // Flat left
    boltShape.lineTo(0.02, 0.12);        // Back to top

    const extrudeSettings = { 
      depth: 0.015, 
      bevelEnabled: true, 
      bevelSegments: 2, 
      steps: 1, 
      bevelSize: 0.005, 
      bevelThickness: 0.005 
    };
    
    const boltGeo = new THREE.ExtrudeGeometry(boltShape, extrudeSettings);
    boltGeo.center(); // Geometry ko perfectly center karne ke liye

    const chestCore = new THREE.Mesh(boltGeo, matCyanGlow);
    chestCore.position.set(0, -0.2, 0.86);
    chestCore.rotation.x = -0.15; // Chest ke angle ke sath match
    chestCore.scale.set(0.9, 0.9, 0.9); // Icon ka size
    bodyGroup.add(chestCore);




    // Shoulder Sockets (Mechanical detail on the body)
    const socketGeo = new THREE.TorusGeometry(0.18, 0.04, 16, 32);
    
    const leftSocket = new THREE.Mesh(socketGeo, matWhite);
    leftSocket.position.set(-0.82, 0.3, 0);
    leftSocket.rotation.y = Math.PI / 2;
    bodyGroup.add(leftSocket);

    const rightSocket = new THREE.Mesh(socketGeo, matWhite);
    rightSocket.position.set(0.82, 0.3, 0);
    rightSocket.rotation.y = Math.PI / 2;
    bodyGroup.add(rightSocket);


    // 3. ARMS 
    const armGeo = new THREE.CapsuleGeometry(0.18, 0.6, 32, 32);

    const leftArm = new THREE.Mesh(armGeo, matWhite);
    leftArm.position.set(-1.1, 0.0, 0); 
    leftArm.rotation.z = -Math.PI / 8;
    robotGroup.add(leftArm);

    const rightArm = new THREE.Mesh(armGeo, matWhite);
    rightArm.position.set(1.1, 0.0, 0); 
    rightArm.rotation.z = Math.PI / 8; 
    robotGroup.add(rightArm);


    // 4. FLOATING BASE RINGS 
    const baseRings = new THREE.Group();
    baseRings.position.y = -1.1;
    robotGroup.add(baseRings);

    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.02, 16, 64), matCyanGlow);
    ring1.rotation.x = Math.PI / 2;
    baseRings.add(ring1);

    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.01, 16, 64), matCyanGlow);
    ring2.rotation.x = Math.PI / 2;
    ring2.position.y = -0.2;
    baseRings.add(ring2);

    // --- LIGHTING ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.5);
    mainLight.position.set(5, 10, 7);
    scene.add(mainLight);

    const fillLight = new THREE.PointLight(0x00ffff, 1.5, 10); 
    fillLight.position.set(-4, -2, 4);
    scene.add(fillLight);

    // --- ANIMATION LOGIC ---
    let mouseX = 0;
    let mouseY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const handleMouse = (e: MouseEvent) => {
      mouseX = (e.clientX - windowHalfX) * 0.001;
      mouseY = (e.clientY - windowHalfY) * 0.001;
    };
    window.addEventListener("mousemove", handleMouse);

    const clock = new THREE.Clock();
    let rafId: number;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Mouse Look
      headGroup.rotation.y += (mouseX * 0.8 - headGroup.rotation.y) * 0.1;
      headGroup.rotation.x += (mouseY * 0.5 - headGroup.rotation.x) * 0.1;

      // Smooth Hover
      robotGroup.position.y = -0.2 + Math.sin(elapsedTime * 2.0) * 0.1;
      robotGroup.rotation.y = Math.sin(elapsedTime * 0.5) * 0.1;

      // Subtle Arm Movement
      leftArm.rotation.x = Math.sin(elapsedTime * 3) * 0.05;
      rightArm.rotation.x = Math.sin(elapsedTime * 3 + Math.PI) * 0.05;

      // Base Ring Pulse & Rotation
      ring1.rotation.z = elapsedTime * 0.5;
      ring1.scale.setScalar(1 + Math.sin(elapsedTime * 4) * 0.02);
      ring2.rotation.z = -elapsedTime * 0.8;
      
      chestCore.scale.setScalar(1 + Math.sin(elapsedTime * 5) * 0.15);

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

      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        
        <div className="flex-1 mt-10 text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-foreground font-black tracking-tight leading-[0.9] mb-5 uppercase"
            style={{ fontSize: "clamp(2.5rem, 8vw, 4.5rem)" }}>
            Build the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground to-foreground/40">
              Future.
            </span>
          </h1>

          <p className="text-muted-foreground font-medium mb-8 max-w-md mx-auto lg:mx-0 text-base leading-relaxed border-l-0 lg:border-l-2 border-primary/30 lg:pl-5">
            Architecting high-performance digital solutions for brands that refuse to settle.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-10">
            <Link href="/consultant">
              <button className="w-full sm:w-auto px-8 py-3.5 bg-foreground text-background font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(var(--foreground),0.2)]">
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

          <div className="grid grid-cols-3 gap-3 sm:gap-5 md:gap-8 max-w-lg mx-auto lg:mx-0">
            {STATS_DATA.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-base md:text-xl font-bold text-foreground whitespace-nowrap">
                  {stat.value}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-semibold leading-tight mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex-shrink-0 order-1 lg:order-2 w-full lg:w-1/2 flex justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-cyan-400/15 blur-[120px] rounded-full pointer-events-none" />
          
          <div
            ref={canvasRef}
            className="w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[500px] md:h-[500px] relative z-10 mx-auto cursor-grab active:cursor-grabbing"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;