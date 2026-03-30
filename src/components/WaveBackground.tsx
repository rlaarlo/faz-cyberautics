"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

export default function WaveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let mouseX = 0;
        let mouseY = 0;
        let targetMouseX = 0;
        let targetMouseY = 0;
        let time = 0;
        let animationFrameId: number;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            targetMouseX = width / 2;
            targetMouseY = height / 2;
            mouseX = targetMouseX;
            mouseY = targetMouseY;
        };

        const handleMouseMove = (e: MouseEvent) => {
            targetMouseX = e.clientX;
            targetMouseY = e.clientY;
        };

        const handleMouseLeave = () => {
            targetMouseX = width / 2;
            targetMouseY = height / 2;
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);

        resize();

        const draw = () => {
            time += 0.008;
            ctx.clearRect(0, 0, width, height);

            // Smooth mouse follow
            mouseX += (targetMouseX - mouseX) * 0.03;
            mouseY += (targetMouseY - mouseY) * 0.03;

            const waveSets = [
                { lines: 3, baseY: height * 0.25, amp: 40, freq: 0.003, speed: 1.0, opacity: 0.25 },
                { lines: 4, baseY: height * 0.50, amp: 60, freq: 0.002, speed: 0.7, opacity: 0.35 },
                { lines: 3, baseY: height * 0.75, amp: 35, freq: 0.004, speed: 1.3, opacity: 0.20 },
            ];

            for (const set of waveSets) {
                for (let i = 0; i < set.lines; i++) {
                    ctx.beginPath();

                    const grad = ctx.createLinearGradient(0, 0, width, 0);
                    const alpha = set.opacity - i * 0.05;
                    grad.addColorStop(0, `rgba(225,29,141,${alpha})`);
                    grad.addColorStop(0.5, `rgba(251,113,133,${alpha})`);
                    grad.addColorStop(1, `rgba(249,115,22,${alpha})`);
                    ctx.strokeStyle = grad;
                    ctx.lineWidth = 2 - i * 0.3;

                    const step = 4;
                    for (let x = 0; x <= width; x += step) {
                        const f = set.freq + i * 0.0004;
                        const a = set.amp + i * 15;

                        let y =
                            set.baseY +
                            Math.sin(x * f + time * set.speed + i * 0.8) * a +
                            Math.sin(x * f * 0.5 + time * 0.5 + i) * (a * 0.4);

                        // Mouse attraction
                        const dx = x - mouseX;
                        const dy = set.baseY - mouseY;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        const radius = 350;
                        if (dist < radius) {
                            const pull = Math.pow(1 - dist / radius, 2);
                            y += (mouseY - y) * pull * 0.5;
                        }

                        if (x === 0) ctx.moveTo(x, y);
                        else ctx.lineTo(x, y);
                    }
                    ctx.stroke();
                }
            }

            // Glowing dots at wave intersections
            const dotCount = 12;
            for (let i = 0; i < dotCount; i++) {
                const dx = (width / dotCount) * i + Math.sin(time + i) * 30;
                const dy =
                    height * 0.5 +
                    Math.sin(dx * 0.002 + time * 0.7) * 60 +
                    Math.cos(dx * 0.001 + time) * 30;

                const r = 2 + Math.sin(time * 2 + i) * 1.5;

                ctx.beginPath();
                const glow = ctx.createRadialGradient(dx, dy, 0, dx, dy, r * 6);
                glow.addColorStop(0, "rgba(225,29,141,0.6)");
                glow.addColorStop(0.5, "rgba(249,115,22,0.2)");
                glow.addColorStop(1, "rgba(249,115,22,0)");
                ctx.fillStyle = glow;
                ctx.arc(dx, dy, r * 6, 0, Math.PI * 2);
                ctx.fill();

                ctx.beginPath();
                ctx.fillStyle = "rgba(255,255,255,0.9)";
                ctx.arc(dx, dy, r, 0, Math.PI * 2);
                ctx.fill();
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-0"
            style={{ opacity: theme === 'dark' ? 0.7 : 0.4 }}
        />
    );
}
