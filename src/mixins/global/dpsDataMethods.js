export default {
	methods: {
		formatStringAsDps(value) {
			if (!value) return value;
			let exponent = 0;
			let decimalValue = Number(value);
			let rounded = 0;
			let suffix = "";
			while (Math.abs(rounded = Math.round(decimalValue)) >= 1000) {
				decimalValue /= 10;
				exponent++;
			}
			while (exponent % 3 != 0) {
				rounded *= 0.1;
				exponent++;
			}

			switch (exponent) {
			case 0:
				suffix = "";
				break;
			case 3:
				suffix = "k";
				break;
			case 6:
				suffix = "M";
				break;
			case 9:
				suffix = "B";
				break;
			default:
				suffix = `E+${exponent}`;
				break;
			}

			return `${rounded.toFixed(2)}${suffix}/s`;
		},
		formatStringAsTimeSpan(value) {
			//if (!value) return value;
			let seconds = Number(value);

			const mins = Math.floor(seconds / 60);
			const secs = mins > 0 ? (seconds - (mins * 60)) : seconds; 

			return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
		},
		formatStringLowerCase(value) {
			return value.toLowerCase();
		},
		formatSecsToTimestamp(value) {
			return value * 1000;
		},
		formatStringAsDamage(value) {
			if (!value) return value;
			let exponent = 0;
			let decimalValue = Number(value);
			let rounded = 0;
			let suffix = "";
			while (Math.abs(rounded = Math.round(decimalValue)) >= 1000) {
				decimalValue /= 10;
				exponent++;
			}
			while (exponent % 3 != 0) {
				rounded *= 0.1;
				exponent++;
			}

			switch (exponent) {
			case 0:
				suffix = "";
				break;
			case 3:
				suffix = "k";
				break;
			case 6:
				suffix = "M";
				break;
			case 9:
				suffix = "B";
				break;
			default:
				suffix = `E+${exponent}`;
				break;
			}

			return `${rounded.toFixed(2)}${suffix}`;
		},
		getHPM(hits, duration) {
			return (hits*60/ duration).toFixed(2);
		}
	},
};