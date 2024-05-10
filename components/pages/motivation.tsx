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
      <Card className="m-10">
        <CardHeader>
          <CardTitle>lettre de motivation</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500 dark:text-gray-400">Cher recruteur,</p>
          <p className="text-lg leading-relaxed">
            Je suis ravi de vous soumettre ma candidature pour le poste de
            développeur web au sein de votre entreprise. Depuis mon plus jeune
            âge, j'ai toujours été fasciné par la technologie et la façon dont
            elle peut transformer notre monde. C'est cette passion qui m'a
            conduit à me spécialiser dans le développement web, un domaine en
            constante évolution qui me passionne.
          </p>
          <p className="text-lg leading-relaxed animate-fadeIn">
            Au cours de mes études, j'ai eu l'opportunité de développer des
            compétences techniques solides en HTML, CSS, JavaScript, ainsi que
            dans l'utilisation de frameworks et de bibliothèques populaires
            comme React et Vue.js. J'ai également acquis une bonne compréhension
            des principes de conception web, de l'optimisation des performances
            et des meilleures pratiques en matière de développement. Mes projets
            personnels et mes stages m'ont permis de mettre en pratique ces
            connaissances et de développer une approche créative et orientée
            solutions pour résoudre des problèmes complexes.
          </p>
          <p className="text-lg leading-relaxed animate-fadeIn">
            Au-delà de mes compétences techniques, je suis également doté d'un
            esprit d'équipe et d'une capacité à communiquer efficacement. J'aime
            collaborer avec des équipes pluridisciplinaires pour créer des
            expériences web innovantes et engageantes. Mon objectif est de
            rejoindre une entreprise dynamique comme la vôtre, où je pourrai
            continuer à développer mes compétences et contribuer activement à la
            réalisation de vos projets web.
          </p>
          <p className="text-lg leading-relaxed animate-fadeIn">
            Je suis convaincu que mes connaissances, mon enthousiasme et mon
            engagement feraient de moi un atout précieux pour votre équipe de
            développement web. Je serais ravi d'avoir l'opportunité de discuter
            plus en détail de mon parcours et de mes aspirations lors d'un
            entretien. Je vous remercie de l'attention que vous porterez à ma
            candidature et je me tiens à votre disposition pour toute
            information complémentaire.
          </p>
        </CardContent>
        <CardFooter>
          <p className="text-lg leading-relaxed animate-fadeIn">
            Cordialement,
            <br />
            [Votre nom]
          </p>
        </CardFooter>
      </Card>
    </>
  );
}
