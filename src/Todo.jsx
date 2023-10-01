import React from "react";
import "../src/Todo.css";
import { useState } from "react";

const Todo = () => {
  const [data, setData] = useState("");
  const [list, setList] = useState([]);


  function handlesubmit(e) {
    e.preventDefault(); // inbulit method to prenvent load form and prevent default nature
  if(data!==''){
    setList([...list, data]);
    // console.log(list); //Array of the data
    setData("");
    
  } 
  }

  //delete single item with the help of filter
   function del(i){

      const deleteitem=list.filter((elem,ind)=>{
        return ind!==i;
      });
      setList(deleteitem);
   }
   // Delete with splice method
  // function del(i) {
  //   let copytask = [...list];
  //   copytask.splice(i, 1);
  //   setList(copytask);
  // }

  //Remove allitem

  function remove() {
    setList([]);
  }

  return (
    <>
      <div className="container">
        {/* heading */}
        <h1> TODO List</h1>
        {/* Search Bar and Button   */}
        <form>
          <div className="input-group mb-3 mt-5 input-group-lg">
            <input
              type="text"
              className="form-control border-black"
              value={data}
              onChange={(e) => {
                // console.log(e.target.value)
                setData(e.target.value);
              }}
              placeholder="Enter New Task"
            />

            <button
              onClick={handlesubmit}
              className="btn btn-success"
              id="button"
            >
              Add Task
            </button>
          </div>
        </form>
        <hr className="mb-3 mt-4" />
        {/* Print Task */}
        <div className="show">
          {list.map((item, i) => {
            return (
              <div className="print" key={i}>
                <h3>{item}</h3>
                <button onClick={() => del(i)} className="btn btn-danger text-bold">
                  Delete
                </button>
              </div>
            );
          })}
        </div>
        {/* Remove All button */}
        <div className="remove">
          <button onClick={remove} className="btn btn-danger p-3 mt-3 fs-5 text-bold">
            Remove All
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
