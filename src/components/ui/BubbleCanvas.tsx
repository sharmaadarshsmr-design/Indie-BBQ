"use client";

import { useEffect, useRef } from "react";

class Bubble {
  x: number = 0;
  y: number = 0;
  r: number = 0;
  speed: number = 0;
  drift: number = 0;
  opacity: number = 0;
  waver: number = 0;
  waverSpeed: number = 0;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.reset(canvasWidth, canvasHeight);
    this.y = Math.random() * canvasHeight; // Initial random spawn
  }

  reset(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = canvasHeight + 20;
    this.r = Math.random() * 5 + 1;
    this.speed = Math.random() * 1.2 + 0.3;
    this.drift = (Math.random() - 0.5) * 0.5;
    this.opacity = Math.random() * 0.35 + 0.05;
    this.waver = Math.random() * Math.PI * 2;
    this.waverSpeed = Math.random() * 0.02 + 0.01;
  }

  update(canvasWidth: number, canvasHeight: number) {
    this.y -= this.speed;
    this.waver += this.waverSpeed;
    this.x += Math.sin(this.waver) * 0.5 + this.drift;
    if (this.y < -20) this.reset(canvasWidth, canvasHeight);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(34, 168, 212, 0.8)`;
    ctx.lineWidth = 0.8;
    ctx.stroke();
    ctx.restore();
  }
}

export default function BubbleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let bubbles: Bubble[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (bubbles.length === 0) {
        bubbles = Array.from({ length: 80 }, () => new Bubble(canvas.width, canvas.height));
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const animateOcean = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      bubbles.forEach((b) => {
        b.update(canvas.width, canvas.height);
        b.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animateOcean);
    };

    animateOcean();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
