import { FiCpu } from "react-icons/fi";

function Navbar() {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-slate-800">

            <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

                <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg">
                        <FiCpu className="text-white text-2xl" />
                    </div>

                    <div>

                        <h1 className="text-2xl font-extrabold text-white tracking-wide">
                            Narrative Nexus
                        </h1>

                        <p className="text-sm text-slate-400">
                            AI Powered Document Intelligence
                        </p>

                    </div>

                </div>

                <div className="hidden md:flex items-center gap-3">

                    <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm">
                        Version 1.0
                    </span>

                </div>

            </div>

        </header>
    );
}

export default Navbar;