// import path from "path";
// import type { GatsbyNode } from "gatsby";

// // ✅ 1. Alias setup
// export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
//   actions,
// }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       alias: {
//         "@": path.resolve(__dirname, "src"),
//       },
//     },
//   });
// };
import path from "path";
import type { GatsbyNode } from "gatsby";

// ✅ 1. Alias setup
export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  });
};

// ✅ 2. Handle Dynamic/Client-Only Routes
export const onCreatePage: GatsbyNode["onCreatePage"] = async ({
  page,
  actions,
}) => {
  const { createPage } = actions;

  // Handle /category/[id]
  if (page.path.match(/^\/category/)) {
    // page.matchPath = "/category/*";
    page.matchPath = "/category/:id";
    createPage(page);
    return; // Exit early after creating the page
  }

  // Handle /trip/detail/[id]
  if (page.path.match(/^\/trip\/details/)) {
    // page.matchPath = "/trip/details/*";
    page.matchPath = "/trip/details/:id";
    createPage(page);
    return;
  }

  // Fallback for any other dynamic routes using the [id] syntax
  if (page.path.match(/\[.*\]/)) {
    page.matchPath = page.path.replace(/\[(.+)\]/g, ":$1");
    createPage(page);
  }
};
// import path from "path";
// import type { GatsbyNode } from "gatsby";

// // ✅ 1. Alias setup
// export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
//   actions,
// }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       alias: {
//         "@": path.resolve(__dirname, "src"),
//       },
//     },
//   });
// };

// // ✅ 2. Handle Dynamic/Client-Only Routes
// export const onCreatePage: GatsbyNode["onCreatePage"] = async ({
//   page,
//   actions,
// }) => {
//   const { createPage } = actions;

//   // Check if the page is a dynamic route (e.g., src/pages/user/[id].jsx)
//   if (page.path.match(/\[.*\]/)) {
//     // This creates a matchPath so that any sub-route maps to this template
//     // e.g., /user/any-id will be handled by /user/[id].jsx
//     page.matchPath = page.path.replace(/\[(.+)\]/g, ":$1");
//     createPage(page);
//   }
// };
