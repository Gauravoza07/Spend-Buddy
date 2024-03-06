import React from "react";

function Landing()
{
    return(
        <>
            {/* <div className="flex justify-between">
                <div><h1 className="text-3xl text-teal-500 m-4 mt-32 font-bold">Welcome, to Spend-Buddy</h1>
                <p className="text-white text-xl m-4 hover:animate-bounce">Make track of your expenses and bills.</p>
                </div>
                <div class="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
                    <img
                      class="bg-gray-50 h-"
                      src="https://plus.unsplash.com/premium_photo-1679079456783-5d862f755557?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ3fHxtYW4lMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                      alt=""
                    />
                </div>
            </div> */}

<div class="relative w-full bg-teal-700">
    <div class="mx-auto max-w-7xl lg:px-8">
      <div class="flex flex-col justify-center px-4 py-10 lg:px-6">
        <h1 class="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
          We really cares about your expenses.
        </h1>
        <p class="mt-8 max-w-3xl text-lg text-white">
         Make track of your necessary or unnecessary expenses and bill. You can track it with us easily.
        </p>
        
      </div>
      <div class="rounded-lg bg-gray-200 p-4">
        <img
          class="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[500px] lg:object-center"
          src="https://plus.unsplash.com/premium_photo-1679079456783-5d862f755557?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ3fHxtYW4lMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt=""
        />
      </div>
    </div>
  </div>
        </>
    )
}

export default Landing