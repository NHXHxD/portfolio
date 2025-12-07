import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import uofaLogo from "@/uofa.jpg";
import aimlLogo from "@/aiml.jpg";
import fptLogo from "@/fpt.png";

export default function Home() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-sans bg-neutral-50 text-neutral-900 transition-colors dark:bg-neutral-950 dark:text-neutral-100">
      <main className="max-w-2xl mx-auto space-y-8">

        {/* Navbar */}
        <nav className="flex justify-between items-center mb-8">
            <ul className="flex flex-wrap gap-4 sm:gap-6 text-sm font-medium text-neutral-600 dark:text-neutral-400">
            <li className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer">Home</li>
            <li className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer">About</li>
                <li className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer">Experience</li>
                <li className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer">Projects</li>
                <li className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer">Contact</li>
                <li className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer">Resume</li>
            </ul>
            <ThemeToggle />
        </nav>
        
        {/* Hero Section */}
        <section className="flex flex-col gap-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Hi, I&apos;m Hy Nguyen.
          </h1>
          
          <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>

        {/* 1-Column Layout */}
        <div className="flex flex-col gap-12">
            
            {/* About Section */}
            <div className="flex flex-col gap-6">
                <h2 className="text-xl font-bold">About</h2>
                <div className="flex flex-col gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </p>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam.
                    </p>
                </div>
            </div>

            {/* Right Column: Experience & Education */}
            <div className="flex flex-col gap-8">
                
                {/* Technical Experience Section */}
                <section className="flex flex-col gap-8">
                    <h2 className="text-xl font-bold">Technical Experience</h2>
                    <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-3 space-y-8">
                      {/* The University of Adelaide */}
                      <div className="relative pl-8">
                        {/* Timeline Dot/Logo */}
                        <div className="absolute -left-[20px] top-1 bg-neutral-50 dark:bg-neutral-950 p-1 rounded-full border border-neutral-200 dark:border-neutral-800 shadow-sm overflow-hidden">
                          <Image src={uofaLogo} alt="University of Adelaide" className="w-8 h-8 rounded-full object-cover" />
                        </div>
                        {/* Content */}
                        <div className="flex flex-col gap-1">
                            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">The University of Adelaide</h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">Undergraduate Researcher</p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-0.5">
                              November 2025 - January 2026
                            </p>
                        </div>
                      </div>

                      {/* AIML */}
                      <div className="relative pl-8">
                        <div className="absolute -left-[20px] top-1 bg-neutral-50 dark:bg-neutral-950 p-1 rounded-full border border-neutral-200 dark:border-neutral-800 shadow-sm overflow-hidden">
                          <Image src={aimlLogo} alt="AIML" className="w-8 h-8 rounded-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Australian Institute for Machine Learning</h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">Research Assistant</p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-0.5">
                              July 2025 - November 2025
                            </p>
                        </div>
                      </div>

                      {/* FPT Software */}
                      <div className="relative pl-8">
                        <div className="absolute -left-[20px] top-1 bg-neutral-50 dark:bg-neutral-950 p-1 rounded-full border border-neutral-200 dark:border-neutral-800 shadow-sm overflow-hidden">
                          <Image src={fptLogo} alt="FPT Software" className="w-8 h-8 rounded-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">FPT Software</h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">Software Engineer Intern</p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-0.5">
                              July 2025 - September 2025
                            </p>
                        </div>
                      </div>
                    </div>
                </section>

                {/* Education Section */}
                <section className="flex flex-col gap-8">
                    <h2 className="text-xl font-bold">Education</h2>
                    <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-3 space-y-8">
                      {/* Education Item*/}
                      <div className="relative pl-8">
                        <div className="absolute -left-[20px] top-1 bg-neutral-50 dark:bg-neutral-950 p-1 rounded-full border border-neutral-200 dark:border-neutral-800 shadow-sm overflow-hidden">
                          <Image src={uofaLogo} alt="University of Adelaide" className="w-8 h-8 rounded-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">The University of Adelaide</h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">Bachelor of Computer Science (Advanced)</p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-0.5">
                              February 2024
                            </p>
                        </div>
                      </div>
                    </div>
                </section>

            </div>

        </div>

      </main>
    </div>
  );
}
