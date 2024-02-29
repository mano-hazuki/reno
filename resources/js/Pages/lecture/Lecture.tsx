import Layout from "@/Layouts/Layout";

import { DataType } from "@/types";

interface Props {
  lecture: DataType;
}

export default function Lecture({ lecture }: Props) {
  return (
    <Layout>
      <div>{ lecture.lecture_description }</div>
    </Layout>
  );
}
