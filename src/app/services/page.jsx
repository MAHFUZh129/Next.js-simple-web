export default function Services() {
  return (
    <section className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-800">
            Our Services
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide simple and effective services to connect job seekers
            with the right opportunities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* Service Card 1 */}
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600">
              Job Listings
            </h3>
            <p className="mt-4 text-gray-600">
              Browse a wide range of job opportunities from trusted companies
              across multiple industries.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600">
              Job Details
            </h3>
            <p className="mt-4 text-gray-600">
              View complete job descriptions, requirements, salary range,
              and company information in one place.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600">
              Secure Access
            </h3>
            <p className="mt-4 text-gray-600">
              A simple authentication system ensures protected access to
              features like adding new job listings.
            </p>
          </div>

          {/* Service Card 4 */}
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600">
              Add New Jobs
            </h3>
            <p className="mt-4 text-gray-600">
              Authenticated users can easily post new job opportunities using
              a simple and user-friendly form.
            </p>
          </div>

          {/* Service Card 5 */}
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600">
              Responsive Design
            </h3>
            <p className="mt-4 text-gray-600">
              Fully responsive layout that works smoothly on mobile, tablet,
              and desktop devices.
            </p>
          </div>

          {/* Service Card 6 */}
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600">
              Fast Performance
            </h3>
            <p className="mt-4 text-gray-600">
              Built with Next.js App Router to ensure fast loading and smooth
              navigation across pages.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
