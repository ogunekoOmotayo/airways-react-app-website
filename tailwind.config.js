/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			height: {
				"78vh": "78vh",
			},

			backgroundImage: {
				aeroImage: "url('././components/image/aircraft.jpg')",
			},

			colors: {
				lightBlack: "rgba(0, 0, 0, 0.5) ",
				lightbluuBg: "#304149",
				deeppink: "deeppink",
				tomatolike: "#dd5024",
			},
			fontFamily: {
				Poppins: "Poppins",
			},
		},
	},
	plugins: [],
};
