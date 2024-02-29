import LectureItem from "@/Components/LectureItem";
import { DataType } from "@/types";

interface Props {
  name: string;
  lectures: DataType[];
}

export default function Section({ name, lectures }: Props) {
  return (
    <section className="w-full h-fit p-4">
      <h1 className="my-2 font-bold text-2xl">{ name }</h1>
      <ul className="w-full h-fit my-4 flex flex-col justify-start items-center gap-2">
        { lectures.map(lecture => <LectureItem key={ lecture.lecture_id } lecture={ lecture }/>) }
      </ul>
    </section>
  );
}
