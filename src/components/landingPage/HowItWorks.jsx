import { MdPersonAdd, MdSearch, MdCheckCircle } from "react-icons/md";

export default function HowItWorks() {
  const steps = [
    {
      title: "Create an Account",
      desc: "Sign up in minutes and build your professional profile.",
      icon: <MdPersonAdd size={36} />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Browse Jobs",
      desc: "Explore thousands of jobs that match your skills.",
      icon: <MdSearch size={36} />,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Apply & Get Hired",
      desc: "Apply easily and start your career journey.",
      icon: <MdCheckCircle size={36} />,
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <div className="py-10 bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold">
          How It <span className="text-blue-600">Works</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Start your job search in just three simple steps
        </p>

        {/* Steps */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={i}
              className="
                group
                bg-white
                p-8
                rounded-2xl
                border
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              {/* Icon + Number */}
              <div className="relative flex justify-center mb-6">
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full text-white bg-gradient-to-br ${step.color}`}
                >
                  {step.icon}
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold">
                  {i + 1}
                </span>
              </div>

              {/* Text */}
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-600 mt-3">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
