import constants from "@/shared/constants";
import axiosForPrivate, {
  axiosForNextApi,
  axiosForPublic,
} from "@/shared/lib/axios";

class UserApi {
  login = async (payload, thunkAPI) => {
    try {
      const response = await axiosForNextApi.post("/login", payload);

      if (response.status === constants.statusCodes.OK) {
        return response.data;
      }

      return Promise.reject(response);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(null, error?.response?.data || error);
    }
  };
  logout = async () => {
    const response = await axiosForNextApi.delete("/logout");
    return response.status === constants.statusCodes.OK;
  };
  registration = async (payload) => {
    const response = await axiosForNextApi.post("/registration", payload);
    return response;
  };
  fetchUser = async () => {
    const response = await axiosForPrivate.get("/auth/me");
    return response.data;
  };
  refresh = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/refresh`);
    const data = await response.json();
    return data.token;
  };
  resetPassword = async (payload) => {
    const response = await axiosForPublic.post(
      "/auth/forgot/password",
      payload
    );
    return response;
  };
}

const userApi = new UserApi();
export default userApi;
