import { register } from "node:module"

register("deepkit-node/loader", import.meta.url)

const yarnPnpOptions = /^--require (.*) --experimental-loader (.*)$/
const match = process.env.NODE_OPTIONS?.match(yarnPnpOptions)

if (match) {
    const pnpLoader = match[2]
    register(pnpLoader, import.meta.url)
}
