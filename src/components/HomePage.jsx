import React from "react";

function HomePage() {
  const authToken = false;
  return (
    <div className="h-screen w-auto flex flex-col justify-center items-center">
      <h1 className=" font-extrabold text-8xl font ">Find your Byte®</h1>
      <button className=" bg-blue-500 rounded-full p-4 text-white w-48 ">
        {authToken ? "Sign Out" : "Create an Account"}
      </button>
    </div>
  );
}

export default HomePage;
