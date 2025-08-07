// Contenido FINAL Y CORREGIDO para: src/components/particles-background.tsx
"use client";

import React, { useEffect, useRef } from 'react';

// --- VARIABLES GLOBALES (fuera del componente para evitar re-creación) ---
let particlesArray: Particle[] = [];
let canvas: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;
let animationFrameId: number;

// --- CLASE PARA CADA PARTÍCULA ---
class Particle {
  x: number;
  y: number;
  directionX: number;
  directionY: number;
  size: number;
  speedX: number;
  speedY: number;

  constructor() {
    // --- CORRECCIÓN CLAVE ---
    // Solo asignamos posiciones si el canvas existe.
    if (canvas) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
    } else {
      this.x = 0;
      this.y = 0;
    }
    
    this.directionX = Math.random() * 0.4 - 0.2;
    this.directionY = Math.random() * 0.4 - 0.2;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = Math.random() * 1.5 - 0.75;
    this.speedY = Math.random() * 1.5 - 0.75;
  }

  draw() {
    if (ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle = 'rgba(34, 211, 238, 0.5)'; // Color primario con opacidad
      ctx.fill();
    }
  }

  update() {
    // --- CORRECCIÓN CLAVE ---
    // Comprobamos si la partícula está fuera de los límites del canvas antes de moverla
    if (canvas) {
      if (this.x > canvas.width || this.x < 0) {
        this.directionX = -this.directionX;
        this.speedX = -this.speedX;
      }
      if (this.y > canvas.height || this.y < 0) {
        this.directionY = -this.directionY;
        this.speedY = -this.speedY;
      }
    }
    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();
  }
}

// --- FUNCIÓN DE INICIALIZACIÓN ---
function init() {
  particlesArray = [];
  if (canvas) {
    const numberOfParticles = (canvas.height * canvas.width) / 9000;
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }
  }
}

// --- FUNCIÓN DE ANIMACIÓN ---
function animate() {
  if (ctx && canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
    }
  }
  animationFrameId = requestAnimationFrame(animate);
}

// --- COMPONENTE DE REACT ---
export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    canvas = canvasRef.current;
    if (canvas) {
      ctx = canvas.getContext('2d');
      // Establecer el tamaño del canvas al tamaño del contenedor
      const resizeCanvas = () => {
        if (canvas && canvas.parentElement) {
          canvas.width = canvas.parentElement.clientWidth;
          canvas.height = canvas.parentElement.clientHeight;
          init();
        }
      };
      
      resizeCanvas();
      
      // Limpiar cualquier animación anterior antes de iniciar una nueva
      cancelAnimationFrame(animationFrameId);
      animate();

      window.addEventListener('resize', resizeCanvas);

      // --- FUNCIÓN DE LIMPIEZA ---
      return () => {
        window.removeEventListener('resize', resizeCanvas);
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0" 
    />
  );
}