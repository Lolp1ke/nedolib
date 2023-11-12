export interface ILocalSignUp {
	readonly username: string;
	readonly email: string;
	readonly password: string;
}

export interface ILocalSignIn {
	readonly username: string;
	readonly password: string;
}

export interface ISignOut {
	readonly sessionId: string;
}
