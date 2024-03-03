import Layout from "@/Layouts/Layout";
import { UserVideoPreview } from "@/Components/UserVideoPreview";

import { UserVideo } from "@/types";

interface Props {
  videos: UserVideo[];
}

export default function Home({ videos }: Props) {
  return (
    <Layout>
      <main className="w-full h-fit flex-1">
        <section className="w-full h-fit p-4">
          <h1 className="my-2 font-bold text-2xl">最新の投稿</h1>
          <ul className="w-full h-fit my-4 flex flex-col justify-start items-center gap-2">
            { videos.map(video => <UserVideoPreview video={ video }/>) }
          </ul>
        </section>
      </main>
    </Layout>
  );
}
