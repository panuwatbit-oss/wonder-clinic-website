"use client";

import { useEffect, useRef, useState } from "react";

const phrases = [
  {
    firstLine: "เครื่องมือระดับโลก",
    highlight: "ลงทุนเพื่อผลลัพธ์ที่ดี",
    description: "คัดสรรเทคโนโลยีมูลค่าสูงจากผู้ผลิตชั้นนำ พร้อมมาตรฐานสากลที่ตรวจสอบได้",
  },
  {
    firstLine: "มาตรฐานที่ไว้ใจได้",
    highlight: "ดูแลในราคาที่เข้าถึงได้",
    description: "เปิดโอกาสให้เข้าถึงเครื่องมือคุณภาพสูง โดยมีแพทย์ประเมินและวางแผนเป็นรายบุคคล",
  },
  {
    firstLine: "เครื่องแท้มีที่มา",
    highlight: "มั่นใจเพราะตรวจสอบได้",
    description: "หลายเทคโนโลยีได้รับมาตรฐาน US FDA ตามรุ่นและข้อบ่งใช้ พร้อมข้อมูลเครื่องที่ชัดเจน",
  },
] as const;

const ROTATION_MS = 5200;
const FADE_MS = 360;

export function HeroPhrases() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const fadeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const changePhrase = (nextIndex: number) => {
    if (nextIndex === activeIndex) return;
    setIsVisible(false);
    if (fadeTimer.current) clearTimeout(fadeTimer.current);
    fadeTimer.current = setTimeout(() => {
      setActiveIndex(nextIndex);
      setIsVisible(true);
    }, FADE_MS);
  };

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const rotation = window.setInterval(() => {
      setIsVisible(false);
      fadeTimer.current = setTimeout(() => {
        setActiveIndex((current) => (current + 1) % phrases.length);
        setIsVisible(true);
      }, FADE_MS);
    }, ROTATION_MS);

    return () => {
      window.clearInterval(rotation);
      if (fadeTimer.current) clearTimeout(fadeTimer.current);
    };
  }, []);

  const activePhrase = phrases[activeIndex];

  return (
    <div className="hero-message">
      <div className={isVisible ? "hero-phrase is-visible" : "hero-phrase"} aria-live="off">
        <h1>{activePhrase.firstLine}<br /><em>{activePhrase.highlight}</em></h1>
        <p className="hero-description">{activePhrase.description}</p>
      </div>
      <div className="hero-phrase-controls" role="group" aria-label="เลือกข้อความแนะนำ The Wonder Clinic">
        {phrases.map((phrase, index) => (
          <button
            key={phrase.firstLine}
            type="button"
            className={activeIndex === index ? "is-active" : ""}
            aria-label={`แสดงข้อความชุดที่ ${index + 1}: ${phrase.firstLine}`}
            aria-pressed={activeIndex === index}
            onClick={() => changePhrase(index)}
          />
        ))}
      </div>
    </div>
  );
}
