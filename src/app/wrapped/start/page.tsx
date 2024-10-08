"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Space } from "antd";

export default function Wrapped() {
  const [userId, setUserId] = useState(""); // Store the userId in a state

  // Get the userId from localStorage when the component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserId = localStorage.getItem("bctUserId") || "";
      setUserId(storedUserId);
    }
  }, []);

  const searchParams = useSearchParams();
  const season = searchParams.get("season");
  const teamName = "carpe diem";
  let colour = "";
  switch (season) {
    case "6":
      colour = "#ff9100";
      break;
    case "7":
      colour = "#9900ff";
      break;
    default:
      colour = "";
      console.log(
        "BCT theme colour could not be derived from season URL variable.",
      );
  }

  function startWrapped() {
    console.log("Starting Wrapped");
  }

  return (
    <div className="text-base grid justify-items-center m-10">
      <h1 className="m-5 mt-2 text-4xl">BCT Wrapped</h1>
      <h2 className="text-2xl">Season {season}</h2>
      <div className="m-5 flex flex-col items-center justify-center space-y-6">
        <Avatar size={128} className="" icon={<UserOutlined />} />
        <p className="text-xl">
          {userId ? `${userId}` : "userId"} -
          {teamName ? ` ${teamName}` : "teamName"}
        </p>
        <Button
          type="primary"
          size="large"
          style={{
            backgroundColor: colour,
          }}
          onClick={startWrapped}
        >
          GET YOUR WRAPPED!
        </Button>
      </div>
    </div>
  );
}
