import { Link } from "react-router-dom"; // Import Link for navigation

export function Footer() {
  return (
    <footer className="fixed bottom-0 w-full flex flex-row bg-fsorange align-center items-center justify-between py-4 px-[8vw] text-white font-sm sm:font-base font-bold gap-4 sm:gap-0">
      <div>
        <Link to="/impressum" className="hover:underline">
          Impressum
        </Link>
      </div>
      {/* <div className="mail flex items-center">
        <FaEnvelope className="mr-2" />
        <a
          href="mailto:toege@feldhoff-solar.de"
          className="hover:text-blue-800 hover:underline"
        >
          toege@feldhoff-solar.de
        </a>
      </div> */}
      <div>
        <Link to="/datenschutz" className="hover:underline">
          Datenschutz
        </Link>
      </div>
    </footer>
  );
}
