import NodeModulesPolyfills from '@esbuild-plugins/node-modules-polyfill';
import globalsPolyfills from '@esbuild-plugins/node-globals-polyfill';
import {build} from 'esbuild';

async function buildScript(){
	await build({
		entryPoints: ['./src/index.js'],
		outfile: 'dist/index.mjs',
		format: 'esm',
		plugins: [
			NodeModulesPolyfills.default(),
			globalsPolyfills.default({
				buffer: true,
			}),
		],
	});
}
buildScript();