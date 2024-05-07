import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JSX, SVGProps } from "react";

export default function Component() {
  return (
    <main className="w-full max-w-5xl mx-auto px-4 md:px-6 ">
      <header className="w-full  py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-3xl font-bold  md:text-4xl lg:text-5xl">
              Welcome to My Portfolio
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg lg:text-xl mb-8">
              Discover our expertise in web development and design.
            </p>
          </div>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex items-center gap-4">
            <CodeIcon className="w-8 h-8" />
            <CardTitle>Front-End</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>
              Expertise dans les technologies front-end telles que React,
              Vue.js, Angular, HTML, CSS et JavaScript. Conception
              d&apos;interfaces utilisateur responsive et interactives.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <PuzzleIcon className="w-4 h-4" />
              <span>React, Vue.js, Angular</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <CodeIcon className="w-4 h-4" />
              <span>HTML, CSS, JavaScript</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex items-center gap-4">
            <ServerIcon className="w-8 h-8" />
            <CardTitle>Back-End</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>
              Expertise dans les technologies back-end telles que Node.js, PHP,
              Python et Ruby on Rails. Conception d&apos;API RESTful et de
              systèmes de gestion de données robustes.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <PuzzleIcon className="w-4 h-4" />
              <span>Node.js, PHP, Python</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <CodeIcon className="w-4 h-4" />
              <span>Ruby on Rails</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex items-center gap-4">
            <PuzzleIcon className="w-8 h-8" />
            <CardTitle>Librairies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>
              Utilisation de diverses librairies et frameworks pour améliorer
              l&apos;expérience utilisateur et la productivité. Expertise dans
              l&apos;intégration et la personnalisation de ces outils.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <PuzzleIcon className="w-4 h-4" />
              <span>Tailwind CSS, Material UI, Bootstrap</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <CodeIcon className="w-4 h-4" />
              <span>Redux, Axios, Moment.js</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

function CodeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function PuzzleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>
  );
}

function ServerIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  );
}
