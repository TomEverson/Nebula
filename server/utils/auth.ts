import axios from "axios";

export const discordAuthFetch = async ({ params }) => {
  const response = await axios.post(
    "https://discord.com/api/v10/oauth2/token",
    params,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "*",
      },
    }
  );
  const { access_token } = await response.data;
  const { data: res } = await axios.get(
    "https://discord.com/api/v10/users/@me",
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
  return res;
};
