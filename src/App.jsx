import Card from "./components/Card";
import Button from "./components/Button";
import ReactImg from "./assets/react.svg";

const App = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-y-4 p-4">
      <Card />
      <Button />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex gap-x-4">
        <img
          className="size-12 blur-sm grayscale"
          src={ReactImg}
          alt="React Icon"
        />
        <img
          className="size-12 rounded-4xl bg-[#dcf8ff] p-2"
          src={ReactImg}
          alt="React Icon Alternative"
        />
      </div>
      <div>
        <div className="group rounded-2xl bg-sky-100 px-12">
          <span className="text-sky-950 group-hover:text-sky-800">
            affected element
          </span>
        </div>
      </div>
      <button className="btn-primary">Save changes</button>
    </div>
  );
};

export default App;
