export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-800">
            Contact Us
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have questions or need support? Feel free to reach out to us.
            We are always happy to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h2>

            <p className="text-gray-600 mb-6">
              You can contact us using the information below or send us a
              message directly through the form.
            </p>

            <ul className="space-y-4 text-gray-600">
              <li>
                <span className="font-semibold">📍 Address:</span> Dhaka, Bangladesh
              </li>
              <li>
                <span className="font-semibold">📧 Email:</span> support@scic.com
              </li>
              <li>
                <span className="font-semibold">📞 Phone:</span> +880 1234-567890
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Send a Message
            </h2>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full mt-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full mt-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Your message"
                  className="w-full mt-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
