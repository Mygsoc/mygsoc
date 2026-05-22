import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white font-sans selection:bg-[#2ea44f] selection:text-white">
      
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto border-b border-gray-800">
        <div className="text-2xl font-bold tracking-tighter">
          MyGSoC<span className="text-[#2ea44f]">.xyz</span>
        </div>
        <a 
          href="https://github.com/YOUR_GITHUB_USERNAME/mygsoc-platform" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white text-black px-5 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
        >
          GitHub Repository
        </a>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 pt-24 pb-32 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Your Open Source <br className="hidden md:block" /> Journey, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ea44f] to-[#207337]">Showcased.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          The open-source platform for GSoC aspirants. Build your portfolio using HTML/CSS, open a Pull Request, and instantly get your own <code className="bg-gray-800 text-[#2ea44f] px-2 py-1 rounded text-lg">username.mygsoc.xyz</code> subdomain.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="https://github.com/YOUR_GITHUB_USERNAME/mygsoc-platform#readme" 
            className="bg-[#2ea44f] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#2c974b] transition transform hover:scale-105 shadow-lg shadow-green-900/20"
          >
            Claim Your Subdomain
          </a>
          <a 
            href="https://demo.mygsoc.xyz" 
            target="_blank"
            className="bg-[#21262d] border border-gray-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#30363d] transition"
          >
            View Live Demo
          </a>
        </div>

        {/* How it Works Grid */}
        <div className="mt-32 grid md:grid-cols-3 gap-8 text-left">
          
          {/* Step 1 */}
          <div className="bg-[#161b22] p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition">
            <div className="text-[#2ea44f] text-4xl font-black mb-4">01.</div>
            <h3 className="text-2xl font-bold mb-3">Fork & Create</h3>
            <p className="text-gray-400 leading-relaxed">
              Fork our repository on GitHub. Create a new folder inside the <code>/public</code> directory named exactly after your GitHub username.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-[#161b22] p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition">
            <div className="text-[#2ea44f] text-4xl font-black mb-4">02.</div>
            <h3 className="text-2xl font-bold mb-3">Code Your Page</h3>
            <p className="text-gray-400 leading-relaxed">
              Write plain HTML, CSS, and JS. Showcase your PRs, tech stack, and target organizations. No complex frameworks required.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-[#161b22] p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition">
            <div className="text-[#2ea44f] text-4xl font-black mb-4">03.</div>
            <h3 className="text-2xl font-bold mb-3">Open a PR</h3>
            <p className="text-gray-400 leading-relaxed">
              Submit a Pull Request. Once our maintainers review and merge it, your personal subdomain goes live automatically in seconds!
            </p>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-10 text-center text-gray-500">
        <p>Built by the Open Source Community, for the Open Source Community.</p>
        <p className="mt-2">Not affiliated with Google or the official Google Summer of Code program.</p>
      </footer>

    </div>
  );
}