import { coinFlips } from "./modules/coin.mjs";
import minimist from "minimist";
import { countFlips } from "./modules/coin.mjs";

const args = minimist(process.argv.slice(2))
args["number"]
const number = args.number || 1

var flips = coinFlips(number);

    console.log(flips)
    console.log(countFlips(flips))