'use client';

export default function VideoSection() {
  return (
    /**
     * min-h-[calc(100vh-...)] ensures video fits
     * below address bar + review bar + navbar
     *
     * Adjust the px value if your top bars change
     */
    <section className="relative w-full min-h-[calc(100vh-120px)] overflow-hidden">

      {/* Video */}
      <video
        className="
          absolute inset-0
          w-full h-full
          object-cover
        "
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/Images/videos/plan.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (kept light to preserve video quality) */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Text Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-4">
        <div className="max-w-5xl text-center">

          <h1 className="
            text-white
            text-2xl sm:text-3xl md:text-5xl
            font-extrabold
            leading-tight
            mb-4
          ">
            Maruthi Auto Components
          </h1>

          <h1 className="
            text-white
            text-xl sm:text-1xl md:text-3xl
            font-extrabold
            leading-tight
            mb-4
          ">
            Upcoming Factory Layout Plan
          </h1>
          <p className="
            text-gray-200
            text-base sm:text-lg md:text-xl
            leading-relaxed
          ">

            We are expanding to a new plot at <span className="font-semibold text-white">
              Japanese Park, Vasanthanarsapura, Tumkur</span> 🚧
          </p>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 w-full flex justify-center z-10">
        <span className="text-white text-2xl animate-bounce">↓</span>
      </div>

    </section>
  );
}
