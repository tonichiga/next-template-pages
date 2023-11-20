import axiosForPrivate from "@/shared/lib/axios";

class CrmUsersApi {
  constructor() {}

  getCrmUsers = async (pagintaionConfig = null) => {
    const response = await axiosForPrivate.get("");
    return response.data;
  };

  @TransformIdToPropertyId
  async deleteCrmUser(userIds) {
    console.log("userIds", userIds);
    await axiosForPrivate.delete(`/users`, {
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
      data: userIds,
    });
    return userIds;
  }
}

const crmUsersApi = new CrmUsersApi();
export default crmUsersApi;

function TransformIdToPropertyId(_, __, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args: any[]) {
    const payload = args[0] as number[];
    let payloadPerformed = [];

    if (payload.length !== 0) {
      payloadPerformed = payload.map((id) => {
        return { id };
      });
    }

    return await originalMethod.apply(this, [payloadPerformed]);
  };
}
