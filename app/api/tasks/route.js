import { NextResponse } from "next/server";
import db from "../../../utils/db";
export const GET = async (request) => {
  const tasks = await db.task.findMany();

  return NextResponse.json({ tasks });
};
