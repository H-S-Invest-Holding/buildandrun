import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

const year = new Date().getFullYear();

const footer = () => {
  return (
    <div className="bg-brickred-700">
      <div className="w-full">
        <div className="py-8 mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:flex items-center justify-center border-t border-white/20">
          <h4 className="text-offwhite text-sm text-center lg:text-start font-normal">
            &copy; {year} Dislog Group | Build & Run Company.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default footer;
