import React, { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import Nav from "../Shared/Nav/Nav";
import LeftNav from "../Shared/Left-nav/LeftNav";
import RightNav from "../Shared/RightNav/RightNav";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Card from "./Card";

const Home = () => {
	const [news, setNews] = useState([])

	useEffect(() => {
		fetch("data/news.json")
			.then((res) => res.json())
			.then((data) => setNews(data));
	}, []);
	return (
		<div>
			<Header></Header>
			<div>
				<Marquee
					pauseOnHover="true"
					speed={200}
				>
					<Link to="/">
						I can be a React component, multiple React components, or just some
						text.
					</Link>
					<Link to="/">
						I can be a React component, multiple React components, or just some
						text.
					</Link>
					<Link to="/">
						I can be a React component, multiple React components, or just some
						text.
					</Link>
					<Link to="/">
						I can be a React component, multiple React components, or just some
						text.
					</Link>
				</Marquee>
			</div>
			<Nav></Nav>
			<div className="grid md:grid-cols-4 gap-10">
				<div className="">
					<LeftNav></LeftNav>
				</div>
				<div className="col-span-2">
					<div className="flex flex-col gap-5">
						{news.map((item) => (
							<Card item={item}></Card>
						))}
					</div>
				</div>
				<div>
					<RightNav></RightNav>
				</div>
			</div>
		</div>
	);
};

export default Home;
