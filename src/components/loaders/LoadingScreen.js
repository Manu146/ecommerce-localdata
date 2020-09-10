import React from "react";
import Spinner from "./Spinner";

export default function LoadingScreen() {
  return (
    <div className="absolute inset-0 w-screen h-screen bg-gray-400 bg-opacity-50 z-10">
      <Spinner></Spinner>
    </div>
  );
}
