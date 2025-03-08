"use server";
import { cookies } from "next/headers";
export const QuestionDone = async (T, questionId) => {
  const setCook = cookies();
  const arr = [];
  arr.push(questionId);
  console.log(arr, T);
  setCook.set({ name: T, value: arr });
  return { success: "Done" };
};
