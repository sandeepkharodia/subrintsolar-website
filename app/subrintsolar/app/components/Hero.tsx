export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600')",
      }}
    >
      <div className="bg-black/60 p-10 rounded-xl text-center max-w-3xl">
        <h1 className="text-5xl font-bold mb-6">
          Powering India with Clean Solar Energy
        </h1>

        <p className="text-xl mb-8">
          Rooftop Solar • Ground Mounted Solar • Battery Storage • Net Metering
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="tel:+919650704703"
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold"
          >
            📞 Call Now
          </a>

          <a
            href="#contact"
            className="bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-lg font-semibold"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}