export interface Env {}

// app.get("/user")
// body, header, query parameters....
export default {
	// async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
	// 	console.log(request.body);
	// 	console.log(request.headers);
	// 	console.log(request.method);

	// 	if (request.method === 'GET') {
	// 		return Response.json({
	// 			message: 'you sent a get request',
	// 		});
	// 	} else {
	// 		return Response.json({
	// 			message: 'You did not send a get request',
	// 		});
	// 	}
	// },
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		return Response.json({
			message: 'Op bro op, Aaj to cloudflare seekh liya',
		});
	},
};
