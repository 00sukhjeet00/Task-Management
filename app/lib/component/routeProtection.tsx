"use client";
import { useLayoutEffect } from "react";
import { redirect } from "next/navigation";


export function ProtectRoute(Component: any) {
  return function IsAuth(props: any) {
      const auth = localStorage.getItem("token");
    
      useLayoutEffect(() => {
      if (!auth) {
        return redirect("/login");
      }
    }, []);


    if (!auth) {
      return null;
    }

    return <Component {...props} />;
  };
}