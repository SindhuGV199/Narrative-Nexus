import { FiUploadCloud } from "react-icons/fi";
import { useRef } from "react";

function UploadSection({ selectedFile, setSelectedFile, onAnalyze, loading }) {

    const fileInputRef = useRef();

    return (
        <section className="max-w-4xl mx-auto px-6">

            <div className="rounded-3xl border border-slate-700 bg-slate-800/70 p-6 md:p-10">

                <div className="flex flex-col items-center">

                    <FiUploadCloud
                        className="text-cyan-400"
                        size={70}
                    />

                    <h3 className="mt-6 text-3xl font-bold text-white text-center">
                        Upload Your Document
                    </h3>

                    <p className="mt-3 text-slate-300">
                        PDF • DOCX • TXT
                    </p>

                    <input
                        type="file"
                        ref={fileInputRef}
                        hidden
                        accept=".pdf,.docx,.txt"
                        onChange={(e) =>
                            setSelectedFile(e.target.files[0])
                        }
                    />

                    <button
                        onClick={() => fileInputRef.current.click()}
                        className="mt-8 px-8 py-4 rounded-xl bg-cyan-600 hover:bg-cyan-700 transition duration-300 text-white font-semibold shadow-lg hover:scale-105"
                    >
                        Browse File
                    </button>

                    {selectedFile && (
    <div className="mt-6 w-full max-w-md bg-slate-900 border border-slate-700 rounded-xl px-5 py-4">
        <p className="text-gray-400 text-sm">Selected File</p>

        <p className="text-white font-medium truncate mt-1">
            📄 {selectedFile.name}
        </p>

        <p className="text-gray-500 text-sm mt-1">
            {(selectedFile.size / 1024).toFixed(2)} KB
        </p>
    </div>
)}

                    <button
    onClick={onAnalyze}
    disabled={loading || !selectedFile}
    className={`mt-6 px-8 py-4 rounded-xl text-white font-semibold transition duration-300 shadow-lg
    ${
        loading || !selectedFile
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-purple-600 hover:bg-purple-700 hover:scale-105"
    }`}
>
    {loading ? "Analyzing..." : "Analyze Document"}
</button>

                </div>

            </div>

        </section>
    );
}

export default UploadSection;