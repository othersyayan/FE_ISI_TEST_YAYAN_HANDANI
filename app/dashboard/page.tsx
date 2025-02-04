import { prisma } from '@/lib/prisma';
import { Task } from '@prisma/client';

import TaskTableComponent from '@/components/TaskTable';
import DashboardButtonAction from '@/components/DashboardButtonAction';

export default async function DashboardPage() {
  const tasks: Task[] = await prisma.task.findMany();

  return (
    <div>
      <div className="flex flex-row gap-2 justify-between items-center">
        <h4 className="text-white font-bold text-2xl text-center">ISI Tasks</h4>

        <DashboardButtonAction />
      </div>

      <TaskTableComponent tasks={tasks} />
    </div>
  );
}
