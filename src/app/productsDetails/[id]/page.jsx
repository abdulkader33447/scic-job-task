import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import React from "react";

const ProductsDetailsPage = async ({ params }) => {
  const {id} = await params;
  const productsCollection =await dbConnect(collectionNamesObj.productsCollection);
  const data = await productsCollection.findOne({ _id: new ObjectId(id) });
  if (!data?.length) return <p className="text-center mt-10">No products found</p>;
  // console.log("from detail page", data);
  return (
    <div className="w-10/12 mx-auto min-h-[calc(100vh-116px)]">
      <h1 className="text-center">Products Details Page</h1>
      <div className="w-11/12 mx-auto relative border p-5 sm:flex gap-10">
        <Image
          src={data?.image || "/placeholder.png"}
          width={500}
          height={350}
          alt={data?.name || "No name"}
          className="rounded"
        />
        <div className="space-y-3">
          <h1 className="">Type: {data?.name}</h1>
          <h1>Color: {data?.color}</h1>
          <h1>Price: {data?.price} taka</h1>
          <h1>{data?.type}</h1>
          <p>Details: {data?.description}</p>
          <p>Product code: {data?.code}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailsPage;
