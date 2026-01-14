export default function About() {
  return (
    <section className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            About Our Platform
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A simple job listing platform built with modern web technologies
            to help users explore opportunities easily.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Left */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              What We Do
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              This application allows users to browse job listings, view job
              details, and explore opportunities without creating an account.
              A simple authentication system is implemented to protect certain
              routes like adding a new job.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              The project is developed as part of a job task using Next.js App
              Router, focusing on clean UI, simple logic, and real-world use
              cases.
            </p>
          </div>

          {/* Right */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Key Features
            </h2>
            <ul className="mt-4 space-y-3 text-gray-600 list-disc list-inside">
              <li>Public landing page with multiple sections</li>
              <li>Mock authentication using cookies</li>
              <li>Public job listing and job details pages</li>
              <li>Protected page for adding new jobs</li>
              <li>Responsive design for all devices</li>
            </ul>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Technology Stack
          </h2>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 border rounded">Next.js 15/16</div>
            <div className="p-4 border rounded">React</div>
            <div className="p-4 border rounded">Tailwind CSS</div>
            <div className="p-4 border rounded">Express.js</div>
          </div>
        </div>

      </div>
    </section>
  );
}
