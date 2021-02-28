import React, {useState} from 'react';
import Select from 'react-dropdown-select';

export default function Test (){

    const options = [
        {
          "id": "ddd0ba16-3107-410a-8e53-3d9e57962e06",
          "name": "Ellie Quigley",
          "username": "Terence_Stracke",
          "email": "Magali_Steuber62@gmail.com",
          "address": {
            "street": "Little Shoals",
            "suite": 10654,
            "city": "Kerlukeview",
            "zipcode": "76949",
            "geo": {
              "lat": "-12.1844",
              "lng": "-50.8899"
            }
          },
          "phone": "481-815-6030 x5523",
          "website": "dewitt.info",
          "company": {
            "name": "Botsford, Schowalter and Hodkiewicz",
            "catchPhrase": "Mandatory mobile methodology",
            "bs": "cutting-edge strategize convergence"
          }
        },
        {
          "id": "aca894d0-12fe-4755-9c85-1095830942ad",
          "name": "Carli Goodwin",
          "username": "Hayley65",
          "email": "Freida.Ratke10@gmail.com",
          "address": {
            "street": "Smith Shoals",
            "suite": 86721,
            "city": "Deckowmouth",
            "zipcode": "02445-6385",
            "geo": {
              "lat": "63.9213",
              "lng": "163.1063"
            }
          },
          "phone": "1-276-617-4973",
          "website": "lacy.info",
          "company": {
            "name": "Carter - Harris",
            "catchPhrase": "Inverse local middleware",
            "bs": "global synthesize content"
          }
        },
        {
          "id": "52768391-9bc1-48cd-bc86-1c39abb337b0",
          "name": "Shawna Powlowski",
          "username": "Osborne75",
          "email": "Gilberto_Beatty49@gmail.com",
          "address": {
            "street": "Windler Prairie",
            "suite": 64031,
            "city": "Port Nettieberg",
            "zipcode": "66457",
            "geo": {
              "lat": "11.5319",
              "lng": "-98.1862"
            }
          },
          "phone": "1-945-925-4870",
          "website": "emiliano.net",
          "company": {
            "name": "Strosin, Boyle and Bernier",
            "catchPhrase": "Centralized eco-centric knowledge base",
            "bs": "interactive morph architectures"
          }
        },
        {
          "id": "b96d5f35-a46a-4851-8293-ab3f05126a79",
          "name": "Mack Jacobi",
          "username": "Kole34",
          "email": "Julius83@hotmail.com",
          "address": {
            "street": "Herzog Estates",
            "suite": 40731,
            "city": "South Devantestad",
            "zipcode": "98214",
            "geo": {
              "lat": "-30.6478",
              "lng": "55.9731"
            }
          },
          "phone": "1-491-461-9804 x6218",
          "website": "valentine.info",
          "company": {
            "name": "Mertz and Sons",
            "catchPhrase": "Open-architected multi-tasking migration",
            "bs": "web-enabled mesh methodologies"
          }
        },
        {
          "id": "a09a2c3c-337c-4d32-aa66-335a90b110ae",
          "name": "Granville D'Amore",
          "username": "Bartholome.Lockman",
          "email": "Herminio43@hotmail.com",
          "address": {
            "street": "Zboncak Square",
            "suite": 62220,
            "city": "South Dellville",
            "zipcode": "57422-3967",
            "geo": {
              "lat": "-39.0098",
              "lng": "-53.6573"
            }
          },
          "phone": "(338) 623-1013 x942",
          "website": "moses.net",
          "company": {
            "name": "Will Group",
            "catchPhrase": "Future-proofed stable conglomeration",
            "bs": "customized harness vortals"
          }
        },
        {
          "id": "482ed24f-bc20-4000-8a28-d8c395673598",
          "name": "Constance Zemlak",
          "username": "Destany.Smith",
          "email": "Laurianne.Smith@yahoo.com",
          "address": {
            "street": "Laurence Mountain",
            "suite": 30465,
            "city": "West Isadore",
            "zipcode": "07084-5658",
            "geo": {
              "lat": "48.5583",
              "lng": "-174.9027"
            }
          },
          "phone": "(074) 796-4879 x18439",
          "website": "violette.info",
          "company": {
            "name": "Herzog, Paucek and Feil",
            "catchPhrase": "Assimilated multi-state emulation",
            "bs": "killer innovate methodologies"
          }
        },
        {
          "id": "5748fdb3-2e30-4117-b41f-731e69f2c629",
          "name": "Stephen Jast",
          "username": "Florine11",
          "email": "Gussie53@hotmail.com",
          "address": {
            "street": "Wunsch Station",
            "suite": 6841,
            "city": "New Sheridanhaven",
            "zipcode": "39741-4136",
            "geo": {
              "lat": "84.0650",
              "lng": "-125.5761"
            }
          },
          "phone": "(572) 910-4910",
          "website": "connor.info",
          "company": {
            "name": "Towne Group",
            "catchPhrase": "Future-proofed dedicated pricing structure",
            "bs": "user-centric embrace models"
          }
        },
        {
          "id": "f7d915c6-dff5-4f4a-8d95-774583bfdbad",
          "name": "Esmeralda Feeney",
          "username": "Cale.Lynch",
          "email": "Eloy_Altenwerth45@gmail.com",
          "address": {
            "street": "Kozey Landing",
            "suite": 67550,
            "city": "North Estella",
            "zipcode": "33873",
            "geo": {
              "lat": "-61.2052",
              "lng": "13.8936"
            }
          },
          "phone": "1-920-899-4781 x07880",
          "website": "savannah.info",
          "company": {
            "name": "Stehr, Effertz and O'Keefe",
            "catchPhrase": "Profound background paradigm",
            "bs": "web-enabled synergize action-items"
          }
        },
        {
          "id": "80223608-c96c-4652-bba0-34e86342eb4e",
          "name": "Julius Roob",
          "username": "Israel62",
          "email": "Timmy.Considine5@hotmail.com",
          "address": {
            "street": "Medhurst Spring",
            "suite": 57397,
            "city": "New Ursulafort",
            "zipcode": "66106-5715",
            "geo": {
              "lat": "-83.5004",
              "lng": "61.7717"
            }
          },
          "phone": "433-949-6014 x9676",
          "website": "mackenzie.info",
          "company": {
            "name": "Feest Inc",
            "catchPhrase": "Grass-roots uniform function",
            "bs": "virtual grow interfaces"
          }
        },
        {
          "id": "a3d4300b-6ec9-465c-b8ed-e9da2a80e5f2",
          "name": "Letha Watsica",
          "username": "Roxanne.Ruecker53",
          "email": "Sage84@gmail.com",
          "address": {
            "street": "Kendra Tunnel",
            "suite": 61806,
            "city": "West Addison",
            "zipcode": "12661-5786",
            "geo": {
              "lat": "65.0311",
              "lng": "-169.9663"
            }
          },
          "phone": "1-097-925-8533",
          "website": "mallie.name",
          "company": {
            "name": "Robel Group",
            "catchPhrase": "Customer-focused tangible installation",
            "bs": "efficient enhance e-business"
          }
        },
        {
          "id": "dc6af8b8-6a5c-4d69-8017-d28716d1c244",
          "name": "Alison Nitzsche",
          "username": "Randall_Greenfelder28",
          "email": "Connie_Stark@hotmail.com",
          "address": {
            "street": "Monahan Crest",
            "suite": 53874,
            "city": "Kelvinbury",
            "zipcode": "04432-3500",
            "geo": {
              "lat": "-50.4307",
              "lng": "-59.5837"
            }
          },
          "phone": "1-868-014-6837 x6279",
          "website": "jammie.org",
          "company": {
            "name": "Parisian, Hahn and Skiles",
            "catchPhrase": "Operative web-enabled frame",
            "bs": "dynamic syndicate e-business"
          }
        },
        {
          "id": "feccd5d7-f589-48a2-bda5-39d469f86faf",
          "name": "Gabe Boehm",
          "username": "Breana25",
          "email": "Clint.Anderson@yahoo.com",
          "address": {
            "street": "Rosalia Ramp",
            "suite": 79716,
            "city": "Pinkiemouth",
            "zipcode": "80675-9374",
            "geo": {
              "lat": "-55.2863",
              "lng": "77.2245"
            }
          },
          "phone": "(841) 244-2865 x87523",
          "website": "cielo.biz",
          "company": {
            "name": "Nader, Bechtelar and Glover",
            "catchPhrase": "Centralized fresh-thinking definition",
            "bs": "impactful grow portals"
          }
        },
        {
          "id": "deaa4248-893e-49ad-a0f7-6aca30f0bc2a",
          "name": "Angeline Lindgren",
          "username": "Joyce_Stroman",
          "email": "Werner18@yahoo.com",
          "address": {
            "street": "Jalen Brook",
            "suite": 73818,
            "city": "South Jettie",
            "zipcode": "55041",
            "geo": {
              "lat": "24.8902",
              "lng": "-171.6266"
            }
          },
          "phone": "968.856.1965",
          "website": "emily.info",
          "company": {
            "name": "Fritsch, Mueller and Toy",
            "catchPhrase": "Synchronised 6th generation extranet",
            "bs": "user-centric iterate partnerships"
          }
        },
        {
          "id": "92159ba6-499c-45bd-a317-e928d98cd94c",
          "name": "Shany Lynch",
          "username": "Letha6",
          "email": "Leone.Leuschke2@hotmail.com",
          "address": {
            "street": "Mallory Flat",
            "suite": 72588,
            "city": "West Angieshire",
            "zipcode": "58167-6002",
            "geo": {
              "lat": "89.2488",
              "lng": "-39.3984"
            }
          },
          "phone": "473-249-4211 x9638",
          "website": "callie.name",
          "company": {
            "name": "Swift, Pagac and Schroeder",
            "catchPhrase": "Adaptive foreground application",
            "bs": "open-source reintermediate bandwidth"
          }
        },
        {
          "id": "589f9d18-bfc9-44f0-8331-926ca949dc34",
          "name": "Kira Towne",
          "username": "Caroline_Nolan5",
          "email": "Melany42@gmail.com",
          "address": {
            "street": "Devon Mission",
            "suite": 63782,
            "city": "Hannahburgh",
            "zipcode": "81849",
            "geo": {
              "lat": "-29.7331",
              "lng": "-101.8640"
            }
          },
          "phone": "323-180-1664",
          "website": "ewald.info",
          "company": {
            "name": "Padberg, Gerlach and Rosenbaum",
            "catchPhrase": "Automated system-worthy complexity",
            "bs": "sexy exploit technologies"
          }
        },
        {
          "id": "0d079a15-13e6-4ca4-9857-695be37de626",
          "name": "Winfield Jenkins",
          "username": "Yasmine52",
          "email": "Michelle19@yahoo.com",
          "address": {
            "street": "Izabella Square",
            "suite": 60546,
            "city": "Lake Marcellaburgh",
            "zipcode": "89796",
            "geo": {
              "lat": "-62.4070",
              "lng": "115.2268"
            }
          },
          "phone": "283-433-8101",
          "website": "eliane.com",
          "company": {
            "name": "Kerluke, Zboncak and MacGyver",
            "catchPhrase": "Digitized holistic local area network",
            "bs": "one-to-one harness supply-chains"
          }
        },
        {
          "id": "34f0461d-17e1-425a-8ba8-d723a23859f4",
          "name": "Guido Schultz",
          "username": "Arjun_Reilly",
          "email": "Arely_Trantow60@yahoo.com",
          "address": {
            "street": "Onie Mountains",
            "suite": 57558,
            "city": "Dorianbury",
            "zipcode": "93272",
            "geo": {
              "lat": "-14.5471",
              "lng": "-178.4610"
            }
          },
          "phone": "1-981-761-7092 x577",
          "website": "natalie.net",
          "company": {
            "name": "Kerluke, Prohaska and Gibson",
            "catchPhrase": "Business-focused responsive intranet",
            "bs": "distributed synergize platforms"
          }
        },
        {
          "id": "8485fce6-d04b-4652-a4ad-f365f871f3eb",
          "name": "Maegan Dicki",
          "username": "Quinn_Jacobson",
          "email": "Coleman_Gutkowski84@gmail.com",
          "address": {
            "street": "Padberg Bridge",
            "suite": 35583,
            "city": "South Fabiola",
            "zipcode": "50617",
            "geo": {
              "lat": "-86.3330",
              "lng": "-165.5956"
            }
          },
          "phone": "(194) 261-2082 x546",
          "website": "kiel.info",
          "company": {
            "name": "O'Hara, Langosh and West",
            "catchPhrase": "Focused scalable policy",
            "bs": "dynamic benchmark solutions"
          }
        },
        {
          "id": "e32a9e8d-57e0-443d-a510-976d595e9b05",
          "name": "Mavis Schuppe",
          "username": "Joy_Emmerich",
          "email": "Antone.Yost7@gmail.com",
          "address": {
            "street": "Herzog Loaf",
            "suite": 37005,
            "city": "New Narcisoton",
            "zipcode": "51403-5948",
            "geo": {
              "lat": "-81.5054",
              "lng": "29.2276"
            }
          },
          "phone": "789.890.7067 x41260",
          "website": "adriana.name",
          "company": {
            "name": "Sporer Inc",
            "catchPhrase": "Re-contextualized non-volatile alliance",
            "bs": "visionary aggregate synergies"
          }
        },
        {
          "id": "14853027-e39e-4d95-9466-92bac9a79981",
          "name": "Hiram Beer",
          "username": "Calista_Deckow31",
          "email": "Jaden.Douglas@hotmail.com",
          "address": {
            "street": "Sarai Radial",
            "suite": 35017,
            "city": "Port Aracelybury",
            "zipcode": "87451",
            "geo": {
              "lat": "60.1260",
              "lng": "-12.3992"
            }
          },
          "phone": "594-823-2914 x3473",
          "website": "philip.name",
          "company": {
            "name": "Okuneva, Schiller and Thiel",
            "catchPhrase": "Profound hybrid superstructure",
            "bs": "dynamic benchmark web services"
          }
        },
        {
          "id": "d264a2eb-bc95-4414-8db6-456c268a2ed0",
          "name": "Elnora Armstrong",
          "username": "Shyanne.Hilpert",
          "email": "Kaela.Erdman87@hotmail.com",
          "address": {
            "street": "Zemlak Unions",
            "suite": 89401,
            "city": "Boyerview",
            "zipcode": "91661-5602",
            "geo": {
              "lat": "10.4311",
              "lng": "-56.3401"
            }
          },
          "phone": "1-574-443-1914 x251",
          "website": "isabell.net",
          "company": {
            "name": "Schinner LLC",
            "catchPhrase": "Digitized well-modulated implementation",
            "bs": "B2C matrix infrastructures"
          }
        },
        {
          "id": "769877a6-18dd-4f92-aa6f-e7476f26a8f5",
          "name": "Natasha Wolf",
          "username": "Dawson78",
          "email": "Adalberto.Sipes65@hotmail.com",
          "address": {
            "street": "Halvorson Cape",
            "suite": 12501,
            "city": "North Kaden",
            "zipcode": "82007-9584",
            "geo": {
              "lat": "33.3999",
              "lng": "-95.2707"
            }
          },
          "phone": "259.507.4144 x222",
          "website": "payton.org",
          "company": {
            "name": "Hauck LLC",
            "catchPhrase": "Future-proofed contextually-based process improvement",
            "bs": "turn-key maximize web-readiness"
          }
        },
        {
          "id": "ced631d8-b59f-432a-abf1-cb9e6fc08e54",
          "name": "Waldo MacGyver",
          "username": "Ethyl39",
          "email": "Spencer72@gmail.com",
          "address": {
            "street": "Bayer Landing",
            "suite": 53584,
            "city": "Graceville",
            "zipcode": "84015",
            "geo": {
              "lat": "85.8508",
              "lng": "-90.0125"
            }
          },
          "phone": "799-854-7028 x692",
          "website": "nannie.name",
          "company": {
            "name": "Rath - Runolfsdottir",
            "catchPhrase": "Up-sized static collaboration",
            "bs": "plug-and-play seize portals"
          }
        },
        {
          "id": "22969e60-323a-459d-8a2b-1c961d9db0e1",
          "name": "Olaf Hirthe",
          "username": "Gerald.Aufderhar74",
          "email": "Dawn_Boyle5@hotmail.com",
          "address": {
            "street": "Hermann Plains",
            "suite": 34154,
            "city": "Pfannerstillton",
            "zipcode": "08172-7953",
            "geo": {
              "lat": "17.6032",
              "lng": "89.8769"
            }
          },
          "phone": "(597) 763-4309",
          "website": "leslie.info",
          "company": {
            "name": "Walter, Rogahn and Fay",
            "catchPhrase": "Organic value-added local area network",
            "bs": "cross-platform deploy schemas"
          }
        },
        {
          "id": "2ff6dffc-58ef-4558-aad5-239e98c67c17",
          "name": "Magdalena Schuppe",
          "username": "Nels.Funk88",
          "email": "Myrtice_Bruen54@yahoo.com",
          "address": {
            "street": "Catharine Brooks",
            "suite": 80703,
            "city": "North Gonzalofurt",
            "zipcode": "00587-3081",
            "geo": {
              "lat": "-73.9822",
              "lng": "-36.8262"
            }
          },
          "phone": "640.417.2142 x69467",
          "website": "oleta.net",
          "company": {
            "name": "Kerluke, Medhurst and Bogisich",
            "catchPhrase": "Organized attitude-oriented focus group",
            "bs": "global target experiences"
          }
        },
        {
          "id": "c1e85286-3d66-407e-a3f1-72c2467c7f1e",
          "name": "Brooke Murazik",
          "username": "Wilma_Okuneva21",
          "email": "Myrtle7@yahoo.com",
          "address": {
            "street": "McGlynn Streets",
            "suite": 9674,
            "city": "Shanahanmouth",
            "zipcode": "30003",
            "geo": {
              "lat": "32.4380",
              "lng": "99.8764"
            }
          },
          "phone": "920.388.5435",
          "website": "randall.info",
          "company": {
            "name": "Marvin, Hoeger and Koelpin",
            "catchPhrase": "Switchable bi-directional instruction set",
            "bs": "robust iterate web-readiness"
          }
        },
        {
          "id": "671ab7bc-6b67-4ecc-8ddd-0742efa4b882",
          "name": "Lukas Nicolas",
          "username": "Skyla.Haley5",
          "email": "Aditya24@gmail.com",
          "address": {
            "street": "Cummerata Heights",
            "suite": 90793,
            "city": "Carterburgh",
            "zipcode": "14778-0367",
            "geo": {
              "lat": "-75.2868",
              "lng": "96.1708"
            }
          },
          "phone": "(611) 893-5706 x50442",
          "website": "marlen.net",
          "company": {
            "name": "Dibbert Inc",
            "catchPhrase": "Organized eco-centric Graphical User Interface",
            "bs": "value-added extend interfaces"
          }
        },
        {
          "id": "c6de31c4-d7a3-4a2a-afd4-48890c414c6e",
          "name": "Lenore Sipes",
          "username": "Faye34",
          "email": "Kailyn.Kutch61@yahoo.com",
          "address": {
            "street": "Brady Curve",
            "suite": 8367,
            "city": "Purdyside",
            "zipcode": "03992-3532",
            "geo": {
              "lat": "20.1674",
              "lng": "-17.1751"
            }
          },
          "phone": "872-906-5653 x688",
          "website": "maegan.name",
          "company": {
            "name": "Funk, Wiegand and Keeling",
            "catchPhrase": "Persistent 5th generation alliance",
            "bs": "synergistic recontextualize eyeballs"
          }
        },
        {
          "id": "c1fc4ba3-02f0-4ce6-873e-29c26c669f84",
          "name": "Broderick Armstrong",
          "username": "Delaney52",
          "email": "Erick95@hotmail.com",
          "address": {
            "street": "Mason Spurs",
            "suite": 17541,
            "city": "North Robbmouth",
            "zipcode": "40135",
            "geo": {
              "lat": "-67.4454",
              "lng": "2.5059"
            }
          },
          "phone": "(637) 449-9039 x77998",
          "website": "jacques.net",
          "company": {
            "name": "Spinka - Emard",
            "catchPhrase": "Fully-configurable value-added capacity",
            "bs": "compelling facilitate functionalities"
          }
        },
        {
          "id": "4c5509c4-e151-486c-8243-f25fef9914e9",
          "name": "Michele Collins",
          "username": "Maya.Murphy",
          "email": "Jonas89@gmail.com",
          "address": {
            "street": "Bahringer Island",
            "suite": 81723,
            "city": "New Lanemouth",
            "zipcode": "19660-9796",
            "geo": {
              "lat": "38.4146",
              "lng": "-74.8781"
            }
          },
          "phone": "811-567-6116",
          "website": "adolf.com",
          "company": {
            "name": "Deckow, Champlin and Legros",
            "catchPhrase": "Robust systematic support",
            "bs": "user-centric optimize relationships"
          }
        }
      ]
      const [selected, setSelected] = useState([]);
      
    return(

        <div>Testing
            <div>
            <Select
    options={options}
    value={selected}
    required
    multi
    name="select"
    onChange={(value) => setSelected(value)}
  />
            </div>
        </div>

    )

}