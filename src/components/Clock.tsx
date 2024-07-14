import { useState } from "react";
import { Icon } from "@iconify/react";

export function Clock() {
  let time = new Date().toLocaleTimeString();

  const [ctime, setTime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };
  setInterval(UpdateTime);

  return (
    <div className="flex items-center justify-end p-2">
      <Icon icon="clarity:clock-solid" className="text-seb-darkgreen2 mr-2" /> {ctime}
    </div>
  );
}
