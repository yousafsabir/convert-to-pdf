import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-[#f7faff]">
            <div className="home-content-container relative">
                <div className="bg-white p-8 shadow-home-content flex flex-col items-center justify-center  rounded-2xl relative z-20">
                    <div
                        className="bg-text-gradient bg-clip-text bg-scroll mb-8"
                        style={{ WebkitTextFillColor: "transparent" }}
                    >
                        <h1
                            className="font-bold text-7xl tracking-tight"
                            style={{ wordSpacing: "0.5rem" }}
                        >
                            PDF Convert
                        </h1>
                    </div>
                    <p className="text-[#0a1530] text-lg font-semibold max-w-[45ch] text-center mb-5">
                    We have all the tools you’ll need to start, manage, and finish your work with digital documents.
                    </p>
                    <div className="flex gap-4">
                        <Link
                            to={"/topdf"}
                            className="w-44 rounded-xl h-10 inline-flex justify-center items-center bg-[#0a1530]"
                        >
                            <span className="text-white font-semibold text-lg">
                                Convert to PDF
                            </span>
                        </Link>
                        <Link
                            to={"pdfto"}
                            className="w-44 rounded-xl h-10 inline-flex justify-center items-center bg-[#0a1530]"
                        >
                            <span className="text-white font-semibold text-lg">
                                Convert PDF to
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
