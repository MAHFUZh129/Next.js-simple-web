export default function Features() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">Why Choose Us</h2>
        <p className="text-gray-600 mt-3">
          Everything you need to find your next job
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {["Verified Jobs", "Fast Application", "Trusted Companies"].map(
            (item, i) => (
              <div key={i} className="p-6 border rounded-lg hover:shadow">
                <h3 className="text-xl font-semibold">{item}</h3>
                <p className="text-gray-600 mt-3">
                  We ensure quality and reliability in every listing.
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
