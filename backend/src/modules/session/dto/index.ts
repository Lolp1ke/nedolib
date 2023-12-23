export class CreateSessionDto {
	readonly userId: string;

	ip: string;
	location?: string;
	readonly device: string;
}

export class ValidateSessionDto {
	readonly sessionId: string;

	readonly device: string;
}

export class DeleteSessionDto {
	readonly sessionId: string;
}
