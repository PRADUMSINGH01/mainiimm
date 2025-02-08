"use server";
import { cookies } from "next/headers";
export const QuestionDone = async (Topic, questionId) => {
  const setCook = cookies();
  const arr = [];
  arr.push({ Topic: questionId });
  console.log(arr);
  setCook.set({ name: "Quant", value: arr });
  return { success: "Done" };
};
