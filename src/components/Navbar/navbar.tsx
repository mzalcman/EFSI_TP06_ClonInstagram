import { useState } from "react";
import "./Navbar.css";

interface NavbarProps {
  setView: (view: "feed" | "profile") => void;
}

function Navbar({ setView }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <div className={`sidebar ${open ? "open" : ""}`}>
        <h2>Menu</h2>

        <button onClick={() => setView("feed")}>
          Feed
        </button>

        <button onClick={() => setView("profile")}>
          Profile
        </button>
      </div>
    </>
  );
}

export default Navbar;