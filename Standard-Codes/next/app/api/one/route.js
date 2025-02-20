const { NextResponse } = require("next/server");

const GET = () => {
  return NextResponse.json({ name: "get one" }, { status: 200 });
};

const POST = () => {
  return NextResponse.json({ name: "post one" }, { status: 201 });
};

export { GET, POST };
