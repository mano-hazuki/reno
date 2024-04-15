import { Head } from "@inertiajs/react";

import { AuthenticatedLayout } from "@/Layouts/AuthenticatedLayout";
import type { AuthenticatedPageProps, UserVideo } from "@/types";

interface Props extends AuthenticatedPageProps {
	videos: UserVideo[];
}

export default function Dashboard({ auth }: Props) {
	return (
		<AuthenticatedLayout user={auth.user}>
			<Head title="Dashboard" />

			<div className="py-12">
				<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
					<div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
						<div className="p-6 text-gray-900">You're logged in!</div>
					</div>
				</div>
			</div>
		</AuthenticatedLayout>
	);
}
