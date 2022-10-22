import instance from "../utils/request.js";
import { COMPETITOR_END_PONINTS } from "../constants/endpoints";

export const createCompetitor = async ({ username, competitor_username }) => {
  try {
    const res = await instance.post(COMPETITOR_END_PONINTS.create_account, {
      username,
      competitor_username,
    });
    const status = res?.status;
    const response = res?.data;
    return { response, status };
  } catch (err) {
    if (err.response) {
      return err.response.data.code;
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};

export const lastPostCompetitor = async ({ competitorUsername }) => {
  try {
    const res = await instance.get(
      COMPETITOR_END_PONINTS.last_post + competitorUsername
    );
    return res?.data;
  } catch (err) {
    if (err.response) {
      return err.response.data.code;
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};

export const DeleteCompetitor = async ({ username, competitor_username }) => {
  try {
    const res = await instance.post(COMPETITOR_END_PONINTS.delete, {
      username,
      competitor_username,
    });
    return res?.status;
  } catch (err) {
    if (err.response) {
      return err.response.data.code;
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};

export const clonePostCompetitor = async ({ competitorUsername }) => {
  console.log({ competitorUsername });
  try {
    const res = await instance.post(COMPETITOR_END_PONINTS.clone_post, {
      username: competitorUsername,
    });
    console.log({ res });
    return res?.data;
  } catch (err) {
    if (err.response) {
      return err.response.data;
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};

export const analyzeCompetitorAccount = async ({ id, startDate, endDate }) => {
  try {
    const res = await instance.get(
      COMPETITOR_END_PONINTS.analyze_accountL +
        `start_date=${startDate}&end_date=${endDate}&instagram_account=${id}`
    );
    if (res?.status === 200) {
      if (res.data.length === 1) {
        return await res.data[0];
      } else {
        return await res?.data;
      }
    } else if (res?.status === 201) {
      return { message: res.data };
    }
  } catch (err) {
    if (err.response) {
      // return err.response.data;
    } else {
    }
  }
};

export const analyzeCompetitorPost = async ({ id, startDate, endDate }) => {
  try {
    const res = await instance.get(
      COMPETITOR_END_PONINTS.analyze_post_account +
        `start_date=${startDate}&end_date=${endDate}&instagram_account=${id}`
    );
    return res?.data;
  } catch (err) {
    if (err.response) {
      return err.response.data;
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};
