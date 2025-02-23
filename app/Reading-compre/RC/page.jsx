"use client";

import React, { useEffect, useState } from "react";
import RCBlog from "@/components/chat/RC/RCBlog";
import FETCHDATA from "@/module/fetchdata";

const page = () => {
  const [data, setdata] = useState([]);
  const [More, SetMore] = useState(10);

  useEffect(() => {
    async function data() {
      const res = await FETCHDATA("RC");
      setdata(res);
    }
    data();
  }, []);

  function add() {
    if (data.length > More) {
      SetMore(More + 5);
    } else {
      return;
    }
  }

  return (
    <div className="flex flex-col">
      <h1 className=" text-center w-full text-4xl fixed  bg-green-500 text-white p-2">
        {" "}
        RC
      </h1>

      <div className="flex flex-wrap justify-betbeen items-center w-full mt-10">
        {data.slice(0, More).map((item, index) => (
          <RCBlog
            title={item.Title}
            link={`/Reading-compre/RC/${item.Slug}`}
            Id={index + 1}
          />
        ))}
      </div>

      {data ? (
        <button
          className="bg-green-500 p-1 rounded-md mb-5 text-white w-1/2 ml-[25%]"
          onClick={add}
        >
          More
        </button>
      ) : (
        "Loading..."
      )}
    </div>
  );
};
export default page;
