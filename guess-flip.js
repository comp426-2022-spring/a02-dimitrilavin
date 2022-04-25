import { flipACoin } from "./modules/coin.mjs";
import minimist from "minimist";

const args = minimist(process.argv.slice(2))
args["call"]
const call = args.call
var flip = flipACoin(call)

if (call == null){
    console.log("Error: no input")
} else if(call != "heads" && call != "tails") {
    console.log('Usage: node guess-flip --call=[heads|tails]')
} else {
    console.log(flip)
}