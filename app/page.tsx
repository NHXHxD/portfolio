import { ThemeToggle } from "@/components/theme-toggle";

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

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left Column: About */}
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
                <section className="flex flex-col gap-4">
                    <h2 className="text-xl font-bold">Technical Experience</h2>
                    <div className="relative border-l border-neutral-200 dark:border-neutral-700 ml-4 space-y-6">
                      {/* The University of Adelaide */}
                      <div className="relative pl-8">
                        {/* Timeline Dot/Logo */}
                        <div className="absolute -left-[20px] top-0 bg-neutral-50 dark:bg-neutral-900 p-1 rounded-full border border-neutral-200 dark:border-neutral-700 shadow-sm">
                          <div className="w-8 h-8 bg-neutral-900 rounded-full dark:bg-neutral-100" />
                        </div>
                        {/* Card */}
                        <div className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900 shadow-sm">
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                            <div>
                              <h3 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">The University of Adelaide</h3>
                              <p className="text-xs text-neutral-600 dark:text-neutral-300">Undergraduate Researcher</p>
                            </div>
                            <span className="text-xs text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full">
                              Nov 2025 - Jan 2026
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* AIML */}
                      <div className="relative pl-8">
                        <div className="absolute -left-[20px] top-0 bg-neutral-50 dark:bg-neutral-900 p-1 rounded-full border border-neutral-200 dark:border-neutral-700 shadow-sm">
                          <div className="w-8 h-8 bg-neutral-900 rounded-full dark:bg-neutral-100" />
                        </div>
                        <div className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900 shadow-sm">
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                            <div>
                              <h3 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">Australian Institute for Machine Learning</h3>
                              <p className="text-xs text-neutral-600 dark:text-neutral-300">Research Assistant</p>
                            </div>
                            <span className="text-xs text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full">
                              Jul 2025 - Nov 2025
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* FPT Software */}
                      <div className="relative pl-8">
                        <div className="absolute -left-[20px] top-0 bg-neutral-50 dark:bg-neutral-900 p-1 rounded-full border border-neutral-200 dark:border-neutral-700 shadow-sm">
                          <div className="w-8 h-8 bg-blue-500 rounded-full dark:bg-blue-400" />
                        </div>
                        <div className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900 shadow-sm">
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                            <div>
                              <h3 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">FPT Software</h3>
                              <p className="text-xs text-neutral-600 dark:text-neutral-300">Software Engineer Intern</p>
                            </div>
                            <span className="text-xs text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full">
                              Jul 2025 - Sep 2025
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                </section>

                {/* Education Section */}
                <section className="flex flex-col gap-4">
                    <h2 className="text-xl font-bold">Education</h2>
                    <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-4 space-y-6">
                      {/* Education Item*/}
                      <div className="relative pl-8">
                        <div className="absolute -left-[20px] top-0 bg-neutral-50 dark:bg-neutral-900 p-1 rounded-full border border-neutral-200 dark:border-neutral-700 shadow-sm">
                          <div className="w-8 h-8 bg-red-500 rounded-full dark:bg-red-400" />
                        </div>
                        <div className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900 shadow-sm">
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                            <div>
                              <h3 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">The University of Adelaide</h3>
                              <p className="text-xs text-neutral-600 dark:text-neutral-300">Bachelor of Computer Science (Advanced)</p>
                            </div>
                            <span className="text-xs text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full">
                              Feb 2024
                            </span>
                          </div>
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
