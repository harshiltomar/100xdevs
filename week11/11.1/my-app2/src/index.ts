import { Hono, Next } from "hono";
import { Context } from "hono/jsx";

const app = new Hono();

//c means context of request
async function authMiddleware(c: any, next: any) {
  if (c.req.header("Authorization")) {
    // Do Validation
    await next();
  } else {
    return c.text("You don't have access");
  }
}

app.use(authMiddleware);

app.get("/", async (c) => {
  // c can be used as both req and res. eg: c.json(_). Also in request for body, headers, query parameters, middlewares, connecting to a database
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query);

  return c.json({ msg: "Hello" });
});

export default app;
