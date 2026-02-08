import { MapPin } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a
          href="https://bidiigirlsprogramme.org"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3"
          aria-label="Womens Day Dinner"
        >
          <img src="/logo.png" alt="Womens Day Dinner" className="h-8 w-auto" />
        </a>

        {/* Get Directions Button */}
        <a
          href="https://www.google.com/maps/place/Radisson+Blu+Hotel,+Nairobi+Upper+Hill/@-1.3015887,36.8173125,16z/data=!4m9!3m8!1s0x182f10e51817c5bd:0x3a9709be7741fa63!5m2!4m1!1i2!8m2!3d-1.3022805!4d36.8167439!16s%2Fg%2F11b6jddqjw?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm py-2 px-5 inline-flex items-center gap-2"
        >
          <MapPin className="w-4 h-4" />
          Get Directions
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
