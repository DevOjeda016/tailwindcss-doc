import reactImg from '../assets/react.svg'
const Card = () => {
  return (
    <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
      <img src={reactImg} alt="React Logo" />
      <div>
        <div
          className='text-xl font-medium text-black dark:text-white'
        >
          React
        </div>
        <p
          className='text-gray-500 dark:text-gray-400'
        >
          Now, you're is using Tailwind in React App
        </p>
      </div>
    </div>
  );
}


export default Card