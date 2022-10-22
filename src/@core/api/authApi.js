import instance from "../utils/request.js";
import END_POINTS from "../constants/endpoints";

export const register = async ({ phone, password }) => {
  try {
    const res = await instance.post(END_POINTS.register, { phone, password });
    if (res.status === 200) {
      localStorage.setItem("token", res.data.access);
    }

    return res.data;
  } catch (err) {
    if (err.response) {
      console.log(err.response.data, err.response.status, err);
      return err.response.data;
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};

export const verifyCode = async ({ phone, code }) => {
  try {
    console.log({ phone, code });
    const res = await instance.post(END_POINTS.verfy_code, {
      phone,
      verifyCode: code,
    });
    console.log({ res });
    if (res.status === 200) {
      localStorage.setItem("token", res.data.access);
    }

    return res?.statusText;
  } catch (err) {
    if (err.response) {
      console.log(err.response.data);
      return { message: err.response.data };
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};

export const verifyPhone = async ({ phone }) => {
  try {
    const res = await instance.post(END_POINTS.verfy_phone, {
      phone,
    });
    return res?.status;
  } catch (err) {
    if (err.response) {
      console.log(err.response.data, err.response.status);
      return err.response.data;
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};

export const verifyInstagram = async ({ username }) => {
  try {
    const res = await instance.post(END_POINTS.verify_instagram, { username });
    console.log({ res });
    return res?.status;
  } catch (err) {
    if (err.response) {
      return err.response.status;
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};

export const resetPassword = async ({ password }) => {
  try {
    console.log(password);
    const res = await instance.post(END_POINTS.reset_password, { password });
    console.log({ res });
    return res?.status;
  } catch (err) {
    if (err.response) {
      return err.response.status;
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};
