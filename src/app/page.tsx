"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <main
      onMouseMove={(e) =>
        setMousePosition({
          x: (e.clientX - window.innerWidth / 2) / 30,
          y: (e.clientY - window.innerHeight / 2) / 30,
        })
      }
      className="overflow-hidden"
    >
      {/* Interactive Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
          }}
          style={{
            top: "10%",
            left: "10%",
          }}
        />

        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-3xl"
          animate={{
            x: -mousePosition.x,
            y: -mousePosition.y,
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
          }}
          style={{
            bottom: "10%",
            right: "10%",
          }}
        />
      </div>

      {/* Navbar */}
      <div className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 shadow-sm px-4">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl font-bold">
            JC Fabrication
          </a>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {[
              ["About", "#about"],
              ["Services", "#services"],
              ["Products", "/products"],
              ["Team", "#team"],
              ["Contact", "/contact"],
              ["Admin", "/admin"],
            ].map(([label, link]) => (
              <li key={label}>
                <motion.a
                  href={link}
                  whileHover={{ scale: 1.1 }}
                >
                  {label}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Hero */}
      <section className="hero min-h-[80vh] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white relative">
        <div className="hero-content text-center">
          <div className="max-w-4xl bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-2xl">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Precision Fabrication &
              <br />
              Engineering Solutions
            </motion.h1>

            <motion.p
              className="py-8 text-lg md:text-xl text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
              }}
            >
              We provide welding, structural fabrication,
              sheet metal work, machining and custom
              engineering solutions.
            </motion.p>

            <motion.a
              href="/contact"
              className="btn btn-primary btn-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request a Service
            </motion.a>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-base-100 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <h3 className="text-5xl font-bold text-primary">
                250+
              </h3>
              <p className="mt-3">Projects Completed</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <h3 className="text-5xl font-bold text-primary">
                15+
              </h3>
              <p className="mt-3">Years Experience</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <h3 className="text-5xl font-bold text-primary">
                98%
              </h3>
              <p className="mt-3">Client Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-16"
      >
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h2>

        <p className="text-lg text-white-600">
          JC Fabrication Company delivers reliable
          metal fabrication services with a strong
          focus on quality, safety, innovation and
          timely delivery. We serve industrial,
          commercial and custom engineering projects
          with precision and professionalism.
        </p>
      </section>

      {/* Services */}
      <section
        id="services"
        className="bg-base-200 py-16 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              "Welding",
              "Structural Fabrication",
              "Sheet Metal",
              "CNC Machining",
            ].map((service) => (
              <motion.div
                key={service}
                className="card bg-base-100 shadow-xl"
                whileHover={{
                  y: -10,
                  scale: 1.05,
                }}
              >
                <div className="card-body">
                  <h3 className="card-title">
                    {service}
                  </h3>

                  <p>
                    Professional fabrication
                    service for industrial and
                    commercial projects.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
          >
            Products
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Steel Tanks",
              "Machine Frames",
              "Custom Components",
            ].map((product) => (
              <motion.div
                key={product}
                className="card bg-base-100 shadow-xl"
                whileHover={{
                  y: -10,
                  scale: 1.05,
                }}
              >
                <div className="card-body">
                  <h3 className="card-title">
                    {product}
                  </h3>

                  <p>
                    Fabricated according to
                    customer requirements.
                  </p>

                  <div className="card-actions justify-end">
                    <a
                      href="/products"
                      className="btn btn-primary btn-sm"
                    >
                      View
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        id="team"
        className="bg-base-200 py-16 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
          >
            Our Team
          </motion.h2>

          <p className="text-lg">
            Our team includes engineers,
            supervisors, welders and fabrication
            specialists dedicated to delivering
            quality workmanship.
          </p>
        </div>
      </section>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918891559901"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.div
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaWhatsapp className="text-5xl text-green-500" />
        </motion.div>
      </a>

      {/* Footer */}
      <footer className="footer footer-center bg-slate-900 text-white p-10">
        <aside>
          <p>
            © 2026 JC Fabrication Company.
            All rights reserved.
          </p>
        </aside>
      </footer>
    </main>
  );
}