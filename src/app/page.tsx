"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Users, ShieldCheck, Stethoscope, Sparkles } from "lucide-react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      type: "video",
      videoSrc: "/videos/video_1.mp4",
      alt: "Community support and giving care",
      icon: <HeartHandshake className="text-[#4CBB17] mb-4" size={32} />,
      badge: "Compassionate Support",
      title: "Caring for Those Who Gave So Much",
      description: "Dedicated to supporting our community heroes, vulnerable veterans, and families in need with dignity, love, and reliable assistance.",
      primaryBtn: "Our Services",
      primaryLink: "/services",
      secondaryBtn: "Get in Touch",
      secondaryLink: "/contact"
    },
    {
      type: "video",
      videoSrc: "/videos/video_2.mp4",
      alt: "Professional healthcare and nursing",
      icon: <Stethoscope className="text-[#4CBB17] mb-4" size={32} />,
      badge: "Professional Healthcare",
      title: "Expert Medical & Nursing Care at Home",
      description: "Bringing compassionate, professional health assistance right to your doorstep. Your family's well-being is our highest priority.",
      primaryBtn: "Explore Services",
      primaryLink: "/services",
      secondaryBtn: "About Us",
      secondaryLink: "/about"
    },
    {
      type: "video",
      videoSrc: "/videos/video_3.mp4",
      alt: "Community care and welfare outreach",
      icon: <Sparkles className="text-[#4CBB17] mb-4" size={32} />,
      badge: "Community Welfare",
      title: "Unwavering Support When You Need It Most",
      description: "From specialized personal care to emergency relief support, we stand beside families to ensure comfort, health, and peace of mind.",
      primaryBtn: "Book a Consultation",
      primaryLink: "/contact",
      secondaryBtn: "Our Mission",
      secondaryLink: "/about"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="flex flex-col bg-[#F9FBF9]">
      {/* HERO SECTION — LIGHT, TRANSPARENT OVERLAYS */}
      <section className="relative h-[90vh] w-full overflow-hidden bg-black">

        {/* Video Slider Layer */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            <video
              src={slide.videoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="h-full w-full object-cover"
            />
          </div>
        ))}

        {/* Minimal dark scrim — only enough to keep text readable, no green tint */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Content Layer */}
        <div className="relative z-30 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-8">
          <div key={currentSlide} className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">

            <div className="mb-6 flex flex-col gap-2">
              {slides[currentSlide].icon}
              <span className="inline-block w-fit rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/20 shadow-sm">
                {slides[currentSlide].badge}
              </span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6 leading-tight [text-shadow:0_2px_12px_rgba(0,0,0,0.7)]">
              {slides[currentSlide].title}
            </h1>

            <p className="mt-4 text-lg text-white/90 mb-10 max-w-xl leading-relaxed font-normal [text-shadow:0_1px_8px_rgba(0,0,0,0.7)]">
              {slides[currentSlide].description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={slides[currentSlide].primaryLink}
                className="flex items-center gap-2 rounded-full bg-[#4CBB17] px-8 py-3.5 text-sm font-extrabold text-[#0B2613] transition hover:bg-white hover:scale-105 shadow-xl"
              >
                {slides[currentSlide].primaryBtn}
                <ArrowRight size={18} />
              </Link>

              <Link
                href={slides[currentSlide].secondaryLink}
                className="flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                {slides[currentSlide].secondaryBtn}
              </Link>
            </div>
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-10 right-10 z-30 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? "w-12 bg-[#4CBB17]" : "w-4 bg-white/40 hover:bg-white/80"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* QUICK IMPACT STATS */}
      <section className="bg-white py-16 border-b border-green-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center rounded-2xl bg-[#F9FBF9] p-8 text-center shadow-sm border border-[#228B22]/15">
              <HeartHandshake size={40} className="text-[#228B22] mb-4" />
              <h3 className="text-3xl font-bold text-[#113B1E]">50+</h3>
              <p className="text-sm font-semibold text-gray-700">Communities & Families Supported</p>
            </div>
            <div className="flex flex-col items-center rounded-2xl bg-[#F9FBF9] p-8 text-center shadow-sm border border-[#228B22]/15">
              <Users size={40} className="text-[#228B22] mb-4" />
              <h3 className="text-3xl font-bold text-[#113B1E]">10,000+</h3>
              <p className="text-sm font-semibold text-gray-700">Lives Impacted with Care</p>
            </div>
            <div className="flex flex-col items-center rounded-2xl bg-[#F9FBF9] p-8 text-center shadow-sm border border-[#228B22]/15">
              <ShieldCheck size={40} className="text-[#228B22] mb-4" />
              <h3 className="text-3xl font-bold text-[#113B1E]">24/7</h3>
              <p className="text-sm font-semibold text-gray-700">Dedicated Support & Outreach</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}