export default function Home() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-sans">
      <main className="max-w-2xl mx-auto space-y-8">
        
        {/* Hero Section */}
        <section className="flex flex-col gap-4">
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
        </section>

      </main>
    </div>
  );
}
