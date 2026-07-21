import { FiCpu, FiFileText, FiZap } from "react-icons/fi";

function Hero() {
    return (
        <section className="relative text-center py-16 md:py-24 px-6 overflow-hidden">

            <div className="absolute inset-0 -z-10">
                <div className="absolute top-10 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm mb-8">
                <FiCpu />
                AI Powered Document Intelligence
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
                Analyze Documents
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    with Artificial Intelligence
                </span>
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 leading-8 px-2">
                Upload PDF, DOCX or TXT files and instantly receive
                AI-powered summaries, sentiment analysis, topic discovery,
                and document statistics—all in one place.
            </p>

            <div className="mt-14 flex flex-wrap justify-center gap-5">

                <div className="flex items-center gap-2 bg-slate-800/70 border border-slate-700 px-5 py-3 rounded-xl">
                    <FiFileText className="text-cyan-400" />
                    <span>PDF • DOCX • TXT</span>
                </div>

                <div className="flex items-center gap-2 bg-slate-800/70 border border-slate-700 px-5 py-3 rounded-xl">
                    <FiZap className="text-yellow-400" />
                    <span>Instant AI Analysis</span>
                </div>

            </div>

        </section>
    );
}

export default Hero;