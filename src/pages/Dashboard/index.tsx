import { Alert } from "flowbite-react";

export default function Dashboard() {
  return (
    <div className="container">
      <Alert color="success" onDismiss={() => alert("Alert dismissed!")}>
        <span className="font-medium">Info alert!</span> Change a few things up
        and try submitting again.
      </Alert>
      <div className="pb-2">
        {/*<Alert
          color="failure"
          rounded
          onDismiss={() => alert("Alert dismissed!")}
        >
          <div className="flex w-full flex-row">
            <div className="pl-2">icon</div>
            <div className="w-full">
          <span className="font-medium">Info alert!</span> Change a few things
          up and try submitting again.
          </div>
            <div>مشاهده</div>
          </div>
        </Alert> */}
      </div>
      <Alert color="warning" rounded>
        <span className="font-medium">Info alert!</span> Change a few things up
        and try submitting again.
      </Alert>
    </div>
  );
}
