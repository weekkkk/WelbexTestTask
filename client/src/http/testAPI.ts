import { $host } from "./index";

export const fetchTests = async (
  name: string = "",
  count: number = 0,
  distance: number = 0,
  page: number = 1,
  limit: number = 5
) => {
  const { data } = await $host.get("api/test", {
    params: {
      name,
      count,
      distance,
      page,
      limit,
    },
  });
  return data;
};
