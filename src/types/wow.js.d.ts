// src/types/wow.js.d.ts
// declare module "wowjs" {
//   interface WOWOptions {
//     boxClass?: string;
//     animateClass?: string;
//     offset?: number;
//     mobile?: boolean;
//     live?: boolean;
//   }

//   class WOW {
//     constructor(options?: WOWOptions);
//     init(): void;
//   }

//   export default WOW;
// }
declare module "wow.js" {
  class WOW {
    constructor(options?: {
      boxClass?: string;
      animateClass?: string;
      offset?: number;
      mobile?: boolean;
      live?: boolean;
      callback?: (box: HTMLElement) => void;
      scrollContainer?: HTMLElement | null;
    });
    init(): void;
    sync(): void;
  }

  export default WOW;
}
