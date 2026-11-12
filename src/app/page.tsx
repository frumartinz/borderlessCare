"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Play, Pause, HeartHandshake, Users, Globe } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true);
  
    // Reliable placeholder videos (Google's public test bucket)
  const videos = [
    "/videos/video1.mp4"
  ];
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [isPlaying, videos.length]);

  return (
    <div className="flex flex-col">
      {/* HERO SECTION WITH VIDEO SLIDER */}
            {/* HERO SECTION WITH VIDEO SLIDER */}
      <section className="relative h-[85vh] w-full overflow-hidden bg-brand-900">
        <video
          key={currentVideo}
          autoPlay
          muted
          loop
          playsInline
          // Added poster as a fallback while video loads
          poster="https://images.unsplash.com/photo-1593113589914-075990207bc5?q=80&w=2070&auto=format&fit=crop"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        >
          <source src={videos[currentVideo]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-900/60 to-transparent" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-accent-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-950 mb-6 shadow-lg">
              Borderless Care Foundation
            </span>
            
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6 drop-shadow-md">
              Care Without Borders. <br />
              <span className="text-accent-500">Hope Without Limits.</span>
            </h1>
            
            <p className="mt-4 text-lg text-gray-100 mb-10 max-w-2xl drop-shadow">
              We are a nonprofit organization dedicated to providing essential resources, 
              education, and medical support to underserved communities globally.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/get-involved"
                className="flex items-center gap-2 rounded-full bg-accent-500 px-8 py-3.5 text-sm font-bold text-brand-950 transition hover:bg-white hover:scale-105 shadow-xl"
              >
                Donate Now
                <ArrowRight size={18} />
              </Link>
              
              <Link
                href="/programs"
                className="flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Our Programs
              </Link>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-8 right-8 z-20 flex gap-2">
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="rounded-full bg-black/40 p-3 text-white backdrop-blur-md transition hover:bg-black/60"
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>
        </div>
        
        <div className="absolute bottom-8 left-8 z-20 flex gap-2">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentVideo(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentVideo === index ? "w-8 bg-accent-500" : "w-4 bg-white/50 hover:bg-white"
              }`}
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