"use client";

import { useEffect, useRef } from "react";

interface Petal {
  x: number; y: number; vx: number; vy: number;
  rotation: number; rotationSpeed: number;
  size: number; opacity: number; color: string;
  swing: number; swingSpeed: number; swingOffset: number;
}

export default function FloatingPetals() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!canvasRef.current) return;

    // Use type assertion to prevent TypeScript closure-narrowing issues
    const canvas = canvasRef.current as HTMLCanvasElement;
    const rawCtx = canvas.getContext("2d");
    if (!rawCtx) return;
    const ctx = rawCtx as CanvasRenderingContext2D;

    let animId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const colors = ["#F5B7B1", "#B76E79", "#FFD6B5", "#C99A54", "#F5D78E", "#FFF0E8"];
    const petalCount = window.innerWidth < 768 ? 18 : 30;
    const petals: Petal[] = [];

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight * 1.5 - window.innerHeight * 0.5,
        vx: (Math.random() - 0.5) * 0.6,
        vy: Math.random() * 0.8 + 0.3,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.04,
        size: Math.random() * 8 + 5,
        opacity: Math.random() * 0.4 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        swing: Math.random() * 2,
        swingSpeed: Math.random() * 0.02 + 0.01,
        swingOffset: Math.random() * Math.PI * 2,
      });
    }

    function drawPetal(c: CanvasRenderingContext2D, petal: Petal) {
      c.save();
      c.translate(petal.x, petal.y);
      c.rotate(petal.rotation);
      c.globalAlpha = petal.opacity;
      c.beginPath();
      c.ellipse(0, 0, petal.size * 0.5, petal.size, 0, 0, Math.PI * 2);
      c.fillStyle = petal.color;
      c.fill();
      c.beginPath();
      c.moveTo(0, -petal.size * 0.8);
      c.lineTo(0, petal.size * 0.8);
      c.strokeStyle = "rgba(255,255,255,0.3)";
      c.lineWidth = 0.5;
      c.stroke();
      c.restore();
    }

    function animate() {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      time += 0.01;

      petals.forEach((p) => {
        p.x += p.vx + Math.sin(time * p.swingSpeed * 60 + p.swingOffset) * p.swing * 0.1;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;
        if (p.y > h + 20) { p.y = -20; p.x = Math.random() * w; }
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        drawPetal(ctx, p);
      });

      animId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 5 }}
    />
  );
}
