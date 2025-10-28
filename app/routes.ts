import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";
//1
// index: the is the first page that will be displayed, then you add the path to the UI you want to display

//2
// to add other route use the route imported then the parth location

// note the route accept two names one the name of it eg contact,about then the path like below

// all routes have to be in the routes folder

//3

// to create route that accept id eg specifci or user post to dsiplay it full dailts alone use below


export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route('post/:postId','routes/post.tsx'),
  // to created nested route likke dasbord/spending do this

  //first type of nested route
  // route('dashboard','routes/dashboard.tsx',[
  //   // the them here
  //   route('spending','routes/spending.tsx'),
  //   route('personalInfo', 'routes/personal-info.tsx')
  // ])


  //second type of nested routes, this one is when you want route to have a layout on somthing in common
   // on this one you dont next initial segment like the first one
  
  layout('routes/dashboard.tsx',[
    // the them here
    route('spending','routes/spending.tsx'),
    route('personalInfo', 'routes/personal-info.tsx')
  ])

] satisfies RouteConfig;
