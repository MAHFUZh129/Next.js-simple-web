import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-24 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Find Your Dream Job <br />
            <span className="text-yellow-300">Build Your Career</span>
          </h1>

          <p className="mt-6 text-lg text-blue-100 max-w-xl">
            Explore thousands of job opportunities from top companies.
            Simple, fast and reliable job listings to boost your career.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/items"
              className="px-6 py-3 rounded-md bg-white text-blue-700 font-semibold hover:bg-gray-100 transition"
            >
              Browse Jobs
            </Link>

            <Link
              href="/login"
              className="px-6 py-3 rounded-md border border-white text-white hover:bg-white hover:text-blue-700 transition"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="https://i.ibb.co/9H7FzQm/job-search.png"
            alt="Job Search"
            className="w-full max-w-md mx-auto"
          />
        </div>

      </div>
    </section>
  );
}
