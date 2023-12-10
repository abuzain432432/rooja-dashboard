import { cleanup, render } from '@testing-library/react';
import { afterEach } from 'vitest';
import type { RenderOptions } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import type { PreloadedState } from '@reduxjs/toolkit';
import type { AppStore, RootState } from '../src/store/store.ts';
import { setupStore } from '../src/store/store.ts';

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

interface ExtendedRenderOptions
  extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

function customRender(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({
    children,
  }: PropsWithChildren<unknown>): JSX.Element {
    return (
      <Provider store={store}>
        <MemoryRouter>{children}</MemoryRouter>
      </Provider>
    );
  }
  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render };
