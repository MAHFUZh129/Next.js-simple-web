export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">What Users Say</h2>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {[1, 2].map(i => (
            <div key={i} className="bg-white p-6 rounded shadow">
              <p className="text-gray-600">
                “This platform helped me find my dream job within days.”
              </p>
              <h4 className="mt-4 font-semibold">— Mahfuz</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
