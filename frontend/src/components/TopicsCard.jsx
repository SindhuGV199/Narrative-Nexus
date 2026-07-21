import { FiCpu, FiTag, FiFileText } from "react-icons/fi";

function TopicsCard({ topics }) {
    return (
        <section className="max-w-7xl mx-auto mt-16 px-6">

            <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-8 rounded-full bg-cyan-400"></div>

                <h2 className="text-3xl font-bold text-white">
                    AI Topic Discovery
                </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">

                {topics.map((topic, index) => (

                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/80 backdrop-blur-md p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-2xl"
                    >

                        <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl group-hover:bg-cyan-500/20 transition-all"></div>

                        <div className="relative">

                            <div className="flex items-center gap-3">

                                <div className="w-14 h-14 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                                    <FiCpu className="text-cyan-400 text-2xl" />
                                </div>

                                <div>
                                    <p className="text-slate-400 text-sm uppercase tracking-wider">
                                        Topic
                                    </p>

                                    <h3 className="text-2xl font-bold text-white">
                                        {topic.title}
                                    </h3>
                                </div>

                            </div>

                            <div className="mt-8">

                                <div className="flex items-center gap-2 mb-4">
                                    <FiTag className="text-cyan-400" />
                                    <p className="text-slate-300 font-semibold">
                                        Keywords
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-3">

                                    {topic.keywords.map((word, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm hover:bg-cyan-500/20 transition"
                                        >
                                            {word}
                                        </span>
                                    ))}

                                </div>

                            </div>

                            <div className="mt-8">

                                <div className="flex items-center gap-2 mb-4">
                                    <FiFileText className="text-cyan-400" />
                                    <p className="text-slate-300 font-semibold">
                                        Representative Sentences
                                    </p>
                                </div>

                                <div className="space-y-3">

                                    {topic.representative_sentences.map((sentence, i) => (

                                        <div
                                            key={i}
                                            className="rounded-xl border border-slate-700 bg-slate-800/70 p-4"
                                        >
                                            <p className="text-slate-200 leading-7">
                                                {sentence}
                                            </p>
                                        </div>

                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default TopicsCard;