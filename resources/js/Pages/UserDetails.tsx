import Layout from "@/Layouts/Layout";

import { FollowButton } from "@/Components/Button";
import { UserWithVideos } from "@/types";
import { VideoPreview } from "@/Components/VideoPreview";

interface Props {
  user: UserWithVideos;
}

export default function UserDetails({ user }: Props) {
  return (
    <Layout>
      <main className="w-full h-fit flex flex-col justify-start items-center">
        <section id="user" className="w-full h-fit p-8 flex flex-row justify-between">
          <div className="p-4 flex-none">
            <img src={ user.image_url } alt=""/>
          </div>
          <div className="flex-1">
            <p className="font-bold text-lg">{ user.display_name }</p>
            <p className="font-normal text-sm">{ "@" + user.name }</p>
          </div>
          <div className="flex-none flex flex-row items-center">
            <FollowButton type="submit" isFollowing={ false }>Follow</FollowButton>
          </div>
        </section>
        <section id="videos" className="w-full h-fit p-8">
          <ul className="w-full h-fit flex flex-col items-center gap-4">
            { user.videos.map(video => <VideoPreview video={ video }/>) }
          </ul>
        </section>
      </main>
    </Layout>
  );
}
