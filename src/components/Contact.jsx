import { trackEvent } from "../utils/analytics";
export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 lg:py-32 px-6 md:px-[8%] bg-white"
    >
      <div className="text-center mb-20">
        <h2 className="text-[#7C5CC4] text-3xl md:text-5xl lg:text-6xl mb-5">
          Contact
        </h2>

        <p className="text-gray-500">
          Let's build something meaningful together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT */}

        <div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
            Let's Build
            <br />
            Something Together
          </h3>

          <p
            className="
            text-lg
            text-gray-600
            leading-relaxed
            max-w-xl
            mb-10
            "
          >
            Whether it's UI/UX design,
            frontend development,
            or creative digital experiences,
            I'm always open to discussing
            exciting opportunities and
            collaborations.
          </p>

          <div
  className="
  flex
  flex-col
  sm:flex-row
  gap-4
  items-center
  sm:items-start
  "
>

            {/* DOWNLOAD RESUME */}

            <a
              href="/resume/Ashitha_Resume.pdf"
              download
              onClick={() => trackEvent("resume_download")}
              className="
              px-8 py-4
              rounded-full
              bg-[#7C5CC4]
              text-white
              hover:opacity-90
              transition
              "
            >
              Download Resume
            </a>

            {/* VIEW RESUME */}

            <a
              href="/resume/Ashitha_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("resume_view")}
              className="
              px-8 py-4
              rounded-full
              border
              hover:border-[#7C5CC4]
              hover:text-[#7C5CC4]
              transition
              "
            >
              View Resume
            </a>

          </div>
        </div>

        {/* RIGHT */}

        <div
  className="
  grid
  grid-cols-1
  sm:grid-cols-2
  gap-5
  max-w-2xl
  mx-auto
  "
>
          {[
            ["Email", "samsheashitha@gmail.com"],
            ["Phone", "+91 9972119821"],
            ["LinkedIn", "View Profile →"],
            ["GitHub", "View Projects →"],
            ["Location", "Karnataka, India"],
          ].map((item, index) => (
            <div
              key={index}
              onClick={() => {
                if (item[0] === "LinkedIn") {
                  trackEvent("linkedin_click");

                  window.open(
                    "https://www.linkedin.com/in/samsheashitha29-intern",
                    "_blank"
                  );
                }

                if (item[0] === "GitHub") {
                  trackEvent("github_click");

                  window.open(
                    "https://github.com/SAshitha29",
                    "_blank"
                  );
                }
              }}
              className="
              p-6
              rounded-3xl
              border
              border-gray-200
              bg-[#F5F1FB]
              shadow-sm
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
              duration-300
              cursor-pointer
              "
            >
              <p
                className="
                text-sm
                uppercase
                tracking-[0.15em]
                text-[#7C5CC4]
                mb-3
                "
              >
                {item[0]}
              </p>

              <p
  className="
  text-gray-700
  break-words
  "
>
                {item[1]}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}