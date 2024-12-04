"use client"; // Indicates this page runs only on the client-side

import React, { useState, useEffect } from "react";
import { fetchData } from "../utils/api";
import Navbar from "../components/navbar/navbar"

export default function HomePage() {
    const [view, setView] = useState("home");
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const result = await fetchData(""); 
                setData(result);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };

        fetchInitialData();
    }, []);

    return (
        <main className="max-w-[80%] m-auto flex flex-col items-center min-h-screen">
            <Navbar />
            <div>
                <h1 className="text-3xl font-bold mb-5">3D Interactive Flight App</h1>
                {view === "home" && <p>Welcome to the Home View</p>}
                {view === "details" && (
                    <div>
                        <h2>Flight Details</h2>
                        <p>{data ? JSON.stringify(data) : "Loading details..."}</p>
                    </div>
                )}
                <div className="mt-5">
                    <button
                        className="px-4 py-2 mr-2 bg-blue-500 text-white rounded"
                        onClick={() => setView("home")}
                    >
                        Home
                    </button>
                    <button
                        className="px-4 py-2 bg-green-500 text-white rounded"
                        onClick={() => setView("details")}
                    >
                        View Details
                    </button>
                </div>    
            </div>
        </main>
    );
}
