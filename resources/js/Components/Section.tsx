import VideoItem from "@/Components/VideoItem";

interface Props {
	name: string;
}

export default function Section(props: Props) {
	return (
		<section className="w-full h-fit p-4">
			<h1 className="my-2 font-bold text-2xl">{ props.name }</h1>
			<ul className="w-full h-fit my-4">
				<VideoItem key={ 1 }/>
				<VideoItem key={ 2 }/>
				<VideoItem key={ 3 }/>
				<VideoItem key={ 4 }/>
				<VideoItem key={ 5 }/>
			</ul>
		</section>
	);
}