import axios from "axios";
import type { FormEvent } from "react";

const submitLogout = async () => {
  const req = await axios.post(
    "http://localhost:3001/oauth/logout",
    {},
    { withCredentials: true }
  );
  if (req.status === 200) {
    window.location.href = "/";
  }
};

export const Logout = () => {
  return (
    <>
      <button
        className="mt-4 group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={() => submitLogout()}
      >
        Logout
      </button>
    </>
  );
};

export default Logout;
