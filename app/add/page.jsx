"use client";
import React, { useState } from 'react';
import { Client, Databases, ID } from 'appwrite';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { useAuth } from "@clerk/nextjs";

const Add = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const router = useRouter();
  const { userId } = useAuth();

  const addTask = async () => {
    if (!userId) {
      toast.error('User not authenticated');
      return;
    }

    const client = new Client()
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('668f85c0002441e868f1');

    const databases = new Databases(client);

    try {
      const response = await databases.createDocument(
        '668f8ab8000903ee6236',
        '668f8ac70000ec69243c',
        ID.unique(),
        {
          userid: userId,
          Title: title,
          desc: desc,
        }
      );

      console.log(response);

      toast.success('Task added successfully', {
        autoClose: 1000,
        onClose: () => router.push('/view'),
      });

      setTitle('');
      setDesc('');
    } catch (error) {
      console.error(error);
      toast.error('Failed to add task');
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Add Task</h1>
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          id="title"
          type="text"
          className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="desc" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <input
          id="desc"
          type="text"
          className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <button
        onClick={addTask}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Add Task
      </button>

      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Add;