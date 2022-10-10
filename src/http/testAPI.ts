import { $host } from "./index";

export const fetchTests = async () => {
  const { data } = await $host.get("api/test", {
    params: {},
  });
  return data;
};

export const createTest = async (name: string, count: number, distance: number) => {
  const { data } = await $host.post("api/test", {
    name,
    count,
    distance,
  });
  return data;
};
