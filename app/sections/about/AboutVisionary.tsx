export const AboutVisionary = () => {
  return (
    <section className="max-w-6xl mx-auto px-6">
      {/* Heading */}
      <h2 className="heading3 text-center mb-4 text-navy-950">Who We Are</h2>

      {/* Subheading */}
      <p className="text-lg text-center max-w-3xl mx-auto text-grey-600 max-mobile:text-base">
        RejoiceHub LLP is an Indian IT services & consulting company
        headquartered in Surat, Gujarat, founded in 2019. It specializes in
        full-stack software development and AI/ML-powered digital solutions for
        clients worldwide.
      </p>

      {/* Tagline */}
      <p className="text-lg text-center max-w-3xl mx-auto text-primary mt-4 italic">
        We exist to make frontier AI accessible to everyone.
      </p>

      {/* Vision & Mission Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left pt-10">
        {/* Vision Card */}
        <div className="bg-primary-300 p-3 rounded-2xl max-mobile:p-2">
          <div className="border border-solid border-primary-200 rounded-[14px] bg-primary-100 p-6 max-mobile:p-3">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Our Vision
            </h3>
            <p className="text-base text-light leading-relaxed">
              We believe in a future where AI is abundant and accessible. We
              aspire to empower the world to build with and benefit from the
              most significant technology of our time.
            </p>
          </div>
        </div>

        {/* Mission Card */}
        <div className="bg-primary-300 p-3 rounded-2xl max-mobile:p-2">
          <div className="border border-solid border-primary-200 rounded-[14px] bg-primary-100 p-6 max-mobile:p-3">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Our Mission
            </h3>
            <p className="text-base text-light leading-relaxed">
              Founded by visionary researchers and engineers, we challenge
              traditional AI approaches. Our mission is to democratize AI
              through open, efficient solutions that prioritize human values.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
