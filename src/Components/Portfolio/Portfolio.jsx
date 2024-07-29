import portfolio from "./../../assets/images/portfolio-2.jpg";
const Portfolio = () => {
  return (
    <>
      <section className="portfolio h-screen">
        <h1 className="pt-5 head relative uppercase text-3xl font-bold pb-5 text-center  text-lime-950 ">
          portfolio component
        </h1>
        <div className="content pt-8 m-5">
          <div className="card w-64 relative ">
            <img src={portfolio} alt="portfolio" />
            <i className="icon fa-solid fa-plus text-5xl text-stone-50 "></i>
          </div>
          <div className="card w-64 relative ">
            <img src={portfolio} alt="portfolio" />
                 <i className="icon fa-solid fa-plus text-5xl text-stone-50 "></i>
          </div>
          <div className="card w-64 relative ">
            <img src={portfolio} alt="portfolio" />
                 <i className="icon fa-solid fa-plus text-5xl text-stone-50 "></i>
          </div>
          <div className="card w-64 relative ">
            <img src={portfolio} alt="portfolio" />
                 <i className="icon fa-solid fa-plus text-5xl text-stone-50 "></i>
          </div>
          <div className="card w-64 relative ">
            <img src={portfolio} alt="portfolio" />
                 <i className="icon fa-solid fa-plus text-5xl text-stone-50 "></i>
          </div>
          <div className="card w-64 relative ">
            <img src={portfolio} alt="portfolio" />
                 <i className="icon fa-solid fa-plus text-5xl text-stone-50 "></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
