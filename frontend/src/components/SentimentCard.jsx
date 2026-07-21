import { FiSmile } from "react-icons/fi";

function SentimentCard({ sentiment }) {

    const label = sentiment.label.toLowerCase();

    const color =
        label === "positive"
            ? "bg-emerald-500"
            : label === "negative"
            ? "bg-red-500"
            : "bg-yellow-500";

    const textColor =
        label === "positive"
            ? "text-emerald-400"
            : label === "negative"
            ? "text-red-400"
            : "text-yellow-400";

    return (
        <section className="max-w-7xl mx-auto mt-16 px-6">

            <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-8 rounded-full bg-cyan-400"></div>

                <h2 className="text-3xl font-bold text-white">
                    Sentiment Analysis
                </h2>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/80 backdrop-blur-md p-8">

                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl"></div>

                <div className="relative flex flex-col md:flex-row justify-between md:items-center gap-8">

                    <div>

                        <div className="flex items-center gap-3">

                            <div className="w-14 h-14 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                                <FiSmile className="text-cyan-400 text-2xl" />
                            </div>

                            <div>

                                <p className="text-slate-400 text-sm uppercase tracking-wider">
                                    Overall Sentiment
                                </p>

                                <h3 className={`text-4xl font-extrabold capitalize mt-1 ${textColor}`}>
                                    {sentiment.label}
                                </h3>

                            </div>

                        </div>

                    </div>

                    <div className="text-left md:text-right">

                        <p className="text-slate-400 text-sm uppercase tracking-wider">
                            Confidence
                        </p>

                        <h3 className="text-4xl font-extrabold text-white mt-1">
                            {sentiment.score}%
                        </h3>

                    </div>

                </div>

                <div className="mt-10">

                    <div className="flex justify-between text-sm text-slate-400 mb-2">
                        <span>Confidence Score</span>
                        <span>{sentiment.score}%</span>
                    </div>

                    <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden">

                        <div
                            className={`${color} h-full rounded-full transition-all duration-1000`}
                            style={{ width: `${sentiment.score}%` }}
                        ></div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default SentimentCard;