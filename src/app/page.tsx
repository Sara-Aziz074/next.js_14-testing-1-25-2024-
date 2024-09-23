import Image from "next/image";

export default function Home() {
  return (<div className="mt-24  bg-white text-center  h-96 text-black    ">
    <h1 className="underline-offset-8 font-bold  mt-6 mb-8 "> hello next.js project testing</h1>
   
    {/* parent div */}
    <div className=" flex justify-center gap-x-5	">  
      {/* left div */}
      <div className="bg-yellow-800 min-h-32  w-64  "><p className="font-semibold text-black">
        left part
      </p>
      </div>
      {/* right div */}
      <div className="bg-gray-100 font-semibold text-black min-h-32 w-64 "> right part</div>
    </div>
  </div>

  );
}
