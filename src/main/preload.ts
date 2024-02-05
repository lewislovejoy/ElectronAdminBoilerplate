// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels = 'ipc-example';

const electronHandler = {
  ipcRenderer: {
    sendMessage(channel: Channels, ...args: unknown[]) {
      ipcRenderer.send(channel, ...args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
};

contextBridge.exposeInMainWorld('electron', electronHandler);

window.addEventListener('message', ({ data }: { data: any }) => {
  console.log('Got a message - forward to ipcRenderer', data);
  if (
    data?.cmd === 'openDevTools' ||
    data?.cmd === 'login' ||
    data?.cmd === 'logout' ||
    data?.cmd === 'copyToClipboard'
  ) {
    ipcRenderer.send(data.cmd, data);
  }
});

export type ElectronHandler = typeof electronHandler;
