import Image from "next/image";
import Link from "next/link";
import { Card } from "../ui/card";

export default function Component() {
  return (
    <Card>
      <header className="py-8 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-2xl font-bold tracking-tight">
            Portfolio Project
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Découvrez mon dernier projet de portfolio en ligne.
          </p>
        </div>
      </header>
      <main className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Présentation de projet
              </h2>
              <p className="mt-4 text-muted-foreground">
                Ce projet de portfolio a été conçu pour mettre en valeur mes
                compétences de développeur web. Il comprend une interface
                responsive, des animations fluides et une structure de
                navigation intuitive. J&apos;ai utilisé les dernières
                technologies web pour construire cette application, notamment
                React, Tailwind CSS et Vercel.
              </p>
              <p className="mt-4 text-muted-foreground">
                Vous pourrez découvrir mes différents projets, mes expériences
                professionnelles et mes compétences techniques. N&apos;hésitez
                pas à me contacter si vous avez des questions ou si vous
                souhaitez collaborer.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className=" h-300 w-400 rounded-md text-center inset-0">
                <Link href="https://choco-pap-react.vercel.app">
                  <Image
                    alt="Des nouveaux projets arrivent bientôt"
                    className="rounded-lg object-cover"
                    height="300"
                    src="/images/chocoPap.png"
                    style={{
                      opacity: 0.9,
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width="400"
                  />
                </Link>
              </Card>

              <Card>
                <h3 className="text-lg font-bold m-9 absolute">
                  En cours d&apos;ctualisation
                </h3>
                <Image
                  alt=""
                  className="rounded-lg object-cover"
                  height="300"
                  src="/images/Bike.png"
                  style={{
                    opacity: 0.2,
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width="400"
                />
              </Card>
              <Card className=" h-300 w-400 rounded-md text-center inset-0">
                <h3 className="text-lg font-bold m-9 absolute">
                  En cours d&apos;ctualisation
                </h3>
                <Image
                  alt=""
                  className="rounded-lg object-cover"
                  height="300"
                  src="/"
                  style={{
                    opacity: 0,
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width="400"
                />
              </Card>
              <Card className=" h-300 w-400 rounded-md text-center inset-0">
                <h3 className="text-lg font-bold m-9 absolute">
                  En cours d&apos;ctualisation
                </h3>
                <Image
                  alt=""
                  className="rounded-lg object-cover"
                  height="300"
                  src="/"
                  style={{
                    opacity: 0,
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width="400"
                />
              </Card>
            </div>
          </div>
        </div>
      </main>
      <section className=" py-12 md:py-16 lg:py-20 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Contactez-moi
          </h2>
          <p className="mt-4 text-muted-foreground">
            N&apos;hésitez pas à me contacter pour toute question ou
            collaboration.
          </p>
        </div>
      </section>
    </Card>
  );
}
