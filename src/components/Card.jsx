import reactImg from '../assets/react.svg'
const Card = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:py-4 max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 hover:border-transparent hover:bg-sky-50">
      <img className='size-20 sm:size-12 shrink-0' src={reactImg} alt="React Logo" />
      <div>
        <div
          className='text-xl font-medium text-black dark:text-white text-center sm:text-left'
        >
          React
        </div>
        <p
          className='text-gray-500 dark:text-gray-400 text-center sm:text-left rounded-b-md'
        >
          Now, you're is using Tailwind in React App
        </p>
      </div>
    </div>
  );
}


export default Card