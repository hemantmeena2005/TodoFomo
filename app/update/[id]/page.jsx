// pages/update/[id].jsx
"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Next.js router for navigation
import { Client, Databases } from 'appwrite'; // Import Appwrite Client and Databases
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import default CSS for react-toastify

const UpdatePage = ({ params }) => {
  const router = useRouter();
  const { id } = params; // Assuming params contains the task ID
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState(null); // State to hold the task data
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedDesc, setUpdatedDesc] = useState('');

  // Initialize Appwrite client and databases
  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite API Endpoint
    .setProject('668f85c0002441e868f1'); // Your Appwrite project ID

  const databases = new Databases(client);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await databases.getDocument(
          '668f8ab8000903ee6236', // Replace with your database ID
          '668f8ac70000ec69243c', // Replace with your collection ID
          id // Task ID from URL
        );

        console.log('Response from Appwrite:', response);

        // Update task state directly with response data
        setTask(response); // Assuming response already contains task data

        setLoading(false); // Update loading state
      } catch (error) {
        console.error('Error fetching task:', error);
        setLoading(false); // Update loading state in case of error
      }
    };

    if (id) {
      fetchTask(); // Fetch task details when component mounts or 'id' changes
    }
  }, [id]);

  const handleUpdate = async () => {
    try {
      const response = await databases.updateDocument(
        '668f8ab8000903ee6236', // Replace with your database ID
        '668f8ac70000ec69243c', // Replace with your collection ID
        id, // Task ID

        { // Updated data
          Title: updatedTitle, // Assuming your field name is 'Title'
          desc: updatedDesc, // Assuming your field name is 'desc'
        }
      );

      console.log('Task updated successfully:', response); // Log success message

      // Show toast notification for success
      toast.success('Document updated successfully!', {
        autoClose: 3000, // Close after 3 seconds
        onClose: () => router.push('/view'), // Redirect to view page after notification closes
      });
    } catch (error) {
      console.error('Error updating task:', error); // Log error message

      // Show toast notification for error
      toast.error('Failed to update document. Please try again.');
    }
  };

  if (loading) {
    return <p className="text-center mt-4">Loading...</p>; // Display loading indicator while fetching task data
  }

  if (!task) {
    return <p className="text-center mt-4">Task not found.</p>; // Display message if task data is not available
  }

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Update Task</h1>
      <div className="flex">
        <input
          type="text"
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
          placeholder="Enter updated title"
          className="border border-gray-300 px-4 py-2 mr-2 rounded-md flex-1"
        />
        <input
          type="text"
          value={updatedDesc}
          onChange={(e) => setUpdatedDesc(e.target.value)}
          placeholder="Enter updated description"
          className="border border-gray-300 px-4 py-2 rounded-md flex-1"
        />
      </div>
      <button
        onClick={handleUpdate}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Save
      </button>

      {/* ToastContainer for react-toastify notifications */}
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default UpdatePage;
