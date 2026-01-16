import Link from "next/link";
import { MdLocationOn, MdWorkOutline } from "react-icons/md";

export default function FeaturedJobs() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      type: "Full Time",
      location: "Remote",
      salary: "$1200 / month",
    },
    {
      id: 2,
      title: "Backend Developer",
      type: "Part Time",
      location: "Dhaka, BD",
      salary: "$900 / month",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      type: "Contract",
      location: "Remote",
      salary: "$800 / month",
    },
  ];

  return (
    <div className="py-10 bg-gradient-to-br from-blue-100 via-amber-50 to-purple-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">
          Featured <span className="text-blue-600">Jobs</span>
        </h2>
        <p className="text-gray-600 text-center mt-3">
          Discover opportunities from trusted companies
        </p>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {jobs.map(job => (
            <div
              key={job.id}
              className="
                group
                bg-white/90
                backdrop-blur
                p-7
                rounded-2xl
                border
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              {/* Badge */}
              <span className="inline-block mb-3 px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-600">
                Featured
              </span>

              {/* Title */}
              <h3 className="text-xl font-semibold group-hover:text-blue-600 transition">
                {job.title}
              </h3>

              {/* Meta */}
              <div className="flex items-center gap-4 text-gray-500 text-sm mt-2">
                <span className="flex items-center gap-1">
                  <MdWorkOutline /> {job.type}
                </span>
                <span className="flex items-center gap-1">
                  <MdLocationOn /> {job.location}
                </span>
              </div>

              {/* Salary */}
              <p className="mt-4 text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {job.salary}
              </p>

              {/* call to act */}
              <Link
                href="/items"
                className="
                  inline-flex items-center justify-center
                  mt-6 w-full py-2.5
                  rounded-lg
                  bg-blue-600 text-white
                  hover:bg-blue-700
                  transition
                "
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
