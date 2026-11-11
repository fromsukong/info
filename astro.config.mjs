import {defineConfig} from 'astro/config';

export default defineConfig({
  site: 'https://fromsukong.com',
  // Dev only: lets other tailnet devices open `astro dev --host` by MagicDNS
  // name (Vite blocks unknown Host headers). Raw IPs always work.
  server: { host: true },
  vite: {
    server: { allowedHosts: ['.ts.net', 'homeserver1'] },
  },
});
