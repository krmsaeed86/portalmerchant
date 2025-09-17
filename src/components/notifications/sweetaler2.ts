import Swal, { SweetAlertIcon } from "sweetalert2";
//import withReactContent from 'sweetalert2-react-content'
import "sweetalert2/src/sweetalert2.scss";

//const MySwal = withReactContent(Swal)
export const ColoredToast = (
  color: string,
  message: string,
  icon?: SweetAlertIcon | undefined,
) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-start",
    showConfirmButton: false,
    timerProgressBar: true,
    timer: 5000,
    //showCloseButton: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
    customClass: {
      //popup:'bg-danger-dark-light'
      popup: `${color}`, // info, warning, danger, success, secendary, primery
    },
  });
  console.log(icon);
  Toast.fire({
    title: message,
    //icon: icon,
  });
};

export const Success = (message: string) => {
  ColoredToast("!bg-success-light text-success", message, "success");
};

export const Error = (message: string) => {
  ColoredToast("!bg-danger-light text-danger", message, "error");
};

export const Warning = (message: string) => {
  ColoredToast("!bg-warning text-warning", message, "warning");
};

export const Info = (message: string) => {
  ColoredToast("!bg-info text-info", message, "info");
};
