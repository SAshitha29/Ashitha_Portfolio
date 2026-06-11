import { useState } from "react";

export default function GDSCCard() {
  const [selectedImage, setSelectedImage] = useState(null);

  const posters = [
    "/experience/gdsc/poster1.jpg",
    "/experience/gdsc/poster2.jpg",
    "/experience/gdsc/poster3.jpg",
    "/experience/gdsc/poster4.jpg",
    "/experience/gdsc/poster5.jpg",
    "/experience/gdsc/poster6.jpg",
  ];

  return (
    <>
      <div
        className="
        rounded-[32px]
        border border-gray-200
        bg-white
        shadow-sm
        p-6 md:p-8

        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
        "
      >
        {/* TOP SECTION */}

        <div
  className="
  flex
  flex-col
  lg:flex-row
  gap-8
  items-start
  "
>
          
          {/* LEFT SIDE */}

          <div className="flex-1">
            <span
              className="
              text-sm
              tracking-[0.2em]
              uppercase
              text-[#7C5CC4]
              "
            >
              Community Experience
            </span>

            <h2
              className="
              text-2xl md:text-3xl lg:text-4xl
              text-[#7C5CC4]
              font-semibold
              mt-4
              mb-3
              "
            >
              Design Team Member
            </h2>

            <p className="text-xl text-gray-600">
              Google Developer Student Clubs
            </p>

            <p className="text-gray-500 mb-4">
              2024 – 2025
            </p>

            <p
              className="
              text-gray-700
              leading-relaxed
              mb-8
              "
            >
              Contributed to branding, social media
              campaigns, event promotions and visual
              communication for GDSC activities.
            </p>

            {/* Contributions */}

            <h3 className="text-xl font-medium mb-4">
              Contributions
            </h3>

            <ul
              className="
              space-y-2
              text-gray-700
              mb-8
              "
            >
              <li>• Event Posters & Banners</li>
              <li>• Social Media Creatives</li>
              <li>• Event Promotion Designs</li>
              <li>• Branding Assets</li>
              <li>• Community Engagement Visuals</li>
            </ul>

            {/* Learnings */}

            <h3 className="text-xl font-medium mb-4">
              What I Learned
            </h3>

            <ul
              className="
              space-y-2
              text-gray-700
              "
            >
              <li>• Visual Storytelling</li>
              <li>• Team Collaboration</li>
              <li>• Brand Consistency</li>
              <li>• Design Systems</li>
              <li>• Event Marketing</li>
            </ul>
          </div>

          {/* RIGHT SIDE */}

       {/* RIGHT SIDE */}

<div
  className="
w-full
lg:w-[420px]
flex
justify-center
items-center
mt-4
lg:mt-0
"
>
 <div
  className="
  grid
  grid-cols-2
  sm:grid-cols-2
  gap-3
  md:gap-4
  "
>
    {posters.map((poster, index) => (
      <img
        key={index}
        src={poster}
        alt=""
        onClick={() => setSelectedImage(poster)}
        className="
       w-[130px]
h-[130px]
sm:w-[150px]
sm:h-[150px]
md:w-[180px]
md:h-[180px]
        object-cover
        rounded-xl
        cursor-pointer
        shadow-md
        hover:scale-105
        transition
        duration-300
        "
      />
    ))}
  </div>
</div>
        </div>
</div>
          

            
          
        
     

      {/* POPUP */}

      {selectedImage && (
        <div
          className="
          fixed
          inset-0
          bg-black/40
          backdrop-blur-md
          z-[999]
          flex
          items-center
          justify-center
          p-6
          "
          onClick={() =>
            setSelectedImage(null)
          }
        >
          <img
            src={selectedImage}
            alt=""
            className="
           max-h-[85vh]
max-w-[95vw]
md:max-w-[90vw]
            rounded-3xl
            shadow-2xl
            "
          />
        </div>
      )}
    </>
  );
}