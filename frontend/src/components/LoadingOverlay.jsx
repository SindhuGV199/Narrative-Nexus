function LoadingOverlay() {
    return (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex flex-col justify-center items-center z-[9999]">

            <div className="w-20 h-20 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>

            <h2 className="mt-8 text-3xl font-bold text-white">
                Analyzing Document...
            </h2>

            <p className="mt-3 text-slate-400">
                AI is generating insights. Please wait.
            </p>

        </div>
    );
}

export default LoadingOverlay;