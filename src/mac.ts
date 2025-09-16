import { Mac2Driver } from "appium-mac2-driver";
import type { AppiumFlutterDriver } from "./driver";

export async function startMacSession(this:AppiumFlutterDriver, ...args:any[]) {
    this.log.info(`Starting Mac session`);
    const macdriver = new Mac2Driver();
    await macdriver.createSession(...args);
    return macdriver;
}