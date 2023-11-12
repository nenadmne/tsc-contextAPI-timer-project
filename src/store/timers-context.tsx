import { type ReactNode, createContext } from "react";

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};
const TimersContext = createContext<TimersContextValue | null>(null);

type TimersContextProviderProps = {
  children: ReactNode;
};
const TimersContextProvider = ({ children }: TimersContextProviderProps) => {
  const ctx: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer() {},
    startTimers() {},
    stopTimers() {},
  };
  return <TimersContext.Provider value={ctx}>{childen}</TimersContext.Provider>;
};

export default TimersContextProvider;
