"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Users, Globe, BookOpen, Stethoscope, Utensils } from "lucide-react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Completely different information for each slide
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop",
      alt: "Children learning in a classroom",
      icon: <BookOpen className="text-accent-500 mb-4" size={32} />,
      badge: "Education Initiative",
      title: "Unlocking Potential Through Learning",
      description: "Every child deserves a chance to learn. We build classrooms, provide essential learning materials, and fund scholarships to ensure education is never out of reach.",
      primaryBtn: "Sponsor a Student",
      primaryLink: "/get-involved",
      secondaryBtn: "Learn More",
      secondaryLink: "/programs"
    },
    {
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
      alt: "Doctor providing medical care",
      icon: <Stethoscope className="text-accent-500 mb-4" size={32} />,
      badge: "Medical Outreach",
      title: "Bringing Healthcare to the Underserved",
      description: "Geography should not dictate survival. Our mobile clinics and local partnerships deliver life-saving medicine, vaccinations, and medical training to remote villages.",
      primaryBtn: "Fund Medical Supplies",
      primaryLink: "/get-involved",
      secondaryBtn: "See Our Impact",
      secondaryLink: "/about"
    },
    {
      image: "https://images.unsplash.com/photo-1593113589914-075990207bc5?q=80&w=2070&auto=format&fit=crop",
      alt: "Volunteers distributing food",
      icon: <Utensils className="text-accent-500 mb-4" size={32} />,
      badge: "Food Security",
      title: "Fighting Hunger, Building Resilience",
      description: "From emergency food relief to establishing sustainable community gardens, we are ensuring families have reliable access to nutritious meals.",
      primaryBtn: "Donate to Food Relief",
      primaryLink: "/get-involved",
      secondaryBtn: "Our Programs",
      secondaryLink: "/programs"
    },
  ];

  // Auto-play logic (Changes every 7 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="flex flex-col">
      {/* HERO SECTION WITH DYNAMIC SLIDER */}
      <section className="relative h-[90vh] w-full overflow-hidden bg-brand-950">
        
        {/* Background Images Layer */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}

        {/* Gradient Overlay (Dark on left for text, clear on right) */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-brand-950 via-brand-950/80 to-transparent" />

        {/* Content Layer */}
        <div className="relative z-30 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-8">
          
          {/* Key is used to trigger the fade animation when the slide changes */}
          <div key={currentSlide} className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
            
            {/* Dynamic Icon & Badge */}
            <div className="mb-6 flex flex-col gap-2">
              {slides[currentSlide].icon}
              <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/20">
                {slides[currentSlide].badge}
              </span>
            </div>
            
            {/* Dynamic Title */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6 drop-shadow-lg leading-tight">
              {slides[currentSlide].title}
            </h1>
            
            {/* Dynamic Description */}
            <p className="mt-4 text-lg text-gray-200 mb-10 max-w-xl drop-shadow-md leading-relaxed">
              {slides[currentSlide].description}
            </p>

            {/* Dynamic Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={slides[currentSlide].primaryLink}
                className="flex items-center gap-2 rounded-full bg-accent-500 px-8 py-3.5 text-sm font-bold text-brand-950 transition hover:bg-white hover:scale-105 shadow-xl"
              >
                {slides[currentSlide].primaryBtn}
                <ArrowRight size={18} />
              </Link>
              
              <Link
                href={slides[currentSlide].secondaryLink}
                className="flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                {slides[currentSlide].secondaryBtn}
              </Link>
            </div>
          </div>
        </div>

        {/* Slider Indicators (Bottom Right) */}
        <div className="absolute bottom-10 right-10 z-30 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? "w-12 bg-accent-500" 
                  : "w-4 bg-white/40 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* QUICK IMPACT STATS (Preview) */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center rounded-2xl bg-gray-50 p-8 text-center shadow-sm border border-gray-100">
              <HeartHandshake size={40} className="text-accent-500 mb-4" />
              <h3 className="text-3xl font-bold text-brand-900">50+</h3>
              <p className="text-sm font-medium text-gray-500">Communities Served</p>
            </div>
            <div className="flex flex-col items-center rounded-2xl bg-gray-50 p-8 text-center shadow-sm border border-gray-100">
              <Users size={40} className="text-accent-500 mb-4" />
              <h3 className="text-3xl font-bold text-brand-900">10,000+</h3>
              <p className="text-sm font-medium text-gray-500">Lives Impacted</p>
            </div>
            <div className="flex flex-col items-center rounded-2xl bg-gray-50 p-8 text-center shadow-sm border border-gray-100">
              <Globe size={40} className="text-accent-500 mb-4" />
              <h3 className="text-3xl font-bold text-brand-900">12</h3>
              <p className="text-sm font-medium text-gray-500">Countries Active</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}