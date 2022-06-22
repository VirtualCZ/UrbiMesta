/**
 * This file is property of URBITECH s.r.o. any unlawful sharing
 * will be punished.
 */

// TOWNS
export const towns = {
  1: {
    name: "Obec Hrádek",
    region: "Zlínský kraj",
    street: "Hrádek 1",
    city: "123 45 Hrádek",
    phone: "999 999 999",
    mobile: "666 666 666",
    email: "hradek@hlasenirozhlasu.cz",
    url: "http://www.smarthradek.cz",
    ico: "123456789",
    dic: "CZ123456789",
    logo: "https://hradek.hlasenirozhlasu.cz/files/hradek/logo/logo.png",
    coords: {
      lat: 49.1163,
      lng: 17.4279,
    },
  },
  2: {
    name: "Obec Jalubí",
    region: "Zlínský kraj",
    street: "Jalub 1",
    city: "123 45 Jalubí",
    phone: "999 999 999",
    mobile: "666 666 666",
    email: "jalubi@hlasenirozhlasu.cz",
    url: "http://www.smartjalubi.cz",
    ico: "123456789",
    dic: "CZ123456789",
    logo: "https://www.jalubi.eu/skins/jalubi.eu_lego2/images/crest.png",
    coords: {
      lat: 50.1163,
      lng: 18.4279,
    },
  },
};

// EVENTS

export const events = [
  {
    id: 1235,
    town_id: 2,
    eventFrom: null,
    eventTo: null,
    name: "Prodej masa",
    text: "Řeznictví Zbořil Otrokovice bude 8.6.2022 prodávat od 16.15 do 16.45 u kavárny čerstvé vepřové a hovězí maso, vlastní zabíjačku a uzeniny.",
    textHTML:
      "<p>Řeznictví Zbořil Otrokovice bude 8.6.2022 prodávat od 16.15 do 16.45 u kavárny čerstvé vepřové a hovězí maso, vlastní zabíjačku a uzeniny.</p> ",
    link: "https://hradek.beta.hlasenirozhlasu.cz/default/report/1235_prodej-masa",
    attachments: [],
  },
  {
    id: 1233,
    town_id: 2,
    eventFrom: null,
    eventTo: null,
    name: "Program SK Jalubí",
    text: "Program SK Jalubí 12.6.2022, utkání proběhnou na domácím hřišti: žáci sehrají od 10 hodin utkání s Traplicemi přípravka se od 15 hodin utká s Polešovicemi muži sehrají od 17 hodin utkání nadstavbové části s Traplicemi",
    textHTML:
      "<p>Program SK Jalubí 12.6.2022, utkání proběhnou na domácím hřišti:</p>  <ul>  <li>žáci sehrají od 10 hodin utkání s Traplicemi</li>   <li>přípravka se od 15 hodin utká s Polešovicemi</li>   <li>muži sehrají od 17 hodin utkání nadstavbové části s Traplicemi</li> </ul> ",
    link: "https://hradek.beta.hlasenirozhlasu.cz/default/report/1233_program-sk-jalubi",
    attachments: [],
  },
  {
    id: 1234,
    town_id: 2,
    eventFrom: null,
    eventTo: null,
    name: "Prodejce pan Synek",
    text: "Prodejce pan Synek bude 8.6.2022 prodávat od 12 do 12.30 hod. u hasičské zbrojnice jablka Golden, Jonagold a Idaret cena 20 – 25 Kč/kg, brambory balení 10 kg za 150 Kč, cibuli 15 Kč/kg a včelí med 190 Kč/kg.",
    textHTML:
      "<p>Prodejce pan Synek bude 8.6.2022 prodávat od 12 do 12.30 hod. u hasičské zbrojnice jablka Golden, Jonagold a Idaret cena 20 – 25 Kč/kg, brambory balení 10 kg za 150 Kč, cibuli 15 Kč/kg a včelí med 190 Kč/kg.</p> ",
    link: "https://hradek.beta.hlasenirozhlasu.cz/default/report/1234_prodejce-pan-synek",
    attachments: [],
  },
  {
    id: 1232,
    town_id: 2,
    eventFrom: null,
    eventTo: null,
    name: "Prodej textilu a obuvi",
    text: "Soukromý prodejce bude 7.6.2022 prodávat od 8 do 12 hodin u Jednoty textil a obuv.",
    textHTML:
      "<p>Soukromý prodejce bude 7.6.2022 prodávat od 8 do 12 hodin u Jednoty textil a obuv.</p> ",
    link: "https://hradek.beta.hlasenirozhlasu.cz/default/report/1232_prodej-textilu-a-obuvi",
    attachments: [],
  },
  {
    id: 1231,
    town_id: 2,
    eventFrom: null,
    eventTo: null,
    name: "Firma ROKUP",
    text: "Firma ROKUP bude 3.6.2022 prodávat v 11.45 u hasičské zbrojnice nosné kuřice za 205 Kč, krmiva s vitamíny pro slepice a králíky za 285 Kč a vitamínové doplňky pro drůbež. Dále bude vykupovat králičí kůže 20 Kč/ks.",
    textHTML:
      "<p>Firma ROKUP bude 3.6.2022 prodávat v 11.45 u hasičské zbrojnice nosné kuřice za 205 Kč, krmiva s vitamíny pro slepice a králíky za 285 Kč a vitamínové doplňky pro drůbež. Dále bude vykupovat králičí kůže 20 Kč/ks.</p> ",
    link: "https://hradek.beta.hlasenirozhlasu.cz/default/report/1231_firma-rokup",
    attachments: [],
  },
  {
    id: 1230,
    town_id: 2,
    eventFrom: null,
    eventTo: null,
    name: "Obec Sušice - zájezd na Svatý Hostýn zrušení + nový zájezd",
    text: "Obec Sušice oznamuje, že z důvodu rozsáhlé rekonstrukce na Svatém Hostýnu zrušila plánovaný zájezd 21.6.2022. Namísto tohoto zájezdu pořádá dne 21.6.2022 zájezd na Svatý Kopeček u Olomouce s následujícím programem: V 9 hod. je sloužena mše svatá v bazilice, po mši bude prohlídka baziliky a muzea s průvodcem, poté společný oběd a odjezd domů. Cena zájezdu je 200 Kč na osobu. Odjezd autobusu bude upřesněn. Přihlásit se můžete u paní Věry Šilcové, tel.č. 776 333 961 nebo na obecním úřadě v Sušicích, telefon 777 886 442.",
    textHTML:
      '<p>Obec Sušice oznamuje, že z důvodu rozsáhlé rekonstrukce na Svatém Hostýnu zrušila plánovaný zájezd 21.6.2022. Namísto tohoto zájezdu pořádá dne 21.6.2022 zájezd na Svatý Kopeček u Olomouce s následujícím programem: V 9 hod. je sloužena mše svatá v bazilice, po mši bude prohlídka baziliky a muzea s průvodcem, poté společný oběd a odjezd domů. Cena zájezdu je 200 Kč na osobu. Odjezd autobusu bude upřesněn. Přihlásit se můžete u paní Věry Šilcové, tel.č. <a href="tel:776333961"> 776 333 961</a> nebo na obecním úřadě v Sušicích, telefon <a href="tel:777886442"> 777 886 442</a>.</p> ',
    link: "https://hradek.beta.hlasenirozhlasu.cz/default/report/1230_obec-susice-zajezd-na-svaty-hostyn-zruseni-novy-zajezd",
    attachments: [],
  },
  {
    id: 1229,
    town_id: 2,
    eventFrom: null,
    eventTo: null,
    name: "Test z Hrádku beta",
    text: "Lorem ipsum dolor sit amet",
    textHTML: "<p>Lorem ipsum dolor sit amet</p> ",
    link: "https://hradek.beta.hlasenirozhlasu.cz/default/report/1229_test-z-hradku-beta",
    attachments: [
      {
        id: 667,
        name: "pexels-photomix-company-235294.jpg",
        url: "https://beta.hlasenirozhlasu.cz/files/hradek/attachments/1229/pexels-photomix-company-235294.jpeg",
        full: {
          width: 2157,
          height: 1440,
          url: "https://beta.hlasenirozhlasu.cz/files/hradek/attachments/1229/pexels-photomix-company-235294.jpeg",
        },
        preview: {
          width: 1280,
          height: 855,
          url: "https://beta.hlasenirozhlasu.cz/files/thumbs/hradek/attachments/1229/d3fa353d26efbfecfe4ac5f9394ad692.jpeg",
        },
        thumbnail: {
          url: "https://beta.hlasenirozhlasu.cz/files/thumbs/hradek/attachments/1229/129bfb97897c739b4bfff23df5a126d8.jpeg",
        },
      },
      {
        id: 668,
        name: "pexels-pixabay-158316.jpg",
        url: "https://beta.hlasenirozhlasu.cz/files/hradek/attachments/1229/pexels-pixabay-158316.jpeg",
        full: {
          width: 2163,
          height: 1440,
          url: "https://beta.hlasenirozhlasu.cz/files/hradek/attachments/1229/pexels-pixabay-158316.jpeg",
        },
        preview: {
          width: 1280,
          height: 852,
          url: "https://beta.hlasenirozhlasu.cz/files/thumbs/hradek/attachments/1229/54e565a204b0c92cfa8c8bf41ebbc3e4.jpeg",
        },
        thumbnail: {
          url: "https://beta.hlasenirozhlasu.cz/files/thumbs/hradek/attachments/1229/7f95b1a2841e724e48d6bdf4df159b45.jpeg",
        },
      },
    ],
  },
  {
    id: 1195,
    town_id: 1,
    eventFrom: null,
    eventTo: null,
    name: "Test z Hrádku beta II",
    text: "Test z Hrádku beta II",
    textHTML: "<p>Test z Hrádku beta II <br> </p> ",
    link: "https://hradek.beta.hlasenirozhlasu.cz/default/report/1195_test-z-hradku-beta-ii",
    attachments: [
      {
        id: 660,
        name: "pexels-photomix-company-235294.jpg",
        url: "https://beta.hlasenirozhlasu.cz/files/hradek/attachments/1195/pexels-photomix-company-235294.jpeg",
        full: {
          width: 2157,
          height: 1440,
          url: "https://beta.hlasenirozhlasu.cz/files/hradek/attachments/1195/pexels-photomix-company-235294.jpeg",
        },
        preview: {
          width: 1280,
          height: 855,
          url: "https://beta.hlasenirozhlasu.cz/files/thumbs/hradek/attachments/1195/cbd2c1f1bf1c9187d29192f740d33b84.jpeg",
        },
        thumbnail: {
          url: "https://beta.hlasenirozhlasu.cz/files/thumbs/hradek/attachments/1195/2b16a40fb2a4ca3156cb937bd13cd30c.jpeg",
        },
      },
      {
        id: 661,
        name: "pexels-pixabay-158316.jpg",
        url: "https://beta.hlasenirozhlasu.cz/files/hradek/attachments/1195/pexels-pixabay-158316.jpeg",
        full: {
          width: 2163,
          height: 1440,
          url: "https://beta.hlasenirozhlasu.cz/files/hradek/attachments/1195/pexels-pixabay-158316.jpeg",
        },
        preview: {
          width: 1280,
          height: 852,
          url: "https://beta.hlasenirozhlasu.cz/files/thumbs/hradek/attachments/1195/3a5715a7ef250d94cedaf3affe6f5f01.jpeg",
        },
        thumbnail: {
          url: "https://beta.hlasenirozhlasu.cz/files/thumbs/hradek/attachments/1195/1d737ead3964efa5884eb6f04555388e.jpeg",
        },
      },
    ],
  },
  {
    id: 1123,
    town_id: 2,
    eventFrom: null,
    eventTo: null,
    name: "Test z Hrádku (MP) beta",
    text: "Test z Hrádku (MP) beta",
    textHTML: "<p>Test z Hrádku (MP) beta</p> ",
    link: "https://hradek.beta.hlasenirozhlasu.cz/default/report/1123_test-z-hradku-mp-beta",
    attachments: [
      {
        id: 576,
        name: "pexels-photomix-company-235294.jpg",
        url: "https://beta.hlasenirozhlasu.cz/files/hradek/attachments/1123/pexels-photomix-company-235294.jpeg",
        full: {
          width: 2157,
          height: 1440,
          url: "https://beta.hlasenirozhlasu.cz/files/hradek/attachments/1123/pexels-photomix-company-235294.jpeg",
        },
        preview: {
          width: 1280,
          height: 855,
          url: "https://beta.hlasenirozhlasu.cz/files/thumbs/hradek/attachments/1123/67cdc1166d0d5d7b10126efb5d24c2d9.jpeg",
        },
        thumbnail: {
          url: "https://beta.hlasenirozhlasu.cz/files/thumbs/hradek/attachments/1123/f017706eec2582f694c1ad78eda6181e.jpeg",
        },
      },
      {
        id: 577,
        name: "pexels-pixabay-158316.jpg",
        url: "https://beta.hlasenirozhlasu.cz/files/hradek/attachments/1123/pexels-pixabay-158316.jpeg",
        full: {
          width: 2163,
          height: 1440,
          url: "https://beta.hlasenirozhlasu.cz/files/hradek/attachments/1123/pexels-pixabay-158316.jpeg",
        },
        preview: {
          width: 1280,
          height: 852,
          url: "https://beta.hlasenirozhlasu.cz/files/thumbs/hradek/attachments/1123/9dfb4ccd38c410e871ed7bc8e9a1d986.jpeg",
        },
        thumbnail: {
          url: "https://beta.hlasenirozhlasu.cz/files/thumbs/hradek/attachments/1123/becc6444246de603842ea3d7fd441450.jpeg",
        },
      },
    ],
  },
];
