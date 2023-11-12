import { ReactNode, useReducer } from "react";
import { Timer, TimersContextValue, TimersState } from "./timers-context";
import { TimersContext } from "./timers-context";

type TimersContextProviderProps = {
  children: ReactNode;
};

type StartAction = {
  type: "START_TIMERS";
};

type StopAction = {
  type: "STOP_TIMERS";
};

type AddAction = {
  type: "ADD_TIMER";
  payload: Timer;
};

type Action = StartAction | StopAction | AddAction;

const timersReducer = (state: TimersState, action: Action): TimersState => {
  if (action.type === "START_TIMERS") {
    return {
      ...state,
      isRunning: true,
    };
  }
  if (action.type === "STOP_TIMERS") {
    return {
      ...state,
      isRunning: false,
    };
  }
  if (action.type === "ADD_TIMER") {
    return {
      ...state,
      timers: [
        ...state.timers,
        {
          name: action.payload.name,
          duration: action.payload.duration,
        },
      ],
    };
  }

  return state;
};

const TimersContextProvider = ({ children }: TimersContextProviderProps) => {
  const initialState: TimersState = {
    isRunning: true,
    timers: [],
  };
  const [timersState, dispatch] = useReducer(timersReducer, initialState);
  const ctx: TimersContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timerData) {
      dispatch({ type: "ADD_TIMER", payload: timerData });
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
