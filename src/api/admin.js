import httpInstance from '@/utils/request'

export const LoginAPI =({account,password })=> {
   return httpInstance({
        url: "/login",
        method: "POST",
        data: {
            account,
            password
        }
    });
}