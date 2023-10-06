import React, { useContext } from "react";
import Nav from "../Shared/Nav/Nav";
import { authContext } from "../../Contest/Context";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Login = () => {

    const  {signInUser} = useContext(authContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location);

    const handleSubmit = (e) =>{
        e.preventDefault()
        const email = e.target.email.value
        const pass = e.target.password.value

        // console.log(email , pass);

        signInUser(email , pass)
        .then(result =>{
            user = result.user
            console.log(user);
        })
        .catch(error =>console.log(error))
        navigate(location.state ? location.state :'/')

    }

	return (
		<div>
			<Nav></Nav>

                
				
			
            <div className="card flex-shrink-0  shadow-2xl bg-base-100 max-w-3xl mx-auto">
						<form className="card-body" onSubmit={handleSubmit}>
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
	);
};

export default Login;
