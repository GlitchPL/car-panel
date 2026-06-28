export type PartCategory = {
  id: string;
  name: string;
  parts: string[];
};

export const partCategories: PartCategory[] = [
  // Data from the provided list – kept identical for simplicity.
  { id: "service", name: "Serwis eksploatacyjny", parts: [
    "Olej silnikowy",
    "Filtr oleju",
    "Filtr powietrza",
    "Filtr kabinowy",
    "Świece zapłonowe",
    "Płyn chłodniczy",
    "Płyn hamulcowy",
    "Płyn do spryskiwaczy",
    "Pasek osprzętu"
  ] },
  { id: "engine", name: "Silnik", parts: [
    "Cewki zapłonowe",
    "Pokrywa zaworów",
    "Uszczelka pokrywy zaworów",
    "Poduszka silnika prawa",
    "Poduszka silnika lewa",
    "Poduszka tylna silnika",
    "Czujnik położenia wału",
    "Czujnik temperatury silnika"
  ] },
  { id: "intake-fuel", name: "Dolot i paliwo", parts: [
    "Przepustnica",
    "Przewód dolotowy",
    "Filtr paliwa",
    "Pompa paliwa",
    "Wtryskiwacze"
  ] },
  { id: "cooling", name: "Chłodzenie", parts: [
    "Chłodnica",
    "Termostat",
    "Pompa wody",
    "Wentylator chłodnicy",
    "Zbiorniczek wyrównawczy",
    "Korek zbiorniczka",
    "Przewód górny chłodnicy",
    "Przewód dolny chłodnicy"
  ] },
  { id: "ac-heating", name: "Klimatyzacja i ogrzewanie", parts: [
    "Sprężarka klimatyzacji",
    "Skraplacz klimatyzacji",
    "Osuszacz klimatyzacji",
    "Dmuchawa nawiewu",
    "Rezystor dmuchawy",
    "Nagrzewnica"
  ] },
  { id: "exhaust", name: "Wydech", parts: [
    "Sonda lambda przednia",
    "Sonda lambda tylna",
    "Łącznik elastyczny",
    "Tłumik środkowy",
    "Tłumik końcowy",
    "Wieszaki wydechu"
  ] },
  { id: "clutch-gearbox", name: "Sprzęgło i skrzynia", parts: [
    "Tarcza sprzęgła",
    "Docisk sprzęgła",
    "Łożysko oporowe",
    "Wysprzęglik",
    "Poduszka skrzyni biegów",
    "Uszczelniacz półosi lewy",
    "Uszczelniacz półosi prawy"
  ] },
  { id: "drivetrain", name: "Napęd", parts: [
    "Półoś lewa",
    "Półoś prawa",
    "Przegub zewnętrzny lewy",
    "Przegub zewnętrzny prawy",
    "Przegub wewnętrzny lewy",
    "Przegub wewnętrzny prawy",
    "Osłona przegubu lewa",
    "Osłona przegubu prawa"
  ] },
  { id: "brakes", name: "Hamulce", parts: [
    "Klocki hamulcowe przód",
    "Tarcze hamulcowe przód",
    "Klocki hamulcowe tył",
    "Tarcze hamulcowe tył",
    "Zacisk hamulcowy lewy przód",
    "Zacisk hamulcowy prawy przód",
    "Zacisk hamulcowy lewy tył",
    "Zacisk hamulcowy prawy tył",
    "Przewody hamulcowe",
    "Linka hamulca ręcznego",
    "Czujnik ABS lewy przód",
    "Czujnik ABS prawy przód",
    "Czujnik ABS lewy tył",
    "Czujnik ABS prawy tył"
  ] },
  { id: "front-suspension", name: "Zawieszenie przód", parts: [
    "Amortyzator lewy przód",
    "Amortyzator prawy przód",
    "Sprężyna lewa przód",
    "Sprężyna prawa przód",
    "Poduszka amortyzatora lewa",
    "Poduszka amortyzatora prawa",
    "Łożysko amortyzatora lewe",
    "Łożysko amortyzatora prawe",
    "Wahacz lewy",
    "Wahacz prawy",
    "Sworzeń wahacza lewy",
    "Sworzeń wahacza prawy",
    "Tuleja wahacza przednia",
    "Tuleja wahacza tylna",
    "Łącznik stabilizatora lewy",
    "Łącznik stabilizatora prawy"
  ] },
  { id: "rear-suspension", name: "Zawieszenie tył", parts: [
    "Amortyzator lewy tył",
    "Amortyzator prawy tył",
    "Sprężyna lewa tył",
    "Sprężyna prawa tył",
    "Guma sprężyny tylnej",
    "Tuleje belki tylnej",
    "Łącznik stabilizatora tył"
  ] },
  { id: "steering", name: "Układ kierowniczy", parts: [
    "Końcówka drążka lewa",
    "Końcówka drążka prawa",
    "Drążek kierowniczy lewy",
    "Drążek kierowniczy prawy",
    "Osłona maglownicy lewa",
    "Osłona maglownicy prawa",
    "Maglownica"
  ] },
  { id: "wheels-tires", name: "Koła i opony", parts: [
    "Opony letnie",
    "Opony zimowe",
    "Felga lewa przód",
    "Felga prawa przód",
    "Felga lewa tył",
    "Felga prawa tył",
    "Śruby kół",
    "Wentyle"
  ] },
  { id: "battery-charging", name: "Akumulator i ładowanie", parts: [
    "Akumulator",
    "Alternator",
    "Regulator napięcia",
    "Przewód masowy",
    "Klema dodatnia",
    "Klema ujemna"
  ] },
  { id: "starting", name: "Rozruch", parts: [
    "Rozrusznik",
    "Bendiks",
    "Przekaźnik rozrusznika",
    "Kostka stacyjki"
  ] },
  { id: "lighting", name: "Oświetlenie", parts: [
    "Żarówka mijania lewa",
    "Żarówka mijania prawa",
    "Żarówka drogowa lewa",
    "Żarówka drogowa prawa",
    "Żarówka pozycyjna",
    "Żarówka kierunkowskazu",
    "Żarówka przeciwmgielna",
    "Lampa tylna lewa",
    "Lampa tylna prawa",
    "Podświetlenie tablicy"
  ] },
  { id: "electrics", name: "Elektryka i czujniki", parts: [
    "Bezpieczniki",
    "Przekaźniki",
    "Czujnik temperatury zewnętrznej",
    "Czujnik cofania",
    "Czujnik drzwi kierowcy",
    "Czujnik drzwi pasażera"
  ] },
  { id: "wipers", name: "Wycieraczki i spryskiwacze", parts: [
    "Pióro wycieraczki przód lewe",
    "Pióro wycieraczki przód prawe",
    "Pióro wycieraczki tył",
    "Silnik wycieraczek",
    "Pompka spryskiwacza",
    "Dysza spryskiwacza"
  ] },
  { id: "front-body", name: "Nadwozie przód", parts: [
    "Zderzak przedni",
    "Grill",
    "Maska",
    "Błotnik lewy przód",
    "Błotnik prawy przód",
    "Reflektor lewy",
    "Reflektor prawy",
    "Nadkole lewe przód",
    "Nadkole prawe przód"
  ] },
  { id: "rear-body", name: "Nadwozie tył", parts: [
    "Zderzak tylny",
    "Klapa bagażnika",
    "Nadkole lewe tył",
    "Nadkole prawe tył",
    "Listwa tylna"
  ] },
  { id: "glass-mirrors", name: "Szyby i lusterka", parts: [
    "Szyba przednia",
    "Szyba boczna lewa przód",
    "Szyba boczna prawa przód",
    "Szyba boczna lewa tył",
    "Szyba boczna prawy tył",
    "Szyba tylna",
    "Lusterko lewe",
    "Lusterko prawe",
    "Wkład lusterka lewy",
    "Wkład lusterka prawy"
  ] },
  { id: "doors-locks", name: "Drzwi i zamki", parts: [
    "Zamek drzwi kierowcy",
    "Zamek drzwi pasażera",
    "Zamek drzwi lewy tył",
    "Zamek drzwi prawy tył",
    "Klamka zewnętrzna lewa przód",
    "Klamka zewnętrzna prawa przód",
    "Ogranicznik drzwi",
    "Uszczelki drzwi"
  ] },
  { id: "interior", name: "Wnętrze", parts: [
    "Gałka zmiany biegów",
    "Mieszek zmiany biegów",
    "Przełącznik szyb",
    "Radio",
    "Głośnik drzwi lewy",
    "Głośnik drzwi prawy",
    "Dywaniki",
    "Podsufitka"
  ] },
  { id: "trunk-accessories", name: "Bagażnik i wyposażenie", parts: [
    "Mata bagażnika",
    "Siłownik klapy lewy",
    "Siłownik klapy prawy",
    "Koło zapasowe",
    "Lewarek",
    "Klucz do kół",
    "Apteczka",
    "Gaśnica"
  ] }
];

export type Part = {
  name: string;
  categoryId: string;
  status: "ok" | "check" | "replace";
  zone?: string; // optional field for e.g., front/rear
  buyLink?: string;
  notes?: string;
};

export const partsStateSeed: Part[] = [
  {
    name: "Olej silnikowy",
    categoryId: "service",
    status: "ok",
    zone: "Silnik",
    buyLink: "https://example.com/parts/oil-5l",
    notes: "Wymieniono raz w 2024"
  },
  {
    name: "Filtr powietrza",
    categoryId: "service",
    status: "check",
    zone: "Silnik",
    buyLink: "https://example.com/parts/air-filter",
    notes: "Część wymagana do serwisu w 2025"
  },
  {
    name: "Klocki hamulcowe przód",
    categoryId: "brakes",
    status: "replace",
    zone: "Hamulce",
    buyLink: "https://example.com/parts/front-brake-pads",
    notes: "Wymiana planowana na 2025"
  }
];
