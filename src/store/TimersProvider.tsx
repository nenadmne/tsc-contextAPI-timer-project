import { ReactNode, useReducer } from "react";
import { TimersContextValue, TimersState } from "./timers-context";
import { TimersContext } from "./timers-context";

type TimersContextProviderProps = {
  children: ReactNode;
};

type Action = {
  type: "ADD_TIMER" | "START_TIMERS" | "STOP_TIMERS";
};

const timersReducer = (state: TimersState, action: Action): TimersState => {};

const TimersContextProvider = ({ children }: TimersContextProviderProps) => {
  const initialState: TimersState = {
    isRunning: true,
    timers: [],
  };
  const [TimersState, dispatch] = useReducer(timersReducer, initialState);
  const ctx: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer() {
      dispatch({ type: "ADD_TIMER" });
    },
    startTimers() {
      dispatch({ type: "START_TIMERS" });
    },
    stopTimers() {
      dispatch({ type: "STOP_TIMERS" });
    },
  };
  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
};

export default TimersContextProvider;
