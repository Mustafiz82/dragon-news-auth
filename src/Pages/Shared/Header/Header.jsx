import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment/moment";

const Header = () => {
	return (
		<div className="text-center">
			<div className="text-center flex justify-center">
				<img
					src={logo}
					alt=""
				/>
			</div>
                <p>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd,  D MMMM YYYY, h:mm:ss a")}</p>
		</div>
	);
};

export default Header;
