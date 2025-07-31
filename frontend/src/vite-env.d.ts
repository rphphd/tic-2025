/// <reference types="vite/client" />
// vite-env.d.ts or any other .d.ts file
declare module '*.md' {
  const content: string;
  export default content;
}
