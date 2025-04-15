console.log("hello")
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
const currencies = {
    "AED": "United Arab Emirates Dirham",
    "AFN": "Afghan Afghani",
    "ALL": "Albanian Lek",
    "AMD": "Armenian Dram",
    "ANG": "NL Antillean Guilder",
    "AOA": "Angolan Kwanza",
    "ARS": "Argentine Peso",
    "AUD": "Australian Dollar",
    "AWG": "Aruban Florin",
    "AZN": "Azerbaijani Manat",
    "BAM": "Bosnia-Herzegovina Convertible Mark",
    "BBD": "Barbadian Dollar",
    "BDT": "Bangladeshi Taka",
    "BGN": "Bulgarian Lev",
    "BHD": "Bahraini Dinar",
    "BIF": "Burundian Franc",
    "BMD": "Bermudan Dollar",
    "BND": "Brunei Dollar",
    "BOB": "Bolivian Boliviano",
    "BRL": "Brazilian Real",
    "BSD": "Bahamian Dollar",
    "BTN": "Bhutanese Ngultrum",
    "BWP": "Botswanan Pula",
    "BYN": "Belarusian ruble",
    "BYR": "Belarusian Ruble",
    "BZD": "Belize Dollar",
    "CAD": "Canadian Dollar",
    "CDF": "Congolese Franc",
    "CHF": "Swiss Franc",
    "CLF": "Unidad de Fomento",
    "CLP": "Chilean Peso",
    "CNY": "Chinese Yuan",
    "COP": "Coombian Peso",
    "CRC": "Costa Rican Colón",
    "CUC": "Cuban Convertible Peso",
    "CUP": "Cuban Peso",
    "CVE": "Cape Verdean Escudo",
    "CZK": "Czech Republic Koruna",
    "DJF": "Djiboutian Franc",
    "DKK": "Danish Krone",
    "DOP": "Dominican Peso",
    "DZD": "Algerian Dinar",
    "EGP": "Egyptian Pound",
    "ERN": "Eritrean Nakfa",
    "ETB": "Ethiopian Birr",
    "EUR": "Euro",
    "FJD": "Fijian Dollar",
    "FKP": "Falkland Islands Pound",
    "GBP": "British Pound Sterling",
    "GEL": "Georgian Lari",
    "GGP": "Guernsey pound",
    "GHS": "Ghanaian Cedi",
    "GIP": "Gibraltar Pound",
    "GMD": "Gambian Dalasi",
    "GNF": "Guinean Franc",
    "GTQ": "Guatemalan Quetzal",
    "GYD": "Guyanaese Dollar",
    "HKD": "Hong Kong Dollar",
    "HNL": "Honduran Lempira",
    "HRK": "Croatian Kuna",
    "HTG": "Haitian Gourde",
    "HUF": "Hungarian Forint",
    "IDR": "Indonesian Rupiah",
    "ILS": "Israeli New Sheqel",
    "IMP": "Manx pound",
    "INR": "Indian Rupee",
    "IQD": "Iraqi Dinar",
    "IRR": "Iranian Rial",
    "ISK": "Icelandic Króna",
    "JEP": "Jersey pound",
    "JMD": "Jamaican Dollar",
    "JOD": "Jordanian Dinar",
    "JPY": "Japanese Yen",
    "KES": "Kenyan Shilling",
    "KGS": "Kyrgystani Som",
    "KHR": "Cambodian Riel",
    "KMF": "Comorian Franc",
    "KPW": "North Korean Won",
    "KRW": "South Korean Won",
    "KWD": "Kuwaiti Dinar",
    "KYD": "Cayman Islands Dollar",
    "KZT": "Kazakhstani Tenge",
    "LAK": "Laotian Kip",
    "LBP": "Lebanese Pound",
    "LKR": "Sri Lankan Rupee",
    "LRD": "Liberian Dollar",
    "LSL": "Lesotho Loti",
    "LTL": "Lithuanian Litas",
    "LVL": "Latvian Lats",
    "LYD": "Libyan Dinar",
    "MAD": "Moroccan Dirham",
    "MDL": "Moldovan Leu",
    "MGA": "Malagasy Ariary",
    "MKD": "Macedonian Denar",
    "MMK": "Myanma Kyat",
    "MNT": "Mongolian Tugrik",
    "MOP": "Macanese Pataca",
    "MRO": "Mauritanian ouguiya",
    "MUR": "Mauritian Rupee",
    "MVR": "Maldivian Rufiyaa",
    "MWK": "Malawian Kwacha",
    "MXN": "Mexican Peso",
    "MYR": "Malaysian Ringgit",
    "MZN": "Mozambican Metical",
    "NAD": "Namibian Dollar",
    "NGN": "Nigerian Naira",
    "NIO": "Nicaraguan Córdoba",
    "NOK": "Norwegian Krone",
    "NPR": "Nepalese Rupee",
    "NZD": "New Zealand Dollar",
    "OMR": "Omani Rial",
    "PAB": "Panamanian Balboa",
    "PEN": "Peruvian Nuevo Sol",
    "PGK": "Papua New Guinean Kina",
    "PHP": "Philippine Peso",
    "PKR": "Pakistani Rupee",
    "PLN": "Polish Zloty",
    "PYG": "Paraguayan Guarani",
    "QAR": "Qatari Rial",
    "RON": "Romanian Leu",
    "RSD": "Serbian Dinar",
    "RUB": "Russian Ruble",
    "RWF": "Rwandan Franc",
    "SAR": "Saudi Riyal",
    "SBD": "Solomon Islands Dollar",
    "SCR": "Seychellois Rupee",
    "SDG": "Sudanese Pound",
    "SEK": "Swedish Krona",
    "SGD": "Singapore Dollar",
    "SHP": "Saint Helena Pound",
    "SLL": "Sierra Leonean Leone",
    "SOS": "Somali Shilling",
    "SRD": "Surinamese Dollar",
    "STD": "São Tomé and Príncipe dobra",
    "SVC": "Salvadoran Colón",
    "SYP": "Syrian Pound",
    "SZL": "Swazi Lilangeni",
    "THB": "Thai Baht",
    "TJS": "Tajikistani Somoni",
    "TMT": "Turkmenistani Manat",
    "TND": "Tunisian Dinar",
    "TOP": "Tongan Paʻanga",
    "TRY": "Turkish Lira",
    "TTD": "Trinidad and Tobago Dollar",
    "TWD": "New Taiwan Dollar",
    "TZS": "Tanzanian Shilling",
    "UAH": "Ukrainian Hryvnia",
    "UGX": "Ugandan Shilling",
    "USD": "US Dollar",
    "UYU": "Uruguayan Peso",
    "UZS": "Uzbekistan Som",
    "VEF": "Venezuelan Bolívar",
    "VND": "Vietnamese Dong",
    "VUV": "Vanuatu Vatu",
    "WST": "Samoan Tala",
    "XAF": "CFA Franc BEAC",
    "XAG": "Silver Ounce",
    "XAU": "Gold Ounce",
    "XCD": "East Caribbean Dollar",
    "XDR": "Special drawing rights",
    "XOF": "CFA Franc BCEAO",
    "XPF": "CFP Franc",
    "YER": "Yemeni Rial",
    "ZAR": "South African Rand",
    "ZMK": "Zambian Kwacha",
    "ZMW": "Zambian Kwacha",
    "ZWL": "Zimbabwean dollar",
    "XPT": "Platinum Ounce",
    "XPD": "Palladium Ounce",
    "BTC": "Bitcoin",
    "ETH": "Ethereum",
    "BNB": "Binance",
    "XRP": "Ripple",
    "SOL": "Solana",
    "DOT": "Polkadot",
    "AVAX": "Avalanche",
    "MATIC": "Matic Token",
    "LTC": "Litecoin",
    "ADA": "Cardano"
  };
var to = document.querySelector("#to");
var from = document.querySelector("#from");
var amount_value = document.querySelector("#amount_value").value;
fetching("https://api.currencyapi.com/v3/currencies?apikey=cur_live_Ak2zRJYkja8U0VkiLJ3QOz0auWyF1AQzUzg1WJa8")
let from_value = "";
let to_value = "";
let abc = "";
let from_text = document.querySelector("#from_text")
let to_text = document.querySelector("#to_text")
let latest_update = document.querySelector("#latest_update")
latest_update.innerText =` Update at: ${new Date().toLocaleString()}`




async function fetching(apilink) {
    const response = await fetch(apilink)
    const data = await response.json()
    // console.log(data)
    const keys = Object.keys(data.data);




    
    from.addEventListener("change", (e) => {
        // console.log(e.target.value)
        document.querySelector("#amount").innerHTML = `Amount in ${e.target.value}`
    })



    
    keys.forEach(key => {
        var option = document.createElement("option");
        option.text = `${currencies[key]}`;
        // option.text = `${key}`
        from.appendChild(option);
        // console.log(key);
        // console.log(data.data[key].symbol_native);

    });
    keys.forEach(key => {
        var option = document.createElement("option");
        option.text = `${currencies[key]}`;
        // option.text = `${key}`
        to.appendChild(option);
         // console.log(key);
        // console.log(data.data[key].symbol_native);

    });
return data.data

}



from.addEventListener("change", (e) => {
    from_value = e.target.value;

    
});

to.addEventListener("change", (e) => {
    to_value = e.target.value;
   


    //     console.log(`https://api.currencyapi.com/v3/latest?apikey=cur_live_0IygISn31w5ohhFndT2Ebp26tyBwK3Dl87V1mf8k&base_currency=${from_value}&currencies[]=${to_value}`)}
});



document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    if(from_value || to_value || amount_value){
    var from_v= getKeyByValue(currencies, from_value)
    var to_v= getKeyByValue(currencies, to_value)
        console.log(from_v)
        console.log(to_v)
    async function fetching_curr(link) {
        var response = await fetch(link);
        var data2 = await response.json();
        let xyz = data2.data[to_v].value;

        
        let amount_value = document.querySelector("#amount_value").value;
        console.log(xyz)
        console.log(amount_value)
         
            let abc = amount_value * xyz;
            console.log(abc);
            result();
        
        function result() {
           
            from_text.innerText = `${document.querySelector("#amount_value").value} ${currencies[from_v]} equals`;
            to_text.innerText = `${abc.toFixed(2)} ${currencies[to_v]}`;
            latest_update.innerText = `Update at ${data2.meta.last_updated_at}`

        }
    }

fetching_curr(`https://api.currencyapi.com/v3/latest?apikey=cur_live_Ak2zRJYkja8U0VkiLJ3QOz0auWyF1AQzUzg1WJa8&base_currency=${from_v}&currencies[]=${to_v}`);
    }
    else{
        alert("please enter the values")
    }

   
});












  
