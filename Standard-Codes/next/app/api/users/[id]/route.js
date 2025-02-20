import { NextResponse } from "next/server";

const GET = (_, response) => {
  return NextResponse.json({ id: response.params.id, method: "get" });
};

const POST = (_, response) => {
  return NextResponse.json({ id: response.params.id, method: "post" });
};

export { GET, POST };
