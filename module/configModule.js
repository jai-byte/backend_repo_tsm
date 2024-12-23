const leave_management_update = require("./controller/leave_management/leave_management_update");
const leave_application = require("./controller/leaveApplication/leave_application");
const task_list = require("./model/task_list");
const { leave_create_list } = require("./services/leaveService");

const configModule = {
  user: "module/controller/users/user",
  admin_user_list: "module/controller/users/admin_user_list",
  createAdminUser: "module/controller/users/createAdminUser",
  appUserApi: "module/controller/users/appUserApi",
  verifyOtp: "module/controller/users/verifyOtp",
  login: "module/controller/users/login",
  faq: "module/controller/faq/faq",
  feedback: "module/controller/feedback/feedback",
  filter: "module/controller/filter/filter",
  create_note: "module/controller/note/create",
  resend_otp: "module/controller/users/resend_otp",
  user_profile: "module/controller/users/user_profile",
  user_profile_update: "module/controller/users/user_profile_update",
  social_media_account: "module/controller/users/social_media_account",
  mobile_user_list: "module/controller/users/mobile_user_list",
  forgot_password: "module/controller/users/forgot_password",
  update_forgot_password: "module/controller/users/update_forgot_password",
  addQuestionnaire: "module/controller/questionnaire/addQuestionnaire",
  invoice: "module/controller/invoice/invoice",
  categories: "module/controller/categories/categories",
  file_upload: "module/controller/file_upload/file_upload",
  subscription: "module/controller/subscription/subscription",
  payment_gateway: "module/controller/payment_gateway/payment_gateway",
  rating: "module/controller/rating/rating",
  event: "module/controller/event/event",
  menu: "module/controller/menu/menu",
  role: "module/controller/role/role",
  feed: "module/controller/feed/create",
  community: "module/controller/community/create",
  community_chat: "module/controller/community_chat/create",
  mobile_user_view: "module/controller/users/mobile_user_view",
  activity: "module/controller/activity/create",
  course: "module/controller/course/course",
  chat_bot: "module/controller/chat_bot/create",
  dashboard: "module/controller/dashboard/dashboard",
  notification: "module/controller/notification/notification",
  event_feedback: "module/controller/event_feedback/create",
  eventReminder: "module/controller/event/eventReminder",
  leave_management: "module/controller/leave_management/leave_management",
  leave_create_list: "module/controller/leave_management/leave_create_list",
  leave_credit: "module/controller/leave_management/leave_credit",
  holiday_create: "module/controller/holiday/holiday_create",
  attendance: "module/controller/attendance/attendance",
  leave_application: "module/controller/leaveApplication/leave_application",
  leave_management_update:
    "module/controller/leave_management/leave_management_update",
  task_list: "module/controller/taskList/task_list",
};
module.exports = configModule;
