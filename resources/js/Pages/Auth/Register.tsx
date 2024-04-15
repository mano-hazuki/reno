import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";

import { InputError } from "@/Components/InputError";
import TextInput from "@/Components/TextInput";

import type { FormEventHandler } from "react";

export default function Register() {
	const { data, setData, post, processing, errors, reset } = useForm({
		name: "",
		display_name: "",
		email: "",
		password: "",
		password_confirmation: "",
	});

	useEffect(() => {
		return () => {
			reset("password", "password_confirmation");
		};
	}, []);

	const submit: FormEventHandler = (e) => {
		e.preventDefault();
		post(route("register"));
	};

	return (
		<main className="@container w-full h-svh bg-login bg-cover bg-center grid grid-rows-12 grid-cols-8">
			<div className="absolute w-full h-full bg-gray-800 opacity-75 -z-10" />
			<Head title="Register" />

			<div className="row-start-1 row-span-4 col-start-2 col-span-6 flex flex-col justify-center items-center gap-2">
				<h1 className="text-3xl text-white">Create an account</h1>
				<p className="text-sm text-white opacity-75">Sign up to join</p>
			</div>

			<form onSubmit={submit} className="row-start-5 row-span-7 col-start-2 col-span-6 flex flex-col justify-center items-center gap-4">
				<div className="w-full h-fit">
					<TextInput
						id="name"
						name="name"
						placeholder="Name"
						value={data.name}
						className="text-base text-white placeholder:opacity-50 w-full p-4 rounded bg-white bg-opacity-5 focus:bg-opacity-10"
						isFocused={true}
						onChange={(e) => setData("name", e.target.value)}
						required
					/>
					<InputError message={errors.name} className="mt-2" />
				</div>

				<div className="w-full h-fit">
					<TextInput
						id="display_name"
						name="display_name"
						placeholder="Display Name"
						value={data.display_name}
						className="text-base text-white placeholder:opacity-50 w-full p-4 rounded bg-white bg-opacity-5 focus:bg-opacity-10"
						onChange={(e) => setData("display_name", e.target.value)}
						required
					/>
					<InputError message={errors.display_name} className="mt-2" />
				</div>

				<div className="w-full h-fit">
					<TextInput
						id="email"
						type="email"
						name="email"
						placeholder="Email"
						value={data.email}
						className="text-base text-white placeholder:opacity-50 w-full p-4 rounded bg-white bg-opacity-5 focus:bg-opacity-10"
						autoComplete="username"
						onChange={(e) => setData("email", e.target.value)}
						required
					/>
					<InputError message={errors.email} className="mt-2" />
				</div>

				<div className="w-full h-fit">
					<TextInput
						id="password"
						type="password"
						name="password"
						placeholder="Password"
						value={data.password}
						className="text-base text-white placeholder:opacity-50 w-full p-4 rounded bg-white bg-opacity-5 focus:bg-opacity-10"
						autoComplete="new-password"
						onChange={(e) => setData("password", e.target.value)}
						required
					/>
					<InputError message={errors.password} className="mt-2" />
				</div>

				<div className="w-full h-fit">
					<TextInput
						id="password_confirmation"
						type="password"
						name="password_confirmation"
						placeholder="Confirm Password"
						value={data.password_confirmation}
						className="text-base text-white placeholder:opacity-50 w-full p-4 rounded bg-white bg-opacity-5 focus:bg-opacity-10"
						autoComplete="new-password"
						onChange={(e) => setData("password_confirmation", e.target.value)}
						required
					/>
					<InputError message={errors.password_confirmation} className="mt-2" />
				</div>

				<div className="w-full h-fit flex flex-col items-center">
					<Link href={route("login")} className="text-sm text-white opacity-50 underline">
						Already registered?
					</Link>
				</div>

				<button
					type="submit"
					disabled={processing}
					className="text-base text-white tracking-wide w-full py-4 bg-emerald-400 bg-opacity-65 rounded flex flex-row justify-center items-center">
					Register
				</button>
			</form>
		</main>
	);
}
