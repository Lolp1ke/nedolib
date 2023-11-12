import * as process from "process";

export const MainConfig = {
	BACKEND_ENTRY_POINT: process.env.BACKEND_ENTRY_POINT,
	COOKIE_PREFIX: process.env.COOKIE_PREFIX,

	WEBSITE_VERSION: process.env.NEXT_PUBLIC_WEBSITE_VERSION,
};
