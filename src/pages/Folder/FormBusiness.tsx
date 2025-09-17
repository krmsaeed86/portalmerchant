//import { useState } from "react";
import { Field, Formik } from "formik";

import FloatingLabelInput from "../../components/base/inputs/floatingLabelInput";
import FloatingLabelSelect from "../../components/base/inputs/floatingLabelSelect";

export default function FormBusiness() {
  return (
    <>
      <Formik
        initialValues={{}}
        //validationSchema={{}}
        onSubmit={() => {
          // handleForm(values);
        }}
      >
        {({ handleSubmit }) => (
          // useEffect(() => {
          //   if (ProvinceId > 0) {
          //     setFieldValue("province", +ProvinceId);

          //     const shouldResetCounty =
          //       dataInitial?.city?.county?.province?.id !== +ProvinceId;
          //     if (shouldResetCounty) {
          //       setFieldValue("countyId", 0);
          //     } else {
          //       // Keep existing countyId if appropriate
          //       setFieldValue(
          //         "countyId",
          //         dataInitial?.city?.county?.id ?? 0,
          //       );
          //     }

          //     const shouldResetCity =
          //       dataInitial?.city?.county?.id !== +CountyId;
          //     if (shouldResetCity) {
          //       setFieldValue("cityId", 0);
          //     } else {
          //       setFieldValue("cityId", dataInitial?.city?.id ?? 0);
          //     }
          //   }
          // }, [ProvinceId, dataInitial, CountyId, setFieldValue]);
          // useEffect(() => {
          //   if (CountyId > 0) {
          //     setFieldValue("countyId", +CountyId);

          //     // Optionally update cityId based on your logic
          //     const shouldResetCity =
          //       dataInitial?.city?.county?.id !== +CountyId;
          //     if (shouldResetCity) {
          //       setFieldValue("cityId", 0);
          //     } else {
          //       setFieldValue("cityId", dataInitial?.city?.id ?? 0);
          //     }
          //   }
          // }, [CountyId, dataInitial, setFieldValue]);

          <form onSubmit={handleSubmit} className="w-full">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <div className="w-full px-1 pb-4 lg:basis-1/2 2xl:basis-1/3">
                <Field
                  id="shopName"
                  name="shopName"
                  value=""
                  //type="text"
                  label="اسم کسب و کار"
                  // icon={<TaksaIcon src={"icon-store"} />}
                  component={FloatingLabelInput}
                  //require={true}
                />
              </div>

              <div className="w-full px-1 pb-4 lg:basis-1/2 2xl:basis-1/3">
                <Field
                  id="taxCommercialCode"
                  name="taxCommercialCode"
                  // value={initialValues?.taxCommercialCode}
                  type="text"
                  pattern="\d{0,14}"
                  label="کد اقتصادی"
                  // icon={
                  //   <TaksaIcon
                  //     src={"icon-file-numbers"}
                  //     fontSize="16px"
                  //   />
                  // }
                  component={FloatingLabelInput}
                  require={true}
                />
              </div>

              <div className="w-full basis-full px-1 pt-4 pb-6">
                <p> اطلاعات تماس</p>
              </div>
              <div className="w-full px-1 pb-4 lg:basis-1/2 2xl:basis-1/3">
                <Field
                  label={"استان"}
                  icon={"icon-location-map"}
                  name={"province"}
                  // value={
                  //   values.province > 0
                  //     ? values.province
                  //     : initialValues.province
                  // }
                  //setValue={setProvinceId}
                  //setFieldValue={setFieldValue}
                  // onChange={(e: any) => {
                  //   // setProvinceId(e.target.value);
                  // }}
                  // isLoading={isLoadingProvince}
                  // data={dataProvince?.content}
                  component={FloatingLabelSelect}
                  require={true}
                />
              </div>
              <div className="w-full px-1 pb-4 lg:basis-1/2 2xl:basis-1/3">
                <Field
                  label={"شهرستان"}
                  icon={"icon-location-dot"}
                  name={"countyId"}
                  // value={
                  //   values.countyId > 0
                  //     ? values.countyId
                  //     : initialValues.countyId
                  // }
                  //setValue={setCountyId}
                  //setFieldValue={setFieldValue}
                  // onChange={(e: any) => {
                  //   setCountyId(e.target.value);
                  // }}
                  // isLoading={isLoadingCounty}
                  // data={dataCounty?.content}
                  component={FloatingLabelSelect}
                  require={true}
                  // disabled={ProvinceId === 0}
                />
              </div>
              <div className="w-full px-1 pb-4 lg:basis-1/2 2xl:basis-1/3">
                <Field
                  label={"شهر"}
                  icon={"icon-files"}
                  name={"cityId"}
                  // value={
                  //   CountyId === 0
                  //     ? 0
                  //     : values.cityId > 0
                  //       ? values.cityId
                  //       : initialValues.cityId
                  // }
                  //setFieldValue={setFieldValue}
                  // isLoading={isLoadingCity}
                  // data={dataCity?.content}
                  component={FloatingLabelSelect}
                  // disabled={CountyId === 0}
                  require={true}
                />
              </div>

              <div className="w-full px-1 pb-4 lg:basis-1/2 2xl:basis-1/3">
                <Field
                  id="postalCode"
                  name="postalCode"
                  // value={
                  //   values?.postalCode
                  //     ? values?.postalCode
                  //     : initialValues?.postalCode
                  // }
                  pattern="\d{0,10}"
                  type="text"
                  label="کد پستی "
                  // icon={<TaksaIcon src="icon-postal-code" />}
                  component={FloatingLabelInput}
                  require={true}
                />
              </div>

              <div className="mt-6 flex w-full basis-full items-center justify-between">
                <div className="mr-auto flex items-center justify-end">
                  <button
                    type="submit"
                    // disabled={!isValid}
                    className="bg-primary mr-5 rounded-md px-10 py-3 text-white disabled:bg-gray-200"
                  >
                    ثبت و ادامه
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
