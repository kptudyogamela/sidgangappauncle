export default function QualityPolicy() {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-white min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto bg-white/90 rounded-2xl shadow-xl px-6 sm:px-10 py-12 sm:py-16 text-gray-800 scroll-mt-24">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-red-600 mb-10 tracking-tight">
          Quality Policy & Objectives
        </h1>

        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Quality Policy
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            MARUTHI AUTO COMPONENTS is committed to providing quality products at the right time,
            in the right quantity, and consistently by creating quality consciousness and
            continual improvement to satisfy the customer through training and awareness.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Quality Objectives
          </h2>
          <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 leading-relaxed space-y-3">
            <li>ZERO customer complaints</li>
            <li>Improve customer satisfaction on timely delivery & quality products</li>
            <li>Continuous improvement in quality, productivity & process systems</li>
            <li>Provide training to the employees</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
