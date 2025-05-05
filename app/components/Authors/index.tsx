import BlurFade from "@/app/magicui/ui/blur-fade";
import Image from "next/image";

const Authors = () => {
  return (
    <div id="authors" className="bg-brickred-50 px-5 py-8 md:p-10 lg:p-20">
      <div className="">
        <BlurFade inView={true}>
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-10">
            <h5 className="md:col-span-12 text-center text-xl sm:text-2xl md:text-3xl uppercase font-medium text-brickred-600 -mb-4 md:mb-0">
            Auteurs
            </h5>
            {/* >=xl view */}
            <div className="hidden xl:block col-span-3 relative aspect-[3/5] rounded-lg overflow-hidden">
              <Image
                src="/assets/moncef-david-1.jpeg"
                alt="Moncef et David"
                fill
                className="object-cover"
              />
            </div>
            <div className="hidden xl:block col-span-6 flex flex-col justify-center items-center">
              <h1 className="text-2xl font-medium text-center text-brickred-900 mb-6">
                Moncef Belkhayat
              </h1>
              <p className="font-normal text-md text-black text-center text-opacity-90 mb-2">
                Créateur du groupe H&S Invest Holding qui contrôle plusieurs
                entreprises dont Dislog Group, Moncef Belkhayat s&apos;emploie
                au développement de son groupe au Maroc et à
                l&apos;international tout en étant au contact des jeunes
                Marocains du monde les aidant à réaliser leurs projets.
              </p>
              <p className="font-normal text-md text-black text-center text-opacity-90 mb-8">
                Après sa carrière politique, il est retourné dans le secteur
                privé au sein de H&S Invest Holding, un groupe d&apos;investissement
                diversifié actif dans les secteurs de la santé, de
                l&apos;hygiène, de l&apos;alimentaire, de la logistique, de
                l&apos;immobilier et des médias. Il demeure une figure clé du
                paysage économique marocain, reconnu pour son leadership
                dynamique et sa vision entrepreneuriale.
              </p>
              <h1 className="text-2xl font-medium text-center text-brickred-900 mb-6">
                David Autissier
              </h1>
              <p className="font-normal text-md text-black text-center text-opacity-90">
                David Autissier est maître de conférences HDR à l&apos;IAE Paris
                Est. Directeur des chaires ESSEC du Changement et IMEO
                (Innovation Managériale et Excellence Opérationnelle), il est
                expert en stratégies de transformation auprès de grands groupes
                français et internationaux. Il est l&apos;auteur de plusieurs
                ouvrages et a rédigé de nombreux articles de recherche,
                notamment dans Question(s) de management.
              </p>
            </div>
            <div className="hidden xl:block col-span-3 relative aspect-[3/5] rounded-lg overflow-hidden">
              <Image
                src="/assets/moncef-david-2.jpeg"
                alt="Moncef et David"
                fill
                className="object-cover"
              />
            </div>
            {/* <xl view */}
            <div className="md:col-span-4 xl:hidden w-full relative aspect-[3/5] rounded-lg overflow-hidden">
              <Image
                src="/assets/moncef-david-1.jpeg"
                alt="Moncef et David"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:col-span-8 xl:hidden flex flex-col justify-center">
              <h1 className="text-xl sm:text-2xl font-medium text-brickred-900 mb-6">
                Moncef Belkhayat
              </h1>
              <p className="font-normal text-md text-black text-opacity-90 mb-2">
                Créateur du groupe H&S Invest Holding qui contrôle plusieurs
                entreprises dont Dislog Group, Moncef Belkhayat s&apos;emploie
                au développement de son groupe au Maroc et à
                l&apos;international tout en étant au contact des jeunes
                Marocains du monde les aidant à réaliser leurs projets.
              </p>
              <p className="font-normal text-md text-black text-opacity-90">
                Après sa carrière politique, il est retourné dans le secteur
                privé au sein de H&S Invest Holding, un groupe d&apos;investissement
                diversifié actif dans les secteurs de la santé, de
                l&apos;hygiène, de l&apos;alimentaire, de la logistique, de
                l&apos;immobilier et des médias. Il demeure une figure clé du
                paysage économique marocain, reconnu pour son leadership
                dynamique et sa vision entrepreneuriale.
              </p>
            </div>
            <div className="md:col-span-8 xl:hidden flex flex-col justify-center">
              <h1 className="text-xl sm:text-2xl font-medium text-brickred-900 mb-6">
                David Autissier
              </h1>
              <p className="font-normal text-md text-black text-opacity-90">
                David Autissier est maître de conférences HDR à l&apos;IAE Paris
                Est. Directeur des chaires ESSEC du Changement et IMEO
                (Innovation Managériale et Excellence Opérationnelle), il est
                expert en stratégies de transformation auprès de grands groupes
                français et internationaux. Il est l&apos;auteur de plusieurs
                ouvrages et a rédigé de nombreux articles de recherche,
                notamment dans Question(s) de management.
              </p>
            </div>
            <div className="md:col-span-4 xl:hidden relative aspect-[3/5] rounded-lg overflow-hidden">
              <Image
                src="/assets/moncef-david-2.jpeg"
                alt="Moncef et David"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export default Authors;
