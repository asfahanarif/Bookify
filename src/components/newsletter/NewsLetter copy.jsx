// // /* eslint-disable react/no-unescaped-entities */

// const NewsLetter = () => {
//   return (
//     <div>
//       <section className="text-gray-600 body-font mb-10 bg-red-100 py-5">
//         {/* main  */}
//         <div className="container px-5 py-5 mx-auto">
//           {/* Heading  */}
//           <h1 className=" text-center text-3xl font-bold text-black">
//             Subscribe!
//           </h1>
//           {/* para  */}
//           <h2 className=" text-center text-2xl font-semibold mb-0">
//             us to get in <span className=" text-pink-500">touch</span> with us
//           </h2>
//         </div>
//         <form className="flex justify-center mt-0 px-5 py-5">
//           <input
//             type="text"
//             placeholder="Enter your email"
//             className="w-1/3 px-3 py-2 rounded-l-lg border-2 border-gray-300 focus:outline-none focus:border-pink-500"
//           />
//           <button className="px-8 py-2 bg-pink-500 text-white rounded-r-lg">
//             Subscribe
//           </button>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default NewsLetter;

// import { Button, Input, message, Result } from "antd";

// import { useState } from "react";
// function NewsLetter() {
//   const [messageApi, contextHolder] = message.useMessage();
//   const [isFormSubmitted, setIsFormSubmitted] = useState(0);
//   const [btnState, setBtnState] = useState(0);
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     //validating form data
//     const formData = new FormData(e.target);
//     const email = formData.get("email");
//     if (!email) {
//       messageApi.error("Please enter your email", 5);
//       return;
//     }
//     if (!email.includes("@")) {
//       messageApi.error("Please enter a valid email", 5);
//       return;
//     }
//     //sending data to server
//     setBtnState(1);
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       body: JSON.stringify({
//         email,
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         e.target.reset();
//         setBtnState(0);
//         if (json.status == "error") {
//           messageApi.error(json.message, "8");
//           return;
//         }
//         messageApi.success(
//           "You have successfully subscribed to our newsletter",
//           5
//         );
//         setIsFormSubmitted(true);
//       });
//   };

//   if (isFormSubmitted) {
//     return (
//       <div
//         style={{ height: "100dvh" }}
//         className="w-screen flex flex-col justify-center items-center"
//       >
//         <div className="w-full lg:w-3/5 bg-gray-200 p-0 md:p-12 rounded-lg">
//           <Result
//             status={"success"}
//             title="Thank you for subscribing!"
//             subTitle="You have successfully subscribed to our newsletter."
//           />
//         </div>
//         {contextHolder}
//       </div>
//     );
//   }
//   return (
//     <>
//       <div
//         style={{ height: "100dvh" }}
//         className="w-screen flex flex-col justify-center items-center"
//       >
//         <div className="w-full lg:w-3/5 bg-gray-200 lg:p-16 p-8 md:p-12 rounded-lg">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
//             <div className="flex flex-col justify-center">
//               <h1 className="lg:text-3xl text-xl md:text-2xl font-bold">
//                 Subscribe to our Newsletter!
//               </h1>
//               <p className="text-[#2c2e3d] pt-4 lg:text-lg font-semibold">
//                 Join our monthly newsletter for exclusive updates on the latest
//                 ebooks and articles available on Webxspark. Stay ahead of the
//                 game and never miss out on our top content again.
//               </p>
//               <div className="flex flex-col pt-8">
//                 <form onSubmit={handleFormSubmit}>
//                   <Input
//                     className="h-12 text-lg bg-[#f6f6f6] active:bg-[#fff]"
//                     placeholder="Enter e-mail"
//                     name="email"
//                     type="email"
//                   />
//                   <Button
//                     loading={btnState}
//                     type="null"
//                     htmlType="submit"
//                     className="bg-[#ab40fa] h-12 mt-4 text-lg w-full hover:bg-[#b002fa] active:bg-[#9002fa] text-white"
//                   >
//                     Subscribe
//                   </Button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {contextHolder}
//     </>
//   );
// }

// export default NewsLetter;
