import { Head, Link, useForm } from "@inertiajs/react";
import type { FormEventHandler } from "react";
import { useEffect } from "react";

import { InputError } from "@/Components/InputError";
import TextInput from "@/Components/TextInput";

interface Props {
	status?: string;
	canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: Props) {
	const { data, setData, post, processing, errors, reset } = useForm({
		email: "",
		password: "",
		remember: false,
	});

	useEffect(() => {
		return () => {
			reset("password");
		};
	});

	const submit: FormEventHandler = (e) => {
		e.preventDefault();
		post(route("login"));
	};
	return (
		<main className="@container w-full h-svh bg-login bg-cover bg-center grid grid-rows-12 grid-cols-8">
			<div className="absolute w-full h-full bg-gray-800 opacity-75 -z-10" />
			<Head title="Login" />

			<div className="row-start-3 row-span-2 col-start-2 col-span-6 flex flex-col justify-center items-center gap-2">
				<h1 className="text-3xl text-white">Welcome back</h1>
				<p className="text-sm text-white opacity-75">Sign in to continue learning</p>
			</div>

			<form onSubmit={submit} className="row-start-7 row-span-5 col-start-2 col-span-6 flex flex-col justify-center items-center gap-4">
				<div className="w-full h-fit">
					<TextInput
						id="email"
						type="email"
						name="email"
						placeholder="Email"
						value={data.email}
						className="text-base text-white placeholder:opacity-50 w-full p-4 rounded bg-white bg-opacity-5 focus:bg-opacity-10"
						autoComplete="username"
						isFocused={true}
						onChange={(e) => setData("email", e.target.value)}
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
						autoComplete="current-password"
						onChange={(e) => setData("password", e.target.value)}
					/>
					<InputError message={errors.password} className="mt-2" />
				</div>

				<div className="w-full h-fit flex flex-row justify-between items-center">
					<div className="flex flex-row items-center gap-2">
						<input
							id="remember"
							name="remember"
							type="checkbox"
							checked={data.remember}
							onChange={(e) => setData("remember", e.target.checked)}
							className="inline-block size-4 bg-red opacity-100"
						/>
						<label htmlFor="remember" className="text-sm text-white opacity-75">
							Remember me
						</label>
					</div>

					<div className="w-fit h-fit">
						{canResetPassword && (
							<Link href={route("password.request")} className="text-sm text-white opacity-50 underline">
								Forgot your password?
							</Link>
						)}
					</div>
				</div>

				<button
					type="submit"
					disabled={processing}
					className="text-base text-white tracking-wide w-full py-4 bg-emerald-400 bg-opacity-65 rounded flex flex-row justify-center items-center">
					Login
				</button>
			</form>
		</main>
	);
}
