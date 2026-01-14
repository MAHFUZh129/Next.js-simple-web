import Link from "next/link";

export default function FeaturedJobs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Featured Jobs</h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map(job => (
            <div key={job} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Frontend Developer</h3>
              <p className="text-gray-600 mt-2">Remote • Full Time</p>
              <p className="text-blue-600 font-semibold mt-2">$1200/month</p>
              <Link
                href="/items"
                className="inline-block mt-4 text-blue-600 hover:underline"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
