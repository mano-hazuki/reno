export interface PageProps {
	auth: {
		user: User | null;
	};
}

export interface AuthenticatedPageProps {
	auth: {
		user: User;
	};
}

export interface User {
	name: string;
	display_name: string;
	email: string;
	bio?: string;
	image_url?: string;
	created_at?: string;
	updated_at?: string;
	verified_at?: string;
	deleted_at?: string;
}

export interface Video {
	user_name: string;
	title: string;
	description?: string;
	slug: string;
	views: number;
	thumbnail_image_url?: string;
	data_url: string;
	created_at?: string;
	updated_at?: string;
	deleted_at?: string;
}

export interface UserVideo extends Video {
	user: User;
}

export interface UserWithVideos extends User {
	videos: Video[];
}
