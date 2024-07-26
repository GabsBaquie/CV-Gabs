import "@/app/globals.css";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function Motivation() {
  return (
    <>
      <Card className="mt-10 mx-4 ">
        <CardHeader>
          <CardTitle>lettre de motivation</CardTitle>
        </CardHeader>
        <CardContent className="text-lg leading-relaxed">
          <p className="text-lg leading-relaxed ">
            Ancienne streameuse et étudiante passionnée de développement
            informatique, aujourd’hui, je suis à la recherche d’une alternance
            pour intégrer ma troisième année d&apos;études supérieures en
            développement chez Ynov Bordeaux. Doté d&apos;une base théorique et
            pratique acquise au cours de mes deux dernières années d’études et
            une formation certifiante développement web et web mobile chez EPSI,
            je suis prête à mettre en pratique mes compétences et
            d&apos;approfondir mes connaissances dans un environnement
            professionnel stimulant.
          </p>
          <br />
          <p>
            Au cours de mes études, j&apos;ai développé une solide expertise
            dans la programmation et l&apos;utilisation de logiciels.
          </p>
          <br />
          <p>Maîtrisant plusieurs langages full stack tels que :</p>
          <br />
          <p>Front-end : HTML, CSS et JavaScript / TypeScript. </p>
          <br />
          <p>
            Back-end : Node.js, PHP et SQL, ainsi que des technologies comme
            React, Next.js, Tailwind CSS, Three.js (3D), j&apos;ai également
            acquis une expérience basique dans le développement
            d&apos;applications mobiles native.
          </p>
          <br />
          <p>
            Mon approche méthodique et mon souci du détail me permettent de
            produire un code propre et efficace. De plus, mon esprit
            d&apos;équipe et ma capacité à m&apos;adapter rapidement me
            permettent de m&apos;intégrer facilement à différents projets. Je
            suis motivée par l&apos;idée de mettre mes compétences au service de
            votre entreprise où je pourrai contribuer à des projets concrets
            tout en continuant à apprendre et à progresser. Je suis ouverte à de
            nouveaux défis et prête à m&apos;investir pleinement dans les
            missions qui me seront confiées.
          </p>
          <br />
          <p>
            Avec 8 ans dans le milieu de la restauration et des expériences de
            voyages en immersion dans différents pays, m’ont permis d’être
            polyvalente, réactive et d’avoir un esprit d’incitative. De ce fait,
            je suis une personne qui adore apprendre, organisée, qui apprécie le
            travail d’équipe ainsi qu’en autonomie, je suis certaine qu’avec mon
            parcours atypique, j&apos;apporterais un regard créatif et des
            retombées positives dans votre entreprise. Je suis disponible pour
            discuter de toute opportunité et je suis impatiente de contribuer
            dans votre société.
          </p>
        </CardContent>
        <CardFooter>
          <p>
            Cordialement,
            <br />
            Gabrielle Baquie
          </p>
        </CardFooter>
      </Card>
    </>
  );
}
