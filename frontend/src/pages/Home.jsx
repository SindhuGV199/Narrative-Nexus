import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import UploadSection from "../components/UploadSection";
import API from "../services/api";
import StatisticsCard from "../components/StatisticsCard";
import SentimentCard from "../components/SentimentCard";
import TopicsCard from "../components/TopicsCard";
import SummaryCard from "../components/SummaryCard";
import LoadingOverlay from "../components/LoadingOverlay";

function Home() {

    const [selectedFile, setSelectedFile] = useState(null);
    const [analysis, setAnalysis] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleAnalyze = async () => {

    if (!selectedFile) {
        alert("Please select a file.");
        return;
    }

    setLoading(true);
    const formData = new FormData();

    formData.append("file", selectedFile);

    try {

        const response = await API.post(
            "/analyze",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        );

        
        setAnalysis(response.data.data);
        setLoading(false);

    }

    catch(error){

        console.error(error);
        setLoading(false);

    }

};


    return (
    <div className="min-h-screen bg-slate-950">
      {loading && <LoadingOverlay />}

        <Navbar />

        <Hero />

        <UploadSection
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            onAnalyze={handleAnalyze}
            loading={loading}
        />

        {analysis && (
    <>
        <StatisticsCard statistics={analysis.statistics} />
        <SentimentCard sentiment={analysis.sentiment} />
        <TopicsCard topics={analysis.topics} />
        <SummaryCard summary={analysis.summary} analysis={analysis}/>
    </>
  )}

    </div>
);

}

export default Home;