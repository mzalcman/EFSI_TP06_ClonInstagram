import { useState } from "react";

import {
  House,
  Search,
  Compass,
  Clapperboard,
  MessageCircle,
  Heart,
  SquarePlus,
  CircleUserRound,
  Menu,
} from "lucide-react";

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
        <Menu size={28} />
      </button>

      <div className={`sidebar ${open ? "open" : ""}`}>

        <button onClick={() => setView("feed")}>
          <House size={28} />
          <span>Home</span>
        </button>

        <button>
          <Search size={28} />
          <span>Search</span>
        </button>

        <button>
          <Compass size={28} />
          <span>Explore</span>
        </button>

        <button>
          <Clapperboard size={28} />
          <span>Reels</span>
        </button>

        <button>
          <MessageCircle size={28} />
          <span>Messages</span>
        </button>

        <button>
          <Heart size={28} />
          <span>Notifications</span>
        </button>

        <button>
          <SquarePlus size={28} />
          <span>Create</span>
        </button>

        <button onClick={() => setView("profile")}>
          <CircleUserRound size={28} />
          <span>Profile</span>
        </button>
      </div>
    </>
  );
}

export default Navbar;