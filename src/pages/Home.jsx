import React from "react";

function Home()
{

  function Category(e)
  {
    e.preventDefault();
    let category = document.querySelector("#Category");
    category.style.display = "inline";
  }

  function addCategory(e)
  {
    e.preventDefault();

    //hide Category form
    let category = document.querySelector("#Category");
    category.style.display = "none";
    
    //Shows the created Category
    let newCat = document.querySelector("#addCategory");
    newCat.style.display = "inline";

    
  }

    return(
        <>
          <div>
            <button onClick={Category} type="submit" className="bg-teal-500 hover:bg-teal-600 text-white flex font-bold py-2 px-4 rounded">Add Category
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=""
              >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>

          <div className="hidden" id="Category">
          <hr className="w-full mt-6 mb-6 bg-teal-500"/>
            <form>
              <div className="flex justify-start gap-2">
                <label className=" text-white m-2 text-xl">Category Name :</label>
                <input type="text" name="categoryName" placeholder="Category Name" className="rounded"/>
                <button className="bg-teal-500 hover:bg-teal-600 text-white flex font-bold py-2 px-4 rounded" type="submit" onClick={addCategory}>Add</button>
              </div>
            </form>
          </div>


          <div className="hidden " id="addCategory">
          <hr className="w-full mt-6 mb-6 bg-teal-500"/>
            <div className="bg-teal-200 w-1/3 h-1/3 rounded flex justify-between text-black text-xl">
              <h1 className="text-teal-900">Daily Expenses</h1>
              <button className="w-38 h-16 bg-teal-500 hover:bg-teal-600 text-white font-bold p-4 rounded" onClick={addCategory}>Add Item</button>
            </div>
          </div>
        </>
    )
}

export default Home