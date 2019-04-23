import * as path from "path";
import * as os from "os";
import * as zowe from "@brightside/core";
import { CliProfileManager } from "@brightside/imperative";

/*
 * Created this file to be a place where commonly used functions will be defined.
 * I noticed we have a lot of repetition of some common
 * functionality in many places.
 */
export async function getSession(profileName: string) {
    const zosmfProfile = await new CliProfileManager({
        profileRootDirectory: path.join(os.homedir(), ".zowe", "profiles"),
        type: "zosmf"
    }).load({name: profileName});
    return zowe.ZosmfSession.createBasicZosmfSession(zosmfProfile.profile);
}