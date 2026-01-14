export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">How It Works</h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {[
            "Create an Account",
            "Browse Jobs",
            "Apply & Get Hired",
          ].map((step, i) => (
            <div key={i}>
              <div className="text-4xl font-bold text-blue-600">{i + 1}</div>
              <h3 className="text-xl font-semibold mt-3">{step}</h3>
              <p className="text-gray-600 mt-2">
                Simple and easy process for everyone.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
