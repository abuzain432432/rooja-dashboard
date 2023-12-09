import { setupWorker } from 'msw/browser';
import { handlers } from './handler';
// import { beforeAll, afterEach, afterAll } from 'vitest';

export const worker = setupWorker(...handlers);
// Register the Service Worker and enable the mocking

// beforeAll(async () => {
//   await worker.start();
// });

// afterEach(() => {
//   worker.restoreHandlers();
// });

// afterAll(() => {
//   worker.stop();
// });
