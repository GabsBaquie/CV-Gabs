import Image from "next/image";
import Link from "next/link";
import { Card } from "../ui/card";

export default function Component() {
  return (
    <Card className="mt-10 ">
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
              <Card className="group h-300 w-400 rounded-md text-center inset-0">
                <Link href="https://choco-pap-react.vercel.app">
                  <div className="text-lg font-bold inset-0 mt-14 absolute opacity-0 group-hover:opacity-100 z-10">
                    <h3>Mon tout premier site</h3>
                  </div>
                  <div className="rounded-lg object-cover z-0 group-hover:opacity-60 grid-cols-2 ">
                    <Image
                      alt="Image site Choco Pap"
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
                  </div>
                </Link>
              </Card>

              <Card className="group h-300 w-400 rounded-md text-center inset-0 transform translate-y-20">
                <Link href="https://gabs-robot.vercel.app">
                  <div className="text-lg font-bold inset-0 mt-14 absolute opacity-0 group-hover:opacity-100 z-10">
                    <h3>3D Scroll Animation</h3>
                  </div>

                  <div className="rounded-lg object-cover z-0 group-hover:opacity-60 ">
                    <Image
                      alt="Image site 3D Scroll Animation"
                      className="rounded-lg object-cover"
                      height="300"
                      src="/images/robot.png"
                      style={{
                        opacity: 0.9,
                        aspectRatio: "400/300",
                        objectFit: "cover",
                      }}
                      width="400"
                    />
                  </div>
                </Link>
              </Card>

              <Card className="group h-300 w-400 rounded-md text-center inset-0">
                <Link href="https://blog-sanity-gabs.vercel.app/">
                  <div className="text-lg font-bold mt-14 absolute opacity-0 group-hover:opacity-100 z-10 inset-0">
                    <h3>Blog CMS Sanity</h3>
                  </div>
                  <div className="rounded-lg object-cover z-0 group-hover:opacity-60 ">
                    <Image
                      alt="Image site Blog CMS Sanity"
                      height="300"
                      className="rounded-lg object-cover"
                      src="/images/sanity.png"
                      style={{
                        opacity: 0.9,
                        aspectRatio: "400/300",
                        objectFit: "cover",
                      }}
                      width="400"
                    />
                  </div>
                </Link>
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
