"use client";
import React, { useEffect, useState } from 'react';
import { Client, Databases, Query } from 'appwrite';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from "@clerk/nextjs";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const View = () => {
  const router = useRouter();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userId } = useAuth();

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    const fetchTasks = async () => {
      try {
        const client = new Client()
          .setEndpoint('https://cloud.appwrite.io/v1')
          .setProject('668f85c0002441e868f1');

        const databases = new Databases(client);

        const response = await databases.listDocuments(
          '668f8ab8000903ee6236', // Database ID
          '668f8ac70000ec69243c', // Collection ID
          [Query.equal('userid', userId)]
        );

        setTasks(response.documents);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tasks:', error);
        setLoading(false);
        toast.error('Failed to fetch tasks');
      }
    };

    fetchTasks();
  }, [userId]);

  const handleDone = async (taskId) => {
    try {
      const client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('668f85c0002441e868f1');
  
      const databases = new Databases(client);
  
      await databases.updateDocument(
        '668f8ab8000903ee6236', // Database ID
        '668f8ac70000ec69243c', // Collection ID
        taskId,
        {
          done: true
        }
      );
  
      const updatedTasks = tasks.map(task => 
        task.$id === taskId ? { ...task, done: true } : task
      );
      setTasks(updatedTasks);
  
      toast.success('Task marked as done');
    } catch (error) {
      console.error('Error marking task as done:', error);
      toast.error('Failed to mark task as done');
    }
  };

  const handleDelete = async (taskId) => {
    try {
      const client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('668f85c0002441e868f1');

      const databases = new Databases(client);

      await databases.deleteDocument(
        '668f8ab8000903ee6236', // Database ID
        '668f8ac70000ec69243c', // Collection ID
        taskId // Document ID to delete
      );

      const updatedTasks = tasks.filter((task) => task.$id !== taskId);
      setTasks(updatedTasks);

      toast.success('Task deleted successfully');
    } catch (error) {
      console.error('Error deleting task:', error);
      toast.error('Failed to delete task');
    }
  };

  const handleUpdate = (taskId) => {
    router.push(`/update/${taskId}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  const pendingTasksCount = tasks.filter(task => !task.done).length;

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Tasks Added by You</h1>
      <h1 className='text-3xl text-orange-500'>
        Pending Tasks: {pendingTasksCount} / Total Tasks: {tasks.length}
      </h1>
      {tasks.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {tasks.map((task) => (
            <li key={task.$id} className="py-4 flex items-center justify-between">
              <div>
                <p className={`text-lg ${task.done ? 'line-through' : ''}`}>{task.Title}</p>
                <p className="text-gray-600">{task.desc}</p>
              </div>
              <div className="ml-4">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
                  onClick={() => handleUpdate(task.$id)}
                  disabled={task.done}
                >
                  Update
                </button>
                <button
                  className={`${task.done ? 'bg-gray-500' : 'bg-yellow-500 hover:bg-yellow-600'} text-white px-4 py-2 rounded mr-2`}
                  onClick={() => handleDone(task.$id)}
                  disabled={task.done}
                >
                  {task.done ? 'Completed' : 'Done'}
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                  onClick={() => handleDelete(task.$id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No tasks found.</p>
      )}
      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-2">
        <Link href="/add">Add Task</Link>
      </button>

      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default View;