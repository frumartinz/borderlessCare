import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Stethoscope, Utensils } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      title: "Education Support",
      description: "Building schools, providing learning materials, and funding scholarships for children in developing regions.",
      icon: <BookOpen size={24} className="text-[#4CBB17]" />,
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop",
      link: "/get-involved"
    },
    {
      title: "Medical Outreach",
      description: "Deploying mobile clinics, supplying essential medicines, and training local healthcare workers to save lives.",
      icon: <Stethoscope size={24} className="text-[#4CBB17]" />,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
      link: "/get-involved"
    },
    {
      title: "Food Security",
      description: "Providing emergency food relief and establishing sustainable community gardens to combat malnutrition.",
      icon: <Utensils size={24} className="text-[#4CBB17]" />,
      link: "/get-involved"
    }
  ];

  return (
    <div className="bg-[#F9FBF9] min-h-screen">
      {/* Page Header */}
      <div className="bg-[#113B1E] py-20 text-center px-4 border-b-4 border-[#228B22]">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Our <span className="text-[#4CBB17]">Programs</span>
        </h1>
        <p className="mt-4 text-lg text-green-50/90 max-w-2xl mx-auto leading-relaxed">
          Discover how we are actively making a difference across the globe through targeted, sustainable initiatives.
        </p>
      </div>

      {/* Programs Grid */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <div key={program.title} className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm border border-[#228B22]/15 transition-all hover:shadow-xl hover:-translate-y-1 hover:border-[#228B22]/40">

              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden">
                {program.image ? (
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-[#113B1E] to-[#228B22] transition-transform duration-500 group-hover:scale-105" />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Floating Icon */}
                <div className="absolute bottom-4 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#113B1E] shadow-lg ring-4 ring-white">
                  {program.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6 pt-8">
                <h3 className="mb-3 text-xl font-bold text-[#113B1E]">{program.title}</h3>
                <p className="mb-6 flex-1 text-base leading-relaxed text-gray-700">
                  {program.description}
                </p>

                {/* Link */}
                <Link
                  href={program.link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#228B22] transition hover:text-[#113B1E]"
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
        <div className="rounded-3xl bg-[#113B1E] p-10 text-center shadow-xl border-2 border-[#228B22] sm:p-16">
          <h2 className="text-3xl font-bold text-white mb-4">Want to make a lasting impact?</h2>
          <p className="text-green-50/90 mb-8 max-w-xl mx-auto text-lg leading-relaxed">
            Your support allows us to expand these programs to even more communities in need.
          </p>
          <Link
            href="/get-involved"
            className="inline-flex items-center gap-2 rounded-full bg-[#4CBB17] px-8 py-3.5 text-sm font-extrabold text-[#0B2613] shadow-lg transition hover:bg-white hover:scale-105"
          >
            Get Involved Today
          </Link>
        </div>
      </div>
    </div>
  );
}