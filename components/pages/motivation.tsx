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
            informatique, je me tourne désormais vers ma troisième année
            d&apos;études supérieures en développement web à Ynov Bordeaux.
            Forte d&apos;une base théorique et pratique acquise au cours de mes
            deux dernières années d’études en développement web et web mobile à
            l&apos;EPSI, je suis prête à mettre en pratique mes compétences et à
            approfondir mes connaissances dans un environnement stimulant.
          </p>
          <br />
          <p>
            Motivée par l&apos;idée d&apos;intégrer cette école dynamique où je
            pourrai contribuer à des projets concrets tout en continuant à
            apprendre et à progresser, je suis ouverte à de nouveaux défis et
            prête à &apos;investir pleinement dans les missions qui me seront
            confiées.
          </p>
          <br />
          <p>
            Au fil de mes études, j&apos;ai développé une solide expertise dans
            la programmation et l&apos;utilisation de logiciels. Maîtrisant
            plusieurs langages full stack tels que :
          </p>
          <br />
          <p>Front-end : HTML, CSS et JavaScript. </p>
          <br />
          <p>
            Back-end : Python, PHP, Ruby and Rails et SQL, ainsi que des
            technologies comme React, Next.js, Tailwind CSS, Three.js (3D),
            j&apos;ai également acquis une expérience basique dans le
            développement d&apos;applications mobiles native.
          </p>
          <br />
          <p>
            Mon approche méthodique et mon souci du détail me permettent de
            produire un code propre et efficace. De plus, mon esprit
            d&apos;équipe et ma capacité à m&apos;adapter rapidement me
            permettent de m&apos;intégrer facilement à différents projets.
          </p>
          <br />
          <p>
            Avec 8 ans d&apos;expérience dans le milieu de la restauration et
            des expériences de voyages en immersion dans différents pays, j’ai
            acquis une polyvalence, une réactivité et un esprit
            d&apos;initiative. Organisée, appréciant le travail en équipe tout
            autant que l&apos;autonomie, je suis convaincue que mon parcours
            atypique apportera un regard créatif et des retombées positives dans
            votre établissement. Je suis disponible pour discuter de toute
            opportunité et impatiente de contribuer au parcours de votre école.
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
