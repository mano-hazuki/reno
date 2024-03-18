import { RingLoader } from "react-spinners";

export function Loading() {
	return (
		<main className="w-full h-svh bg-white flex flex-row justify-center items-center">
			<RingLoader color="#34D399" loading={true} aria-label="Loading Spinner" />
		</main>
	);
}