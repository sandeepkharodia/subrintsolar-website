const features = [
  "Experienced Engineers",
  "Premium Solar Panels",
  "MNRE Standard Installation",
  "25-Year Panel Warranty",
  "Government Subsidy Assistance",
  "Fast Installation",
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Subrint Solar?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((item) => (
            <div
              key={item}
              className="bg-orange-100 rounded-xl p-6 shadow"
            >
              ✅ {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}