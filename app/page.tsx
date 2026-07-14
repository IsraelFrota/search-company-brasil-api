"use client";

import { useState } from "react";
import Navigation from "./components/Navigation";
import SearchNCM from "./components/SearchNCM";
import SearchCompany from "./components/SearchCompany";
import { WelcomeCard } from "./components/WelcomeCard";
import type { Render } from "./types";

export default function Home() {
	const [render, setRender] = useState<Render>("idle");

	return (
		<div className="flex flex-1 min-h-screen">
			<Navigation state={render} handler={setRender} />
			<main className="flex-1 flex justify-center items-start w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
				{render === "Company" && <SearchCompany />}
				{render === "NCM" && <SearchNCM />}
				
				{render === "idle" && (
					<div className="flex items-center justify-center w-full h-full">
						<WelcomeCard onSelect={setRender} />
					</div>
				)}
			</main>
		</div>
	);
}
