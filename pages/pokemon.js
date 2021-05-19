import React from "react";
import Layout from "../component/Layout.js";
import Link from "next/link";

var color = "";

export default function pokemon({ pokeman }) {
	function typeColor(req) {
		console.log(pokeman);
		switch (req) {
			case "grass":
				color = "text-green-500 capitalize text-center";
				break;
			case "ground":
				color = "text-yellow-600 capitalize text-center";
				break;
			case "bug":
				color = "text-green-500 capitalize text-center";
				break;
			case "poison":
				color = "text-purple-500 capitalize text-center";
				break;
			case "fire":
				color = "text-orange-500 capitalize text-center";
				break;
			case "water":
				color = "text-blue-500 capitalize text-center";
				break;
			case "flying":
				color = "text-blue-200 capitalize text-center";
				break;
			case "normal":
				color = "text-yellow-500 capitalize text-center";
				break;
			case "psychic":
				color = "text-purple-400 capitalize text-center";
				break;
			case "rock":
				color = "text-gray-700 capitalize text-center";
				break;
			case "dragon":
				color = "text-purple-700 capitalize text-center";
				break;
			case "ice":
				color = "text-teal-200 capitalize text-center";
				break;
			case "dark":
				color = "text-black capitalize text-center";
				break;
			case "electric":
				color = "text-yellow-300 capitalize text-center";
				break;
			case "fighting":
				color = "text-orange-600 capitalize text-center";
				break;
			case "fairy":
				color = "text-pink-400 capitalize text-center";
				break;
		}
	}

	return (
		<Layout className="" title={pokeman.name}>
			<h1 className="text-4xl mb-2 text-center capitalize text-white">
				{pokeman.name}
			</h1>
			<img className="mx-auto" src={pokeman.image} alt={pokeman.name} />
			<p className="text-center text-white">
				<span className="font-bold mr-2">Weight: </span>
				{pokeman.weight / 10}kg
			</p>
			<p className="text-center text-white">
				<span className="font-bold mr-2">Height: </span>
				{pokeman.height}m
			</p>
			<h2 className="text-2xl mt-6 mb-2 text-center text-white">Types</h2>
			{pokeman.types.map((type, index) => (
				<div>
					<a>{typeColor(type.type.name)}</a>
					<p className={color} key={index}>
						{type.type.name}
					</p>
				</div>
			))}
			<p className="mt-10 text-center text-white">
				<Link href="/">
					<a className="text-2xl underline">Home</a>
				</Link>
			</p>
		</Layout>
	);
}

export async function getServerSideProps({ query }) {
	const id = query.id;
	try {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
		const pokeman = await res.json();
		const paddedIndex = ("00" + id).slice(-3);
		const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
		pokeman.image = image;
		return {
			props: { pokeman },
		};
	} catch (err) {
		console.log(err);
	}
}
