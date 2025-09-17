import { Drawer, TabItem, Tabs, DrawerItems, Button } from "flowbite-react";
import { useEffect, useState } from "react";
import TaksaIcon from "../../../components/taksa/icon";
import type { IUserTokrn } from "../../../redux/services/authenticateApi/authenticateApi";
import appConfig from "../../../../app.config";
import Folder from "../index";
import TaksaFolderCard from "../../../components/taksa/folder/card";
import { useListQuery } from "../../../redux/services/dossiershopApi";

interface IcardData {
  name: string;
  shopCode: string;
  memoryTaxShopCodes: string;
}

export default function FolderCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [userToken, setUserToken] = useState<IUserTokrn>();

  const handleClose = () => setIsOpen(false);
  const handleCloseAdd = () => setIsOpenAdd(false);

  const { data: dataFolder } = useListQuery({
    page: 0,
    size: 8,
    sort: [],
    id: [],
    shopName: "",
  });

  useEffect(() => {
    const _userToken = JSON.parse(localStorage.getItem(appConfig.userToken)!);
    setUserToken(_userToken);
  }, []);

  return (
    <div>
      <div
        className="flex flex-row rounded-xl bg-[#2C3E50] p-2 text-white"
        onClick={() => setIsOpen(true)}
      >
        <div>
          <TaksaIcon
            icon="icon-user-square"
            color={"text-white"}
            fontSize={"48px"}
          />
        </div>
        <div className="text-md flex flex-col pr-4">
          <div className="pb-2">
            {userToken
              ? userToken.fullName
                ? userToken.fullName
                : userToken.mobile
              : "کاربر جدید"}
          </div>
          <div className="text-xs font-medium">تعاونی طلا فروشان بزرگ</div>
        </div>
      </div>

      <Drawer
        backdrop={true}
        open={isOpen}
        onClose={handleClose}
        position="right"
        edge={true}
        className="w-[400px] bg-transparent p-2 max-[400px]:w-full dark:bg-transparent"
      >
        <div className="flex h-full w-full flex-col rounded-md bg-white p-4 dark:bg-gray-900">
          <div>
            <h5 className="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400">
              انتخاب پرونده
            </h5>
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
            <span className="hidden" id="flowbite-drawer-header-«rs»"></span>
          </div>
          <div className="grow">
            <DrawerItems>
              <Tabs aria-label="Tabs with underline" variant="underline">
                <TabItem active title="همه">
                  {dataFolder?.main?.content.map((item: IcardData) => {
                    console.log(item);
                    return (
                      <div className="pb-2">
                        <TaksaFolderCard
                          icon="icon-profile-tick"
                          title={item.name}
                          desc={item.shopCode}
                          taxId={item.memoryTaxShopCodes}
                          bgColor="bg-primary-50"
                          textColor="text-text-primary"
                          textDescColor="text-text-secondary"
                        />
                      </div>
                    );
                  })}
                  {dataFolder?.thirdUser?.content.map((item: IcardData) => {
                    return (
                      <div className="pb-2">
                        <TaksaFolderCard
                          icon="icon-profile-2user"
                          title={item.name}
                          desc={item.shopCode}
                          taxId={item.memoryTaxShopCodes}
                          bgColor="bg-primary-50"
                          textColor="text-text-primary"
                          textDescColor="text-text-secondary"
                        />
                      </div>
                    );
                  })}
                  {dataFolder?.subCompany?.content.map((item: IcardData) => {
                    return (
                      <div className="pb-2">
                        <TaksaFolderCard
                          icon="icon-corporate"
                          title={item.name}
                          desc={item.shopCode}
                          taxId={item.memoryTaxShopCodes}
                          bgColor="bg-other-blue-gray-light"
                          textColor="text-text-primary"
                          textDescColor="text-text-secondary"
                        />
                      </div>
                    );
                  })}
                </TabItem>
                <TabItem title="اصلی">
                  {dataFolder?.main?.content.map((item: IcardData) => {
                    return (
                      <div className="py-2">
                        <TaksaFolderCard
                          icon="icon-profile-tick"
                          title={item.name}
                          desc={item.shopCode}
                          taxId={item.memoryTaxShopCodes}
                          bgColor="bg-primary-50"
                          textColor="text-text-primary"
                          textDescColor="text-text-secondary"
                        />
                      </div>
                    );
                  })}
                </TabItem>
                <TabItem title="فرعی">
                  {dataFolder?.thirdUser?.content.map((item: IcardData) => {
                    return (
                      <div className="py-2">
                        <TaksaFolderCard
                          icon="icon-profile-2user"
                          title={item.name}
                          desc={item.shopCode}
                          taxId={item.memoryTaxShopCodes}
                          bgColor="bg-primary-50"
                          textColor="text-text-primary"
                          textDescColor="text-text-secondary"
                        />
                      </div>
                    );
                  })}
                </TabItem>
                <TabItem title="شرکت زیرمجموعه">
                  {dataFolder?.subCompany?.content.map((item: IcardData) => {
                    return (
                      <div className="py-2">
                        <TaksaFolderCard
                          icon="icon-corporate"
                          title={item.name}
                          desc={item.shopCode}
                          taxId={item.memoryTaxShopCodes}
                          bgColor="bg-primary-50"
                          textColor="text-text-primary"
                          textDescColor="text-text-secondary"
                        />
                      </div>
                    );
                  })}
                </TabItem>
              </Tabs>
            </DrawerItems>
          </div>
          <div>
            <Button
              className="border-secondary-500 hover:bg-secondary-400 hover:border-secondary-500 text-secondary-500"
              onClick={() => {
                setIsOpenAdd(true);
              }}
              outline
              fullSized
              size="md"
            >
              افزودن پرونده جدید
            </Button>
          </div>
        </div>
      </Drawer>

      <Drawer
        backdrop={true}
        open={isOpenAdd}
        onClose={handleCloseAdd}
        position="right"
        edge={true}
        className="w-full bg-transparent p-2 sm:w-[600px]"
      >
        <Folder onClose={handleCloseAdd} />
      </Drawer>
    </div>
  );
}
