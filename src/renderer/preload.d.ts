import { ElectronHandler } from '../main/preload';
import { ipcRenderer } from "electron";

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    electron: ElectronHandler;
  }
}

export {};
