"use server";

import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  const userCollection =await dbConnect(collectionNamesObj.userCollection);

  //validation
  const { email, password } = payload;

  if (!email || !password) return { success: false };

  const user = await userCollection.findOne({ email: payload.email });

  if (!user) {
    const result = await userCollection.insertOne(payload);
    // const { _id } = result;
    return { _id:result.insertedId.toString() };
  }
  return { success: false };
};
