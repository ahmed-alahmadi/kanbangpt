import {
  SignInButton,
  SignOutButton,
  SignUp,
  SignUpButton,
  useUser,
} from "@clerk/nextjs";
export const NavBar = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  if (!isLoaded) {
    return <>Loading...</>;
  }
  return (
    <nav className=" border-gray-200 bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a className="flex items-center">
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            KanbanGPT
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
            <li className="self-center">
              <a
                href="#"
                className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
                aria-current="page"
              >
                Teams
              </a>
            </li>
            <li className="self-center">
              <a
                href="#"
                className=" block self-center rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Projects
              </a>
            </li>

            <li className="self-center">
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                {isSignedIn && (
                  <SignOutButton className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700" />
                )}
                {!isSignedIn && (
                  <div className="flex gap-2">
                    <SignInButton className=" rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700" />
                    <SignUpButton className=" rounded bg-slate-200 px-4 py-2 font-bold text-black hover:bg-slate-300" />
                  </div>
                )}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
