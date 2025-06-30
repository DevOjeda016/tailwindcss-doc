import { useState } from 'react';
import reactImg from './assets/react.svg';

const App = () => {
  const [theme, setTheme] = useState('white');

  const handleThemeMode = mode => {
    setTheme(mode)
    document.querySelector('body').setAttribute('data-theme', mode)
    document.querySelector('body').classList.add(`dark:bg-black`)
  };

  return (
    <div className="content-center h-svh">
      <section>
        <div className="mx-auto max-w-xl overflow-clip rounded-2xl bg-white shadow-md">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img className='h-48 w-full object-cover md:h-full md:w-48' src={reactImg} alt="React Icon" />
            </div>
            <div className='p-8'>
              <div className='text-sm font-semibold tracking-wide text-[#00d8ff] uppercase'>Company retreats</div>
              <a href="#" className='mt-1 block text-lg leading-tight font-medium text-black hover:underline'>
                Incredible accoommodation for your team
              </a>
              <p className='mt-2 text-gray-500'>
                Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='@container'>
        <div className='flex flex-row @sm:@max-md:flex-col'>
          <img src={reactImg} alt="" />
          <img src={reactImg} alt="" />
        </div>
      </section>
      <section className='@container/main'>
        <div className='flex flex-col @sm/main:flex-row @md:flex-col'>
          <img src={reactImg} alt="" />
          <img src={reactImg} alt="" />
        </div>
      </section>
      <section>
        <form action="">
          <label htmlFor="change-theme"></label>
          <select value={theme} name="change-theme" id="change-theme" onChange={e => handleThemeMode(e.target.value)}>
            <option value="white">Claro</option>
            <option value="dark">Oscuro</option>
          </select>
        </form>
      </section>
    </div>
  );
};

export default App;
