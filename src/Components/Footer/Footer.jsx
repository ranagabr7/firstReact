const Footer = () => {
  return (
    <>
      <footer className="bg-cyan-950 text-stone-50 p-7  flex justify-between">
        <div>
          <p className="text-2xl font-semibold pb-3">LOCATION</p>
          <p>2215 John Daniel Drive</p>
          <span>Clark, MO 65243</span>
        </div>
        <div className="text-center">
          <p className="text-2xl font-semibold pb-3">AROUND THE WEB</p>
          <ul className="flex text-center m-auto">
            <li className="mr-3  mt-3 border border-solid border-slate-50  h-10 rounded-full w-10 flex justify-center items-center">
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li className="mr-3 mt-3  border border-solid border-slate-50  h-10 rounded-full w-10 flex justify-center items-center">
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li className="mr-3  mt-3 border border-solid border-slate-50  h-10 rounded-full w-10 flex justify-center items-center">
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li className="mr-3  mt-3 border border-solid border-slate-50  h-10 rounded-full w-10 flex justify-center items-center">
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-2xl font-semibold pb-3">ABOUT FREELANCER</p>
          <p>
            Freelance is a free to use, licensed <br/> Bootstrap theme created by
            Route
          </p>
         
        </div>
      </footer>
    </>
  );
};

export default Footer;
