import { ThemeToggle } from "@/components/theme-toggle";
import { ExpandableCard } from "@/components/expandable-card";
import Image from "next/image";
import uofaLogo from "@/uofa.jpg";
import fptLogo from "@/fpt.png";
import coderecallLogo from "@/coderecall.png";

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
              <li><a href="#education" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Education</a></li>
              <li><a href="#projects" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Projects</a></li>
              <li><a href="#awards" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Awards</a></li>
              <li><a href="#skills" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Skills</a></li>
              <li><a href="/resume" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Resume</a></li>
            </ul>
            <ThemeToggle />
        </nav>
        
        {/* Hero Section */}
        <section id="home" className="flex flex-col gap-3 scroll-mt-8">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Hi, I&apos;m Hy Nguyen.
          </h1>
          
          <p className="text-lg text-neutral-500 dark:text-neutral-400">
            Software engineer and computer science student focused on high-performance systems, optimization, and ML-powered products.
          </p>
          
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            Currently interning at{" "}
            <a 
              href="https://www.maptek.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline underline-offset-2 font-medium text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
            >
              Maptek
            </a>{" "}
            while studying at{" "}
            <a
              href="https://www.adelaide.edu.au"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 font-medium text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
            >
              Adelaide University
            </a>.
          </p>

          {/* Contact Icons */}
          <div className="flex gap-4 mt-2">
            <a 
              href="https://github.com/NHXHxD" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/hoang-xuan-hy-nguyen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="mailto:hoangxuanhy.nguyen@gmail.com"
              className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              aria-label="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
          </div>
        </section>

        {/* 1-Column Layout */}
        <div className="flex flex-col gap-12">
            
            {/* About Section */}
            <section id="about" className="flex flex-col gap-6 scroll-mt-8">
                <h2 className="text-xl font-bold">About</h2>
                <div className="flex flex-col gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                    <p>
                      My work spans research and industry, from robotics and computer vision to combinatorial optimization, low-latency systems, and LLM-integrated full-stack products.
                    </p>
                    <p>
                      I enjoy problems that reward strong fundamentals and careful engineering, whether that means pushing latency down in a GPU-heavy pipeline, benchmarking search heuristics under strict budgets, or turning messy data workflows into usable products.
                    </p>

                </div>
            </section>

            {/* Right Column: Experience & Education */}
            <div className="flex flex-col gap-8">
                
                {/* Technical Experience Section */}
                <section id="experience" className="flex flex-col gap-8 scroll-mt-8">
                    <h2 className="text-xl font-bold">Technical Experience</h2>
                    <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-3 space-y-8">
                      {/* Optiver */}
                      <ExpandableCard
                        logo={<div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center text-white text-xs font-bold">OP</div>}
                        title="Optiver"
                        subtitle="Career Kickstarter - Software Engineering Track"
                        dateRange="Mar 2026"
                        bullets={[
                          <>Selected for a competitive program focused on <span className="font-medium text-neutral-800 dark:text-neutral-200">low-latency systems</span>, networking, and exchange-level trading infrastructure.</>,
                          <>Built a simulated exchange from scratch using <span className="font-medium text-neutral-800 dark:text-neutral-200">gRPC</span> and <span className="font-medium text-neutral-800 dark:text-neutral-200">Protobuf</span>, implementing order matching, low-latency communication, and real-time position and risk management.</>,
                        ]}
                      />

                      {/* Undergraduate Researcher */}
                      <ExpandableCard
                        logo={<Image src={uofaLogo} alt="University of Adelaide" className="w-8 h-8 rounded-full object-cover" />}
                        title="University of Adelaide"
                        subtitle="Undergraduate Researcher"
                        dateRange="Dec 2025 – Mar 2026"
                        bullets={[
                          <>Benchmarked <span className="font-medium text-neutral-800 dark:text-neutral-200">LNS, VNS, and LKH-3</span> across <span className="font-medium text-neutral-800 dark:text-neutral-200">TSPTW</span> instances scaling from 20 to 200 nodes under strict computational budgets to establish fair sequential baselines.</>,
                          <>Developed a <span className="font-medium text-neutral-800 dark:text-neutral-200">warm-start transfer strategy</span> that reuses solution states between tasks, achieving statistically significant efficiency gains over isolated execution.</>,
                        ]}
                      />

                      {/* Research Assistant */}
                      <ExpandableCard
                        logo={<Image src={uofaLogo} alt="University of Adelaide" className="w-8 h-8 rounded-full object-cover" />}
                        title="University of Adelaide"
                        subtitle="Research Assistant"
                        dateRange="Jul 2025 – Dec 2025"
                        bullets={[
                          <>Overhauled the synthetic data generation pipeline in <span className="font-medium text-neutral-800 dark:text-neutral-200">NVIDIA Isaac Sim</span>, enabling scalable fine-tuning of <span className="font-medium text-neutral-800 dark:text-neutral-200">vision-language foundation models</span> on domain-specific tasks.</>,
                          <>Debugged trajectory planning algorithms to eliminate path instability, generating <span className="font-medium text-neutral-800 dark:text-neutral-200">500+ high-fidelity video sequences</span> used as ground-truth training data.</>,
                        ]}
                      />

                      {/* FPT Software */}
                      <ExpandableCard
                        logo={<Image src={fptLogo} alt="FPT Software" className="w-8 h-8 rounded-full object-cover" />}
                        title="FPT Software"
                        subtitle="Software Engineer Intern"
                        dateRange="Jul 2025 – Sep 2025"
                        bullets={[
                          <>Built an <span className="font-medium text-neutral-800 dark:text-neutral-200">LLM-powered analytics platform</span> with <span className="font-medium text-neutral-800 dark:text-neutral-200">React, Python, and PostgreSQL</span> for NRC Health, enabling natural-language queries over structured data with <span className="font-medium text-neutral-800 dark:text-neutral-200">sub-3s response times</span>.</>,
                          <>Developed <span className="font-medium text-neutral-800 dark:text-neutral-200">data-to-text generation pipelines</span> using structured prompt chains, automating weekly reporting for <span className="font-medium text-neutral-800 dark:text-neutral-200">30+ stakeholders</span>.</>,
                        ]}
                      />
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
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">GPA: 6.28/7.0 | Major GPA: 6.43/7.0</p>

                            <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-0.5">
                              Feb 2024 – Expected Nov 2026
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
                  {/* CodeRecall */}
                  <ExpandableCard
                    logo={<Image src={coderecallLogo} alt="CodeRecall" className="w-8 h-8 rounded-full object-cover" />}
                    title="CodeRecall"
                    subtitle="Next.js, TypeScript, PostgreSQL"
                    dateRange="Jan 2026 – Present"
                    link="https://coderecall-web.vercel.app/"
                    bullets={[
                      <>Built a <span className="font-medium text-neutral-800 dark:text-neutral-200">full-stack spaced repetition platform</span> with a <span className="font-medium text-neutral-800 dark:text-neutral-200">modified FSRS algorithm</span> and confidence-based grading to dynamically optimize review intervals.</>,
                      <>Designed the review workflow around <span className="font-medium text-neutral-800 dark:text-neutral-200">200+ coding problems</span>, balancing retrieval practice, retention targets, and usability for consistent long-term study.</>,
                    ]}
                  />

                  {/* Cinesphere */}
                  <ExpandableCard
                    logo={<div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold">CS</div>}
                    title="Cinesphere"
                    subtitle="Vue.js, Node.js, Express, REST API"
                    link="https://github.com/NHXHxD/cinesphere"
                    dateRange="Mar 2025 – Jun 2025"
                    bullets={[
                      <>Architected a <span className="font-medium text-neutral-800 dark:text-neutral-200">production-ready web application</span>, implementing a <span className="font-medium text-neutral-800 dark:text-neutral-200">modular MVC architecture</span> to decouple business logic, API routes, and data access layers.</>,
                      <>Designed a <span className="font-medium text-neutral-800 dark:text-neutral-200">scalable relational database schema (MySQL)</span> and a custom <span className="font-medium text-neutral-800 dark:text-neutral-200">Repository Pattern abstraction layer</span>, optimizing complex join queries for real-time aggregation.</>,
                    ]}
                  />
                </div>
            </section>

            {/* Awards Section */}
            <section id="awards" className="flex flex-col gap-6 scroll-mt-8">
                <h2 className="text-xl font-bold">Awards</h2>
                <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-3 space-y-8">
                  <ExpandableCard
                    logo={<div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white text-xs font-bold">JS</div>}
                    title="Jane Street Electronic Trading Challenge"
                    subtitle="First Place"
                    dateRange="Mar 2025"
                    bullets={[
                      <>Secured <span className="font-medium text-neutral-800 dark:text-neutral-200">1st place out of 15 teams</span> by engineering a market-making strategy around statistical arbitrage signals and real-time order book imbalances.</>,
                      <>Optimized for <span className="font-medium text-neutral-800 dark:text-neutral-200">risk-adjusted PnL</span>, balancing aggressiveness, inventory risk, and execution quality in a competitive simulated market.</>,
                    ]}
                  />
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="flex flex-col gap-6 scroll-mt-8">
                <h2 className="text-xl font-bold">Technical Skills</h2>
                <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 p-6 space-y-4">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="font-medium text-neutral-900 dark:text-neutral-100">Languages:</span>{" "}
                    Python, C/C++, TypeScript, JavaScript, SQL, Java
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="font-medium text-neutral-900 dark:text-neutral-100">Frameworks:</span>{" "}
                    Next.js, React, Node.js, Vue.js, Express.js
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="font-medium text-neutral-900 dark:text-neutral-100">Tools:</span>{" "}
                    CUDA, Docker, PostgreSQL, MySQL, Git, Linux, CMake
                  </p>
                </div>
            </section>

        </div>

      </main>

      {/* Footer */}
      <footer className="mt-24 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-2xl mx-auto pt-8 px-8 sm:px-20 flex flex-col items-center gap-4">
          {/* Social Icons */}
          <div className="flex gap-5">
            <a 
              href="https://github.com/NHXHxD" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/hoang-xuan-hy-nguyen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="mailto:hoangxuanhy.nguyen@gmail.com"
              className="text-gray-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              aria-label="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400 font-sans">
            © 2026 Hy Nguyen
          </p>
        </div>
      </footer>
    </div>
  );
}
