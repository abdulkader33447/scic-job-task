import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import Image from "next/image";
import React from "react";

const ProductsSection = async () => {
  const productsCollection = await dbConnect(
    collectionNamesObj.productsCollection
  );
  const data = await productsCollection.find({}).toArray();
  if (!data?.length) return <p className="text-center mt-10">No products found</p>;
  //   console.log("form products", data);
  return (
    <div className="w-full mx-auto sm:mt-60 mt-20">
      <h1>products Section</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-between gap-5">
        {data?.length > 0 ? (
          data?.map((item) => (
            <div key={item._id} className="card bg-base-100 w-full shadow-sm">
              <figure className="aspect-[4/3] relative w-full">
                <Image
                  src={item.image || "/placeholder.png"}
                  fill
                  alt={item.name || "No name"}
                  className="object-cover rounded"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductsSection;
