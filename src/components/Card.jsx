import reactImg from "../assets/react.svg";
const Card = () => {
  return (
    <div className="dark:bg flex max-w-sm flex-col items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 hover:border-transparent hover:bg-sky-50 sm:flex-row sm:items-center sm:py-4 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
      <img
        className="size-20 shrink-0 sm:size-12"
        src={reactImg}
        alt="React Logo"
      />
      <div>
        <div className="text-center text-xl font-medium text-black sm:text-left dark:text-white">
          React
        </div>
        <p className="rounded-b-md text-center text-gray-500 sm:text-left dark:text-gray-400">
          Now, you're is using Tailwind in React App
        </p>
      </div>
    </div>
  );
};

export default Card;
