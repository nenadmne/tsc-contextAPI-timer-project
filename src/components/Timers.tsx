import { useTimersContext } from "../store/timers-context";
import Timer from "./Timer";

export default function Timers() {
  const { timers } = useTimersContext();
  return (
    <ul>
      {timers.map((item) => (
        <li key={item.name}>
          <Timer name={item.name} duration={item.duration} />
        </li>
      ))}
    </ul>
  );
}
