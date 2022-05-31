import "@testing-library/jest-dom";

global.ResizeObserver = class ResizeObserver {
  public cb: any;
  constructor(cb: any) {
    this.cb = cb;
  }
  public observe() {
    this.cb([{ borderBoxSize: { inlineSize: 0, blockSize: 0 } }]);
  }
  public unobserve() {}
  public disconnect() {}
};
