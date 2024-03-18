import { AuthenticatedLayout } from "@/Layouts/AuthenticatedLayout";

import type { AuthenticatedPageProps } from "@/types";

interface Props extends AuthenticatedPageProps {}

export default function Account({ auth }: Props) {
	return (
		<AuthenticatedLayout user={auth.user}>
			<main className="">{/*	Contents Here */}</main>
		</AuthenticatedLayout>
	);
}
