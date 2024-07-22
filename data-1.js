const sweets = [
	{
		"id": "1",
		"type": "donut",
		"name": "Cake",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "11", "type": "Regular" },
						{ "id": "12", "type": "Chocolate" },
						{ "id": "13", "type": "Blueberry" },
						{ "id": "14", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "111", "type": "None" },
				{ "id": "112", "type": "Glazed" },
				{ "id": "113", "type": "Sugar" },
				{ "id": "114", "type": "Powdered Sugar" },
				{ "id": "115", "type": "Chocolate with Sprinkles" },
				{ "id": "116", "type": "Chocolate" },
				{ "id": "117", "type": "Maple" }
			]
	},
	{
		"id": "2",
		"type": "donut",
		"name": "Raised",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "21", "type": "Regular" }
					]
			},
		"topping":
			[
				{ "id": "211", "type": "None" },
				{ "id": "212", "type": "Glazed" },
				{ "id": "215", "type": "Sugar" },
				{ "id": "213", "type": "Chocolate" },
				{ "id": "214", "type": "Maple" }
			]
	},
	{
		"id": "3",
		"type": "donut",
		"name": "Old Fashioned",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "31", "type": "Regular" },
						{ "id": "32", "type": "Chocolate" }
					]
			},
		"topping":
			[
				{ "id": "311", "type": "None" },
				{ "id": "312", "type": "Glazed" },
				{ "id": "313", "type": "Chocolate" },
				{ "id": "314", "type": "Maple" }
			]
	}
]

const colors = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
]

module.exports = {sweets, colors};