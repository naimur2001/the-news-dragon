import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Category from "../Home/Category/Category";
import NewsLayout from "../NewsLayout/NewsLayout";
import News from "../News/News";
import Login from "../Login/Login";
import LoginCard from "../Login/LoginCard";
import Register from "../Login/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../Login/Terms";



const router=createBrowserRouter([
  {
    path:'/',
    element:<Login></Login>,
    children:[
      {
        path:"/",
        element: <Navigate to='/category/0'></Navigate>
      },
      {
        path:"login",
        element:<LoginCard></LoginCard>
      },
      {
        path:"register",
        element:<Register></Register>
      },
      {
        path:'terms',
        element: <Terms></Terms>
      }
    ]
  },

{
  path:'category',
  element:<Main></Main>,
  children:[
   
    {
      path:':id',
      element:<Category></Category>,
      loader: ({params})=> fetch(`https://the-news-server-naimur2001.vercel.app/categories/${params.id}`)
    },
    
  ]
},
{
  path:'/news',
  element:<NewsLayout></NewsLayout>,
  children:[
    {
      path:':id',
      element: <PrivateRoute>
        <News></News>
      </PrivateRoute> ,
      loader:({params})=>fetch(`https://the-news-server-naimur2001.vercel.app/news/${params.id}`)

    }
  ]
}

])
export default router;