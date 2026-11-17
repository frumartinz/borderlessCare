import Link from "next/link";
import {
    Stethoscope,
    HandHeart,
    Utensils,
    Car,
    Heart,
    Sparkles,
    ArrowRight,
    CheckCircle2,
    ShieldCheck,
    Clock,
} from "lucide-react";

const services = [
    {
        name: "Nursing Care",
        icon: Stethoscope,
        description:
            "Skilled nursing support including medication management, wound care, vital monitoring, and chronic condition assistance — delivered in the comfort of home.",
        features: ["Medication management", "Wound & post-op care", "Vital monitoring", "Chronic condition support"],
    },
    {
        name: "Personal Care",
        icon: HandHeart,
        description:
            "Dignified assistance with daily living activities so your loved one can maintain independence, hygiene, and confidence.",
        features: ["Bathing & grooming", "Dressing assistance", "Toileting support", "Mobility assistance"],
    },
    {
        name: "Meal Preparation",
        icon: Utensils,
        description:
            "Nutritious, home-cooked meals prepared to your loved one's dietary needs and preferences, with grocery support included.",
        features: ["Diet-aware meal planning", "Grocery shopping", "Special diet accommodation", "Hydration support"],
    },
    {
        name: "Transportation Service",
        icon: Car,
        description:
            "Safe, reliable transportation to medical appointments, therapy sessions, social outings, and errands — with a caregiver by their side.",
        features: ["Medical appointments", "Pharmacy & errands", "Social outings", "Door-to-door assistance"],
    },
    {
        name: "Respite Care",
        icon: Heart,
        description:
            "Short-term relief for family caregivers. Whether you need an afternoon or a week, we step in so you can recharge with peace of mind.",
        features: ["Short-term relief", "Overnight support", "Weekend coverage", "Emergency backup"],
    },
    {
        name: "More Services",
        icon: Sparkles,
        description:
            "From companionship visits to light housekeeping and 24/7 live-in care, we tailor our support to each family's unique needs.",
        features: ["Companionship visits", "Light housekeeping", "Live-in care", "Custom care plans"],
    },
];

export default function Services() {
    return (
        <div className="bg-[#F9FBF9]">
            {/* Page Header */}
            <div className="bg-[#113B1E] py-20 text-center px-4 border-b-4 border-[#228B22]">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                    Our <span className="text-[#4CBB17]">Services</span>
                </h1>
                <p className="mt-4 text-lg text-green-50/90 max-w-2xl mx-auto leading-relaxed">
                    Thoughtfully designed care that meets your family where they are — with warmth, expertise, and heart.
                </p>
            </div>

            {/* Services Grid */}
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={service.name}
                                className="group rounded-2xl bg-white p-8 shadow-sm border border-[#228B22]/15 transition hover:-translate-y-1 hover:shadow-md hover:border-[#228B22]/40"
                            >
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#228B22]/10 text-[#228B22] transition group-hover:bg-[#228B22] group-hover:text-white">
                                    <Icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-[#113B1E] mb-2">
                                    {service.name}
                                </h3>
                                <p className="text-gray-700 text-base leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <ul className="space-y-2.5 mb-6">
                                    {service.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-start gap-2.5 text-sm font-medium text-gray-800"
                                        >
                                            <CheckCircle2
                                                size={18}
                                                className="text-[#228B22] mt-0.5 shrink-0"
                                            />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 text-sm font-bold text-[#228B22] transition hover:text-[#113B1E] hover:gap-3"
                                >
                                    Request This Service <ArrowRight size={16} />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white py-20 px-6 border-t border-green-100">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#113B1E]">
                            Why Families Choose Us
                        </h2>
                        <div className="mt-3 h-1.5 w-20 bg-[#4CBB17] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="rounded-2xl bg-[#F9FBF9] p-8 shadow-sm border border-[#228B22]/15 text-center transition hover:-translate-y-1 hover:shadow-md hover:border-[#228B22]/40">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#228B22]/10 text-[#228B22]">
                                <ShieldCheck size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-[#113B1E] mb-2">
                                Vetted Caregivers
                            </h3>
                            <p className="text-gray-700 text-base leading-relaxed">
                                Every caregiver is background-checked, trained, and matched to your family's unique needs.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-[#F9FBF9] p-8 shadow-sm border border-[#228B22]/15 text-center transition hover:-translate-y-1 hover:shadow-md hover:border-[#228B22]/40">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#4CBB17]/15 text-[#228B22]">
                                <Clock size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-[#113B1E] mb-2">
                                24/7 Availability
                            </h3>
                            <p className="text-gray-700 text-base leading-relaxed">
                                Care doesn't keep office hours. Our team is available around the clock for you and your loved one.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-[#F9FBF9] p-8 shadow-sm border border-[#228B22]/15 text-center transition hover:-translate-y-1 hover:shadow-md hover:border-[#228B22]/40">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#228B22]/10 text-[#228B22]">
                                <Heart size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-[#113B1E] mb-2">
                                Personalized Plans
                            </h3>
                            <p className="text-gray-700 text-base leading-relaxed">
                                No two families are alike. We build a custom care plan tailored to your loved one's life and goals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Banner */}
            <div className="mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-8">
                <div className="rounded-3xl bg-[#113B1E] px-8 py-14 text-center shadow-xl border-2 border-[#228B22]">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Not sure which service is right for you?
                    </h2>
                    <p className="text-green-50/90 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
                        Schedule a free consultation and we'll help you build the right care plan for your family.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full bg-[#4CBB17] px-8 py-3.5 text-sm font-extrabold text-[#0B2613] shadow-lg transition hover:bg-white hover:scale-105"
                    >
                        Book a Free Consultation <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </div>
    );
}