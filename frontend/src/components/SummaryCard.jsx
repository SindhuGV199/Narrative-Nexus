import { FiClipboard, FiFileText } from "react-icons/fi";
import toast from "react-hot-toast";
import generateReport from "../utils/generateReport";

function SummaryCard({ summary, analysis }){

    const copySummary = () => {
        navigator.clipboard.writeText(summary);
        toast.success("Summary copied successfully!");
    };

    return (
        <section className="max-w-7xl mx-auto mt-16 mb-20 px-6">

            <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-8 rounded-full bg-cyan-400"></div>

                <h2 className="text-3xl font-bold text-white">
                    AI Generated Summary
                </h2>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/80 backdrop-blur-md p-8">

                <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-purple-500/10 blur-3xl"></div>

                <div className="relative flex justify-between items-center flex-wrap gap-4">

                    <div className="flex items-center gap-4">

                        <div className="w-14 h-14 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                            <FiFileText className="text-cyan-400 text-2xl" />
                        </div>

                        <div>
                            <p className="text-slate-400 text-sm uppercase tracking-wider">
                                AI Generated Summary
                            </p>

                            <h3 className="text-2xl font-bold text-white">
                                Document Overview
                            </h3>
                        </div>

                    </div>

                    <button
                        onClick={copySummary}
                        className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 px-5 py-3 rounded-xl text-white font-semibold transition duration-300 hover:scale-105"
                    >
                        <FiClipboard />
                        Copy Summary
                    </button>
                    <button
    onClick={() => generateReport(analysis)}
    className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 px-5 py-3 rounded-xl text-white font-semibold transition duration-300 hover:scale-105"
>
    Download PDF
</button>

                </div>

                <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-800/70 p-7">

                    <p className="text-slate-200 text-lg leading-9 text-justify">
                        {summary}
                    </p>

                </div>

            </div>

        </section>
    );
}

export default SummaryCard;