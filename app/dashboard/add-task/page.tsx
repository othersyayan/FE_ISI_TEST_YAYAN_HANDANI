import Form from 'next/form';
import { Prisma, Status } from '@prisma/client';

import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export default function AddTaskPage() {
  async function createTask(formData: FormData) {
    'use server';

    const payload: Prisma.TaskCreateArgs = {
      data: {
        title: (formData.get('title') as string) || '',
        status:
          (formData.get('status') as keyof typeof Status) || Status.NOT_STARTED,
        description: (formData.get('description') as string) || '',
      },
    };

    await prisma.task.create(payload);

    revalidatePath('/dashboard');
    redirect('/dashboard');
  }

  return (
    <div>
      <h4 className="text-white font-bold text-2xl text-left mb-2">
        Add New Task
      </h4>

      <Form action={createTask} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-base mb-2">
            Title
          </label>
          <input
            id="title"
            type="text"
            name="title"
            placeholder="Enter your task title"
            className="w-full py-2 px-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-500 text-[#0a0a0a]"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-base mb-2">
            Description
          </label>
          <textarea
            rows={4}
            id="description"
            name="description"
            placeholder="Description"
            className="w-full py-2 px-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-500 text-[#0a0a0a]"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-3 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 transition duration-150 ease-in-out"
        >
          Create Task
        </button>
      </Form>
    </div>
  );
}
