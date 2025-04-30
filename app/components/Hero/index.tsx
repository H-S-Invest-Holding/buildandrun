import Link from "next/link";
import BlurFade from "@/app/magicui/ui/blur-fade";
import GradualSpacing from "@/app/magicui/ui/gradual-spacing";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-brickred-600">
      <div className="min-h-[91vh] flex flex-col justify-center items-center">
        <div className="w-full px-20 grid grid-cols-1 lg:grid-cols-12">
          <div className="col-span-6">
            <Image
              width={400}
              height={400}
              src="/assets/book.png"
              className="mx-auto"
              alt="Build And Run Company"
            />
          </div>
          <div className="col-span-6 flex flex-col justify-center">
            <BlurFade>
              <h1 className="text-4xl uppercase text-white">
                Dislog Group - Build & Run Company
              </h1>
              <h2 className="text-3xl text-white mb-8">The Moroccan dream</h2>
            </BlurFade>
            <BlurFade>
              <p className="text-xl uppercase text-white font-normal mb-8">
                Le récit d&apos;une{" "}
                <span className="font-extrabold">success story marocaine</span>{" "}
                raconté par son président
              </p>
            </BlurFade>
            <BlurFade>
              <Link
                href="https://editions-ems.fr/boutique/dislog-group-build-run-company/"
                target="_blank"
                type="button"
                className="px-8 py-4 mb-8 text-md text-center text-white font-bold bg-brickred-500 border border-white rounded-xl"
              >
                Acheter en ligne
              </Link>
            </BlurFade>
            <BlurFade>
              <div className="flex gap-8">
                <Link target="_blank" href="https://dislogroup.com/">
                  <Image
                    width={100}
                    height={100}
                    src="/assets/dislog-logo.png"
                    alt="Dislog Group"
                  />
                </Link>
                <Link target="_blank" href="https://editions-ems.fr/">
                  <Image
                    width={80}
                    height={80}
                    src="/assets/ems-logo.png"
                    alt="editions ems"
                  />
                </Link>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
