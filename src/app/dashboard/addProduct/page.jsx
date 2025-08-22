import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';
import AddProductForm from './components/AddProductForm';

const AddProductPage =async () => {
    const session = await getServerSession();

    if(!session){
        redirect("/register")
    }
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <AddProductForm />
    </div>
  );
};

export default AddProductPage;