import {
  FiFileText,
  FiType,
  FiClock,
  FiAlignLeft,
} from "react-icons/fi";

function StatisticsCard({ statistics }) {
  const items = [
    {
      title: "Words",
      value: statistics.word_count,
      icon: <FiFileText size={30} className="text-cyan-400" />,
    },
    {
      title: "Characters",
      value: statistics.character_count,
      icon: <FiType size={30} className="text-emerald-400" />,
    },
    {
      title: "Sentences",
      value: statistics.sentence_count,
      icon: <FiAlignLeft size={30} className="text-amber-400" />,
    },
    {
      title: "Reading Time",
      value: `${statistics.reading_time} min`,
      icon: <FiClock size={30} className="text-pink-400" />,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto mt-16 px-6">

      <div className="flex items-center gap-4 mb-8">
        <div className="w-1.5 h-8 rounded-full bg-cyan-400"></div>

        <h2 className="text-3xl font-bold text-white">
          Document Statistics
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

        {items.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/80 backdrop-blur-md p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-2xl"
          >

            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-cyan-500/10 blur-2xl group-hover:bg-cyan-500/20 transition-all"></div>

            <div className="relative">

              <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700">
                {item.icon}
              </div>

              <p className="mt-6 text-slate-400 text-sm uppercase tracking-wider">
                {item.title}
              </p>

              <h3 className="mt-2 text-4xl font-extrabold text-white">
                {item.value}
              </h3>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default StatisticsCard;