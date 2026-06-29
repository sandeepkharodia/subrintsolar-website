const testimonials = [
  {
    name: "Rajesh Kumar",
    text: "Professional installation and excellent service. Highly recommended.",
  },
  {
    name: "Sunita Sharma",
    text: "Very satisfied with our rooftop solar project. Great support team.",
  },
  {
    name: "Amit Yadav",
    text: "Quality products and timely installation. Excellent experience.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="bg-gray-100 p-8 rounded-xl shadow"
            >

              <p className="text-gray-600 italic">
                "{item.text}"
              </p>

              <h3 className="font-bold mt-6 text-orange-500">
                {item.name}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}