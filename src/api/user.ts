import service from "@/utils/request";

// 注册
export const userRegisterApi = (data: string)=> {
  return service.post(`lejuClient/member/register`, data)
}