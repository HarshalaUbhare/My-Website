import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const LeisurePursuits = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      {/* ===== RHA Volunteer Card ===== */}
      <div className="hover:scale-[1.03] transition-transform duration-300 bg-gradient-to-br from-[#0c0b0c] via-[#50275094] to-[#532b8c] rounded-2xl p-4 sm:p-6 shadow-2xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6">
          {/* Left Text Section */}
          <div className="flex-1 flex flex-col gap-2 text-white">
            <h1 className="text-xl sm:text-2xl font-bold tracking-wide text-pink-300">
              Volunteer
            </h1>
            <span className="text-sm text-gray-200">
              Robin Hood Army (RHA) · Weekend Volunteer
            </span>
            <span className="text-sm text-gray-300 flex items-center gap-1">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              Mumbai, Maharashtra, India · On-ground
            </span>
            <span className="text-sm text-gray-400">August 2024 – Present</span>

            <ul className="list-disc list-outside mt-3 text-sm text-gray-100 space-y-1">
              <li>
                Support RHA’s zero-fund model by helping distribute food to
                underprivileged communities.
              </li>
              <li>
                Volunteer on weekends as part of a unified, apolitical, and
                respectful team.
              </li>
              <li>
                Advocate RHA’s philosophy of “1% Done” — small, consistent
                actions for big change.
              </li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <img
              src="./RHA.png"
              alt="RHA logo"
              className="w-24 sm:w-32 md:w-40 object-contain rounded-lg border border-white/10 shadow-md"
            />
          </div>
        </div>
      </div>

      {/* ===== Artist Card ===== */}
      <div className="hover:scale-[1.03] transition-transform duration-300 bg-gradient-to-br from-[#0c0b0c] via-[#50275094] to-[#532b8c] rounded-2xl p-4 sm:p-6 shadow-2xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6">
          {/* Left Text Section */}
          <div className="flex-1 flex flex-col gap-2 text-white">
            <h1 className="text-xl sm:text-2xl font-bold tracking-wide text-pink-300">
              Independent Artist
            </h1>
            <a
              href="https://instagram.com/harshuzz_art"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-400 hover:underline"
            >
              @harshuzz_art on Instagram
            </a>

            <ul className="list-disc list-outside mt-3 text-sm text-gray-100 space-y-1">
              <li>
                Create and share original canvas paintings, mandala artwork, and
                fine-line sketching.
              </li>
              <li>
                Explore traditional media including ink, acrylics, and graphite.
              </li>
              <li>
                Built a growing audience online through consistent sharing of
                creative work.
              </li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <img
              src="./Art.jpeg"
              alt="Art sample"
              className="hidden md:block w-24 sm:w-32 md:w-40 h-20 sm:h-24 object-cover rounded-lg border border-white/10 shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeisurePursuits;
