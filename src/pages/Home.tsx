import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-[#f7faff]">
            <div className="home-content-container relative">
                <div className="bg-white p-6 shadow-home-content flex flex-col items-center justify-center  rounded-2xl relative z-20">
                    <div
                        className="bg-text-gradient bg-clip-text bg-scroll mb-8"
                        style={{ WebkitTextFillColor: "transparent" }}
                    >
                        <h1
                            className="font-bold text-7xl tracking-tight"
                            style={{ wordSpacing: "1rem" }}
                        >
                            Convert to PDF
                        </h1>
                    </div>
                    <p className="text-[#0a1530] text-lg font-semibold max-w-[45ch] text-center mb-5">
                        Convert and combine all images format (jpg, png, gif,
                        tiff, bmp) to pdf
                    </p>
                    <div className="flex gap-4">
                        <Link
                            to={"/convert"}
                            className="w-40 rounded-xl h-10 inline-flex justify-center items-center bg-[#0a1530]"
                        >
                            <span className="text-white font-semibold text-lg">
                                Image to PDF
                            </span>
                        </Link>
                        <Link
                            to={"editor"}
                            className="w-40 rounded-xl h-10 inline-flex justify-center items-center bg-[#0a1530]"
                        >
                            <span className="text-white font-semibold text-lg">
                                PDF Editor
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
