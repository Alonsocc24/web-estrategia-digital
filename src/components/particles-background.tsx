"use client";

import React, { useEffect, useRef } from "react";

class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = Math.random() * 1.5 - 0.75;
    this.speedY = Math.random() * 1.5 - 0.75;
  }

  update(canvasWidth: number, canvasHeight: number) {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > canvasWidth || this.x < 0) this.speedX *= -1;
    if (this.y > canvasHeight || this.y < 0) this.speedY *= -1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "hsl(197, 71%, 55%)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    let animationFrameId: number;

    const resizeCanvas = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
      init();
    };

    function init() {
      if (!canvas) return; 

      particlesArray = [];
      const numberOfParticles = (canvas.height * canvas.width) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle(canvas.width, canvas.height));
      }
    }

    function connect() {
      // --- CORRECCIÓN CLAVE AQUÍ ---
      // Hacemos la comprobación de 'ctx' y 'canvas' para asegurar a TypeScript
      if (!ctx || !canvas) return;

      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const distance =
            Math.pow(particlesArray[a].x - particlesArray[b].x, 2) +
            Math.pow(particlesArray[a].y - particlesArray[b].y, 2);

          const maxDistance = Math.pow(canvas.width / 7, 2);
          if (distance < maxDistance) {
            opacityValue = 1 - distance / maxDistance;
            ctx.strokeStyle = `hsla(180, 100%, 50%, ${opacityValue})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(canvas.width, canvas.height);
        particlesArray[i].draw(ctx);
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    }

    // --- Arranque y Limpieza ---
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      <canvas ref={canvasRef} className="h-full w-full bg-background" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/40" />
    </div>
  );
}