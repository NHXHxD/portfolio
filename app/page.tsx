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
              <li><a href="#home" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">About</a></li>
              <li><a href="#experience" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Experience</a></li>
              <li><a href="#projects" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Projects</a></li>
              <li><a href="#blog" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Contact</a></li>
              <li><a href="#resume" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Resume</a></li>
            </ul>
            <ThemeToggle />
        </nav>
        
        {/* Hero Section */}
        <section id="home" className="flex flex-col gap-3 scroll-mt-8">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Hi, I&apos;m Hy Nguyen.
          </h1>
          
          <p className="text-lg text-neutral-500 dark:text-neutral-400">
            Computer Science Student & Aspiring Researcher. Currently exploring the worlds of research and Software Engineering.
          </p>
          
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            Currently researching at{" "}
            <a 
              href="https://www.adelaide.edu.au" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline underline-offset-2 font-medium text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
            >
              The University of Adelaide
            </a>.
          </p>
        </section>

        {/* 1-Column Layout */}
        <div className="flex flex-col gap-12">
            
            {/* About Section */}
            <section id="about" className="flex flex-col gap-6 scroll-mt-8">
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

                </div>
            </section>

            {/* Right Column: Experience & Education */}
            <div className="flex flex-col gap-8">
                
                {/* Technical Experience Section */}
                <section id="experience" className="flex flex-col gap-8 scroll-mt-8">
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
                <section id="education" className="flex flex-col gap-8 scroll-mt-8">
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

            {/* Projects Section */}
            <section id="projects" className="flex flex-col gap-8 scroll-mt-8">
                <h2 className="text-xl font-bold">Projects</h2>
                <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-3 space-y-8">
                  {/* Project 1 */}
                  <div className="relative pl-8">
                    <div className="absolute -left-[20px] top-1 bg-neutral-50 dark:bg-neutral-950 p-1 rounded-full border border-neutral-200 dark:border-neutral-800 shadow-sm overflow-hidden">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">P1</div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Project</h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">project</p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-0.5">
                          2025
                        </p>
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div className="relative pl-8">
                    <div className="absolute -left-[20px] top-1 bg-neutral-50 dark:bg-neutral-950 p-1 rounded-full border border-neutral-200 dark:border-neutral-800 shadow-sm overflow-hidden">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-sm font-bold">P2</div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Project</h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">project</p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-0.5">
                          2024
                        </p>
                    </div>
                  </div>

                  {/* Project 3 */}
                  <div className="relative pl-8">
                    <div className="absolute -left-[20px] top-1 bg-neutral-50 dark:bg-neutral-950 p-1 rounded-full border border-neutral-200 dark:border-neutral-800 shadow-sm overflow-hidden">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white text-sm font-bold">P3</div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Project</h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">project</p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-0.5">
                          2024
                        </p>
                    </div>
                  </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="flex flex-col gap-6 scroll-mt-8">
                <h2 className="text-xl font-bold">Contact</h2>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Coming soon...
                </p>
            </section>

            {/* Resume Section */}
            <section id="resume" className="flex flex-col gap-6 scroll-mt-8">
                <h2 className="text-xl font-bold">Resume</h2>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Coming soon...
                </p>
            </section>

        </div>

      </main>
    </div>
  );
}
