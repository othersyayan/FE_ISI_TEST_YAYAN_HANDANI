import { Status } from '@prisma/client';

type Props = {
  status: Status;
};

export default function StatusLabel({ status }: Props) {
  const statusStyles = {
    [Status.NOT_STARTED]: 'bg-gray-300 text-gray-800',
    [Status.ON_PROGRESS]: 'bg-blue-300 text-blue-800',
    [Status.DONE]: 'bg-green-300 text-green-800',
    [Status.REJECT]: 'bg-red-300 text-red-800',
  };

  return (
    <span
      className={`px-2 py-1 rounded capitalize font-semibold ${statusStyles[status]}`}
    >
      {status.replace('_', ' ').toLowerCase()}
    </span>
  );
}
