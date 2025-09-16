// windowsFlutterDriver.ts
import { WindowsDriver } from 'appium-windows-driver';
import type { AppiumFlutterDriver } from './driver';

export async function startWindowsSession(this: AppiumFlutterDriver, ...args: any[]): Promise<WindowsDriver> {
    this.log.info(`Starting windows session`);
    const windowsdriver = new WindowsDriver();
    await windowsdriver.createSession(...args);
    return windowsdriver;
  }