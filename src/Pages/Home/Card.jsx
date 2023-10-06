import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
	const { thumbnail_url, published_date, title, details, _id } = item;

	return (
		<div className="">
			<div className="card card-compact  bg-base-100 shadow-xl flex flex-col gap-5">
				<h2 className="card-title">{title}</h2>
				<img
					src={thumbnail_url}
					className="w-full h-[400px]"
					alt="Shoes"
				/>
				<div className="card-body">
					{details.length > 200 ? (
						<div>
							<p className="">{details.slice(0, 200)}</p>
							<Link to={`/details/${_id}`}>
								<p className="text-orange-400">ReadMore</p>
							</Link>
						</div>
					) : (
						<p className="">{details}</p>
					)}

					<div className="card-actions ">
						<p className="">{published_date}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
