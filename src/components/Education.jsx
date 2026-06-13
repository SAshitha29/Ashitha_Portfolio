export default function Education() {
  const education = [
    {
      year: "2022 - 2026",
      title: "B.E. in Computer Science & Engineering",
      institute: "Guru Nanak Dev Engineering College, Bidar (VTU)",
      score: "CGPA: 9.07 / 10",
    },
    {
      year: "2020 - 2022",
      title: "12th – Pre-University Board",
      institute: "Shahu Maharaj PU College, Bidar",
      score: "Percentage: 96.5%",
    },
    {
      year: "2020",
      title: "10th – Karnataka State Board",
      institute: "Guru Nanak Public School, Bidar",
      score: "Percentage: 90.4%",
    },
  ];

  return (
    <section
      id="education"
      className="py-24 px-6 md:px-16 lg:px-24 bg-white"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <h2 className="text-[#7C5CC4] text-4xl md:text-5xl mb-4">
            Education
          </h2>

          <p className="text-gray-600">
            My academic journey and achievements.
          </p>
        </div>

        <div className="relative">

          {/* Timeline Line */}

          <div
            className="
            absolute
            left-4
            md:left-1/2
            top-0
            bottom-0
            w-[3px]
            bg-[#D8C8F7]
            md:-translate-x-1/2
            "
          />

          {education.map((item, index) => (
            <div
              key={index}
              className={`
              relative
              mb-16
              flex
              flex-col
              md:flex-row
              ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              }
              `}
            >
              {/* Dot */}

              <div
                className="
                absolute
                left-4
                md:left-1/2
                w-5
                h-5
                bg-[#7C5CC4]
                rounded-full
                -translate-x-1/2
                mt-6
                "
              />

              {/* Card */}

              <div
                className="
                ml-12
                md:ml-0
                md:w-[45%]
                p-6
                bg-[#F8F5FF]
                border
                border-[#E5DDF7]
                rounded-3xl
                shadow-sm
                "
              >
                <p className="text-[#7C5CC4] font-medium mb-2">
                  {item.year}
                </p>

                <h3 className="text-xl md:text-2xl mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-700 mb-2">
                  {item.institute}
                </p>

                <p className="font-medium text-gray-900">
                  {item.score}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}