import Link from "next/link";

const year = new Date().getFullYear();

const footer = () => {
  return (
    <div className="bg-black opacity-90 mt-40">
      <div className="w-full">
        <div className="py-8 mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:flex items-center justify-between border-t border-white/20">
          <h4 className="text-offwhite text-sm text-center lg:text-start font-normal">
            &copy; {year} Dislog Group | Build & Run Company.
          </h4>
          <h4 className="text-offwhite text-sm text-center mt-5 lg:mt-0 lg:text-start font-normal">
            Made with ❤️ by{" "}
            <Link href="https://ahmedidrissi.com" target="_blank">
              @ahmedidrissi
            </Link>
          </h4>
          <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
            <h4 className="text-offwhite text-sm font-normal">
              <Link href="/" target="_blank">
                Privacy policy
              </Link>
            </h4>
            <div className="h-5 bg-bordertop w-0.5"></div>
            <h4 className="text-offwhite text-sm font-normal">
              <Link href="/" target="_blank">
                Terms & conditions
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
