import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Globe,
  MapPin,
  Navigation,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";
import ContactCard from "@/components/shared/ContactCard";

/* Animation Variants */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-20 px-4 md:px-10 lg:px-20 bg-[#122017]"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(#38e07b 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <motion.div
        className="relative z-10 max-w-[1280px] mx-auto flex flex-col gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="h-1 w-10 bg-[#38e07b] rounded-full shadow-[0_0_10px_#38e07b]" />
            <span className="text-[#38e07b] text-sm font-bold uppercase tracking-widest">
              Contact Base
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Connect with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#38e07b]/80">
              Eroots
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl text-lg">
            Ready to accelerate your journey in EV technology? Reach out to our
            training experts or visit our campus.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left */}
          <motion.div variants={stagger} className="flex flex-col gap-6">
            <motion.div variants={fadeUp}>
              <ContactCard
                icon={<Mail className="w-6 h-6" />}
                label="Email"
                value="mail@erootstechnologies.com"
                href="mailto:mail@erootstechnologies.com"
                type="link"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <ContactCard
                icon={<Phone className="w-6 h-6" />}
                label="Phone"
                value="9746 45 38 48"
                href="tel:+919746453848"
                type="link"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <ContactCard
                icon={<Globe className="w-6 h-6" />}
                label="Website"
                value="www.erootstechnologies.com"
                href="https://www.erootstechnologies.com"
                type="external"
              />
            </motion.div>

            {/* Address */}
            <motion.div
              variants={fadeUp}
              className="group flex items-start gap-5 p-2 pr-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-[#38e07b]/50 transition-all"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#122017] border border-[#38e07b]/20 group-hover:bg-[#38e07b] text-[#38e07b] group-hover:text-[#122017] transition">
                <MapPin />
              </div>
              <div className="py-3">
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                  Address
                </span>
                <p className="text-white mt-1 leading-snug">
                  Basement, Park Centre,
                  <br />
                  Kinfra Techno Industrial Park,
                  <br />
                  Kakkancheri, Malappuram, Kerala
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right – Google Maps */}
          <motion.div
            variants={fadeUp}
            className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <iframe
              title="Eroots Technologies Location"
              src="https://www.google.com/maps?q=Kinfra+Techno+Industrial+Park+Kakkancheri&output=embed"
              className="w-full h-[420px] grayscale contrast-125"
              loading="lazy"
            />

            {/* Overlay Button */}
            <a
              href="https://maps.google.com/?q=Kinfra+Techno+Industrial+Park+Kakkancheri"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-6 right-6 bg-[#38e07b] hover:bg-[#38e07b]/90 text-[#122017] font-bold py-3 px-6 rounded-full flex items-center gap-2"
            >
              <Navigation className="w-5 h-5" />
              Get Directions
            </a>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          variants={fadeUp}
          className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Eroots Technologies. All rights reserved.
          </p>

          <div className="flex gap-4">
            <FooterSocialIcon
              icon={<Instagram size={20} />}
              href="https://www.instagram.com/erootstechnologies?igsh=MnJ6cHFuYjQ0ZWs"
            />
            <FooterSocialIcon icon={<Linkedin size={20} />} href="#" />
            <FooterSocialIcon icon={<Twitter size={20} />} href="#" />
            <FooterSocialIcon
              icon={<Facebook size={20} />}
              href="https://www.facebook.com/share/19aUoUSfVF/"
            />
          </div>
        </motion.footer>
      </motion.div>
    </section>
  );
}

/* Social Icon */
function FooterSocialIcon({
  icon,
  href,
}: {
  icon: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#38e07b] hover:text-[#122017] transition"
    >
      {icon}
    </a>
  );
}
