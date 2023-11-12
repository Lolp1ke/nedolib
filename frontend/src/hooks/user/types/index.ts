export type TUser = {
	id: string;
	username: string;
	email: string;
	emailStatus: boolean;
	name: string | null;
	bio: string | null;
	profilePicturePath: string | null;
	bannerPicturePath: string | null;
	createdAt: Date;
	alteredAt: Date;
};
