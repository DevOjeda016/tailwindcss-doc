const ContactCard = ({ name, image, email }) => {
  return (
    <li className="flex border-t-2 border-t-gray-100 p-4 first:border-none even:bg-gray-50 hover:bg-gray-100">
      <img
        className="h-10 w-10 justify-center rounded-full bg-sky-100 p-1"
        src={image}
        alt={name}
      />
      <div className="ml-3 overflow-clip">
        <p className="text-sm font-medium text-gray-900 dark:text-white">
          {name}
        </p>
        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
          {email}
        </p>
      </div>
    </li>
  );
};

export default ContactCard;
