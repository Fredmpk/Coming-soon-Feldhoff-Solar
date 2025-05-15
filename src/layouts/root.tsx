import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer";

export function Root() {
  return (
    <div className="flex flex-col min-h-screen font-raleway">
      <main className="flex-grow">
        <Outlet /> {/* This will render the matched child route */}
      </main>
      <Footer /> {/* Always render the footer */}
    </div>
  );
}
