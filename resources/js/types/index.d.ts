export interface User {
  id: number;
  name: string;
  email: string;
  bio?: string;
  image_url?: string;
  verified_at?: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
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

export interface DataType {
  lecture_id: number;
  lecture_title: string;
  lecture_description?: string;
  lecture_view_count: number;
  lecture_thumbnail_image_url?: string;
  lecture_data_file_url: string;
  user_id: number;
  user_name: string;
  user_image_url?: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
  auth: {
    user: User;
  };
};
