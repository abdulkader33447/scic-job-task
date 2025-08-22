
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

// POST request handler
export async function POST(req) {
  try {
    const body = await req.json();  // form data receive
    if (!body.name || !body.price || !body.image) {
      return new Response(JSON.stringify({ success: false, message: "All fields required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const productsCollection = await dbConnect(collectionNamesObj.productsCollection);

    const result = await productsCollection.insertOne(body);

    return new Response(
      JSON.stringify({ success: true, insertedId: result.insertedId.toString() }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, message: "Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
