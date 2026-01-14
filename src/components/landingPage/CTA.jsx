import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-blue-600 text-white text-center">
      <h2 className="text-3xl font-bold">
        Ready to Take the Next Step?
      </h2>
      <p className="mt-4 text-blue-100">
        Join today and explore thousands of opportunities.
      </p>
      <Link
        href="/login"
        className="inline-block mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100"
      >
        Get Started
      </Link>
    </section>
  );
}
