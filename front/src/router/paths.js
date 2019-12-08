/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: "",
    // Relative to /src/views
    view: "LoginPage"
  },
  {
    path: "/list",
    name: "list",
    view: "CouponList"
  },
  {
    path: "/survey",
    name: "survey",
    view: "SurveyList"
  }
];
