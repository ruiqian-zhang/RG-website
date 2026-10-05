import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';

const require = createRequire(import.meta.url);
const packagePath = require.resolve('decap-server/package.json');
const { bin } = require(packagePath);
const entry = typeof bin === 'string' ? bin : bin['decap-server'];
const child = spawn(process.execPath, [resolve(dirname(packagePath), entry)], {
  stdio: 'inherit',
  env: { ...process.env, BIND_HOST: '127.0.0.1', PORT: '8081' },
});
child.on('error', (error) => {
  console.error(error.message);
  process.exitCode = 1;
});
child.on('exit', (code) => { process.exitCode = code ?? 1; });
for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => child.kill(signal));
}
