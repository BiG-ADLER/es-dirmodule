import { dirname } from "path"
import { fileURLToPath } from "url"

/**
 * @param url type: String, Please put directory url here
 * @returns __dirname format from CommonJS into ESModule
 * @description Return Directory name of the current package folder
 * @copyright Shadow Tech Team (STT)
 * @author BiG ADLER (Shadow Tech Team - STT)
 * @type Return Function
 * @readonly
 */
export default function getDirectoryName(url) {
    const __filename = fileURLToPath(String(url))
    const __dirname = dirname(String(__filename))

    return String(__dirname)
}