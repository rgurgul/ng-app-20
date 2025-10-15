import { Signal, signal, WritableSignal } from '@angular/core';

export interface StateAction<T, K> {
  type?: T;
  payload: K;
}

export abstract class State<T> {
  private _state: WritableSignal<T>;

  protected constructor(initialState: T) {
    this._state = signal(initialState);
  }

  get state$(): Signal<T> {
    return this._state.asReadonly();
  }

  get value(): T {
    return this._state();
  }

  protected setState(nextState: T): void {
    this._state.set(nextState);
  }

  // only object
  protected setPartial<E extends Partial<T>>(state: E): void {
    this._state.set({ ...this.value, ...state });
  }

  abstract dispatch({ type, payload }: StateAction<unknown, unknown>): void;
}
