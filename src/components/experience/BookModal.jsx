export default function BookModal({
  isOpen,
  onClose,
  frontImage,
  backImage,
  title,
}) {
  if (!isOpen) return null;

  return (
    <div
      className="
      fixed inset-0
      bg-black/40
      backdrop-blur-md
      z-[999]
      flex
      items-center
      justify-center
      p-6
      "
      onClick={onClose}
    >
      <div
        className="
        bg-white
        rounded-[32px]
        max-w-5xl
        w-full
        p-8
        shadow-2xl
        "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="
            text-3xl
            hover:text-[#B8A2E3]
            "
          >
            ×
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="mb-3 text-lg">
              Front Cover
            </h3>

            <img
              src={frontImage}
              alt=""
              className="
              rounded-2xl
              shadow-lg
              "
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg">
              Back Cover
            </h3>

            <img
              src={backImage}
              alt=""
              className="
              rounded-2xl
              shadow-lg
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
}