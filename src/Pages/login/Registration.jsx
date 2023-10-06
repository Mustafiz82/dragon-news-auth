import React, { useContext } from "react";
import Nav from "../Shared/Nav/Nav";
import { authContext } from "../../Contest/Context";

const Registration = () => {

    const obj = useContext(authContext)
    const {createUser} = obj

    console.log(createUser);




	const handleSubmit = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const pass = e.target.password.value;
		const name = e.target.name.value;
		const photoUrl = e.target.PhotoUrl.value;

		console.log(name ,photoUrl,email, pass);

        createUser(email , pass )
        .then(result =>{
            const user = result.user
            console.log(user);
        })
        .catch(error => {
            console.log(error);
        })
        
	};

	return (
		<div>
			<div>
				<Nav></Nav>

				<div className="card flex-shrink-0  shadow-2xl bg-base-100 max-w-3xl mx-auto">
					<form
						className="card-body"
						onSubmit={handleSubmit}
					>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="name"
								name="name"
								placeholder="Name"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Photo url</span>
							</label>
							<input
								type="url"
								name="PhotoUrl"
								placeholder="PhotoUrl"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								name="email"
								placeholder="email"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								name="password"
								placeholder="password"
								className="input input-bordered"
								required
							/>
							<label className="label">
								<a
									href="#"
									className="label-text-alt link link-hover"
								>
									Forgot password?
								</a>
							</label>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-primary">Login</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Registration;
