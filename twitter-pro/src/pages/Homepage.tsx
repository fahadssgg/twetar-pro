import React from "react";
import Sidecpar from "../components/Sidepar"
import Acountbar from "../components/Acountbar"


export default function Homepage() {
  return( 
  < >
   
   <div className=" grid grid-cols-5 bg-red-500 h-screen">

   <div className=" bg-white h-screen col-start-1 col-end-2">
    <Sidecpar/>
   </div>



   <div className="bg-yellow-300 h-screen col-start-2 col-span-3">

   <div className="flex-1 mx-2">
            <h2 className="px-4 py-2 text-xl font-semibold text-white">Home</h2>
        </div>

   </div>



   <div className="bg-white h-screen col-end-6 col-span-1 ">
   <Acountbar/>
   </div>
    
    </div> 

  </ >
  );
}
