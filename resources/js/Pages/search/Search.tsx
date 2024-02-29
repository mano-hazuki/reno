import SearchForm from "@/Components/SearchForm";
import Layout from "@/Layouts/Layout";

export default function Search() {
  return (
    <Layout>
      <main className="w-full h-fit flex-1 flex flex-col justify-start items-center">
        <SearchForm/>
      </main>
    </Layout>
  );
}
