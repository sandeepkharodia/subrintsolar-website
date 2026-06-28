export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            About Subrint Solar
          </h2>

          <p className="text-gray-600 leading-8 mb-5">
            Subrint Solar is a trusted solar EPC company delivering rooftop
            solar, commercial & industrial solar, battery energy storage
            systems (BESS), solar water pumps and complete renewable energy
            solutions.
          </p>

          <p className="text-gray-600 leading-8">
            Our mission is to provide clean, affordable and reliable solar
            energy solutions with premium products, professional installation
            and excellent customer support.
          </p>
        </div>

        <div>
          <img
            src="/images/project1.jpg"
            alt="Solar Installation"
            className="rounded-2xl shadow-xl w-full"
          />
        </div>

      </div>
    </section>
  );
}