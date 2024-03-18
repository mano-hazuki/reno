import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { AuthenticatedPageProps } from "@/types";
import { Head } from "@inertiajs/react";

interface Props extends AuthenticatedPageProps {
}

export default function Dashboard({ auth }: Props) {
	return (
		<AuthenticatedLayout
			user={ auth.user }
			header={ <h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2> }
		>
			<Head title="Dashboard"/>

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
