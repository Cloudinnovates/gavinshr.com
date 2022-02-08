/*
 * When navigating to a new page with React-Router, ensure the browser is moved to the top of the page.
 * Source: https://www.kindacode.com/article/react-router-dom-scroll-to-top-on-route-change/
 */

 import { useEffect } from "react";
 import { useLocation } from "react-router";

 const ScrollToTop = (props) => {
   const location = useLocation();

   //console.log(location.pathname);
   useEffect(() => {
     // don't scroll to top for homepage - allow browser router to scroll to skills, contact page, etc.
     if (location.pathname !== "/") {
       window.scrollTo(0, 0);
     }
   }, [location]);

   return <>{props.children}</>
 };

 export default ScrollToTop;
