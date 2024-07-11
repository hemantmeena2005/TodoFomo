// pages/index.jsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 bg-gray-50 min-h-screen flex flex-col items-center">
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-6xl font-bold text-center text-gray-800 leading-tight">
          A Simple To-Do List <br /> To Manage It All
        </h1>
        <p className="text-lg text-center text-gray-600">
          Easily manage your personal tasks, family projects, and team’s work all in one place. Trusted by millions.
        </p>
        <button className="bg-blue-500 mb-4 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-md transform transition hover:scale-105">
          <Link href="/add">Get Started</Link>
        </button>
      </div>
      <div className="mt-12 flex flex-col items-center space-y-8">
        <h2 className="text-3xl font-bold text-gray-800">What You Can Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-green-200 h-36 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Add Tasks</h3>
            <p className="text-gray-600">Create new tasks to keep track of your to-do items easily.</p>
          </div>
          <div className="bg-yellow-200 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Update Tasks</h3>
            <p className="text-gray-600">Modify tasks to keep them up to date with your needs.</p>
          </div>
          <div className="bg-blue-200 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Complete Tasks</h3>
            <p className="text-gray-600">Mark tasks as completed to track your progress.</p>
          </div>
          <div className="bg-red-200 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Delete Tasks</h3>
            <p className="text-gray-600">Remove tasks that are no longer needed.</p>
          </div>
          <div className="bg-purple-200 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-Time Updates</h3>
            <p className="text-gray-600">Experience seamless real-time updates across all your devices.</p>
          </div>
          <div className="bg-pink-200 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure</h3>
            <p className="text-gray-600">Your tasks are secure with our robust user authentication system.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
