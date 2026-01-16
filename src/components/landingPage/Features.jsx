import { MdVerified, MdFlashOn, MdBusiness } from "react-icons/md";

export default function Features() {
  const features = [
    {
      title: "Verified Jobs",
      desc: "Every job is carefully reviewed to ensure authenticity.",
      icon: <MdVerified size={40} className="text-blue-600" />,
    },
    {
      title: "Fast Application",
      desc: "Apply to jobs quickly with a smooth and simple process.",
      icon: <MdFlashOn size={40} className="text-purple-600" />,
    },
    {
      title: "Trusted Companies",
      desc: "We work with reliable and well-known organizations.",
      icon: <MdBusiness size={40} className="text-green-600" />,
    },
  ];

  return (
    <div className="py-10 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold tracking-tight">
          Why <span className="text-blue-600">Choose Us</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Everything you need to find your next job — faster, safer, and easier.
        </p>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((item, i) => (
            <div
              key={i}
              className="
                group
                relative
                p-8
                rounded-2xl
                bg-white
                border
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              {/* icon */}
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-full bg-gray-100 group-hover:scale-110 transition">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-3">{item.desc}</p>

              {/*effect*/}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-blue-200 transition"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
