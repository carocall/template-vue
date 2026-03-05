import httpInstance from "@/utils/request.js";

export const LoginAPI =({username,password })=> {
   return httpInstance({
        url: "/login",
        method: "POST",
        data: {
            username,
            password
        }
    });
}