import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";

const LeftNav = () => {
	const [category, setcategory] = useState([]);
	const [news, setNews] = useState([]);

	useEffect(() => {
		fetch("data/categories.json")
			.then((res) => res.json())
			.then((data) => setcategory(data));
	}, []);

	useEffect(() => {
		fetch("data/news.json")
			.then((res) => res.json())
			.then((data) => setNews(data));
	}, []);
	return (
		<div className="space-y-8 text-xl font-semibold">
			<h1>All categotis {category.length}</h1>
			<div className="flex flex-col gap-4  ml-5">
				{category.map((item) => (
					<Link>
						<p>{item.name}</p>
					</Link>
				))}
			</div>

			<div>

				{news.slice(6,9).map((item) => <Cards item={item}></Cards>)}
			</div>
		</div>
	);
};

export default LeftNav;
