'use server';

import { prisma } from '@/lib/prisma';
import { Task, User } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export async function login(
  prevState: {
    message: string;
    data: User | null;
  },
  formData: FormData,
) {
  const email = formData.get('email') as string;

  try {
    const findUser = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!findUser) {
      return { message: 'Can not find user!', data: null };
    }

    revalidatePath('/login');
    return { message: 'Successfully login!', data: findUser };
  } catch (e) {
    return { message: 'Failed to login!', data: null };
  }
}

export async function deleteTask(
  prevState: {
    message: string;
    data: Task | null;
  },
  formData: FormData,
) {
  const task_id = formData.get('task_id') as string;

  console.log('task_id', typeof task_id, task_id);

  try {
    const tmpDelete = await prisma.task.delete({
      where: {
        task_id,
      },
    });

    if (!tmpDelete) {
      return { message: 'Can not find task!', data: null };
    }

    revalidatePath('/dashboard');
    return { message: 'Successfully delet task!', data: tmpDelete };
  } catch (e) {
    return { message: 'Failed to delete the task!', data: null };
  }
}
