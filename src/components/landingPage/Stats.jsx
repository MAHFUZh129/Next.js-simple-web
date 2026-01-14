export default function Stats() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <h3 className="text-3xl font-bold text-blue-600">1K+</h3>
          <p className="text-gray-600 mt-2">Jobs Posted</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-blue-600">500+</h3>
          <p className="text-gray-600 mt-2">Companies</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-blue-600">10K+</h3>
          <p className="text-gray-600 mt-2">Candidates</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-blue-600">95%</h3>
          <p className="text-gray-600 mt-2">Success Rate</p>
        </div>
      </div>
    </section>
  );
}
