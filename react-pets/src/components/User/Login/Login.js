import React from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default function Login({history}) {

	const onSubmitHandler = (e) => {
		e.preventDefault();

		const auth = getAuth();
		const email = e.target.email.value;
		const password = e.target.password.value;

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				console.log('Sign in ', userCredential.user.email)
				history.push('/');

			})
			.catch(err => {
				console.log(err);
			});


		console.log(`Email: ${email} with password: ${password}`)
	}




	return (
		<section className="login">
			<form action="#" method="post" onSubmit={onSubmitHandler}>
				<fieldset>
					<legend>Login</legend>
					<p className="field">
						<label htmlFor="email">Email</label>
						<span className="input">
							<input type="text" name="email" id="email" placeholder="email" />
							<span className="actions"></span>
							<i className="fas fa-user"></i>
						</span>
					</p>
					<p className="field">
						<label htmlFor="password">Password</label>
						<span className="input">
							<input type="password" name="password" id="password" placeholder="Password" />
							<span className="actions"></span>
							<i className="fas fa-key"></i>
						</span>
					</p>
					<input className="button" type="submit" value="Login" />
				</fieldset>
			</form>
			<style jsx>
				{`
                body {
	background: #FFF;
	padding: 1rem;
}

form {
	max-width: 30rem;
}

form,
form fieldset,
form legend,
form label,
form input,
form textarea,
form select {
	display: block;
}

form fieldset,
form legend {
	border: 1px solid #666;
	background: #F9F9F9;
	border-radius: 0.3rem;
	box-shadow: 0 0 1rem 0.1rem rgba(0, 0, 0, 0.1);
}

form fieldset {
	padding: 2.5em 2em 2em 2em;
	position: relative;
}

form legend {
	width: 30%;
	padding: 0.5rem 1rem;
	left: -1px;
	top: -1.4rem;
	position: absolute;
}

form label {
	font-weight: bold;
}

.field {}


.field .input {
	display: flex;
	position: relative;
	align-items: center;
}

.field .input:after {
	display: block;
	content: '';
}


.field .input input {
	border: none;
	flex: 1 1 auto;
	padding: 0.8rem;
	outline: none;
	background: transparent;
	z-index: 2;
	order: 2;
}

.field .input .fas {
	z-index: 2;
	position: relative;
	padding: 0 0 0 0.8rem;
	font-size: 0.9em;
	order: 1;
}

.field .input input+.actions {
	display: block;
	background: #FFF;
	border: 1px solid #CCC;
	border-radius: 0.3rem;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1;
}

.field .input input:focus+.actions {
	border-color: #090;
}

.field .input input:focus+.actions+.fas {
	color: #090;
}

form textarea {
	border-radius: 0.5rem;
	padding: 0.8rem;
}

form textarea:focus {
	outline: none;
	border-color: #090;
}

.description {
	width: 17rem;
	height: 10vh;
	padding: 2rem;
	overflow: auto;
}
                `}
			</style>
		</section>
	)
}
