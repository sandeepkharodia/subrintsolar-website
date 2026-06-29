export default function Projects() {

  const projects = [
    "/images/rooftop.jpg",
    "/images/project2.jpeg",
    "/images/hero.jpg",
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Our Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((image) => (

            <div
              key={image}
              className="rounded-xl overflow-hidden shadow-lg bg-white"
            >

              <img
                src={image}
                className="w-full h-64 object-cover"
                alt="Project"
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}