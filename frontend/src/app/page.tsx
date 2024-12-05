"use client"; // Indicates this page runs only on the client-side

import React, { useState } from "react";
import Navbar from "../components/navbar/navbar"
import Filter from "../components/filter/filter"
import Globe from "@/components/globe/globe"
import FlightResults from "@/components/results/flightresults";

export default function HomePage() {
    const [view, setView] = useState<"home" | "results">("home");

    const handleSearch = () => (
        setView("results")
    )

    return (
        <main className="flex flex-col items-center h-screen">
            <Navbar />
            <div className="flex w-screen h-full">
                <Filter onSearch={handleSearch} />
                {view === "home" ? <Globe/> : <FlightResults/>}
            </div>
        </main>
    );
}
