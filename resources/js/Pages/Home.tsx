import Section from "@/Components/Section";
import Layout from "@/Layouts/Layout";
import { DataType } from "@/types";

interface Props {
  lectures: DataType[];
}

export default function Home({ lectures }: Props) {
  return (
    <Layout>
      <main className="w-full h-fit flex-1">
        <Section name="トレンド" lectures={ lectures }/>
      </main>
    </Layout>
  );
}
