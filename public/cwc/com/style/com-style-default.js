import { html } from '../../../node_modules/custom-web-component/index.js';

const ComStyleDefault = html`
	<style>
		/* * { font-family: 'Roboto', sans-serif; } */

		.card {
			margin: 24px;
			padding: 16px;
			color: #757575;
			border-radius: 5px;
			background-color: #fff;
			box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
		}

		.circle {
			display: inline-block;
			width: 64px;
			height: 64px;
			text-align: center;
			color: #555;
			border-radius: 50%;
			background: #ddd;
			font-size: 30px;
			line-height: 64px;
		}

		h1 {
			margin: 16px 0;
			color: #212121;
			font-size: 22px;
		}
		
		.block-title {
			margin: 0;
			background-color: #555;
			color: white;
			padding: 2px 6px;
		}

		.icon {
			width: 24px;
			height: 24px;
			fill: #444;
			padding: 2px;
			box-sizing: border-box;
			vertical-align: middle;
			display: inline-block;
		}

		.flex-row { display: flex; flex-flow: row wrap; }
		.flex-col { padding: 5px; box-sizing: border-box; flex: 1 1 250px; }
		.text-center { text-align: center; }

		[hidden] { display: none !important; }

		[color="white"] { color: white; }
		[color="grey"] { color: grey; }
		[color="black"] { color: black; }
		[color="pink"] { color: pink; }
		[color="red"] { color: red; }
		[color="orange"] { color: orange; }
		[color="purple"] { color: purple; }
		[color="blue"] { color: blue; }
		[color="aqua"] { color: aqua; }
		[color="green"] { color: green; }
		[color="yellow"] { color: yellow; }
		[color="transparent"] { color: transparent; }

		paper-slider[color="white"] { --paper-slider-font-color: black; --paper-slider-pin-color: white; --paper-progress-active-color: white; --paper-slider-knob-color: white; }
		paper-slider[color="grey"] { --paper-slider-font-color: white; --paper-slider-pin-color: grey; --paper-progress-active-color: grey; --paper-slider-knob-color: grey; }
		paper-slider[color="black"] { --paper-slider-font-color: white; --paper-slider-pin-color: black; --paper-progress-active-color: black; --paper-slider-knob-color: black; }
		paper-slider[color="pink"] { --paper-slider-font-color: black; --paper-slider-pin-color: pink; --paper-progress-active-color: pink; --paper-slider-knob-color: pink; }
		paper-slider[color="red"] { --paper-slider-font-color: white; --paper-slider-pin-color: red; --paper-progress-active-color: red; --paper-slider-knob-color: red; }
		paper-slider[color="orange"] { --paper-slider-font-color: white; --paper-slider-pin-color: orange; --paper-progress-active-color: orange; --paper-slider-knob-color: orange; }
		paper-slider[color="purple"] { --paper-slider-font-color: white; --paper-slider-pin-color: purple; --paper-progress-active-color: purple; --paper-slider-knob-color: purple; }
		paper-slider[color="blue"] { --paper-slider-font-color: white; --paper-slider-pin-color: blue; --paper-progress-active-color: blue; --paper-slider-knob-color: blue; }
		paper-slider[color="aqua"] { --paper-slider-font-color: black; --paper-slider-pin-color: aqua; --paper-progress-active-color: aqua; --paper-slider-knob-color: aqua; }
		paper-slider[color="green"] { --paper-slider-font-color: white; --paper-slider-pin-color: green; --paper-progress-active-color: green; --paper-slider-knob-color: green; }
		paper-slider[color="yellow"] { --paper-slider-font-color: black; --paper-slider-pin-color: yellow; --paper-progress-active-color: yellow; --paper-slider-knob-color: yellow; }
		paper-slider[color="transparent"] { --paper-slider-font-color: black; --paper-slider-pin-color: transparent; --paper-progress-active-color: transparent; --paper-slider-knob-color: transparent; }

		paper-button[color="white"] { color: black; background-color: white; }
		paper-button[color="grey"] { color: white; background-color: grey; }
		paper-button[color="black"] { color: white; background-color: black; }
		paper-button[color="pink"] { color: black; background-color: pink; }
		paper-button[color="red"] { color: white; background-color: red; }
		paper-button[color="orange"] { color: white; background-color: orange; }
		paper-button[color="purple"] { color: white; background-color: purple; }
		paper-button[color="blue"] { color: white; background-color: blue; }
		paper-button[color="aqua"] { color: black; background-color: aqua; }
		paper-button[color="green"] { color: white; background-color: green; }
		paper-button[color="yellow"] { color: black; background-color: yellow; }
		paper-button[color="transparent"] { color: black; background-color: transparent; }

		[background-color="white"] { background-color: white; }
		[background-color="grey"] { background-color: grey; }
		[background-color="black"] { background-color: black; }
		[background-color="pink"] { background-color: pink; }
		[background-color="red"] { background-color: red; }
		[background-color="orange"] { background-color: orange; }
		[background-color="purple"] { background-color: purple; }
		[background-color="blue"] { background-color: blue; }
		[background-color="aqua"] { background-color: aqua; }
		[background-color="green"] { background-color: green; }
		[background-color="yellow"] { background-color: yellow; }
		[background-color="transparent"] { background-color: transparent; }

		[primary-color="white"] { --primary-color: white; border-color: white !important; }
		[primary-color="grey"] { --primary-color: grey; border-color: grey !important; }
		[primary-color="black"] { --primary-color: black; border-color: black !important; }
		[primary-color="pink"] { --primary-color: pink; border-color: pink !important; }
		[primary-color="red"] { --primary-color: red; border-color: red !important; }
		[primary-color="orange"] { --primary-color: orange; border-color: orange !important; }
		[primary-color="purple"] { --primary-color: purple; border-color: purple !important; }
		[primary-color="blue"] { --primary-color: blue; border-color: blue !important; }
		[primary-color="aqua"] { --primary-color: aqua; border-color: aqua !important; }
		[primary-color="green"] { --primary-color: green; border-color: green !important; }
		[primary-color="yellow"] { --primary-color: yellow; border-color: yellow !important; }
		[primary-color="transparent"] { --primary-color: transparent; border-color: transparent !important; }

		[primary-text-color="white"] { --primary-text-color: white; }
		[primary-text-color="grey"] { --primary-text-color: grey; }
		[primary-text-color="black"] { --primary-text-color: black; }
		[primary-text-color="pink"] { --primary-text-color: pink; }
		[primary-text-color="red"] { --primary-text-color: red; }
		[primary-text-color="orange"] { --primary-text-color: orange; }
		[primary-text-color="purple"] { --primary-text-color: purple; }
		[primary-text-color="blue"] { --primary-text-color: blue; }
		[primary-text-color="aqua"] { --primary-text-color: aqua; }
		[primary-text-color="green"] { --primary-text-color: green; }
		[primary-text-color="yellow"] { --primary-text-color: yellow; }
		[primary-text-color="transparent"] { --primary-text-color: transparent; }

		[disabled] { opacity: 0.7; }

		[shock] { animation: shock 1s 1; animation-fill-mode: forwards; opacity: 0.1; }
		@keyframes shock { 100% { opacity: 1; }}

		.rotate-45 {
			-webkit-transform: rotate(45deg);
			-moz-transform: rotate(45deg);
			-o-transform: rotate(45deg);
			-ms-transform: rotate(45deg);
			transform: rotate(45deg);
		}

		.rotate-90 {
			-webkit-transform: rotate(90deg);
			-moz-transform: rotate(90deg);
			-o-transform: rotate(90deg);
			-ms-transform: rotate(90deg);
			transform: rotate(90deg);
		}

		@media (min-width: 1000px) {
			.row { display: block; white-space: nowrap; }
			[class^="col-"] { display: inline-block; white-space: initial; padding: 5px; box-sizing: border-box; vertical-align: top; }
			.col-5 { width: 5%; }
			.col-10 { width: 10%; }
			.col-15 { width: 15%; }
			.col-20 { width: 20%; }
			.col-25, .col-1-quarter { width: 25%; }
			.col-30 { width: 30%; }
			.col-1-third { width: 33.33%; }
			.col-35 { width: 35%; }
			.col-40 { width: 40%; }
			.col-45 { width: 45%; }
			.col-50, .col-1-half { width: 50%; }
			.col-55 { width: 55%; }
			.col-60 { width: 60%; }
			.col-65 { width: 65%; }
			.col-2-thirds { width: 66.66%; }
			.col-70 { width: 70%; }
			.col-75, col-3-quarters { width: 75%; }
			.col-80 { width: 80%; }
			.col-85 { width: 85%; }
			.col-90 { width: 90%; }
			.col-95 { width: 95%; }
			.col-100 { width: 100%; }
		}

		paper-item { white-space: nowrap; }
		paper-dropdown-menu { width: 100%; }

		table {
			border: 1px solid #ccc;
			border-spacing: 0px;
			border-collapse: collapse;
		}

		table thead tr th, table tbody tr td {
			padding: 5px;
			border: 1px solid #ccc;
		}

		table tbody tr:nth-of-type(odd) {
			background-color: #f4f4f4;
		}

		[pulse] { opacity: 0.5; animation: pulse 1.5s infinite; }

		@keyframes pulse {
			0% { transform: scale(0.95); }
			5% { transform: scale(1.1); }
			39% { transform: scale(0.85); }
			45% { transform: scale(1); }
			60% { transform: scale(0.95); }
			100% { transform: scale(0.9); }
		}
	</style>
`;

export default ComStyleDefault;