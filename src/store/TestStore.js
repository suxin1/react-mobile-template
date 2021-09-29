import { createContext } from 'react';
import { makeAutoObservable } from 'mobx';

class Timer {
  secondsPassed = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increaseTimer() {
    this.secondsPassed += 1;
  }
}

const myTimer = new Timer();
export const TimerContext = createContext(myTimer);

setInterval(() => {
  myTimer.increaseTimer();
}, 1000);

export default myTimer;
