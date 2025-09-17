import { Button, Drawer } from "flowbite-react";
import { useState } from "react";
import FormBusiness from "./FormBusiness";

interface IinputParams {
  onClose: () => void;
}

export default function Folder({ onClose }: IinputParams) {
  const [isOpenP, setIsOpenP] = useState(false);
  //const [userToken, setUserToken] = useState<IUserTokrn>();

  const handleCloseP = () => setIsOpenP(false);

  // useEffect(() => {
  //   const _userToken = JSON.parse(localStorage.getItem(appConfig.userToken)!);
  //   setUserToken(_userToken);
  // }, []);

  return (
    <>
      <div className="flex h-full w-full flex-col rounded-md bg-white p-4 dark:bg-gray-900">
        <div>
          <h5 className="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400">
            افزودن پرونده
          </h5>
          <button
            type="button"
            data-testid="close-drawer"
            className="absolute end-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            //onClick={handleClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path fill="none" stroke="none" d="M0 0h24v24H0z"></path>
              <path
                stroke="none"
                d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              ></path>
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <span className="hidden" id="flowbite-drawer-header-«rs»"></span>
        </div>
        <div className="grow">
          <FormBusiness />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Button
            className="border-secondary-500 hover:bg-secondary-400 hover:border-secondary-500 text-secondary-500"
            onClick={() => {
              onClose();
            }}
            outline
            fullSized
            size="md"
          >
            انصراف
          </Button>
          <Button
            className="bg-secondary-500 hover:bg-secondary-400"
            onClick={() => {
              setIsOpenP(true);
            }}
            fullSized
            size="md"
          >
            افزودن پرونده جدید
          </Button>
        </div>
      </div>

      <Drawer
        backdrop={true}
        open={isOpenP}
        onClose={handleCloseP}
        position="right"
        edge={true}
        className="w-[1000px] bg-transparent p-2"
      >
        <div className="flex h-full w-full flex-col rounded-md bg-white p-5"></div>
      </Drawer>
    </>
  );
}
