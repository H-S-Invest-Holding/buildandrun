import Link from "next/link";
import BlurFade from "@/app/magicui/ui/blur-fade";
import { TypingAnimation } from "@/app/magicui/ui/typing-animation";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-brickred-600">
      <div className="min-h-[92vh] flex flex-col justify-center items-center">
        <div className="w-full px-10 md:px-20 grid grid-cols-1 gap-8 lg:gap-0 lg:grid-cols-12">
          <div className="col-span-6">
            <BlurFade>
              <Image
                width={400}
                height={400}
                src="/assets/book.png"
                className="mx-auto mt-8 w-[200px] md:w-[200px] lg:w-[300px] xl:w-[400px]"
                alt="Build & Run Company"
              />
            </BlurFade>
          </div>
          <div className="col-span-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-start">
            <BlurFade>
              <TypingAnimation
                duration={50}
                className="text-xl md:text-3xl lg:text-4xl uppercase text-white mb-2"
              >
                Dislog Group - Build & Run Company
              </TypingAnimation>
              <BlurFade delay={2}>
                <h2 className="text-lg md:text-2xl lg:text-3xl text-white mb-6">
                  The Moroccan dream
                </h2>
              </BlurFade>
            </BlurFade>
            <BlurFade delay={3}>
              <p className="text-md md:text-lg lg:text-xl uppercase text-white font-normal mb-8">
                Le récit d&apos;une{" "}
                <span className="font-extrabold">success story marocaine</span>{" "}
                raconté par son président
              </p>
            </BlurFade>
            <div className="mb-8">
              <BlurFade delay={4}>
                <Link
                  href="https://editions-ems.fr/boutique/dislog-group-build-run-company/"
                  target="_blank"
                  type="button"
                  className="px-4 md:px-8 py-2 md:py-4 uppercase text-sm md:text-sm lg:text-md text-center text-white font-bold shadow-md bg-brickred-500 hover:scale-[98%] border border-white rounded-xl"
                >
                  Acheter en ligne
                </Link>
              </BlurFade>
            </div>
            <div className="mb-8">
              <BlurFade delay={4}>
                <div className="flex gap-8">
                  <Link target="_blank" href="https://dislogroup.com/">
                    <Image
                      width={100}
                      height={100}
                      className="max-w-[80px] md:max-w-full"
                      src="/assets/dislog-logo.png"
                      alt="Dislog Group"
                    />
                  </Link>
                  <Link target="_blank" href="https://editions-ems.fr/">
                    <Image
                      width={80}
                      height={80}
                      className="max-w-[60px] md:max-w-full"
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
    </div>
  );
};

export default Hero;
