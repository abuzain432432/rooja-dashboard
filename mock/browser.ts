import { setupWorker } from 'msw/browser';
import { handlers } from './handler';
// import { beforeAll, afterEach, afterAll } from 'vitest';

export const worker = setupWorker(...handlers);
// Register the Service Worker and enable the mocking
beforeAll(async () => {
  await worker.start();
});

// Reset any request handlers that are declared as a part of the test
afterEach(() => worker.resetHandlers());

// Clean up once the tests are done
afterAll(() => worker.stop());
