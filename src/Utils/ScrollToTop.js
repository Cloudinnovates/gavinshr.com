/*
 * When navigating to a new page with React-Router, ensure the browser is moved to the top of the page.
 * Modified from source: https://www.kindacode.com/article/react-router-dom-scroll-to-top-on-route-change/
 */

 import { useEffect } from "react";
 import { useLocation } from "react-router";

 const ScrollToTop = (props) => {
   const location = useLocation();
   const shouldShowConsoleDebug = false;

   useEffect(() => {
     if (shouldShowConsoleDebug) { console.log("Navigation to location: " + location.pathname + " Full URL: " + window.location.href); }
     // don't scroll to top for homepage - allow browser router to scroll to skills, contact page, etc.
     if (location.pathname !== "/") {
       if (location.pathname === "/projects" && (window.location.href.indexOf("#") != -1)) {
         // pathname doesn't show hash - href does. So check if the location is
         // on the projects page and IF a hash also exists then we want to scorll to the hash section not the top.
         if (shouldShowConsoleDebug) { console.log("Navigating to projects page with hash link, do not scroll to top."); }
       } else {
         if (shouldShowConsoleDebug) { console.log("Scroll to top."); }
         window.scrollTo(0, 0);
       }
     } else {
        if (shouldShowConsoleDebug) { console.log("Navigating to index page, do not scroll to top."); }
     }
   }, [location]);

   return <>{props.children}</>
 };

 export default ScrollToTop;
