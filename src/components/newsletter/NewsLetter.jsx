/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";

const NewsLetter = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  // // navigate
  // const navigate = useNavigate();

  // User Signup State
  const [userSignup, setUserSignup] = useState({
    email: "",
  });

  /**========================================================================
   *                          User Signup Function
   *========================================================================**/

  const userSignupFunction = async () => {
    // validation
    if (userSignup.email === "") {
      toast.error("Given Field is required");
    }

    setLoading(true);
    try {
      const users = await createUserWithEmailAndPassword(
        auth,
        userSignup.email
      );

      // create user object
      const user = {
        email: users.Signup.email,
        uid: users.user.uid,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };

      // create user Refrence
      const userRefrence = collection(fireDB, "user");

      // Add user Detail
      addDoc(userRefrence, user);

      setUserSignup({
        email: "",
      });

      toast.success("Subscribe Successfully");

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center mb-20 py-10">
      {loading && <Loader />}
      {/* Login Form  */}
      <div className="login_Form bg-pink-50 px-8 py-6 border border-pink-100 rounded-xl shadow-md">
        {/* Top Heading  */}
        <div className="mb-5">
          {/* para  */}
          <h2 className=" text-center text-2xl font-semibold mb-0">
            To get in <span className=" text-pink-500">touch</span> with us
          </h2>
        </div>

        {/* Input One  */}
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email Address"
            value={userSignup.email}
            onChange={(e) => {
              setUserSignup({
                ...userSignup,
                email: e.target.value,
              });
            }}
            className="bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200"
          />
        </div>

        {/* Subscribe Button  */}
        <div className="mb-5">
          <button
            type="button"
            onClick={userSignupFunction}
            className="bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md "
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
