import { NextRequest } from "next/server";

type RouteType = {
    page: string
    cookie: string
    buckets: readonly string[]
}

export default function middleware(req: NextRequest) {

}