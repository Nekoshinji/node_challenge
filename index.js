import cowsay from "cowsay";
import "dotenv/config";
const NAME = process.env.NAME;
const CAMPUS = process.env.CAMPUS;

console.log(
	cowsay.say({
		text: NAME + " " + CAMPUS,
	}),
);
