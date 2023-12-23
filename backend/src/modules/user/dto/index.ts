import { IsEmail, IsNotEmpty, IsStrongPassword } from "class-validator";

export class CreateUserDto {
	@IsNotEmpty()
	username: string;

	@IsNotEmpty()
	@IsEmail()
	email: string;

	@IsNotEmpty()
	@IsStrongPassword({
		minLength: 8,
		minNumbers: 1,
		minUppercase: 1,
		minLowercase: 1,
		minSymbols: 1,
	})
	password: string;
}

export class ValidateUserDto {
	@IsNotEmpty()
	username: string;

	@IsNotEmpty()
	password: string;
}
