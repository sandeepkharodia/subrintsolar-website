"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Home,
  Factory,
  Building2,
  Droplets,
  Wrench,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Residential Solar",
    image: "/images/rooftop.jpg",
    description:
      "Reduce your home's electricity bills with efficient rooftop solar systems designed for long-term savings and reliable power.",
  },
  {
    title: "Commercial Solar",
    image: "/images/Commercial.png",
    description:
      "Lower operating costs and improve sustainability with solar solutions for offices, schools, hospitals and commercial buildings.",
  },
  {
    title: "Industrial Solar",
     image: "/images/bess.jpg",
    description:
      "High-capacity solar power systems for factories and industries to reduce energy costs and improve operational efficiency.",
  },
  {
    title: "Solar Water Pumps",
     image: "/images/solar pump.jpg",
    description:
      "Reliable solar-powered water pumping systems for agriculture, irrigation and rural water supply applications.",
  },
  {
    title: "Operation & Maintenance",
    image: "/images/solar operation.jpg",
    icon: Wrench,
    description:
      "Comprehensive maintenance, cleaning and performance monitoring to keep your solar plant operating at peak efficiency.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            OUR SERVICES
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 lg:text-5xl">
            Complete Solar Energy Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            We provide end-to-end solar EPC solutions for homes,
            businesses, industries and agricultural applications across
            Haryana.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="rounded-3xl bg-white p-8 shadow-lg transition hover:shadow-2xl"
              >
                <div className="mb-6 overflow-hidden rounded-2xl">
                 <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={300}
                  className="h-52 w-full object-cover transition duration-500 hover:scale-110"
                  />
                  </div>
               
                <h3 className="text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {service.description}
                </p>

                <button className="mt-8 flex items-center gap-2 font-semibold text-orange-500 transition hover:gap-4">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}