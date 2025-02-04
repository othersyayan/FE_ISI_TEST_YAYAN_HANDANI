'use client';

import { useRouter } from 'next/navigation';

export default function DashboardButtonAction() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear();
    router.push('/');
  };

  const handleAddTask = () => {
    router.push('/dashboard/add-task');
  };

  return (
    <div className="flex flex-row gap-2">
      <button
        className="w-full bg-blue-500 text-white py-2 px-3 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 transition duration-150 ease-in-out"
        onClick={handleAddTask}
      >
        Add Task
      </button>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white text-sm p-2 rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:shadow-outline-red active:bg-red-800 transition duration-150 ease-in-out"
      >
        <svg
          width="22px"
          height="22px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            stroke="#FFFFFF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 12h-9.5m7.5 3l3-3-3-3m-5-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h5a2 2 0 002-2v-1"
          />
        </svg>
      </button>
    </div>
  );
}
