import { Drawer, Button } from "flowbite-react";
import { useState } from "react";
import moment from "jalali-moment";
import TaksaIcon from "../../../components/taksa/icon";
import profileImg from "../../../assets/img/profile.svg";
import { useProfileQuery } from "../../../redux/services/profileApi";
// import { useListQuery } from "../../../redux/services/dossiershopApi";
// import { redirect, useNavigate } from "react-router-dom";

export default function IconButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: dataUserInfo } = useProfileQuery();
  //   const navigate = useNavigate();

  const handleClose = () => setIsOpen(false);

  //   const { data: dataFolder } = useListQuery({
  //     page: 0,
  //     size: 8,
  //     sort: [],
  //     id: [],
  //     shopName: "",
  //   });

  //   useEffect(() => {
  //     const _userToken = JSON.parse(localStorage.getItem(appConfig.userToken)!);
  //     setUserToken(_userToken);
  //   }, []);

  return (
    <div>
      <button
        type="button"
        className="bg-other-blue-gray-light text-text-primary h-[42px] w-[42px] flex-col rounded-full p-2.5 text-center text-sm hover:bg-gray-700 focus:ring-gray-300 focus:outline-none"
        onClick={() => setIsOpen(true)}
      >
        <TaksaIcon
          icon="icon-user"
          className={"h-full"}
          color={"text-gray-500"}
          fontSize={"20px"}
        />
      </button>

      <Drawer
        backdrop={true}
        open={isOpen}
        onClose={handleClose}
        position="left"
        edge={true}
        className="w-[400px] bg-transparent p-2 dark:bg-transparent"
      >
        <div className="flex h-full w-full flex-col rounded-md bg-white p-4 dark:bg-gray-900">
          <div>
            {/* <h5 className="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400">
              پروفایل کاربر
            </h5> */}
            <button
              type="button"
              data-testid="close-drawer"
              className="absolute end-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={handleClose}
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
          </div>
          <div className="grow">
            <h5 className="mb-4 w-full pt-5 text-center font-semibold text-gray-500 dark:text-gray-400">
              پروفایل کاربر
            </h5>
            <div className="flex w-full justify-center">
              <img src={profileImg} className="fill-red-600" />
            </div>
            <div className="flex w-full justify-center pt-5"></div>
            <div className="border-text-secondary border-b py-3">
              <div className="flex w-full justify-center">
                <p>{dataUserInfo?.title}</p>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-3">
                <div className="text-text-secondary justify-items-end">
                  <p>تاریخ تولد</p>
                </div>
                <p className="flex-1 text-xs lg:text-sm">
                  {dataUserInfo?.birthDate &&
                    moment(dataUserInfo?.birthDate)
                      .locale("fa")
                      .format("YYYY/MM/DD")}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="text-text-secondary justify-items-end">
                  <p>شماره ملی</p>
                </div>
                <p>{dataUserInfo?.nationalCode}</p>
              </div>
            </div>
            <div className="px-5 pt-5">
              <div className="flex w-full justify-between pb-3">
                <div>
                  <TaksaIcon
                    icon="icon-user"
                    className="flex w-2 flex-row justify-center"
                    color={"text-text-secondary"}
                    fontSize={"18px"}
                  />
                </div>
                <div className="w-full px-5">
                  <p>{dataUserInfo?.userName}</p>
                </div>
                <div>
                  <TaksaIcon
                    icon="icon-edit"
                    className="flex w-2 flex-row justify-center"
                    color={"text-text-link-interactive"}
                    fontSize={"18px"}
                  />
                </div>
              </div>
              <div className="flex w-full justify-between pb-3">
                <div>
                  <TaksaIcon
                    icon="icon-unlock"
                    className="flex w-2 flex-row justify-center"
                    color={"text-text-secondary"}
                    fontSize={"18px"}
                  />
                </div>
                <div className="w-full px-5">
                  <p>{dataUserInfo?.password}</p>
                </div>
                <div>
                  <TaksaIcon
                    icon="icon-edit"
                    className="flex w-2 flex-row justify-center"
                    color={"text-text-link-interactive"}
                    fontSize={"18px"}
                  />
                </div>
              </div>
              <div className="flex w-full justify-between pb-3">
                <div>
                  <TaksaIcon
                    icon="icon-mobile"
                    className="flex w-2 flex-row justify-center"
                    color={"text-text-secondary"}
                    fontSize={"18px"}
                  />
                </div>
                <div className="w-full px-5">
                  <p>{dataUserInfo?.userMobile}</p>
                </div>
                <div>
                  <TaksaIcon
                    icon="icon-edit"
                    className="flex w-2 flex-row justify-center"
                    color={"text-text-link-interactive"}
                    fontSize={"18px"}
                  />
                </div>
              </div>
              <div className="flex w-full justify-between pb-3">
                <div>
                  <TaksaIcon
                    icon="icon-sms"
                    className="flex w-2 flex-row justify-center"
                    color={"text-text-secondary"}
                    fontSize={"18px"}
                  />
                </div>
                <div className="w-full px-5">
                  <p>{dataUserInfo?.userEmail}</p>
                </div>
                <div>
                  <TaksaIcon
                    icon="icon-edit"
                    className="flex w-2 flex-row justify-center"
                    color={"text-text-link-interactive"}
                    fontSize={"18px"}
                  />
                </div>
              </div>
              <div className="flex w-full justify-between pb-3">
                <div>
                  <TaksaIcon
                    icon="icon-zipcode"
                    className="flex w-2 flex-row justify-center"
                    color={"text-text-secondary"}
                    fontSize={"18px"}
                  />
                </div>
                <div className="w-full px-5">
                  <p>{dataUserInfo?.zipCode}</p>
                </div>
              </div>
              <div className="flex w-full justify-between pb-3">
                <div>
                  <TaksaIcon
                    icon="icon-location"
                    className="flex w-2 flex-row justify-center"
                    color={"text-text-secondary"}
                    fontSize={"18px"}
                  />
                </div>
                <div className="w-full px-5">
                  <p>{dataUserInfo?.address}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Button
              onClick={() => {
                localStorage.clear();
                document.location.replace("/auth/login");
              }}
              outline
              fullSized
              className="border-secondary-500 hover:bg-secondary-500 text-secondary-500"
              //color={"secondary"}
              size="md"
            >
              <TaksaIcon
                icon="icon-shot-down"
                className="flex w-2 flex-row justify-center px-5 text-inherit"
                //color={"text-secondary-500"}
                fontSize={"18px"}
              />
              <p>خروج از حساب کاربری</p>
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
