import { MdFormatQuote } from "react-icons/md";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mahfuz",
      feedback: "This platform helped me find my dream job within days.",
    },
    {
      name: "Ayesha",
      feedback: "Smooth application process and amazing job listings!",
    },
    {
      name: "Rahim",
      feedback: "I got hired in just a week. Highly recommended.",
    },
    {
      name: "Sadia",
      feedback: "Trusted companies and verified jobs made it so easy.",
    },
  ];

  return (
    <div className="py-10 bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold">
          What <span className="text-blue-600">Users Say</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          Real experiences from our happy users
        </p>

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="
                group
                relative
                bg-white
                p-8
                rounded-2xl
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              {/* Quote Icon */}
              <MdFormatQuote
                size={30}
                className="absolute -top-4 left-4 text-blue-100"
              />

              {/* Feedback */}
              <p className="text-gray-700 text-lg">{t.feedback}</p>

              {/* Name */}
              <h4 className="mt-6 font-semibold text-blue-600">
                — {t.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
