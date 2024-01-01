import { CheckCircledIcon, ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface Props {
  message?: string;
  success?: boolean;
}

const FormResult = ({ message, success }: Props) => {
  if (!message) return null;

  return success ? (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-700">
      <CheckCircledIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  ) : (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormResult;
