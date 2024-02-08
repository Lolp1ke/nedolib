export class CreateAuthorDto {
  readonly name: string;
  readonly bio: string;

  readonly profilePicturePath: string;
}

export class DeleteAuthorDto {
  readonly authorId: string;
}
