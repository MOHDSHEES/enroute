// data.ts
let blog1 = 'blog/lp-1-1.jpg';
let blog2 = 'blog/lp-1-2.jpg';  
let blog3 = 'blog/lp-1-3.jpg';

 const categories = [
     { label: 'Travel', count: 7 },
     { label: 'Agency', count: 4 },
     { label: 'Corporates', count: 5 },
     { label: 'Social Marketing', count: 3 },
     { label: 'System', count: 6 },
   ];
   
const recentPosts = [
     {
       title: 'Business Stagey For Marketing System',
       date: '14 Feb, 2024',
       image: blog1,
       link: 'blog-details-right',
     },
     {
       title: 'Design Better Links For Website & Emails',
       date: '12 Mar, 2024',
       image: blog2,
       link: 'blog-details-right',
     },
     {
       title: 'Web Frame Worsen Solve Vanilla Alte',
       date: '23 Feb, 2024',
       image: blog3,
       link: 'blog-details-right',
     },
   ];
   
   const tags = [
     { label: 'Agency' },
     { label: 'Traveling' },
     { label: 'Design' },
     { label: 'Travel' },
     { label: 'Change' },
     { label: 'Video' },
     { label: 'World' },
     { label: 'Startup' },
     { label: 'Services' }
   ];
   

   export const blogSidebarData = {
     categories,
     recentPosts,
     tags,
   };
   