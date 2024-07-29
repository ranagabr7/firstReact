const Contact = () => {
  return (
    <>

      <div className="h-screen mt-9 text-center  ">
        <div className=" flex  flex-col items-center justify-center">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="name"
            className="p-4 mb-5  block w-9/12 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
          />
          <input
            id="age"
            name="age"
            type="number"
            placeholder="age"
            className="p-4 mb-5 block w-9/12 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
          />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="email"
            className="p-4 mb-5 block w-9/12 rounded-md border-0  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
          />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="password"
            className="p-4 mb-5 block w-9/12 rounded-md border-0  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 6"
          />
        </div>
        <button className="text-stone-50 bg-emerald-500 py-3 px-9 rounded-md">send</button>
      </div>
    </>
  );
};

export default Contact;
