export default function InternshipCard() {
  return (
   <div
  className="
  rounded-[32px]
border border-gray-200
bg-white
shadow-sm
p-6 md:p-8
flex
flex-col
lg:flex-row
gap-8
items-start

  hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]
  hover:-translate-y-1
  transition-all
  duration-300
  "
>
      {/* LEFT SIDE */}

      <div className="flex-1 flex flex-col">
        <span
          className="
          text-sm
          tracking-[0.2em]
          uppercase
          text-[#7C5CC4]
          mb-4
          "
        >
          Experience
        </span>

        <h3
         className="
text-2xl
md:text-3xl
lg:text-4xl
text-[#7C5CC4]
font-semibold
mb-3
"
        >
          Full Stack Java Intern
        </h3>

        <p className="text-xl text-gray-600 mb-2">
  EchoBrains
</p>

<p className="text-gray-500 mb-10">
  27 Jan 2026 – 31 May 2026 · 4 Months
</p>


        {/* What I Learned */}

        <h4 className="text-2xl mb-5">
          What I Learned
        </h4>

        <ul className="space-y-3 text-gray-700 mb-10">
          <li>• Frontend Development using React</li>
  <li>• Backend Development using Spring Boot</li>
  <li>• REST API Design & Integration</li>
  <li>• MySQL Database Management</li>
  <li>• Responsive UI Development</li>
  <li>• Full Stack Project Development</li>
  <li>• Team Collaboration & SDLC Practices</li>
        </ul>

        


      </div>

      {/* RIGHT SIDE */}

     <div
  className="
  relative
  w-full
lg:w-[450px]
  flex
  flex-col
  items-center
  justify-center
  "
>
  <div
    className="
    absolute
   w-[250px]
h-[250px]
md:w-[350px]
md:h-[350px]
lg:w-[450px]
lg:h-[450px]
    rounded-full
    bg-[#EDE7F6]
    blur-3xl
    opacity-60
    "
  ></div>

  <img
    src="/experience/internship/company-logo.png"
    alt="Company Logo"
    className="
    relative
    w-24
    mb-8
    object-contain
    z-10
    "
  />

  <div
    className="
    certificate-float
    relative
    z-10
    rounded-3xl
    overflow-hidden
    bg-white
    border border-gray-200
    w-full
max-w-[450px]
      p-3
    "
  >
    <p
      className="
      text-sm
      uppercase
      tracking-[0.2em]
      text-[#B8A2E3]
      p-4
      "
    >
      Internship Certificate
    </p>
<a
  href="/experience/internship/certificate.jpg"
  target="_blank"
>
    <img
  src="/experience/internship/certificate.jpg"
  alt="Internship Certificate"
  className="
  w-full
  max-h-[300px]
md:max-h-[450px]
  object-contain
  "
/>
</a>

  </div>
</div>
    </div>
  );
}