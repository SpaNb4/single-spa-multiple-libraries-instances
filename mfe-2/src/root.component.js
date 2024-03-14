// MFE 2 - Component
import React from 'react';
import { Provider } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { increment, decrement } from './store'; // Import actions
import { store, persistor } from './store'; // Import Redux store

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default function MFE1() {
  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
        <div>
          <h1>MFE 2</h1>
          <Counter />
        </div>
      </PersistGate>
    </Provider>
  );
}
