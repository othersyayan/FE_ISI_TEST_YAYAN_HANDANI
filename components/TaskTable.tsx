import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';

import { Task } from '@prisma/client';

import StatusLabel from './StatusLabel';
import DeleteButton from './DeleteButton';

type Props = {
  tasks: Task[];
};

dayjs.extend(LocalizedFormat);

export default function TaskTableComponent({ tasks }: Props) {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <div className="flex flex-col mt-6">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden sm:rounded-lg">
            <table className="min-w-full text-sm text-gray-400">
              <thead className="bg-gray-800 text-xs uppercase font-medium">
                <tr>
                  <th></th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left tracking-wider"
                  >
                    Created Date
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left tracking-wider"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-center tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-center tracking-wider"
                  ></th>
                </tr>
              </thead>

              <tbody className="bg-gray-800">
                {tasks.length ? (
                  tasks.map((v, i) => (
                    <tr
                      key={i}
                      className={
                        i % 2 === 0 ? 'bg-black bg-opacity-20' : 'bg-opacity-20'
                      }
                    >
                      <td className="pl-3">{i + 1}</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {truncateText(v.title, 20)}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {dayjs(v.created_at).format('LL')}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {truncateText(v.description ?? '', 20)}
                      </td>
                      <td className="px-4 py-4 text-center whitespace-nowrap">
                        <StatusLabel status={v.status} />
                      </td>
                      <td align="center">
                        <DeleteButton task_id={v.task_id} />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="bg-black bg-opacity-20">
                    <td className="p-3" colSpan={5} align="center">
                      <p className="text-xs italic">No data found.</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
