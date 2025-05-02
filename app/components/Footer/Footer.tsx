import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

const year = new Date().getFullYear();

const footer = () => {
  return (
    <div className="bg-brickred-700">
      <div className="w-full">
        <div className="py-8 mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:flex items-center justify-between border-t border-white/20">
          <h4 className="text-offwhite text-sm text-center lg:text-start font-normal">
            &copy; {year} Dislog Group | Build & Run Company.
          </h4>
          <h4 className="text-offwhite text-sm text-center mt-5 lg:mt-0 lg:text-start font-normal">
            Made with 🤍 by{" "}
            <Link href="https://ahmedidrissi.com" className="hover:text-white" target="_blank">
              @ahmedidrissi
            </Link>
          </h4>
          <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
            <div className="flex gap-2">
              <Link
                href="https://www.linkedin.com/company/groupe-dislog/"
                target="_blank"
                className="flex items-center justify-center gap-2 text-offwhite hover:text-white bg-transparent"
              >
                <FaLinkedinIn /> Dislog Group
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
