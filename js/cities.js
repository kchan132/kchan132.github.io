// Array of the top 100 cities by population and capital city of each province
// https://simplemaps.com/data/canada-cities

window.cities = [
    {
        name: "Toronto",
        province: "ON",
        postal: ["M5T", "M5V", "M5P", "M5S", "M5R", "M5E", "M5G", "M5A", "M5C", "M5B", "M5M", "M5N", "M5H", "M5J", "M4X", "M4Y", "M4R", "M4S", "M4P", "M4V", "M4W", "M4T", "M4J", "M4K", "M4H", "M4N", "M4L", "M4M", "M4B", "M4C", "M4A", "M4G", "M4E", "M3N", "M3M", "M3L", "M3K", "M3J", "M3H", "M3C", "M3B", "M3A", "M2P", "M2R", "M2L", "M2M", "M2N", "M2H", "M2J", "M2K", "M1C", "M1B", "M1E", "M1G", "M1H", "M1K", "M1J", "M1M", "M1L", "M1N", "M1P", "M1S", "M1R", "M1T", "M1W", "M1V", "M1X", "M9P", "M9R", "M9W", "M9V", "M9M", "M9L", "M9N", "M9A", "M9C", "M9B", "M6P", "M6R", "M6S", "M6A", "M6B", "M6C", "M6E", "M6G", "M6H", "M6J", "M6K", "M6L", "M6M", "M6N", "M8Z", "M8X", "M8Y", "M8V", "M8W"]
    },

    {
        name: "Montréal",
        province: "QC",
        postal: ["H1X", "H1Y", "H1Z", "H1P", "H1R", "H1S", "H1T", "H1V", "H1W", "H1H", "H1J", "H1K", "H1L", "H1M", "H1N", "H1A", "H1B", "H1C", "H1E", "H1G", "H2Y", "H2X", "H2Z", "H2T", "H2W", "H2V", "H2P", "H2S", "H2R", "H2M", "H2L", "H2N", "H2H", "H2K", "H2J", "H2E", "H2G", "H2A", "H2C", "H2B", "H3B", "H3C", "H3A", "H3G", "H3E", "H3J", "H3K", "H3H", "H3N", "H3L", "H3M", "H3R", "H3S", "H3V", "H3W", "H3T", "H3X", "H4G", "H4E", "H4C", "H4B", "H4A", "H4N", "H4M", "H4L", "H4K", "H4J", "H4H", "H4V", "H4S", "H4R", "H4P", "H8N", "H8S", "H8R", "H8P", "H8T", "H8Z", "H8Y", "H9A", "H9C", "H9E", "H9H", "H9J", "H9K"]
    },

    {
        name: "Vancouver",
        province: "BC",
        postal: ["V6Z", "V6S", "V6R", "V6P", "V6N", "V6M", "V6L", "V6K", "V6J", "V6H", "V6G", "V6E", "V6C", "V6B", "V6A", "V5S", "V5P", "V5Z", "V5N", "V5L", "V5M", "V5K", "V5V", "V5W", "V5T", "V5R", "V5X", "V5Y"]
    },

    {
        name: "Calgary",
        province: "AB",
        postal: ["T1Y", "T2H", "T2K", "T2J", "T2L", "T2N", "T2A", "T2C", "T2B", "T2E", "T2G", "T2Y", "T2X", "T2Z", "T2S", "T2R", "T2T", "T2V", "T3N", "T3L", "T3M", "T3J", "T3K", "T3H", "T3G", "T3E", "T3B", "T3C", "T3A", "T3R", "T3S", "T3P"]
    },

    {
        name: "Edmonton",
        province: "AB",
        postal: ["T5X", "T5Y", "T5Z", "T5P", "T5R", "T5S", "T5T", "T5V", "T5W", "T5H", "T5J", "T5K", "T5L", "T5M", "T5N", "T5A", "T5B", "T5C", "T5E", "T5G", "T6X", "T6T", "T6W", "T6V", "T6P", "T6S", "T6R", "T6M", "T6L", "T6H", "T6K", "T6J", "T6E", "T6G", "T6A", "T6C", "T6B"]
    },

    {
        name: "Ottawa",
        province: "ON",
        postal: ["K4P", "K4M", "K4A", "K4B", "K4C", "K7S", "K1S", "K1R", "K1P", "K1W", "K1V", "K1T", "K1Z", "K1Y", "K1X", "K1C", "K1B", "K1G", "K1E", "K1K", "K1J", "K1H", "K1N", "K1M", "K1L", "K0A", "K2R", "K2S", "K2P", "K2V", "K2W", "K2T", "K2J", "K2K", "K2H", "K2L", "K2M", "K2B", "K2C", "K2A", "K2G", "K2E"]
    },

    {
        name: "Mississauga",
        province: "ON",
        postal: ["L4W", "L4V", "L4T", "L4Z", "L4Y", "L4X", "L5R", "L5V", "L5W", "L5A", "L5B", "L5C", "L5E", "L5G", "L5H", "L5J", "L5K", "L5L", "L5M", "L5N"]
    },

    {
        name: "Winnipeg",
        province: "MB",
        postal: ["R2N", "R2M", "R2L", "R2K", "R2J", "R2H", "R2G", "R2C", "R2Y", "R2X", "R2W", "R2V", "R2R", "R2P", "R3L", "R3M", "R3N", "R3H", "R3J", "R3K", "R3E", "R3G", "R3A", "R3B", "R3X", "R3Y", "R3T", "R3V", "R3W", "R3P", "R3R", "R3S"]
    },

    {
        name: "Quebec City",
        province: "QC",
        postal: ["G1N", "G1M", "G1L", "G1K", "G1J", "G1H", "G1G", "G1E", "G1C", "G1B", "G1Y", "G1X", "G1W", "G1V", "G1T", "G1S", "G1R", "G1P", "G3E", "G3G", "G3K", "G3J", "G2G", "G2E", "G2B", "G2C", "G2A", "G2N", "G2L", "G2M", "G2J", "G2K"]
    },

    {
        name: "Hamilton",
        province: "ON",
        postal: ["L0R", "L0P", "L8W", "L8V", "L8T", "L8S", "L8R", "L8P", "L8G", "L8E", "L8N", "L8M", "L8L", "L8K", "L8J", "L8H", "L9G", "L9A", "L9B", "L9C", "L9H", "L9K", "N1R"]
    },

    {
        name: "Brampton",
        province: "ON",
        postal: ["L7A", "L6T", "L6W", "L6V", "L6P", "L6S", "L6R", "L6Y", "L6X", "L6Z"]
    },

    {
        name: "Surrey",
        province: "BC",
        postal: ["V4A", "V4N", "V4P", "V3R", "V3S", "V3T", "V3V", "V3W", "V3X", "V3Z"]
    },

    {
        name: "Kitchener",
        province: "ON",
        postal: ["N2K", "N2H", "N2N", "N2M", "N2C", "N2B", "N2A", "N2G", "N2E", "N2R", "N2P"]
    },

    {
        name: "Laval",
        province: "QC",
        postal: ["H7N", "H7L", "H7M", "H7J", "H7K", "H7H", "H7G", "H7E", "H7B", "H7C", "H7A", "H7X", "H7Y", "H7V", "H7W", "H7T", "H7R", "H7S", "H7P"
        ]
    },

    {
        name: "Halifax",
        province: "NS",
        postal: ["B2Z", "B2Y", "B2X", "B2W", "B2V", "B2T", "B2S", "B2R", "B3T", "B3V", "B3P", "B3R", "B3L", "B3M", "B3N", "B3H", "B3J", "B3K", "B3E", "B3G", "B3A", "B3B", "B0J", "B3Z", "B3S", "B4E", "B4G", "B4A", "B4C", "B4B", "B0N"
        ]
    },

    {
        name: "London",
        province: "ON",
        postal: ["N5Z", "N5X", "N5Y", "N5V", "N5W", "N6A", "N6P", "N6G", "N6E", "N6C", "N6N", "N6L", "N6J", "N6H", "N6B", "N6M", "N6K"
        ]
    },

    {
        name: "Victoria",
        province: "BC",
        postal: ["V8T", "V8W", "V8S", "V8R", "V9A", "V8V"]
    },

    {
        name: "Markham",
        province: "ON",
        postal: ["L3T", "L3R", "L3P", "L3S", "L6E", "L6G", "L6C", "L6B"]
    },

    {
        name: "St. Catharines",
        province: "ON",
        postal: ["L2M", "L2N", "L2P", "L2S", "L2R", "L2T", "L2W"]
    },

    {
        name: "Niagara Falls",
        province: "ON",
        postal: ["L2E", "L2G", "L2H", "L2J", "L3B"]
    },

    {
        name: "Vaughan",
        province: "ON",
        postal: ["L0J", "L4K", "L4J", "L4H", "L4L", "L6A"]
    },

    {
        name: "Gatineau",
        province: "QC",
        postal: ["J8P", "J8R", "J8T", "J8Y", "J8X", "J8Z", "J8M", "J9J", "J9H", "J9A"]
    },

    {
        name: "Windsor",
        province: "ON",
        postal: ["N8T", "N8W", "N8P", "N8S", "N8R", "N8Y", "N8X", "N9J", "N9B", "N9C", "N9A", "N9G", "N9E", "N0R"]
    },

    {
        name: "Saskatoon",
        province: "SK",
        postal: ["S7H", "S7K", "S7J", "S7M", "S7L", "S7N", "S7S", "S7R", "S7W", "S7V"]
    },

    {
        name: "Longueuil",
        province: "QC",
        postal: ["J4T", "J4V", "J4P", "J4R", "J4M", "J4L", "J4N", "J4H", "J4K", "J4J", "J4G", "J3Y", "J3Z"]
    },

    {
        name: "Burnaby",
        province: "BC",
        postal: ["V5B", "V5G", "V5E", "V5C", "V5J", "V5H", "V5A", "V3J", "V3N"]
    },

    {
        name: "Regina",
        province: "SK",
        postal: ["S4T", "S4V", "S4W", "S4R", "S4S", "S4X", "S4Y", "S4Z"]
    },

    {
        name: "Richmond",
        province: "BC",
        postal: ["V6Y", "V6X", "V6W", "V6V", "V7E", "V7A", "V7B", "V7C"]
    },

    {
        name: "Richmond Hill",
        province: "ON",
        postal: ["L4S", "L4C", "L4B", "L4E"]
    },

    {
        name: "Oakville",
        province: "ON",
        postal: ["L6M", "L6L", "L6H", "L6K", "L6J"]
    },

    {
        name: "Burlington",
        province: "ON",
        postal: ["L7R", "L7S", "L7P", "L7T", "L7N", "L7L", "L7M"]
    },

    {
        name: "Barrie",
        province: "ON",
        postal: ["L9J", "L4N", "L4M"]
    },

    {
        name: "Oshawa",
        province: "ON",
        postal: ["L1L", "L1H", "L1J", "L1K", "L1G"]
    },

    {
        name: "Sherbrooke",
        province: "QC",
        postal: ["J1N", "J1L", "J1M", "J1J", "J1K", "J1H", "J1G", "J1E", "J1C", "J1R"]
    },

    {
        name: "Saguenay",
        province: "QC",
        postal: ["G8A", "G7N", "G7H", "G7K", "G7T", "G7Z", "G7G", "G7B", "G7J", "G7P", "G7S", "G7Y", "G7X"]
    },

    {
        name: "Lévis",
        province: "QC",
        postal: ["G7A", "G6J", "G6K", "G6C", "G6Z", "G6X", "G6Y", "G6V", "G6W"]
    },

    {
        name: "Kelowna",
        province: "BC",
        postal: ["V1X", "V1Y", "V1P", "V1W", "V1V"]
    },

    {
        name: "Abbotsford",
        province: "BC",
        postal: ["V4X", "V2S", "V2T", "V3G"]
    },

    {
        name: "Coquitlam",
        province: "BC",
        postal: ["V3B", "V3C", "V3E", "V3J", "V3K"]
    },

    {
        name: "Trois-Rivières",
        province: "QC",
        postal: ["G9C", "G9B", "G9A", "G8T", "G8V", "G8W", "G8Y", "G8Z"
        ]
    },

    {
        name: "Guelph",
        province: "ON",
        postal: ["N1C", "N1G", "N1E", "N1K", "N1H", "N1L"]
    },

    {
        name: "Cambridge",
        province: "ON",
        postal: ["N3H", "N3C", "N3E", "N1R", "N1S", "N1P", "N1T"]
    },

    {
        name: "Whitby",
        province: "ON",
        postal: ["L0B", "L1P", "L1R", "L1M", "L1N"]
    },

    {
        name: "Ajax",
        province: "ON",
        postal: ["L1Z", "L1T", "L1S"]
    },

    {
        name: "Langley",
        province: "BC",
        postal: ["V1M", "V4W", "V2Z", "V2Y", "V3A"]
    },

    {
        name: "Saanich",
        province: "BC",
        postal: ["V8N", "V8X", "V8Z", "V8P", "V8R", "V9A", "V9E", "V8Y"]
    },

    {
        name: "Terrebonne",
        province: "QC",
        postal: ["J6Y", "J6V", "J7M", "J6X", "J6W"]
    },

    {
        name: "Milton",
        province: "ON",
        postal: ["L7J", "L0P", "L9T"]
    },

    {
        name: "St. John's",
        province: "NL",
        postal: ["A1H", "A1S", "A1E", "A1G", "A1A", "A1C", "A1B"]
    },

    {
        name: "Moncton",
        province: "NB",
        postal: ["E1H", "E1A", "E1C", "E1E", "E1G"]
    },

    {
        name: "Thunder Bay",
        province: "ON",
        postal: ["P7G", "P7E", "P7B", "P7C", "P7J", "P7K"]
    },

    {
        name: "Dieppe",
        province: "NB",
        postal: ["E1A"]
    },

    {
        name: "Waterloo",
        province: "ON",
        postal: ["N2K", "N2J", "N2L", "N2V", "N2T"]
    },

    {
        name: "Delta",
        province: "BC",
        postal: ["V4C", "V4E", "V4G", "V4K", "V4M", "V4L"]
    },

    {
        name: "Chatham",
        province: "ON",
        postal: ["N8A", "N0P", "N7L", "N7M"]
    },

    {
        name: "Red Deer",
        province: "AB",
        postal: ["T4R", "T4P", "T4N"]
    },

    {
        name: "Kamloops",
        province: "BC",
        postal: ["V1S", "V2C", "V2B", "V2E"]
    },

    {
        name: "Brantford",
        province: "ON",
        postal: ["N3P", "N3R", "N3S", "N3T", "N3V"]
    },

    {
        name: "Cape Breton",
        province: "NS",
        postal: ["B2A", "B1S", "B1V", "B1G", "B1E", "B1B", "B1C", "B1A", "B1N", "B1L", "B1M", "B1J", "B1H", "B1T", "B1R", "B1P", "B1Y", "B1K"]
    },

    {
        name: "Lethbridge",
        province: "AB",
        postal: ["T1H", "T1J", "T1K"]
    },

    {
        name: "Saint-Jean-sur-Richelieu",
        province: "QC",
        postal: ["J2W", "J2Y", "J2X", "J3A", "J3B"]
    },

    {
        name: "Clarington",
        province: "ON",
        postal: ["L0B", "L0A", "L1E", "L1B", "L1C"]
    },

    {
        name: "Pickering",
        province: "ON",
        postal: ["L0H", "L0B", "L1X", "L1Y", "L1V", "L1W"]
    },

    {
        name: "Nanaimo",
        province: "BC",
        postal: ["V9R", "V9S", "V9V", "V9T"]
    },

    {
        name: "Sudbury",
        province: "ON",
        postal: ["P0M", "P3N", "P3L", "P3B", "P3C", "P3A", "P3G", "P3Y", "P3P"]
    },

    {
        name: "North Vancouver",
        province: "BC",
        postal: ["V7P", "V7R", "V7L", "V7N", "V7H", "V7J", "V7K", "V7G"]
    },

    {
        name: "Brossard",
        province: "QC",
        postal: ["J4Y", "J4X", "J4Z", "J4W"]
    },

    {
        name: "Repentigny",
        province: "QC",
        postal: ["J6A", "J5Z", "J5Y"]
    },

    {
        name: "Newmarket",
        province: "ON",
        postal: ["L3X", "L3Y"]
    },

    {
        name: "Chilliwack",
        province: "BC",
        postal: ["V4Z", "V2R", "V2P"]
    },

    {
        name: "White Rock",
        province: "BC",
        postal: ["V4B"]
    },

    {
        name: "Maple Ridge",
        province: "BC",
        postal: ["V4R", "V2W", "V2X"]
    },

    {
        name: "Peterborough",
        province: "ON",
        postal: ["K9K", "K9J", "K9H", "K9L"]
    },

    {
        name: "Kawartha Lakes",
        province: "ON",
        postal: ["L0K", "L0B", "L0A", "K9V", "K0M"]
    },

    {
        name: "Prince George",
        province: "BC",
        postal: ["V2K", "V2N", "V2M", "V2L"]
    },

    {
        name: "Sault Ste. Marie",
        province: "ON",
        postal: ["P6A", "P6C", "P6B"]
    },

    {
        name: "Sarnia",
        province: "ON",
        postal: ["N7V", "N7W", "N7S", "N7T", "N7X"]
    },

    {
        name: "Wood Buffalo",
        province: "AB",
        postal: ["T9H", "T9J", "T9K", "T0P"]
    },

    {
        name: "New Westminster",
        province: "BC",
        postal: ["V3L", "V3M"]
    },

    {
        name: "Châteauguay",
        province: "QC",
        postal: ["J6K", "J6J"]
    },

    {
        name: "Saint-Jérôme",
        province: "QC",
        postal: ["J7Y", "J7Z", "J5L"]
    },

    {
        name: "Drummondville",
        province: "QC",
        postal: ["J2E", "J2C", "J2B", "J2A", "J1Z"]
    },

    {
        name: "Saint John",
        province: "NB",
        postal: ["E2P", "E2L", "E2M", "E2N", "E2H", "E2J", "E2K"]
    },

    {
        name: "Caledon",
        province: "ON",
        postal: ["L7K", "L7C", "L7E"]
    },

    {
        name: "St. Albert",
        province: "AB",
        postal: ["T8N"]
    },

    {
        name: "Granby",
        province: "QC",
        postal: ["J2G", "J2J", "J2H"]
    },

    {
        name: "Medicine Hat",
        province: "AB",
        postal: ["T1A", "T1B", "T1C"]
    },

    {
        name: "Grande Prairie",
        province: "AB",
        postal: ["T8V", "T8X", "T8W"]
    },

    {
        name: "St. Thomas",
        province: "ON",
        postal: ["N5R", "N5P"]
    },

    {
        name: "Airdrie",
        province: "AB",
        postal: ["T4B", "T4A"]
    },

    {
        name: "Halton Hills",
        province: "ON",
        postal: ["L7J", "L7G", "L0P", "L9T"]
    },

    {
        name: "Saint-Hyacinthe",
        province: "QC",
        postal: ["J2T", "J2S", "J2R"]
    },

    {
        name: "Lac-Brome",
        province: "QC",
        postal: ["J0E"]
    },

    {
        name: "Port Coquitlam",
        province: "BC",
        postal: ["V3B", "V3C"]
    },

    {
        name: "Fredericton",
        province: "NB",
        postal: ["E3G", "E3C", "E3B", "E3A"]
    },

    {
        name: "Blainville",
        province: "QC",
        postal: ["J7B", "J7C", "J7E"]
    },

    {
        name: "Aurora",
        province: "ON",
        postal: ["L4G"]
    },

    {
        name: "Welland",
        province: "ON",
        postal: ["L3B", "L3C"]
    },

    {
        name: "North Bay",
        province: "ON",
        postal: ["P1A", "P1B", "P1C"]
    },

    {
        name: "Beloeil",
        province: "QC",
        postal: ["J3G"]
    },

    {
        name: "Whitehorse",
        province: "YT",
        postal: ["Y1A"]
    },

    {
        name: "Iqaluit",
        province: "NU",
        postal: ["X0A"]
    },

    {
        name: "Charlottetown",
        province: "PE",
        postal: ["C1C", "C1A", "C1E"]
    },

    {
        name: "Yellowknife",
        province: "NT",
        postal: ["X1A"]
    },
];