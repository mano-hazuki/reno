export function ErrorLayout() {
	return (
		<main className="w-full h-svh bg-white flex flex-col justify-center items-center gap-4">
			<h1 className="text-4xl">Something went wrong! Please try again.</h1>
			<button type="button">Reload</button>
		</main>
	);
}
