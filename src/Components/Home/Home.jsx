import avatar from "./../../assets/images/avatar.png";
const Home = () => {
  return (
    <>
      <section className="header text-stone-50 min-h-screen bg-emerald-500 w-full text-center ">
        <div className="pt-6 ">
          <img className="rounded-full w-64 m-auto" src={avatar} alt="avatar" />
        </div>
        <h1 className="head relative uppercase text-3xl font-bold pb-5">
          start Framework
        </h1>
        <p className="p-5">Graphic Artist - Web Designer - Illustrator</p>
      </section>
    </>
  );
};

export default Home;
