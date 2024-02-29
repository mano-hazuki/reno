import { PrimaryButton } from "@/Components/Button";
import Layout from "@/Layouts/Layout";
import {
  Lecture,
  User
} from "@/types";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  user: User;
  lectures: Lecture[];
}

export default function UserDetails({ user, lectures }: Props) {
  return (
    <Layout>
      <main className="w-full h-fit flex flex-col justify-start items-center">
        <section id="user" className="w-full h-fit p-8 flex flex-row justify-between">
          <div className="p-4 flex-none">
            <img src={ user.image_url } alt=""/>
          </div>
          <div className="flex-1">
            <p className="font-bold text-lg">{ user.display_name }</p>
            <p className="">{ "@" + user.name }</p>
          </div>
          <div className="flex-none flex flex-row items-center">
            <PrimaryButton type="submit">
              <FontAwesomeIcon icon={ faHeart } color={ "white" } size={ "xl" }/>
              Follow
            </PrimaryButton>
          </div>
        </section>
      </main>
    </Layout>
  );
}
