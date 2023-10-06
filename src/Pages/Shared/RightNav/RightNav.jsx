import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineInstagram ,AiOutlineGithub , AiOutlineTwitter} from "react-icons/ai";

const RightNav = () => {
	return (
		<div className="space-y-4">
			<div className="m-5 space-y-3">
				<button className="btn w-full">
					<div className="flex items-center gap-4">
						<FcGoogle className=" text-xl"></FcGoogle>
						LOgin with google
					</div>
				</button>
				<button className="btn w-full">
					<div className="flex items-center gap-4">
						<AiOutlineGithub className="text-xl"></AiOutlineGithub>
						LOgin with Github
					</div>
				</button>
			</div>

			<h1 className="text-2xl">Find us on</h1>
			<div className="space-y-5 text-xl">
				<div className="flex items-center gap-4">
					<div className="rounded-full bg-gray-700 p-2 ">
						<FaFacebookF className="text-blue-600"></FaFacebookF>
					</div>
					Facebook
				</div>
				<div className="flex items-center gap-4">
					<div className="rounded-full bg-gray-700 p-2 ">
						<AiOutlineTwitter className="text-black"></AiOutlineTwitter>
					</div>
					Tweeter
				</div>
				<div className="flex items-center gap-4">
					<div className="rounded-full bg-gray-700 p-2 ">
						<AiOutlineInstagram className="text-red-500"></AiOutlineInstagram>
					</div>
					Instagram
				</div>
			</div>

			<div className="space-y-5">
				<h2>Q-zone</h2>

				<img
					src={qzone1}
					alt=""
					srcset=""
				/>
				<img
					src={qzone2}
					alt=""
					srcset=""
				/>
				<img
					src={qzone3}
					alt=""
					srcset=""
				/>
			</div>
		</div>
	);
};

export default RightNav;
