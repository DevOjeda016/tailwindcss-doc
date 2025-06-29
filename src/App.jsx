import ContactCard from "./components/ContactCard";
import image from "./assets/react.svg";

const App = () => {
  const person = [
    {
      id: 1,
      name: "Kristen Ramos",
      email: "kristen.ramos@example.com",
      image,
    },
    {
      id: 2,
      name: "Floyd Miles",
      email: "floys.miles@example.com",
      image,
    },
    {
      id: 3,
      name: "Courtney Henry",
      email: "courtney.henry@example.com",
      image,
    },
    {
      id: 4,
      name: "Ted Fox",
      email: "ted.fox@example.com",
      image,
    },
  ];

  return (
    <div className="flex flex-col items-center gap-y-4 p-4">
      <button className="rounded-4xl bg-violet-500 px-4 py-2 font-medium text-white hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700">
        Save changes
      </button>
      <ul className="w-sm rounded-xl border-2 border-gray-100" role="list">
        {person.map((p) => (
          <ContactCard
            key={p.id}
            image={p.image}
            name={p.name}
            email={p.email}
          />
        ))}
      </ul>
      <form className="flex flex-col items-start">
        <label className="font-medium text-gray-900" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          value="tbone"
          disabled
          class="invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
        />
      </form>
      <form className="w-sm rounded-xl border-2 border-gray-100">
        <label className="has-checked:bg-indigo-50 has-checked:text-indigo-900 has-checked:ring-indigo-200 dark:has-checked:bg-indigo-950 dark:has-checked:text-indigo-200 dark:has-checked:ring-indigo-900">
          Google Play
          <input type="radio" className="border-4 checked:border-indigo-500" />
        </label>
      </form>
      <div>
        <button
          type="button"
          className="rounded-full bg-indigo-600 px-4 py-2 text-indigo-50 hover:not-focus:bg-indigo-400"
        >
          Save changes
        </button>
      </div>
      <div className="flex flex-col gap-5">
        <a
          href="#"
          className="group mx-auto block max-w-xs space-y-3 rounded-lg bg-white p-4 shadow-lg ring-1 ring-gray-900/5 transition-colors hover:bg-sky-500"
        >
          <div className="flex gap-3">
            <svg
              class="h-6 w-6 stroke-sky-500 group-hover:stroke-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 19H6.931A1.922 1.922 0 015 17.087V8h12.069C18.135 8 19 8.857 19 9.913V11"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 7.64L13.042 6c-.36-.616-1.053-1-1.806-1H7.057C5.921 5 5 5.86 5 6.92V11M17 15v4M19 17h-4"
              ></path>
            </svg>
            <h3 className="font-medium text-gray-900 group-hover:text-white">
              New Project
            </h3>
          </div>
          <p className="text-gray-500 group-hover:text-white">
            Create a new project from a variety of starting templates
          </p>
        </a>
      </div>
      <div className="w-xs">
        <label>
          <span className="block text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*']">
            Email:
          </span>
          <input
            className="peer w-full rounded-sm p-2 shadow-md ring-1 ring-gray-400 placeholder:text-gray-500 placeholder:italic"
            type="email"
            name="email"
            placeholder="example@example.com"
            autoComplete="email"
            required
          />
          <p className="invisible text-red-500 peer-invalid:visible">
            Email is required
          </p>
        </label>
      </div>
      <div className="mx-auto max-w-lg border-x border-x-gray-200 px-6 py-8 dark:border-x-gray-800 dark:bg-gray-950/10">
        <blockquote className="text-center text-2xl font-semibold text-gray-900 italic dark:text-white">
          When you look{" "}
          <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
            <span className="relative text-white dark:text-gray-950">
              Annoyed
            </span>
          </span>{" "}
          all the time, people think that you're busy.
        </blockquote>
      </div>
      <div className="mx-auto max-w-lg border-x border-x-gray-200 px-6 py-8 dark:border-x-gray-800 dark:bg-gray-950/10">
        <blockquote className="text-center text-2xl font-semibold text-gray-900 italic dark:text-white">
          When you look{" "}
          <span className="relative">
            <span
              className="absolute -inset-1 block -skew-y-3 bg-pink-500"
              aria-hidden="true"
            ></span>
            <span className="relative text-white">Annoyed</span>
          </span>{" "}
          all the time, people think that you're busy.
        </blockquote>
      </div>
      <input
        className="file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100 dark:file:bg-violet-600 dark:file:text-violet-100 dark:hover:file:bg-violet-500"
        type="file"
      />
      <div className=""></div>
    </div>
  );
};

export default App;
