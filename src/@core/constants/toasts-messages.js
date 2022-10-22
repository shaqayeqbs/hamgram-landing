import { toast } from "react-toastify";

export const notValidPhone = () => {
  toast.error(" شماره موبایل وارد شده معتبر نمی باشد", { toastId: 1 });
};
export const shortPassowrd = () => {
  toast.error("رمز عبور نمی تواند کمتر از 6 کاراکتر باشد", { toastId: 2 });
};

export const wrongPassowrd = () => {
  toast.error("رمز عبور وارد شده اشتباه است", { toastId: 3 });
};

export const wrongCode = () => {
  toast.error("کد تایید وارد شده اشتباه می باشد", { toastId: 4 });
};

export const createUserAccount = () => {
  toast.success("اکانت شما با موفقیت ایجاد شد", { toastId: 5 });
};
export const accountIsNotPublic = () => {
  toast.error("لطفا پیج خود را از حالت خصوصی خارج کنید", { toastId: 6 });
};

export const existedAccount = () => {
  toast.error(" اکانت با این شناسه کاربری ثبت شده است", { toastId: 7 });
};

export const existedCompetitor = () => {
  toast.error("کاربر در لیست رقیب های شما وجود دارد! ", { toastId: 8 });
};
export const noUserWithThisUsername = () => {
  toast.error("کاربری با این شناسه وجود ندارد! ", { toastId: 9 });
};

export const competitorCreated = () => {
  toast.success("رقیب با موفقیت افزوده شد", { toastId: 10 });
};

export const competitorDeleted = () => {
  toast.success("رقیب با موفقیت حذف شد", { toastId: 11 });
};

export const serverError = () => {
  toast.error("خطا از سمت سرور", { toastId: 12 });
};

export const reapetedPasswrodAreNotEqual = () => {
  toast.error("رمز عبور وارد شده با تکرار آن مطابقت ندارد!", { toastId: 13 });
};

export const passwordUpdated = () => {
  toast.success("رمز عبور با موفقیت تغییر کرد", { toastId: 14 });
};
export const wrongPhoneNumber = () => {
  toast.error(" شماره موبایل وارد شده معتبر نمی باشد", { toastId: 15 });
};
export const persianKeyboard = () => {
  toast.error("  کیبورد فارسی است !", { toastId: 16 });
};
