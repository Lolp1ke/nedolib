declare global {
	namespace NodeJS {
		interface ProcessEnv {
			readonly BACKEND_PORT: string;

			readonly IPSTACK_ACCESS_KEY: string;
		}
	}
}
export {};
