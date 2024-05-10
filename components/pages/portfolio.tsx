import "@/app/globals.css";
import Image from "next/image";

export default function Portfolio() {
  return (
    <main className="font-Source_Code_Pro">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Portfolio
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Explore our diverse range of successful projects and see how
                we&apos;ve helped our clients achieve their goals.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <Image
                  alt="Project 1"
                  className="rounded-lg mb-4"
                  height={300}
                  src="https://fakeimg.pl/250x100/?retina=1&text=🦋"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <h3 className="text-lg font-bold">Project 1</h3>
                <p className="text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <Image
                  alt="Project 2"
                  className="rounded-lg mb-4"
                  height={300}
                  src="https://fakeimg.pl/250x100/?retina=1&text= 🌈"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <h3 className="text-lg font-bold">Project 2</h3>
                <p className="text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <Image
                  alt="Project 3"
                  className="rounded-lg mb-4"
                  height={300}
                  src="https://fakeimg.pl/250x100/?retina=1&text= 🌻"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <h3 className="text-lg font-bold">Project 3</h3>
                <p className="text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
