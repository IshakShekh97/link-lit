import { Loader } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="bg-background text-foreground flex items-center justify-center min-h-screen gap-3">
      <Loader className="animate-spin size-10" />
      <p className="text-5xl animate-pulse">Loading ...</p>
    </div>
  );
};

export default Loading;
