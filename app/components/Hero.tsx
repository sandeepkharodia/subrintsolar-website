"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Sun, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-orange-600 text-white">
      {/* Background Glow */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-yellow-400/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-black">
              🌞 Haryana's Trusted Solar Installation Company
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight lg:text-7xl">
              Save Up To
              <span className="block text-yellow-300">
                90% On Electricity Bills
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg text-gray-200">
              Subrint Solar provides residential, commercial and industrial
              solar solutions across Haryana with premium equipment,
              expert installation and government subsidy assistance.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-xl bg-orange-500 px-8 py-4 font-semibold transition hover:bg-orange-600"
              >
                Get Free Quote
              </a>

              <a
                href="tel:+919650704703"
                className="flex items-center gap-2 rounded-xl border border-white/30 px-8 py-4 font-semibold hover:bg-white/10"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <h2 className="text-4xl font-bold text-yellow-300">500+</h2>
                <p className="text-sm text-gray-300">
                  Happy Customers
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-yellow-300">2 MW+</h2>
                <p className="text-sm text-gray-300">
                  Installed Capacity
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-yellow-300">25 Years</h2>
                <p className="text-sm text-gray-300">
                  Panel Warranty
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="rounded-3xl border border-white/20 bg-white/10 p-10 backdrop-blur-xl shadow-2xl">

              <div className="flex items-center gap-4">
                <Sun className="text-yellow-300" size={40} />
                <div>
                  <h3 className="text-2xl font-bold">
                    Solar Energy
                  </h3>
                  <p className="text-gray-300">
                    Clean • Reliable • Affordable
                  </p>
                </div>
              </div>

              <div className="mt-10 space-y-6">

                <div className="flex items-center gap-4">
                  <Zap className="text-yellow-300" />
                  <span>Residential Rooftop Solar</span>
                </div>

                <div className="flex items-center gap-4">
                  <Zap className="text-yellow-300" />
                  <span>Commercial Solar Systems</span>
                </div>

                <div className="flex items-center gap-4">
                  <Zap className="text-yellow-300" />
                  <span>Industrial Solar Projects</span>
                </div>

                <div className="flex items-center gap-4">
                  <Zap className="text-yellow-300" />
                  <span>Government Subsidy Support</span>
                </div>

              </div>

              <a
                href="#services"
                className="mt-10 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-300"
              >
                Explore Services
                <ArrowRight size={18} />
              </a>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}