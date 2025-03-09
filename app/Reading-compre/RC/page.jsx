"use client";

import React, { useEffect, useState } from "react";
import RCBlog from "@/components/chat/RC/RCBlog";
import FETCHDATA from "@/module/fetchdata";
import RCPassageList from "@/components/chat/RC/Rcard";
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
      <RCPassageList passages={data}  />
    </div>
  );
};
export default page;
