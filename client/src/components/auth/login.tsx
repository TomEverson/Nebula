import Discord from "./discord";

const Login = () => {
  return (
    <>
      <>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://astro.build/assets/press/full-logo-light.svg"
                alt="Astro"
              />
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Log in to your account
              </h2>
            </div>
            <div className="mt-8 space-y-6">
              <input type="hidden" name="remember" defaultValue="true" />
              <div>
                <Discord />
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Login;
