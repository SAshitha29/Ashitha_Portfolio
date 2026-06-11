import { useState } from "react";
import BookModal from "./BookModal";

export default function FreelanceCard() {
  const [selectedBook, setSelectedBook] = useState(null);

 const books = [
  {
    title: "  Book Cover Design 01  ",
    image: "/experience/freelance/cover1-front.jpg",
  },
  {
    title: "  Book Cover Design 02  ",
    image: "/experience/freelance/cover2-front.jpg",
  },
];

  return (
    <>
     <div
  className="
  rounded-[32px]
  bg-white
  border border-gray-200
  shadow-sm
  p-6 md:p-8

  hover:shadow-xl
  hover:-translate-y-1
  transition-all
  duration-300
  "
>
        <span
          className="
          text-sm
          tracking-[0.2em]
          uppercase
          text-[#7C5CC4]
          "
        >
          Freelance Experience
        </span>

        <h2 className="text-xl mt-4 mb-3">
          Creative Designer
        </h2>

        <p className="text-xl text-[#7C5CC4]  text-gray-800">
          Freelance Designer
        </p>

        <p className="text-gray-500 mb-2">
          2025 - Present
        </p>

        <p
          className="
          text-gray-700
          leading-relaxed
          max-w-xl
          "
        >
          Worked on various digital design projects
          including book cover designs, posters,
          banners, templates, and social media
          creatives for clients and personal brands.
        </p>

        <div className="mt-6">
          <h3 className="text-2xl md:text-3xl mb-8">
            Book Cover Showcase
          </h3>

          <div className="flex flex-col md:flex-row gap-10 justify-center">
            {books.map((book) => (
              <div
                key={book.title}
                onClick={() =>
                  setSelectedBook(book)
                }
                className="
                cursor-pointer
                group
                "
              >
                <img
  src={book.image}
  alt={book.title}
  className="
  w-full
max-w-[280px]
md:max-w-[320px]
h-[360px]
md:h-[420px]
mx-auto
  object-cover
  rounded-3xl
  shadow-lg
  group-hover:scale-[1.03]
  transition
  duration-300
  "
/>

                <h4 className="mt-4 text-xl">
                  {book.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl md:text-3xl mb-8">
            Client Feedback
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 rounded-3xl border">
              <p>
                ★★★★★
              </p>

              <p className="mt-4 text-gray-600">
                The cover perfectly captured
                the theme of the book.
              </p>
            </div>

            <div className="p-6 rounded-3xl border">
              <p>
                ★★★★★
              </p>

              <p className="mt-4 text-gray-600">
                Creative and professional
                design work.
              </p>
            </div>

            <div className="p-6 rounded-3xl border">
              <p>
                ★★★★★
              </p>

              <p className="mt-4 text-gray-600">
                Delivered exactly what was
                expected.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BookModal
        image={selectedBook?.image}
      />
    </>
  );
}