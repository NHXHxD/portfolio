export default function Home() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-sans">
      <main className="max-w-2xl mx-auto space-y-8">

        {/* Navbar */}
        <nav className="flex justify-center sm:justify-start mb-8">
            <ul className="flex flex-wrap gap-4 sm:gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                <li className="text-black dark:text-white cursor-pointer">Home</li>
                <li className="hover:text-black dark:hover:text-white transition-colors cursor-pointer">About</li>
                <li className="hover:text-black dark:hover:text-white transition-colors cursor-pointer">Experience</li>
                <li className="hover:text-black dark:hover:text-white transition-colors cursor-pointer">Projects</li>
                <li className="hover:text-black dark:hover:text-white transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-black dark:hover:text-white transition-colors cursor-pointer">Contact</li>
            </ul>
        </nav>
        
        {/* Hero Section */}
        <section className="flex flex-col-reverse sm:flex-row items-start gap-8 sm:gap-12">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Hi, I'm Hy Nguyen.
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
          </div>

          <div className="shrink-0">
             <div className="w-32 h-32 rounded-full bg-zinc-200 dark:bg-zinc-800" />
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
                    {/* Experience Item */}
                    <div className="flex gap-4 items-start p-3 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50 dark:bg-zinc-900/50">
                        <div className="w-10 h-10 bg-blue-500 rounded-full shrink-0"></div>
                        <div>
                            <h3 className="font-semibold text-sm">FPT Software</h3>
                            <p className="text-xs text-zinc-500">Software Engineer Intern</p>
                            <p className="text-xs text-zinc-400 mt-1">Jul 2025 - Sep 2025</p>
                        </div>
                    </div>
                    {/* Experience Item */}
                     <div className="flex gap-4 items-start p-3 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50 dark:bg-zinc-900/50">
                        <div className="w-10 h-10 bg-black rounded-full shrink-0"></div>
                        <div>
                            <h3 className="font-semibold text-sm">Company</h3>
                            <p className="text-xs text-zinc-500">Position</p>
                            <p className="text-xs text-zinc-400 mt-1">Nov 2024 - Present</p>
                        </div>
                    </div>
                </section>

                {/* Education Section */}
                <section className="flex flex-col gap-4">
                    <h2 className="text-xl font-bold">Education</h2>
                    {/* Education Item*/}
                    <div className="flex gap-4 items-start p-3 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50 dark:bg-zinc-900/50">
                        <div className="w-10 h-10 bg-red-500 rounded-full shrink-0"></div>
                        <div>
                            <h3 className="font-semibold text-sm">The University of Adelaide</h3>
                            <p className="text-xs text-zinc-500">Bachelor of Computer Science (Advanced)</p>
                        </div>
                    </div>
                </section>

            </div>

        </div>

      </main>
    </div>
  );
}
