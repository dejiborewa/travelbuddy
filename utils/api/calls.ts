import baseAxiosMethod from "./axios";

export const getRequest = async ({ url }: { url: string }) => {
  const response = await baseAxiosMethod.get(url);
  return response;
};

export const postRequest = async ({
  url,
  data
}: {
  url: string;
  data: any;
}) => {
  const response = await baseAxiosMethod.post(url, data);
  return response;
};
