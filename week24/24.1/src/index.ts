// export function sum(a: number, b: number) {
//     return a+b;
// }

// export function multiply(a: number, b: number) {
//     return a*b;
// }

import express from "express";

export const app = express();

app.use(express.json());

app.post("/Sum", (req, res)=> {
    const {a,b}= req.body;
    const ans = a + b;

    res.json(ans);
})