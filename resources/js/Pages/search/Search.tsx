import Layout from "@/Layouts/Layout";
import SearchForm from "@/Components/SearchForm";

export default function Search() {
	return (
		<Layout>
			<main className="w-full h-fit flex-1 flex flex-col justify-start items-center">
				<SearchForm/>
			</main>
		</Layout>
	);
}