import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
const NoPage = () => {
  return (
    <div className=" flex flex-col min-h-screen bg-pink-50">
      <div className=" text-center text-2xl text-black-500  py-10 bg-pink-50 rounded mx-auto">
        <h1 className=" font-bold">Page Not Found</h1>
        <h2 className="font-italic "> <span className="text-red-500"> XX</span> error 404<span className="text-red-500"> XX</span> </h2>
      </div>
      <div className="flex justify-center">
        <img src="../img/hero3.png" alt="" />
      </div>
      <div className="flex justify-center flex-col">
        <h2 className="text-center text-2xl font-bold text-black-500 mt-5 mb-10 ">
          Back to{" "}
          <Link
            className=" text-center text-2xl font-bold text-pink-500 hover:text-black"
            to={"/"}
          >
            Home
          </Link>
        </h2>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default NoPage;
