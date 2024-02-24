export interface User {
	id: number;
	name: string;
	email: string;
	email_verified_at: string;
}

export interface Lecture {
	id: number;
	user_id: number;
	title: string;
	description: string;
	view_count: number;
	thumbnail_image_url?: string;
	data_file_url: string;
	created_at?: string;
	updated_at?: string;
	deleted_at?: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
	auth: {
		user: User;
	};
};
