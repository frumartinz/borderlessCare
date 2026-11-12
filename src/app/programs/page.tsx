import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Stethoscope, Utensils } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      title: "Education Support",
      description: "Building schools, providing learning materials, and funding scholarships for children in developing regions.",
      icon: <BookOpen size={24} className="text-accent-500" />,
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop",
      link: "/get-involved"
    },
    {
      title: "Medical Outreach",
      description: "Deploying mobile clinics, supplying essential medicines, and training local healthcare workers to save lives.",
      icon: <Stethoscope size={24} className="text-accent-500" />,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
      link: "/get-involved"
    },
         {
      title: "Food Security",
      description: "Providing emergency food relief and establishing sustainable community gardens to combat malnutrition.",
      icon: <Utensils size={24} className="text-accent-500" />,
      // image: "...", <-- Remove this line
      link: "/get-involved"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-brand-950 py-20 text-center px-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Our <span className="text-accent-500">Programs</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Discover how we are actively making a difference across the globe through targeted, sustainable initiatives.
        </p>
      </div>

      {/* Programs Grid */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <div key={program.title} className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
              
                            {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden">
                
                {/* If the program has an image, show the image. Otherwise, show a modern gradient. */}
                {program.image ? (
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-brand-900 to-brand-500 transition-transform duration-500 group-hover:scale-105" />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Floating Icon */}
                <div className="absolute bottom-4 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand-900 shadow-lg ring-4 ring-white">
                  {program.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6 pt-8">
                <h3 className="mb-3 text-xl font-bold text-brand-900">{program.title}</h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-500">
                  {program.description}
                </p>
                
                {/* Link */}
                <Link 
                  href={program.link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-500 transition hover:text-accent-600"
                >
                  Support this program <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Banner */}
      <div className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl bg-brand-900 p-10 text-center shadow-2xl sm:p-16">
          <h2 className="text-3xl font-bold text-white mb-4">Want to make a lasting impact?</h2>
          <p className="text-brand-100 mb-8 max-w-xl mx-auto">
            Your support allows us to expand these programs to even more communities in need. 
          </p>
          <Link
            href="/get-involved"
            className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-8 py-3.5 text-sm font-bold text-brand-950 transition hover:bg-white hover:scale-105"
          >
            Get Involved Today
          </Link>
        </div>
      </div>
    </div>
  );
}