import Image from "next/image";
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
        <div className="bg-white">
            {/* Page Header */}
            <div className="bg-brand-950 py-20 text-center px-4">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                    Our <span className="text-accent-500">Services</span>
                </h1>
                <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
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
                                className="group rounded-2xl bg-white p-8 shadow-sm border border-gray-100 transition hover:-translate-y-1 hover:shadow-md"
                            >
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-500 transition group-hover:bg-brand-500 group-hover:text-white">
                                    <Icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-brand-900 mb-2">
                                    {service.name}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-start gap-2 text-sm text-gray-600"
                                        >
                                            <CheckCircle2
                                                size={16}
                                                className="text-accent-500 mt-0.5 shrink-0"
                                            />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-900 transition hover:gap-3"
                                >
                                    Request This Service <ArrowRight size={16} />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gray-50 py-20 px-6">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-brand-900">
                            Why Families Choose Us
                        </h2>
                        <div className="mt-2 h-1 w-20 bg-accent-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100 text-center transition hover:-translate-y-1 hover:shadow-md">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-500">
                                <ShieldCheck size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-brand-900 mb-2">
                                Vetted Caregivers
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Every caregiver is background-checked, trained, and matched to your family's unique needs.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100 text-center transition hover:-translate-y-1 hover:shadow-md">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-50 text-accent-600">
                                <Clock size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-brand-900 mb-2">
                                24/7 Availability
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Care doesn't keep office hours. Our team is available around the clock for you and your loved one.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100 text-center transition hover:-translate-y-1 hover:shadow-md">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-500">
                                <Heart size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-brand-900 mb-2">
                                Personalized Plans
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                No two families are alike. We build a custom care plan tailored to your loved one's life and goals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Banner */}
            <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
                <div className="rounded-2xl bg-brand-950 px-8 py-14 text-center shadow-xl">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Not sure which service is right for you?
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
                        Schedule a free consultation and we'll help you build the right care plan for your family.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-8 py-3.5 text-sm font-bold text-brand-950 transition hover:bg-white hover:scale-105"
                    >
                        Book a Free Consultation <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </div>
    );
}