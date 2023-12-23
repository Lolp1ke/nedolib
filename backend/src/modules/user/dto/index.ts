export class CreateUserDto {
	username: string;
	email: string;
	password: string;
}

export class ValidateUserDto {
	username: string;
	password: string;
}
