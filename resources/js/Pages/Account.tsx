import { User } from "@/types";
import { Layout } from "@/Layouts/Layout";

interface Props {
	auth: {
		user: User;
	};
}

export default function Account({ auth }: Props) {
	return (
		<Layout user={ auth.user }>
			<main className="">
				{/*	Contents Here */ }
			</main>
		</Layout>
	);
}