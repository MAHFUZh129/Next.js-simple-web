import { MdWork, MdBusiness, MdGroups, MdTrendingUp } from "react-icons/md";

export default function Stats() {
  const stats = [
    {
      value: "1K+",
      label: "Jobs Posted",
      icon: <MdWork size={34} />,
      color: "from-blue-500 to-blue-600",
    },
    {
      value: "500+",
      label: "Companies",
      icon: <MdBusiness size={34} />,
      color: "from-purple-500 to-purple-600",
    },
    {
      value: "10K+",
      label: "Candidates",
      icon: <MdGroups size={34} />,
      color: "from-green-500 to-green-600",
    },
    {
      value: "95%",
      label: "Success Rate",
      icon: <MdTrendingUp size={34} />,
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <div className="py-10 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold">
          Our <span className="text-blue-600">Impact</span>
        </h2>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto">
          Trusted by thousands of job seekers and companies worldwide
        </p>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="
                group
                bg-white/80
                backdrop-blur
                p-6
                rounded-2xl
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              {/* Icon */}
              <div
                className={`mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-full text-white bg-gradient-to-br ${stat.color}`}
              >
                {stat.icon}
              </div>

              {/* Number */}
              <h3 className="text-3xl font-extrabold text-gray-800">
                {stat.value}
              </h3>

              {/* Label */}
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
