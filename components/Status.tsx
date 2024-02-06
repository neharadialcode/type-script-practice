import React from "react";

type statusProps = {
  status: "loading" | "success" | "error";
};
const Status = (props: statusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loading";
  } else if (props.status === "success") {
    message = "work done properly";
  }
  return <div>Status</div>;
};

export default Status;
