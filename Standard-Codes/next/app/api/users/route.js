import users from "@/app/utils/db.js";
import { NextResponse } from "next/server";

const GET = () => {
  return NextResponse.json(users);
};

const POST = async (req, res) => {
  let { name, age, email } = await req.json();

  console.log(name, age, email);

  return NextResponse.json({
    message: "Data Posted Successfully ~~",
    success: true,
    data: {
      name: name,
      email: email,
      age: age,
    },
  });
};

export { GET, POST };
