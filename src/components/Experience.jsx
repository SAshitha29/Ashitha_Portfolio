import InternshipCard from "./experience/InternshipCard";
import FreelanceCard from "./experience/FreelanceCard";
import GDSCCard from "./experience/GDSCCard";

export default function Experience() {
  return (
    <section
  id="experience"
  className="
py-16
md:py-24
lg:py-32
px-4
sm:px-6
md:px-[8%]
bg-gradient-to-r
from-[#F3EEFF]
via-[#EDE7F6]
to-[#F3EEFF]
"
>
      <div className="text-center mb-20">
       <h2 className="text-[#7C5CC4] text-4xl md:text-5xl lg:text-6xl mb-4">
          Experience
        </h2>

        <p className="text-gray-500 text-sm md:text-base px-4">
          My journey across development,
          design, and creative problem solving.
        </p>
      </div>

      <div className="space-y-8 md:space-y-12 lg:space-y-16">
        <InternshipCard />
        <FreelanceCard />
        <GDSCCard />
      </div>
    </section>
  );
}