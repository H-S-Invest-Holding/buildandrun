import BlurFade from "@/app/magicui/ui/blur-fade";
import Image from "next/image";

const Book = () => {
  return (
    <div id="book" className="bg-brickred-50 p-20">
      <div className="">
        <span className="opacity-0">.</span>
        <BlurFade inView={true}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="col-span-7 flex flex-col justify-center">
              <h5 className="text-3xl uppercase font-medium text-brickred-600 mb-8">
                A Propos du livre
              </h5>
              <p className="font-normal text-md text-black text-opacity-90 mb-5">
                « Au Maroc on peut y arriver » ainsi commence ce livre qui fait
                le récit de l'aventure entrepreneuriale de Moncef Belkhayat.
                C'est l'histoire du groupe Dislog, une entreprise marocaine qui
                a su en 20 ans devenir un grand groupe international. Opérant
                dans les secteurs vitaux de la santé, de l'hygiène et de
                l'alimentation, Dislog Group s'est érigé en moins de deux
                décennies en tant qu'acteur incontournable dans 7 millions de
                foyers au Maroc.
              </p>
              <p className="font-normal text-md text-black text-opacity-90 mb-5">
                Cette belle réussite n'a pas été un long fleuve tranquille mais
                un parcours de rencontres et de décisions permis par l'énergie
                d'un leader. Moncef Belkhayat souhaite, au travers de ce livre,
                partager son expérience d'entrepreneur pour que cette dernière
                inspire et donne envie à tous ceux qui feront rayonner
                l'économie marocaine aujourd'hui et demain.
              </p>
              <p className="font-normal text-md text-black text-opacity-90">
                La stratégie, le leadership et le management du groupe Dislog
                s'inscrivent dans une histoire entrepreneuriale unique et
                inspirante et constituent une base de réflexion sur ce que
                doivent être les entreprises dans un monde complexe pour se
                développer. La réflexion menée avec David Autissier, directeur
                des chaires ESSEC du Changement et IMEO (Innovation Managériale
                et Excellence Opérationnelle), propose au travers du récit, un
                modèle d'organisation « Build & Run » faisant de Dislog un
                modèle tant entrepreneurial que managérial.
              </p>
            </div>
            <div className="col-span-5 relative aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src="/assets/book-bg.jpeg"
                alt="Book"
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

export default Book;
