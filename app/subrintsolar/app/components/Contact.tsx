import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Contact Us
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Get In Touch
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <Phone className="text-orange-500" />
                <span>+91 9650704703</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-orange-500" />
                <span>subrintsolar@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-orange-500" />
                <span>
                  VPO Sulodha, Tehsil & District Jhajjar,
                  Haryana
                </span>
              </div>

            </div>

          </div>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg p-4"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg p-4"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full border rounded-lg p-4"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full border rounded-lg p-4"
            ></textarea>

            <button
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold"
            >
              Send Enquiry
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}