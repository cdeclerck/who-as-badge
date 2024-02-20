// https://nuxt.com/docs/api/configuration/nuxt-config
const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;
export default defineNuxtConfig({
  experimental: {
    payloadExtraction: false,
  },
  nitro: {
    preset: 'github-pages',
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
          sanitizeFileName(name) {
            const match = DRIVE_LETTER_REGEX.exec(name);
            const driveLetter = match ? match[0] : "";
            return (
              driveLetter +
              name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "")
            );
          },
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      GITHUB_AUTH: process.env.AUTH,
    },
  },
})
