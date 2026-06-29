"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wrench,
  BadgeCheck,
  Leaf,
  Clock3,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "25-Year Performance Warranty",
    description:
      "We use premium solar panels backed by long-term manufacturer performance warranties.",
  },
  {
    icon: Wrench,
    title: "Expert Installation",
    description:
      "Our trained installation team follows industry best practices for safe, reliable, and efficient installations.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Products",
    description:
      "We select trusted components to deliver dependable performance and long service life.",
  },
  {
    icon: Leaf,
    title: "Government Subsidy Assistance",
    description:
      "We guide eligible customers through the available subsidy and documentation process.",
  },
  {
    icon: Clock3,
    title: "On-Time Project Delivery",
    description:
      "We plan projects carefully to complete installations efficiently without compromising quality.",
  },
  {
    icon: Headphones,
    title: "After-Sales Support",
    description:
      "Our team is available to help with maintenance, troubleshooting, and system performance after installation.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            WHY CHOOSE SUBRINT SOLAR
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 lg:text-5xl">
            Reliable Solar Solutions Built Around Quality
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            We help homeowners, businesses, industries, and farms adopt clean
            solar energy with quality products, professional installation, and
            dependable customer support.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-gray-100 bg-white p-8 shadow-md transition hover:border-orange-200 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-orange-500 to-yellow-500 p-10 text-white">
          <div className="grid gap-8 text-center md:grid-cols-4">
            <div>
              <h3 className="text-4xl font-bold">High Quality</h3>
              <p className="mt-2">Premium Components</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">Fast</h3>
              <p className="mt-2">Project Execution</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">Support</h3>
              <p className="mt-2">Before & After Installation</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">Clean Energy</h3>
              <p className="mt-2">Sustainable Power Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}