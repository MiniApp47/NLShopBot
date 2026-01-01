// Attend que le DOM soit entièrement chargé pour exécuter le script
document.addEventListener('DOMContentLoaded', function () {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#2c2c2e');
    tg.setBackgroundColor('#1c1c1d');

    // --- CONFIGURATION DES LIENS DE CONTACT ---
    const contactLinks = [
        { name: 'WhatsApp', url: 'https://wa.me/xxxxxxxxxx', icon: '#icon-whatsapp', id: 'whatsapp', className: 'whatsapp', text: "WhatsApp" },
        { name: 'Instagram', url: 'https://www.instagram.com/plugsbot?igsh=MTYzamtyZ2JpNHJpOQ%3D%3D&utm_source=qr', className: 'instagram', text: "Instagram", icon: '#icon-instagram', id: 'instagram' },
        { name: 'Snapchat', url: 'https://snapchat.com/add/user', icon: '#icon-snapchat', id: 'snapchat', className: 'snapchat', text: "Snapchat" },
        { name: 'Telegram', url: 'https://t.me/PlugsBotOfficielBot', icon: '#icon-telegram', id: 'telegram', className: 'telegram', text: "Telegram" },
        { name: 'Potato', url: 'https://m.potato.im', icon: '#icon-potato', id: 'potato', className: 'potato', text: "Potato" }
    ];

    // --- DONNÉES DE L'APPLICATION ---
    const appData = [
        // --- Catégorie 1: Mousseux Cake ---
        {
            id: 'STIMU',
            name: ' 🏋️ Stimulant',
            farm: '',
            type: 'Stimu',
            quality: ' 🏋️ Stimulant',
            image: 'CategStim.png',
            farms: [
                {
                    id: 'White',
                    name: 'White 💭 ',
                    image: 'SousWhite.png',
                    badgeText: '3 produits',
                    products: [
                        {
                            id: 'Bolivia',
                            flag: '🇧🇴',
                            name: 'Bolivia ',
                            farm: '',
                            promoEligible: true,
                            type: 'White',
                            image: '',
                            video: '',
                            description: '',
                            tarifs: [
                                { weight: '1g', price: 80.00 },
                                { weight: '2g', price: 150.00 },
                            ]
                        },
                        {
                            id: 'Peru',
                            flag: '🇵🇪',
                            name: ' Peru ',
                            farm: '',
                            promoEligible: true,
                            type: 'White',
                            image: '',
                            video: '',
                            description: '',
                            tarifs: [
                                { weight: '1g', price: 80.00 },
                                { weight: '2g', price: 150.00 },
                            ]
                        },
                        {
                            id: 'Colombia',
                            flag: '🇨🇴',
                            name: ' Colombia ',
                            farm: '',
                            promoEligible: true,
                            type: 'White',
                            image: '',
                            video: '',
                            description: '',
                            tarifs: [
                                { weight: '1g', price: 80.00 },
                                { weight: '2g', price: 150.00 },
                            ]
                        }
                    ]
                }
            ]
        },

        // --- Catégorie 2: DEPRESS ---
        {
            id: 'DEPRESS',
            name: ' 🌒 Depressants',
            farm: '',
            type: 'DEPRESS',
            quality: ' 🌒 Depressants',
            image: 'CategDepre.png',
            directToProducts: true,

            farms: [
                {
                    id: 'DEPRESS_DEFAULT',
                    name: 'Depressants 🌒',
                    products: [
                        { id: 'XA', flag: '🇺🇸', name: '✘ana✘ 💊', farm: '', promoEligible: true, type: 'Depressants', image: '', video: '', description: '1/2 Ⓜ️𝐆', tarifs: [{ weight: '1g', price: 80.00 }, { weight: '2g', price: 150.00 }] },
                        { id: 'Oxa', flag: '🇺🇸', name: 'Oxazepam 💊', farm: '', promoEligible: true, type: 'Depressants', image: '', video: '', description: '1/2 Ⓜ️𝐆', tarifs: [{ weight: '1g', price: 80.00 }, { weight: '2g', price: 150.00 }] },
                        { id: 'Clone', flag: '🇺🇸', name: 'Clonazepam 💊', farm: '', promoEligible: true, type: 'Depressants', image: '', video: '', description: '2 Ⓜ️𝐆', tarifs: [{ weight: '1g', price: 80.00 }, { weight: '2g', price: 150.00 }] },
                        { id: 'Diaz', flag: '🇺🇸', name: 'Diazepam 💊', farm: '', promoEligible: true, type: 'Depressants', image: '', video: '', description: '10 Ⓜ️𝐆', tarifs: [{ weight: '1g', price: 80.00 }, { weight: '2g', price: 150.00 }] },
                        { id: 'Lora', flag: '🇺🇸', name: 'Lorazepam 💊', farm: '', promoEligible: true, type: 'Depressants', image: '', video: '', description: '2.5 Ⓜ️𝐆', tarifs: [{ weight: '1g', price: 80.00 }, { weight: '2g', price: 150.00 }] },
                        { id: 'Tema', flag: '🇺🇸', name: 'Temazepam 💊', farm: '', promoEligible: true, type: 'Depressants', image: '', video: '', description: '10/20 Ⓜ️𝐆', tarifs: [{ weight: '1g', price: 80.00 }, { weight: '2g', price: 150.00 }] },
                        { id: 'Broma', flag: '🇺🇸', name: 'Bromazepam 💊', farm: '', promoEligible: true, type: 'Depressants', image: '', video: '', description: '6 Ⓜ️𝐆', tarifs: [{ weight: '1g', price: 80.00 }, { weight: '2g', price: 150.00 }] },
                        { id: 'ZOLPI', flag: '🇺🇸', name: 'Zolpidem 💊', farm: '', promoEligible: true, type: 'Depressants', image: '', video: '', description: '10 Ⓜ️𝐆', tarifs: [{ weight: '1g', price: 80.00 }, { weight: '2g', price: 150.00 }] },
                    ]
                }
            ]
        },
        // --- Catégorie 3: PSYCHEDELICS ---
        {
            id: 'PSYCHEDELICS',
            name: '🍄 Psychedelics',
            farm: '',
            type: 'Psychedelics',
            quality: ' 🍄 Psychedelics',
            image: 'CategPsy.png',
            directToProducts: true,
            farms: [
                {
                    id: 'PSYCHEDELICS_DEFAULT',
                    name: 'Produits Psychedelics',
                    products: [
                        { id: 'LSD200', flag: '🇺🇸', name: ' LSD 200 🔋 ', farm: '', promoEligible: false, type: 'Psychedelics', image: '', video: '', description: '', tarifs: [{ weight: '3,5g', price: 130.00 }, { weight: '7g', price: 250.00 }, { weight: '10,5g', price: 350.00 }] },
                        { id: 'LSD300', flag: '🇺🇸', name: ' LSD 300 🔋 ', farm: '', promoEligible: false, type: 'Psychedelics', image: '', video: '', description: '', tarifs: [{ weight: '3,5g', price: 130.00 }, { weight: '7g', price: 250.00 }, { weight: '10,5g', price: 350.00 }] }
                    ]
                }
            ]
        },
        {
            id: 'DISSO',
            name: ' 😶‍🌫️ Dissociatives',
            farm: '',
            type: 'DISSO',
            quality: ' 😶‍🌫️ Dissociatives',
            image: 'CategDisso.png',
            directToProducts: true,
            farms: [{ id: 'DISSO_DEFAULT', name: 'Produits Dissociatifs', products: [] }]
        },
        {
            id: 'CANNA',
            name: ' 🧬 Thc/Cannabis Products',
            farm: '',
            type: 'CANNA',
            quality: ' 🧬 Thc Products',
            image: 'CategCana.png',

            farms: [
                {
                    id: 'Hash',
                    name: 'Hash 🍫',
                    image: 'ImgSousCanna/SousHash.png',
                    badgeText: '5 produits',
                    products: [
                        // --- Westcoast Mousse (MODIFIÉ AVEC COULEURS) ---
                        {
                            id: 'WestcoastMousse',
                            flag: '🇺🇸',
                            name: 'Westcoast Mousse',
                            farm: '🇺🇸 Hash USA 🇺🇸',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'Product/ProductWest.jpg',
                            video: 'Video/VideoWest.mp4',
                            description: 'Qualité premium, extraction mousseuse.',
                            // 👇 ICI : On utilise des objets avec name et colorClass
                            options: [
                                { name: "PERMANENT MARKER 🖊️", colorClass: "opt-permanent-marker" },
                                { name: "CANDY CRUSH 🍬", colorClass: "opt-candy-crush" }
                            ],
                            tarifs: [
                                { weight: '10g', price: 60.00 },
                                { weight: '20g', price: 110.00 },
                            ]
                        },
                        // --- L.A. MOUSSE (MODIFIÉ AVEC COULEURS) ---
                        {
                            id: 'LAMousse',
                            flag: '🇺🇸',
                            name: 'L.A. MOUSSE',
                            farm: '🇺🇸 Hash USA 🇺🇸',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'Product/ProductLA.jpg',
                            video: 'Video/VideoLA.mp4',
                            description: 'Le top de L.A.',
                            // 👇 LISTE COMPLÈTE AVEC COULEURS
                            options: [
                                { name: "Dragon OG 🐉", colorClass: "opt-dragon-og" },
                                { name: "Galatic Glue 🌌", colorClass: "opt-galactic-glue" },
                                { name: "Gush Mintz 🍃", colorClass: "opt-gush-mintz" },
                                { name: "Jelly Donutz 🍩", colorClass: "opt-jelly-donutz" },
                                { name: "Spritzer 🍹", colorClass: "opt-spritzer" },
                                { name: "Sour Diesel ⛽", colorClass: "opt-sour-diesel" },
                                { name: "Rainbow Sherbet 🌈", colorClass: "opt-rainbow-sherbet" },
                                { name: "O.M.G 😲", colorClass: "opt-omg" },
                                { name: "Marmolade 🍊", colorClass: "opt-marmolade" },
                                { name: "Mango Tango 🥭", colorClass: "opt-mango-tango" }
                            ],
                            tarifs: [
                                { weight: '10g', price: 50.00 },
                                { weight: '50g', price: 200.00 },
                            ]
                        },
                        // ... Tes autres produits ...
                        {
                            id: 'Purple Cream',
                            flag: '🇺🇸',
                            name: '💜 Purple Cream 🍦',
                            farm: '🇺🇸 Hash USA 🇺🇸',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'Product/ProductCream.png',
                            videos: ['Video/VideoCream.mp4',
                                'Video/VideoCream2.mp4'],
                            description: 'Premium Dry Sift ⚡',
                            tarifs: [
                                { weight: '1g', price: 80.00 },
                                { weight: '2g', price: 150.00 },
                            ]
                        },
                        {
                            id: 'Gold',
                            flag: '🇺🇸',
                            name: '🧈 Gold Crown by Exotix',
                            farm: '🇺🇸 Hash USA 🇺🇸',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'Product/ProductGold.jpeg',
                            video: 'Video/VideoGold.mp4',
                            description: '🥇 Premium Static Sift 🥇',
                            tarifs: [
                                { weight: '2g', price: 250.00 },
                                { weight: '4g', price: 500.00 },
                            ]
                        },
                        {
                            id: 'Outta',
                            flag: '',
                            name: '👹 Outta Cali 👹',
                            farm: '🇺🇸 Hash USA 🇺🇸',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'Product/ProductOutta.jpg',
                            videos: ['Video/VideoOutta.mp4',
                                'Video/VideoOutta2.mp4',
                                'Video/VideoOutta3.mp4'],

                            description: 'Bubble Hash Straight Outta Cali 🫧',

                            // LES OPTIONS AVEC LEURS COULEURS
                            options: [
                                { name: "Gush Mintz 🍃", colorClass: "opt-gush-mintz" }, // On réutilise le vert existant
                                { name: "Oreoz Platz 🍪", colorClass: "opt-oreoz-platz" },
                                { name: "Mac 1 🛸", colorClass: "opt-mac-1" }
                            ],

                            tarifs: [
                                { weight: '2g', price: 250.00 },
                                { weight: '4g', price: 500.00 },
                            ]
                        },
                        {
                            id: 'Frozen Sift 🧋',
                            flag: '🇺🇸',
                            name: 'Frozen Sift 🧋',
                            farm: '🇺🇸 Branded USA 🇺🇸',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'Product/ProductFrozen.jpg',
                            video: 'Video/VideoFrozen.mp4',
                            description: 'Cali Plates Frozen \n\n Type: Premium Frozen Sift \n 70-130u Single Source',
                            // OPTIONS AVEC COULEURS
                            options: [
                                { name: "Cereal Milk 🥣", colorClass: "opt-cereal-milk" },
                                { name: "Moonbow 🌙", colorClass: "opt-moonbow" },
                                { name: "Chocolato 🍫", colorClass: "opt-chocolato" },
                                { name: "Sunset Runtz 🌅", colorClass: "opt-sunset-runtz" }
                            ],
                            tarifs: [
                                { weight: '2g', price: 250.00 },
                                { weight: '4g', price: 500.00 },
                            ]
                        }
                    ]
                },
                // ... WeedUsa ...
                {
                    id: 'WeedUsa',
                    name: 'Weed ( USA ) 🇺🇸',
                    image: 'ImgSousCanna/SousWeedUsa.png',
                    badgeText: '5 produits',
                    products: [
                        {
                            id: 'Midshelf',
                            flag: '🇺🇸',
                            name: 'Midshelf',
                            farm: '🇺🇸 Weed USA 🇺🇸',
                            promoEligible: true,
                            type: 'Weed',
                            image: 'Product/ProductMid.png',
                            videos: ['Video/VideoScotty.mp4',
                                'Video/VideoScotty2.mp4',
                                'Video/VideoScotty3.mp4',
                                'Video/VideoPeach.mp4',
                                'Video/VideoCotton.mp4',
                                'Video/VideoCandy.mp4',
                                'Video/VideoMilk.mp4'],
                            description: '',
                            options: [
                                { name: "Purple Scotty 🟣", colorClass: "opt-purple-scotty" },
                                { name: "White Peach 🍑", colorClass: "opt-white-peach" },
                                { name: "Cotton Candy Gelato 🍬", colorClass: "opt-cotton-candy" },
                                { name: "Candy Rush 🍭", colorClass: "opt-candy-rush" },
                                { name: "Cereal Milk 🥣", colorClass: "opt-cereal-milk" }
                            ],
                            tarifs: [
                                { weight: '2g', price: 250.00 },
                                { weight: '4g', price: 500.00 }]
                        },
                        {
                            id: 'Topshelf',
                            flag: '🇺🇸',
                            name: 'Topshelf',
                            farm: '🇺🇸 Weed USA 🇺🇸',
                            promoEligible: true,
                            type: 'Weed',
                            image: 'Product/ProductRuntz.png',
                            videos: ['Video/VideoBlueberry.mp4',
                                'Video/VideoRainbow.mp4',
                                'Video/VideoBlackJelly.mp4',
                                'Video/VideoFruit.mp4',
                                'Video/VideoMango.mp4'],
                            description: '',
                            options: [
                                { name: "Blueberry Jetfuel ⛽", colorClass: "opt-galactic-glue" },
                                { name: "Rainbow Belts 🎖️", colorClass: "opt-sunset-runtz" },
                                { name: "Black Jellybean 🍬", colorClass: "opt-cotton-candy" },
                                { name: "Fruit Punch 🥊", colorClass: "opt-candy-rush" },
                                { name: "Mango Rush 🥭", colorClass: "opt-white-peach" }
                            ],
                            tarifs: [
                                { weight: '2g', price: 250.00 },
                                { weight: '4g', price: 500.00 }
                            ]
                        },

                        {
                            id: 'Exoticz',
                            flag: '🇺🇸',
                            name: ' Exoticz ',
                            farm: '🇺🇸 Weed USA 🇺🇸',
                            promoEligible: true, 
                            type: 'Weed', 
                            image: 'Product/ProductExotic.png',
                            videos: ['Video/VideoPeachZ.mp4',
                                'Video/VideoObama.mp4',
                                'Video/VideoLoops.mp4',
                                'Video/VideoGalactic.mp4',
                                'Video/VideoIceG.mp4',
                                'Video/VideoSmack.mp4'],
                            description: '',
                            options: [
                                { name: "Peach Zkittles 🍑", colorClass: "opt-peach-zkittles" },
                                { name: "Obama Runtz 🇺🇸", colorClass: "opt-obama-runtz" },
                                { name: "Fruit Loops 🥣", colorClass: "opt-fruit-loops" },
                                { name: "Galactic WarHeadz 🌌", colorClass: "opt-galactic-warheadz" },
                                { name: "Black Ice Gelato 🍦", colorClass: "opt-black-ice" },
                                { name: "Zkittle Smackerz 🍬", colorClass: "opt-zkittle-smackerz" }
                            ], 
                            tarifs: [
                                { weight: '1g', price: 80.00 },
                                 { weight: '2g', price: 150.00 }
                                ]
                        },
                        { 
                        id: 'Branded USA', 
                        flag: '🇺🇸', 
                        name: 'Limelight x Black Magic 🧙🏼‍♂️', 
                        farm: '🇺🇸 Branded USA 🇺🇸', 
                        promoEligible: true, 
                        type: 'Weed', 
                        image: 'Product/ProductBrand.jpeg', 
                        video: '', 
                        description: 'Wizard Trees Blacklight Edition', 
                        tarifs: [
                            { weight: '2g', price: 250.00 },
                            { weight: '4g', price: 500.00 }] 
                        },



                        /*   {
                             id: 'Midshelf',
                             flag: '🇺🇸', 
                             name: 'Midshelf', 
                             farm: '🇺🇸 Weed USA 🇺🇸', 
                             promoEligible: true,
                             type: 'Weed',
                             image: 'Product/ProductRuntz.png',
                             videos: ['Video/VideoBlueR.mp4',
                             'Video/VideoBlueR2.mp4',
                             'Video/VideoBlackR.mp4',
                             'Video/VideoOrangeR.mp4'],
                             description: '',
                             options: [
                                 { name: "Blue Runtz 💠", colorClass: "opt-galactic-glue" },
                                 { name: "Black Runtz ♣️", colorClass: "opt-mac-1" },
                                 { name: "Orange Runtz 🏵️", colorClass: "opt-sunset-runtz" },
                             ],
                             tarifs: [
                                 { weight: '1g', price: 80.00 },
                                 { weight: '2g', price: 150.00 }
                             ]
                         }, */

/*                         { id: 'Exoticz', flag: '🇺🇸', name: ' Exoticz ', farm: '', promoEligible: true, type: 'Weed', image: '', video: '', description: '', tarifs: [{ weight: '1g', price: 80.00 }, { weight: '2g', price: 150.00 }] },
                        { id: 'Topshelf', flag: '🇺🇸', name: 'Topshelf', farm: '', promoEligible: true, type: 'Weed', image: '', video: '', description: '', tarifs: [{ weight: '2g', price: 250.00 }, { weight: '4g', price: 500.00 }] },
                        { id: 'Midshelf', flag: '', name: 'Midshelf', farm: '', promoEligible: true, type: 'Weed', image: '', video: '', description: '', tarifs: [{ weight: '2g', price: 250.00 }, { weight: '4g', price: 500.00 }] },
                        { id: 'Deps', flag: '🇺🇸', name: 'Deps', farm: '', promoEligible: true, type: 'Weed', image: '', video: '', description: '', tarifs: [{ weight: '2g', price: 250.00 }, { weight: '4g', price: 500.00 }] },
                        { id: 'Lows', flag: '', name: 'Lows', farm: '', promoEligible: true, type: 'Weed', image: '', video: '', description: '', tarifs: [{ weight: '2g', price: 250.00 }, { weight: '4g', price: 500.00 }] }
 */                    ]
                },
                // ... WeedNl ...
                {
                    id: 'WeedNl',
                    name: 'Weed ( NL ) 🇳🇱',
                    image: 'ImgSousCanna/SousWeedNl.png',
                    badgeText: '5 produits',
                    products: [
                        { id: 'AmnesiaHaze', flag: '🇺🇸', name: ' Amnesia Haze ', farm: '', promoEligible: true, type: 'Weed', image: '', video: '', description: '', tarifs: [{ weight: '1g', price: 80.00 }, { weight: '2g', price: 150.00 }] },
                        { id: 'LemonHaze', flag: '🇺🇸', name: 'Lemon Haze ', farm: '', promoEligible: true, type: 'Weed', image: '', video: '', description: '', tarifs: [{ weight: '1g', price: 80.00 }, { weight: '2g', price: 150.00 }] }
                    ]
                },
                // ... Edibles ...
                {
                    id: 'Edibles',
                    name: '🍭 Edibles 🍭',
                    image: 'ImgSousCanna/SousEdibles.png',
                    badgeText: '5 produits',
                    products: [
                        { id: '600mg', 
                        flag: '🇺🇸', 
                        name: '600 mg (THC)', 
                        farm: '', 
                        promoEligible: true, 
                        type: 'Candy', 
                        image: 'Product/Product600.jpeg', 
                        videos: ['Video/Video61.mp4',
                        'Video/Video62.mp4',
                        'Video/Video63.mp4',
                        'Video/Video64.mp4',
                        'Video/Video65.mp4',
                        'Video/Video66.mp4'], 
                        description: 'Trolli Strawberry Puffs, Trolli Peachie, Trolli Apple, Trolli Sour Brite Octopus, Trolli Sour Brite Crawlers, Trolli Sour Brite Lips', 
                        tarifs: [
                            { weight: '1g', price: 80.00 },
                            { weight: '2g', price: 150.00 }] 
                        }
                    ]
                },
                // ... ThcVapes ...
                {
                    id: 'ThcVapes',
                    name: ' 💨 Thc Vapes 💨',
                    image: 'ImgSousCanna/SousThc.png',
                    badgeText: '5 produits',
                    products: [
                        { id: '1000', 
                        flag: '🇺🇸', 
                        name: '1000 mg - THC Vapes USA', 
                        farm: '', 
                        promoEligible: true, 
                        type: 'Vape', 
                        image: 'Product/ProductVape.jpg', 
                        video: 'Video/VideoVape1.mp4', 
                        description: 'Lemon Cream Banana, Pink Runtz, Orange Runtz', 
                        tarifs: [
                            { weight: '1g', price: 80.00 }, 
                            { weight: '2g', price: 150.00 }] 
                        }
                    ]
                }
            ]
        },
        // ... OPIO ...
        {
            id: 'OPIO',
            name: ' 💎 Opioids',
            farm: '',
            type: 'OPIO',
            quality: ' 💎 Opioids',
            image: 'CategOpio.png',
            directToProducts: true,
            farms: [
                {
                    id: 'OPIO_DEFAULT',
                    name: '𝐎pioi𝐃 💥',
                    products: [
                        { id: 'Trama', flag: '🇺🇸', name: 'TRAMADOL', farm: '', promoEligible: true, type: 'Opioid', image: '', video: '', description: '50mg', tarifs: [{ weight: '1g', price: 80.00 }, { weight: '2g', price: 150.00 }] },
                        { id: 'Code', flag: '🇺🇸', name: 'Codeine phosphate', farm: '', promoEligible: true, type: 'Opioid', image: '', video: '', description: ' 20 mg ', tarifs: [{ weight: '1g', price: 80.00 }, { weight: '2g', price: 150.00 }] },
                        { id: 'Oxcy', flag: '🇺🇸', name: 'OXYCODONE', farm: '', promoEligible: true, type: 'Opioid', image: '', video: '', description: '5 - 80 mg', tarifs: [{ weight: '1g', price: 80.00 }, { weight: '2g', price: 150.00 }] },
                        { id: 'Metha', flag: '🇺🇸', name: 'METHADONE', farm: '', promoEligible: true, type: 'Opioid', image: '', video: '', description: ' 5 mg ', tarifs: [{ weight: '1g', price: 80.00 }, { weight: '2g', price: 150.00 }] },
                        { id: 'Fanta', flag: '🇺🇸', name: 'FANTANYL', farm: '', promoEligible: true, type: 'Opioid', image: '', video: '', description: '12 - 100 µg', tarifs: [{ weight: '1g', price: 80.00 }, { weight: '2g', price: 150.00 }] },
                        { id: 'hero', flag: '🇺🇸', name: 'Heroin', farm: '', promoEligible: true, type: 'Opioid', image: '', video: '', description: '', tarifs: [{ weight: '1g', price: 80.00 }, { weight: '2g', price: 150.00 }] },
                        { id: 'lean', flag: '🇺🇸', name: 'Lean 🥤', farm: '', promoEligible: true, type: 'Opioid', image: '', video: '', description: '', tarifs: [{ weight: '1g', price: 80.00 }, { weight: '2g', price: 150.00 }] },
                        { id: 'GHB', flag: '🇺🇸', name: 'GHB ', farm: '', promoEligible: true, type: 'Opioid', image: '', video: '', description: '', tarifs: [{ weight: '1g', price: 80.00 }, { weight: '2g', price: 150.00 }] },
                        { id: 'GBL', flag: '🇺🇸', name: 'GBL ', farm: '', promoEligible: true, type: 'Opioid', image: '', video: '', description: '', tarifs: [{ weight: '1g', price: 80.00 }, { weight: '2g', price: 150.00 }] },
                    ]
                }
            ]
        },
        // ... SEUAL ...
        {
            id: 'SEUAL',
            name: '🔞 Sexual Medications',
            farm: '',
            type: 'SEUAL',
            quality: '🔞 Sexual Medications',
            image: 'CategSeual.png',
            directToProducts: true,
            farms: [
                {
                    id: 'SEUAL_DEFAULT',
                    name: ' 𝟙𝟠₊ Medication 🥵',
                    products: [
                        { id: 'KamaG', flag: '🇺🇸', name: 'Kamagra Green 🧩', farm: '', promoEligible: true, type: '𝟙𝟠₊ Medication', image: '', video: '', description: ' 100 Ⓜ️𝐆 ', tarifs: [{ weight: '1g', price: 80.00 }, { weight: '2g', price: 150.00 }] },
                        { id: 'KamaL', flag: '🇺🇸', name: 'Kamagra Lady 💃', farm: '', promoEligible: true, type: '𝟙𝟠₊ Medication', image: '', video: '', description: ' 100 Ⓜ️𝐆 ', tarifs: [{ weight: '1g', price: 80.00 }, { weight: '2g', price: 150.00 }] },
                        { id: 'Cen', flag: '🇺🇸', name: 'Cenforce 💯', farm: '', promoEligible: true, type: '𝟙𝟠₊ Medication', image: '', video: '', description: ' 200 Ⓜ️𝐆 ', tarifs: [{ weight: '1g', price: 80.00 }, { weight: '2g', price: 150.00 }] },
                        { id: 'Vida', flag: '🇺🇸', name: 'Vidalista 📃', farm: '', promoEligible: true, type: '𝟙𝟠₊ Medication', image: '', video: '', description: ' 60/80 Ⓜ️𝐆 ', tarifs: [{ weight: '1g', price: 80.00 }, { weight: '2g', price: 150.00 }] },
                        { id: 'Cobra', flag: '🇺🇸', name: 'Cobra 🐍', farm: '', promoEligible: true, type: '𝟙𝟠₊ Medication', image: '', video: '', description: ' 100 Ⓜ️𝐆 ', tarifs: [{ weight: '1g', price: 80.00 }, { weight: '2g', price: 150.00 }] },
                        { id: 'KamaO', flag: '🇺🇸', name: 'Kamagra OralJelly 🍭', farm: '', promoEligible: true, type: '𝟙𝟠₊ Medication', image: '', video: '', description: ' 100 Ⓜ️𝐆 ', tarifs: [{ weight: '1g', price: 80.00 }, { weight: '2g', price: 150.00 }] },
                    ]
                }
            ]
        }
    ];

    // --- VARIABLES D'ÉTAT ---
    let cart = [];
    let currentFilters = { searchTerm: '', quality: 'all', farm: 'all' };
    let currentView = 'categories';
    let currentCategoryId = null;
    let currentFarmId = null;
    let appliedPromo = null;
    let paymentMethod = 'Espèce';

    // --- VARIABLES POUR LA SÉLECTION D'OPTION ---
    let currentSelectedOption = null;

    const validPromoCodes = {
        "ACTUPLUG33": { type: 'fixed', value: 10, appliesTo: 'eligible' }
    };

    // --- SÉLECTEURS D'ÉLÉMENTS DU DOM ---
    const pages = document.querySelectorAll('.page');
    const productListContainer = document.getElementById('product-list');
    const filterContainer = document.querySelector('.filters');
    const searchFilterWrapper = document.getElementById('search-filter').parentElement;
    const qualityFilterWrapper = document.getElementById('quality-filter').parentElement;
    const farmFilterWrapper = document.getElementById('farm-filter').parentElement;

    function getProductById(productId) {
        for (const category of appData) {
            for (const farm of category.farms) {
                const product = farm.products.find(p => p.id === productId);
                if (product) return product;
            }
        }
        return undefined;
    }

    function showPage(pageId) {
        pages.forEach(p => p.classList.remove('active'));
        const page = document.getElementById(pageId);
        if (page) page.classList.add('active');
        const homeNav = document.getElementById('nav-menu');
        const infoNav = document.getElementById('nav-info');
        const contactNav = document.getElementById('nav-contact');
        homeNav.classList.remove('active');
        infoNav.classList.remove('active');
        contactNav.classList.remove('active');
        if (pageId === 'page-contact') contactNav.classList.add('active');
        else if (pageId === 'page-info') infoNav.classList.add('active');
        else homeNav.classList.add('active');
    }

    function renderHomePage() {
        filterContainer.style.display = 'flex';
        const existingBackBtnCat = filterContainer.querySelector('.back-to-categories-btn');
        if (existingBackBtnCat) existingBackBtnCat.remove();
        const existingBackBtnFarm = filterContainer.querySelector('.back-to-farms-btn');
        if (existingBackBtnFarm) existingBackBtnFarm.remove();

        if (currentView === 'categories') {
            renderCategoryList();
            searchFilterWrapper.style.display = '';
            farmFilterWrapper.style.display = 'none';
            qualityFilterWrapper.style.display = 'flex';
            productListContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';
        } else if (currentView === 'farms') {
            renderFarmList(currentCategoryId);
            searchFilterWrapper.style.display = 'none';
            farmFilterWrapper.style.display = 'none';
            qualityFilterWrapper.style.display = 'none';
            productListContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';
            const category = appData.find(c => c.id === currentCategoryId);
            const backButton = document.createElement('button');
            backButton.className = 'back-to-categories-btn';
            backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> ${category.name}`;
            backButton.style.cssText = `background: var(--tertiary-bg-color); border: none; color: white; padding: 10px 15px; border-radius: 10px; font-size: 1.1rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 10px; width: 100%; box-sizing: border-box; margin-top: 3vh;font-family: Copperplate;`;
            filterContainer.prepend(backButton);
        } else if (currentView === 'products') {
            renderProductList(currentCategoryId, currentFarmId);
            searchFilterWrapper.style.display = 'flex';
            farmFilterWrapper.style.display = 'flex';
            qualityFilterWrapper.style.display = 'none';
            productListContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
            const category = appData.find(c => c.id === currentCategoryId);
            let backButton;
            if (category.directToProducts) {
                backButton = document.createElement('button');
                backButton.className = 'back-to-categories-btn';
                backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> ${category.name}`;
            } else {
                const farm = category.farms.find(f => f.id === currentFarmId);
                backButton = document.createElement('button');
                backButton.className = 'back-to-farms-btn';
                backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>  ${farm.name}`;
            }
            backButton.style.cssText = `background: var(--tertiary-bg-color); border: none; color: white; padding: 10px 15px; border-radius: 10px; font-size: 1.1rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 10px; width: 100%; box-sizing: border-box; margin-top: 3vh;    font-family: Copperplate;`;
            filterContainer.prepend(backButton);
        }
    }

    function renderCategoryList() {
        const filteredCategories = appData.filter(category => {
            const searchMatch = category.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
            const qualityMatch = currentFilters.quality === 'all' || category.quality === currentFilters.quality;
            return searchMatch && qualityMatch;
        });
        productListContainer.innerHTML = '';
        if (filteredCategories.length === 0) {
            productListContainer.innerHTML = '<p class="no-results">Aucune catégorie ne correspond à votre recherche.</p>';
            return;
        }
        filteredCategories.forEach(category => {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.dataset.categoryId = category.id;
            card.innerHTML = `<img src="${category.image}" alt="${category.name}">`;
            productListContainer.appendChild(card);
        });
    }

    function renderFarmList(categoryId) {
        const category = appData.find(c => c.id === categoryId);
        if (!category) return;
        const farms = category.farms;
        productListContainer.innerHTML = '';
        farms.forEach(farm => {
            const card = document.createElement('div');
            card.className = 'farm-card';
            card.dataset.farmId = farm.id;
            if (farm.clickable === false) card.classList.add('unclickable');
            const productCount = farm.products.length;
            card.innerHTML = `<div class="card-badge">${productCount > 0 ? productCount + ' produit' + (productCount > 1 ? 's' : '') : farm.badgeText || ''}</div><img src="${farm.image}" alt="${farm.name}">`;
            productListContainer.appendChild(card);
        });
    }

    function renderProductList(categoryId, farmId) {
        const category = appData.find(c => c.id === categoryId);
        if (!category) return;
        const farm = category.farms.find(f => f.id === farmId);
        if (!farm) return;
        const filteredProducts = farm.products.filter(product => {
            const searchMatch = product.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
            const farmMatch = currentFilters.farm === 'all' || product.farm === currentFilters.farm;
            return searchMatch && farmMatch;
        });
        productListContainer.innerHTML = '';
        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card product-item-card';
            card.dataset.productId = product.id;
            if (product.clickable === false) card.classList.add('unclickable');
            let flagHTML = product.flag ? `<span class="product-flag">${product.flag}</span>` : '';
            card.innerHTML = `<img src="${product.image}" alt="${product.name}"><div class="info"><div class="name">${product.name} ${flagHTML}</div><div class="farm">${product.farm}</div><div class="price">${product.tarifs[0].price.toFixed(2)}€</div></div>`;
            productListContainer.appendChild(card);
        });
    }


    // --- MODIFIÉ : renderProductPage (VERSION CARROUSEL) ---
    function renderProductPage(productId) {
        const product = getProductById(productId);
        if (!product) return;

        currentSelectedOption = null;

        document.getElementById('product-page-title').innerText = product.name;
        const detailsContainer = document.getElementById('product-details-content');

        // --- 1. GESTION DU CARROUSEL (IMAGES & VIDÉOS) ---
        let galleryHTML = '';
        let hasMedia = false;
        let mediaItems = [];

        // Récupération des images (soit tableau 'images', soit simple 'image')
        if (product.images && product.images.length > 0) {
            mediaItems = product.images.map(src => ({ type: 'image', src: src }));
        } else if (product.image && product.image !== '') {
            mediaItems.push({ type: 'image', src: product.image });
        }

        // Récupération des vidéos (soit tableau 'videos', soit simple 'video')
        if (product.videos && product.videos.length > 0) {
            product.videos.forEach(src => mediaItems.push({ type: 'video', src: src }));
        } else if (product.video && product.video !== '') {
            mediaItems.push({ type: 'video', src: product.video });
        }

        // Construction du HTML du carrousel
        if (mediaItems.length > 0) {
            hasMedia = true;
            galleryHTML = mediaItems.map(item => {
                if (item.type === 'image') {
                    return `<div class="gallery-item"><img src="${item.src}" alt="${product.name}"></div>`;
                } else {
                    return `
                <div class="gallery-item">
                    <video controls playsinline poster="${product.image || ''}">
                        <source src="${item.src}" type="video/mp4">
                    </video>
                </div>`;
                }
            }).join('');
        }

        // --- 2. OPTIONS (Boutons couleurs) ---
        let optionsHTML = '';
        if (product.options && product.options.length > 0) {
            const buttonsHTML = product.options.map(opt => {
                const name = typeof opt === 'object' ? opt.name : opt;
                const colorClass = typeof opt === 'object' ? opt.colorClass : '';
                return `
            <button class="option-btn" 
                data-value="${name}" 
                data-color-class="${colorClass}"
                style="background-color: var(--tertiary-bg-color); color: white; border: 1px solid transparent; border-radius: 8px; padding: 10px 15px; margin: 5px; cursor: pointer; font-size: 0.9rem; transition: all 0.2s ease;">
                ${name}
            </button>`;
            }).join('');

            optionsHTML = `
        <div class="product-options-container" style="margin-top: 15px; width: 100%; text-align: center;">
            <label style="color: var(--hint-color); display: block; margin-bottom: 10px; font-weight: 500;">Variété :</label>
            <div class="options-grid" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 5px;">
                ${buttonsHTML}
            </div>
        </div>`;
        }

        let tarifsHTML = product.tarifs.map(tarif => `
    <div class="tarif-item">
        <div class="box-tarif">
            <div class="tarif-wieght">${tarif.weight}</div>
            <div class="tarif-price">${tarif.price.toFixed(2)}€</div>
        </div>
        <button class="add-to-cart-btn" data-product-id="${product.id}" data-weight="${tarif.weight}" data-price="${tarif.price}" 
            ${(product.options && product.options.length > 0) ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
            <svg width="20" height="20"><use href="#icon-cart"/></svg>
        </button>
    </div>`).join('');

        let descriptionHTML = '';
        if (product.description) {
            const formattedDescription = product.description.replace(/\n/g, '<br>');
            descriptionHTML = `<p class="product-description">${formattedDescription}</p>`;
        }

        // Cache la vidéo statique de l'ancien code HTML si elle existe encore
        const staticVideo = document.querySelector('#page-product .product-video');
        if (staticVideo) staticVideo.style.display = 'none';

        // --- 3. INJECTION DANS LA PAGE ---
        detailsContainer.innerHTML = `
        ${hasMedia ? `<div class="product-gallery-wrapper">${galleryHTML}</div>` : ''}
        ${hasMedia && mediaItems.length > 1 ? `<div class="gallery-counter">Swipe ➡️</div>` : ''}
        
        <div class="name">${product.name}</div>
        <div class="farm">${product.farm}</div>
        ${descriptionHTML} 
        ${optionsHTML} 
        <h4 class="tarifs-title">💰 Tarifs disponibles :</h4>
        <div id="tarifs-list-container">
            ${tarifsHTML}
        </div>
    `;
        showPage('page-product');
    }

    function renderCart() {
        const cartContainer = document.getElementById('cart-items-container');
        if (cart.length === 0) {
            cartContainer.innerHTML = '<p>Votre panier est vide.</p>';
            document.getElementById('cart-total-price').innerText = '0.00€';
            updateCartCount();
            return;
        }

        cartContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <div class="name">${item.name}</div>
                    ${item.option ? `<div class="option" style="color: #00c7be; font-size: 0.9em; font-weight:bold;">${item.option}</div>` : ''}
                    <div class="gram" >${item.weight} - ${item.unitPrice.toFixed(2)}€</div>
                    <div class="price">${item.totalPrice.toFixed(2)}€</div>
                </div>
                <div class="quantity-selector">
                    <button class="quantity-btn" data-action="decrease" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
                </div>
            </div>
        `).join('');

        const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        document.getElementById('cart-total-price').innerText = `${total.toFixed(2)}€`;
        updateCartCount();
    }

    function renderConfirmation() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        let discount = 0;
        let discountableAmount = 0;

        if (appliedPromo) {
            const promo = validPromoCodes[appliedPromo];
            if (promo.appliesTo === 'eligible') {
                cart.forEach(item => {
                    const product = getProductById(item.productId);
                    if (product && product.promoEligible) {
                        discountableAmount += item.totalPrice;
                    }
                });
            } else {
                discountableAmount = subTotal;
            }
            if (promo.type === 'percent') {
                discount = (discountableAmount * promo.value) / 100;
            } else {
                discount = promo.value;
            }
        }
        if (discount > subTotal) discount = subTotal;
        const totalPrice = subTotal - discount;

        document.getElementById('confirmation-items-count').innerText = `${totalItems} article${totalItems > 1 ? 's' : ''}`;
        document.getElementById('confirmation-total-price').innerText = `${totalPrice.toFixed(2)}€`;

        const itemsList = document.getElementById('confirmation-items-list');
        itemsList.innerHTML = cart.map((item, index) => `
             <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <div>${index + 1}. ${item.name}</div>
                    ${item.option ? `<div style="color: #00c7be; font-size: 0.9em; font-weight:bold;">(${item.option})</div>` : ''}
                    <div>Quantité: ${item.quantity}x ${item.weight}</div>
                    <div>Prix unitaire: ${item.unitPrice.toFixed(2)}€</div>
                </div>
            </div>
        `).join('');

        const promoInputContainer = document.getElementById('promo-input-container');
        const promoAppliedContainer = document.getElementById('promo-applied-container');
        if (appliedPromo) {
            promoInputContainer.style.display = 'none';
            promoAppliedContainer.style.display = 'flex';
            document.getElementById('promo-applied-text').innerText = `Code "${appliedPromo}" appliqué !`;
        } else {
            promoInputContainer.style.display = 'flex';
            promoAppliedContainer.style.display = 'none';
            document.getElementById('promo-code-input').value = '';
        }

        document.querySelectorAll('.payment-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.method === paymentMethod);
        });

        const summaryContainer = document.getElementById('confirmation-summary');
        let summaryHTML = `
            <div class="summary-line">
                <span>Sous-total:</span>
                <span>${subTotal.toFixed(2)}€</span>
            </div>
        `;
        if (discount > 0) {
            summaryHTML += `
            <div class="summary-line discount">
                <span>Réduction:</span>
                <span>-${discount.toFixed(2)}€</span>
            </div>
            `;
        }
        summaryHTML += `
            <div class="summary-line total">
                <span>💰 Total final:</span>
                <span>${totalPrice.toFixed(2)}€</span>
            </div>
        `;
        summaryContainer.innerHTML = summaryHTML;
        showPage('page-confirmation');
    }

    // (renderContactPage, updateCartCount, populateFilters, showNotification, formatOrderMessage, copyToClipboard inchangés)
    function renderContactPage() {
        const linksContainer = document.getElementById('contact-links-container');
        linksContainer.innerHTML = contactLinks.map(link => `
        <a href="${link.url}" class="contact-link ${link.className}" target="_blank">
        <svg width="24" height="24"><use href="${link.icon}"/></svg>
            <span>${link.text}</span>
        </a>
        `).join('');
    }

    function updateCartCount() {
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartCountElements = document.querySelectorAll('.cart-count');
        cartCountElements.forEach(el => {
            el.innerText = count;
            el.style.display = count > 0 ? 'flex' : 'none';
        });
    }

    function populateFilters() {
        const searchFilter = document.getElementById('search-filter');
        const qualityFilter = document.getElementById('quality-filter');
        const farmFilter = document.getElementById('farm-filter');
        const allNestedProducts = appData.flatMap(category => category.farms.flatMap(farm => farm.products));
        const categoryQualities = appData.map(c => c.quality);
        const qualities = ['all', ...new Set(categoryQualities)];
        const productFarms = allNestedProducts.map(p => p.farm);
        const farms = ['all', ...new Set(productFarms)];
        qualityFilter.innerHTML = qualities.map(q => `<option value="${q}">${q === 'all' ? '📝 - CATEGORIES' : q}</option>`).join('');
        farmFilter.innerHTML = farms.map(farm => `<option value="${farm}">${farm === 'all' ? '👨‍🌾  -  FARM' : farm}</option>`).join('');
        searchFilter.addEventListener('input', (e) => { currentFilters.searchTerm = e.target.value; renderHomePage(); });
        qualityFilter.addEventListener('change', (e) => { currentFilters.quality = e.target.value; renderHomePage(); });
        farmFilter.addEventListener('change', (e) => { currentFilters.farm = e.target.value; renderHomePage(); });
    }

    function showNotification(message) {
        const notification = document.getElementById('notification-toast');
        if (!notification) return;
        clearTimeout(notificationTimeout);
        notification.classList.remove('show');
        void notification.offsetWidth;
        notification.innerText = message;
        notification.classList.add('show');
        notificationTimeout = setTimeout(() => { notification.classList.remove('show'); }, 3000);
    }

    function addToCart(productId, weight, price) {
        let selectedOption = currentSelectedOption;
        const cartItemId = selectedOption ? `${productId}-${weight}-${selectedOption}` : `${productId}-${weight}`;
        const existingItem = cart.find(item => item.id === cartItemId);
        const product = getProductById(productId);
        if (existingItem) {
            existingItem.quantity++;
            existingItem.totalPrice = existingItem.quantity * existingItem.unitPrice;
        } else {
            cart.push({
                id: cartItemId,
                productId: productId,
                name: product.name,
                image: product.image,
                weight: weight,
                quantity: 1,
                unitPrice: price,
                totalPrice: price,
                option: selectedOption
            });
        }
        renderCart();
        tg.HapticFeedback.notificationOccurred('success');
        showNotification('✅ Produit ajouté au panier !');
    }

    function updateQuantity(cartItemId, action) {
        const item = cart.find(i => i.id === cartItemId);
        if (!item) return;
        if (action === 'increase') { item.quantity++; } else if (action === 'decrease') { item.quantity--; }
        if (item.quantity <= 0) { cart = cart.filter(i => i.id !== cartItemId); } else { item.totalPrice = item.quantity * item.unitPrice; }
        renderCart();
    }

    function formatOrderMessage() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        let discount = 0;
        if (appliedPromo) {
            const promo = validPromoCodes[appliedPromo];
            let discountableAmount = 0;
            if (promo.appliesTo === 'eligible') {
                cart.forEach(item => { const product = getProductById(item.productId); if (product && product.promoEligible) discountableAmount += item.totalPrice; });
            } else { discountableAmount = subTotal; }
            if (promo.type === 'percent') { discount = (discountableAmount * promo.value) / 100; } else { discount = promo.value; }
        }
        if (discount > subTotal) discount = subTotal;
        const totalPrice = subTotal - discount;
        const date = new Date();
        const formattedDate = `${date.getDate()} ${date.toLocaleString('fr-FR', { month: 'long' })} ${date.getFullYear()} a ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
        let message = "NOUVELLE COMMANDE\n\n";
        message += "====================\n";
        message += "RESUME:\n";
        message += `- ${totalItems} article${totalItems > 1 ? 's' : ''} commande\n`;
        message += `- Méthode de paiement: ${paymentMethod}\n`;
        message += "====================\n";
        message += `DETAIL DES ARTICLES:\n`;
        cart.forEach((item) => {
            message += `\n- ${item.name}`;
            if (item.option) message += ` (${item.option})`;
            message += `\n  Quantite: ${item.quantity}x ${item.weight}`;
            message += `\n  Prix unitaire: ${item.unitPrice.toFixed(2)}e`;
            message += `\n  Sous-total: ${item.totalPrice.toFixed(2)} EUR`;
        });
        message += `\n\n====================\n`;
        message += `\nSOUS-TOTAL: ${subTotal.toFixed(2)} EUR`;
        if (discount > 0) message += `\nREDUCTION (${appliedPromo}): -${discount.toFixed(2)} EUR`;
        message += `\nTOTAL FINAL: ${totalPrice.toFixed(2)} EUR`;
        message += " \n-LIVRAISON: A convenir\n";
        message += " \n-CONTACT: Merci de confirmer cette commande\n";
        message += ` \n-Commande passee le: ${formattedDate}\n`;
        return message;
    }

    function copyToClipboard(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                showNotification('✅ Commande copiée ! Colle-la dans le chat.');
                tg.HapticFeedback.notificationOccurred('success');
            }, (err) => { showNotification('❌ Erreur en copiant le message'); });
        } else {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                showNotification('✅ Commande copiée ! Colle-la dans le chat.');
                tg.HapticFeedback.notificationOccurred('success');
            } catch (err) { showNotification('❌ Erreur en copiant le message'); }
            document.body.removeChild(textArea);
        }
    }

    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const pageId = item.dataset.page;
            if (!pageId) return;
            if (pageId === 'page-contact') renderContactPage();
            if (pageId === 'page-home') {
                currentView = 'categories';
                currentCategoryId = null;
                currentFilters.searchTerm = '';
                currentFilters.quality = 'all';
                currentFilters.farm = 'all';
                document.getElementById('search-filter').value = '';
                document.getElementById('quality-filter').value = 'all';
                document.getElementById('farm-filter').value = 'all';
                renderHomePage();
            }
            showPage(pageId);
        });
    });

    document.body.addEventListener('click', function (e) {
        const target = e.target;

        // --- GESTION DES CLICS SUR LES OPTIONS (Style Smockyclub avec COULEURS) ---
        if (target.classList.contains('option-btn')) {
            // 1. Mise à jour visuelle des boutons
            const allOptionBtns = document.querySelectorAll('.option-btn');
            allOptionBtns.forEach(btn => {
                btn.style.backgroundColor = 'var(--tertiary-bg-color)';
                btn.style.border = '1px solid transparent';
                btn.classList.remove('active');
            });

            target.classList.add('active');

            // 2. On récupère la classe couleur définie dans l'objet product
            const colorClass = target.dataset.colorClass;

            // 3. On applique le style au bouton cliqué (au cas où le CSS ne suffirait pas)
            // Mais le mieux est de gérer ça via l'application de la classe sur le conteneur parent (voir point 4)
            // target.style.backgroundColor = '#00c7be'; // Fallback

            // 4. 🔥 MAGIE SMOCKYCLUB : On applique la couleur aux items de TARIFS
            const tarifItems = document.querySelectorAll('#product-details-content .tarif-item');
            tarifItems.forEach(item => {
                // On retire TOUTES les classes de couleur possibles pour être sûr
                item.className = 'tarif-item'; // Reset classes

                // On ajoute la classe spécifique de la variété sélectionnée
                if (colorClass) {
                    item.classList.add(colorClass);
                }
            });

            // 5. Enregistrer la sélection
            currentSelectedOption = target.dataset.value;

            // 6. Déverrouiller les boutons "Ajouter au panier"
            const addButtons = document.querySelectorAll('.add-to-cart-btn');
            addButtons.forEach(btn => {
                btn.disabled = false;
                btn.style.opacity = '1';
                btn.style.cursor = 'pointer';
                // Note: La couleur du bouton panier est gérée par le CSS de la classe (ex: .opt-dragon-og .add-to-cart-btn)
            });
        }

        // ... (Reste des listeners : copy-order, accordion, cat card, etc. INCHANGÉS) ...
        if (target.closest('#copy-order-btn')) {
            let message = formatOrderMessage();
            message = message.replace(/\*/g, '');
            copyToClipboard(message);
            const copyBtn = document.getElementById('copy-order-btn');
            const contactBtn = document.getElementById('confirm-order-button');
            copyBtn.classList.remove('main-action-btn');
            copyBtn.classList.add('secondary-action-btn');
            contactBtn.classList.remove('secondary-action-btn');
            contactBtn.classList.add('main-action-btn');
            contactBtn.disabled = false;
            return;
        }

        const accordionHeader = target.closest('.accordion-header');
        if (accordionHeader) {
            const accordionItem = accordionHeader.parentElement;
            document.querySelectorAll('#page-info .accordion-item.active').forEach(item => { if (item !== accordionItem) item.classList.remove('active'); });
            accordionItem.classList.toggle('active');
            return;
        }

        const categoryCard = target.closest('.category-card');
        if (categoryCard) {
            currentCategoryId = categoryCard.dataset.categoryId;
            const category = appData.find(c => c.id === currentCategoryId);
            if (category && category.directToProducts) {
                currentView = 'products';
                currentFarmId = `${currentCategoryId}_DEFAULT`;
            } else {
                currentView = 'farms';
                currentFarmId = null;
            }
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        const farmCard = target.closest('.farm-card');
        if (farmCard) {
            if (farmCard.classList.contains('unclickable')) return;
            currentView = 'products';
            currentFarmId = farmCard.dataset.farmId;
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        const productCard = target.closest('.product-item-card');
        if (productCard) {
            if (productCard.classList.contains('unclickable')) return;
            renderProductPage(productCard.dataset.productId);
            return;
        }

        if (target.closest('.back-to-categories-btn')) {
            currentView = 'categories';
            currentCategoryId = null;
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        if (target.closest('.back-to-farms-btn')) {
            const category = appData.find(c => c.id === currentCategoryId);
            if (category && category.directToProducts) {
                currentView = 'categories';
                currentCategoryId = null;
            } else {
                currentView = 'farms';
                currentFarmId = null;
            }
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        if (target.closest('#apply-promo-btn')) {
            const input = document.getElementById('promo-code-input');
            const code = input.value.toUpperCase();
            if (validPromoCodes[code]) {
                appliedPromo = code;
                tg.HapticFeedback.notificationOccurred('success');
                showNotification('✅ Code promo appliqué !');
            } else {
                appliedPromo = null;
                tg.HapticFeedback.notificationOccurred('error');
                showNotification('❌ Code promo invalide.');
            }
            renderConfirmation();
        }

        if (target.closest('#remove-promo-btn')) { appliedPromo = null; showNotification('Code promo retiré.'); renderConfirmation(); }

        if (target.closest('.payment-btn')) {
            paymentMethod = target.closest('.payment-btn').dataset.method;
            document.querySelectorAll('.payment-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.method === paymentMethod);
            });
        }

        if (target.closest('.add-to-cart-btn')) {
            const btn = target.closest('.add-to-cart-btn');
            if (btn.disabled) return;
            addToCart(btn.dataset.productId, btn.dataset.weight, parseFloat(btn.dataset.price));
        }

        if (target.closest('.quantity-btn')) { const btn = target.closest('.quantity-btn'); updateQuantity(btn.dataset.id, btn.dataset.action); }
        if (target.closest('.close-button')) { showPage('page-home'); }
        if (target.closest('#cart-continue-shopping')) { showPage('page-home'); }
        if (target.closest('.back-button')) { showPage('page-home'); }
        if (target.closest('#home-cart-button')) { renderCart(); showPage('page-cart'); }
        if (target.closest('#checkout-button')) { renderConfirmation(); }
        if (target.closest('#confirmation-modify-order')) { showPage('page-cart'); }

        if (target.closest('#confirm-order-button')) {
            const telegramUrl = "https://t.me/PlugsBotOfficielBot";
            let message = formatOrderMessage();
            message = message.replace(/\*/g, '');
            copyToClipboard(message);
            tg.openLink(telegramUrl);
        }
    });

    function init() {
        setTimeout(() => { populateFilters(); renderHomePage(); updateCartCount(); showPage('page-home'); }, 1500);
    }

    init();
});