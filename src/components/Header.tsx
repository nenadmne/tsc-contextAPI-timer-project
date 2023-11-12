import { useTimersContext } from "../store/timers-context.tsx";
import Button from "./UI/Button.tsx";

export default function Header() {
  const timersCtx = useTimersContext();
  const { isRunning, stopTimers, startTimers } = timersCtx;

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button onClick={isRunning ? stopTimers : startTimers}>
        {isRunning ? "Stop Timers" : "Start Timers"}
      </Button>
    </header>
  );
}
