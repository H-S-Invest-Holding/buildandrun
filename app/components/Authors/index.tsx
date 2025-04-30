import BlurFade from "@/app/magicui/ui/blur-fade";
import Image from "next/image";

const Authors = () => {
  return (
    <div id="authors" className="p-20">
      <div className="">
        <span className="opacity-0">.</span>
        <BlurFade inView={true}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="col-span-3 relative aspect-[3/5] rounded-lg overflow-hidden">
              <Image
                src="/assets/moncef-david-1.jpeg"
                alt="Moncef et David"
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-6 flex flex-col justify-center items-center">
              <h5 className="text-3xl uppercase font-medium text-brickred-600 mb-8">
                Auteurs
              </h5>
              <h1 className="text-2xl font-medium text-brickred-900 mb-6">
                Moncef Belkhayat
              </h1>
              <p className="font-normal text-md text-black text-center text-opacity-90 mb-8">
                Créateur du groupe H&S Invest Holding qui contrôle plusieurs
                entreprises dont DISLOG Group, Moncef Belkhayat s&apos;emploie au
                développement de son groupe au Maroc et à l&apos;international tout
                en étant au contact des jeunes Marocains du monde les aidant à
                réaliser leurs projets.
              </p>
              <h1 className="text-2xl font-medium text-brickred-900 mb-6">
                David Autissier
              </h1>
              <p className="font-normal text-md text-black text-center text-opacity-90">
                David Autissier est maître de conférences HDR à l&apos;IAE Paris Est.
                Directeur des chaires ESSEC du Changement et IMEO (Innovation
                Managériale et Excellence Opérationnelle), il est expert en
                stratégies de transformation auprès de grands groupes français
                et internationaux. Il est l&apos;auteur de plusieurs ouvrages et a
                rédigé de nombreux articles de recherche, notamment dans
                Question(s) de management.
              </p>
            </div>
            <div className="col-span-3 relative aspect-[3/5] rounded-lg overflow-hidden">
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
