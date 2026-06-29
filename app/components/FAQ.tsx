const faqs = [
  {
    question: "Do you provide rooftop solar installation?",
    answer:
      "Yes, we provide complete rooftop solar solutions for residential, commercial, and industrial customers.",
  },
  {
    question: "Do you help with government subsidies?",
    answer:
      "Yes, we assist customers with PM Surya Ghar, PM-KUSUM, and other applicable solar subsidy programs.",
  },
  {
    question: "What warranty do you provide?",
    answer:
      "Solar panels come with up to 25 years performance warranty, while inverters carry manufacturer warranty depending on the brand.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We primarily serve Haryana, Delhi NCR, and nearby regions for solar EPC projects.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h3 className="font-bold text-lg text-slate-900">
                {faq.question}
              </h3>

              <p className="mt-3 text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}