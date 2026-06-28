const services = [
  "Rooftop Solar",
  "Ground Mounted Solar",
  "Commercial Solar",
  "Industrial Solar",
  "Battery Energy Storage (BESS)",
  "Net Metering",
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service}
              className="bg-white rounded-xl shadow-lg p-8 hover:scale-105 transition"
            >
              <h3 className="text-xl font-bold text-blue-900">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}