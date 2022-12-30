import React from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from './api/data'

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
	
	const cards = data.map (card => {
		return (
			<Card 
			key={card.id}
			card={card}
	/>
		)
	})

	return (
		<>
		<main>
			<Navbar />
			<Hero />
			<section className="cards">
				{cards}
			</section>
		</main>
		</>
	);
}
