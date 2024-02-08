import { Controller } from "@nestjs/common";

import { AuthorService } from "./author.service";

@Controller()
export class AuthorController {
	constructor(private readonly authorService: AuthorService) {}
}
