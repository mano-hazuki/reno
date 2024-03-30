interface Props {
	title: string;
	setTitle: React.Dispatch<React.SetStateAction<string>>;
}

export function TopBar({ title, setTitle }: Props) {
	return (
		<div className="w-full h-full bg-white bg-opacity-5 rounded flex flex-row justify-between items-center">
			<div className="w-2/5 h-full flex flex-row justify-start items-center"></div>
			<div className="w-1/5 h-full flex flex-row justify-center items-center">
				<input
					type="text"
					placeholder="Type video title"
					value={title}
					onChange={(event) => setTitle(event.target.value)}
					className="w-full h-full flex-none text-lg text-white text-opacity-80 text-center"
				/>
			</div>
			<div className="w-2/5 h-full flex flex-row justify-end items-center"></div>
		</div>
	);
}
