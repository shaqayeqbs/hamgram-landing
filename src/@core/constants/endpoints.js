const END_POINTS = {
  register: `/user/register`,
  verfy_code: "user/verifycode",
  verfy_phone: "user/verifyphone",
  verify_instagram: `/instagram/account/create`,
  reset_password: "user/resetpassword",
  account_list: "instagram/account/list",
  account_last_post: "instagram/post/account/last?username=",
  analyze_account: "instagram/analyze/account?",
  clone_post: "instagram/post/clone/account",
  analyze_post_account: "instagram/analyze/post/account?",
};

export const COMPETITOR_END_PONINTS = {
  create_account: "instagram/competitor/create",
  last_post: "instagram/post/competitor/last?username=",
  delete: "instagram/competitor/remove/",
  clone_post: "/instagram/post/clone/competitor",
  analyze_accountL: "instagram/analyze/competitor?",
  analyze_post_account: "instagram/analyze/post/competitor?",
};

export default END_POINTS;
