import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../../Contest/Context";

const Nav = () => {
	const { user, logOut } = useContext(authContext);
	console.log(user);

	const handleLogOut = () => {
		logOut().then().catch();
	};

	const ul = (
		<div>
			<Link
				className="mr-4"
				to="/"
			>
				Home
			</Link>
			<Link
				className="mr-4"
				to="/"
			>
				About
			</Link>
			<Link
				className="mr-4"
				to="/"
			>
				Carrer
			</Link>
			<Link
				className="mr-4"
				to="/login"
			>
				Login
			</Link>
			<Link
				className="mr-4"
				to="/registration"
			>
				Registration
			</Link>
		</div>
	);
	return (
		<div>
			<div className="navbar bg-base-100">
				<div className="navbar-start">
					<div className="dropdown">
						<label
							tabIndex={0}
							className="btn btn-ghost lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-6 shadow bg-base-100 rounded-box w-52"
						>
							{ul}
						</ul>
					</div>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">{ul}</ul>
				</div>

				<div className="navbar-end">
					{user ? (
						<a
							onClick={handleLogOut}
							className="btn"
						>
							SignOut
						</a>
					) : (
						<Link to="/login">
							<a className="btn">Login</a>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default Nav;
