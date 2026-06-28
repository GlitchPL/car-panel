# CLAUDE.md

## Cel projektu
To jest prywatna, lokalna aplikacja webowa do zarządzania samochodem.
Projekt nie jest przeznaczony do publikacji publicznej.
Aplikacja ma działać lokalnie w domu i być używana tylko przez właściciela.

## Założenia główne
- Aplikacja jest tylko do użytku prywatnego.
- Nie planujemy wdrożenia publicznego.
- Nie ma systemu kont ani logowania.
- Projekt dotyczy jednego samochodu.
- W wersji v1 nie ma remindersów.
- Można dodawać zdjęcia rachunków i części.
- Aplikacja ma być łatwa do uruchomienia lokalnie.
- Należy ograniczać dodatkowe instalacje i zależności do minimum.

## Założenie o użytkowniku
Użytkownik nie chce ręcznie konfigurować projektu bardziej niż to konieczne.
Użytkownik potrzebuje gotowych komend i prostych instrukcji krok po kroku.
Nie zakładaj zaawansowanej wiedzy developerskiej po stronie użytkownika.
Traktuj użytkownika jak osobę, która nie chce samodzielnie rozwiązywać problemów konfiguracyjnych.

## Priorytety
1. Prostota i czytelność.
2. Ładny, nowoczesny interfejs.
3. Małe i bezpieczne zmiany.
4. Jak najmniej ręcznych kroków po stronie użytkownika.
5. Uruchamialność projektu bez zbędnej infrastruktury.
6. Dobra struktura danych i przejrzysty kod.

## Stack
Preferowany stack:
- React
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui

Jeśli któreś narzędzie znacząco komplikuje start projektu, preferuj prostsze rozwiązanie.
Nie dokładaj backendu, bazy danych, Dockera ani autoryzacji bez wyraźnej potrzeby.

## Zakres MVP
Aplikacja ma zawierać:
- Dashboard
- Parts z prostą sylwetką auta i hotspotami
- Expenses
- Service History
- Fuel Tracker
- Vehicle Profile
- Obsługę zdjęć rachunków i części

W MVP:
- Jeden samochód
- Bez logowania
- Bez remindersów
- Bez deploymentu publicznego

## Wizja produktu
To ma być lokalny panel do zarządzania samochodem.
UI ma być hybrydą stylu warsztatowo-technicznego i nowoczesnego minimalistycznego dashboardu.
Dashboard ma być prostszy, spokojniejszy i bardziej przejrzysty.
Widoki szczegółowe mogą być bardziej techniczne, bogatsze w dane i bardziej rozbudowane.

## Zasady operacyjne
- Jeśli coś możesz zrobić sam w projekcie, zrób to sam.
- Nie wymagaj dodatkowych instalacji, jeśli nie są absolutnie konieczne.
- Minimalizuj liczbę kroków ręcznych po stronie użytkownika.
- Jeśli potrzebna jest komenda, podaj dokładnie jedną lub kilka komend w poprawnej kolejności.
- Po każdej większej zmianie sam sprawdzaj, czy projekt się buduje.
- Jeśli pojawi się błąd, najpierw spróbuj go sam naprawić.
- Na końcu każdej odpowiedzi napisz użytkownikowi dokładnie, co ma teraz uruchomić.
- Zakładaj lokalny, prosty workflow bez zbędnej infrastruktury.

## Zasady pracy
- Zawsze najpierw czytaj istniejące pliki projektu.
- Najpierw przygotuj plan, dopiero potem koduj.
- Buduj aplikację etapami, nie wszystko naraz.
- Rób małe diffy i unikaj dużych refaktorów bez wyraźnej potrzeby.
- Zachowuj spójność nazewnictwa i struktury folderów.
- Preferuj prostsze rozwiązania odpowiednie dla prywatnej aplikacji lokalnej.
- Jeśli czegoś brakuje, zaproponuj najprostsze sensowne założenie i je opisz.
- Nie zrzucaj odpowiedzialności za decyzje techniczne na użytkownika, jeśli możesz sam wybrać rozsądną opcję.

## Architektura
- Trzymaj logikę widoków osobno od komponentów UI.
- Używaj osobnych plików dla typów, danych przykładowych i helperów.
- Preferuj komponenty wielokrotnego użytku, ale bez przesadnej abstrakcji.
- SVG schematic samochodu trzymaj jako osobny komponent.
- Statusy części trzymaj jako jawny typ lub enum.
- Projektuj kod tak, by był czytelny i prosty do rozwijania.

## Dane
- Zakładaj jeden pojazd.
- Projektuj model danych tak, aby dało się kiedyś dodać więcej pojazdów, ale nie implementuj tego teraz.
- Dane lokalne mają być proste do zrozumienia i łatwe do edycji.
- Dodaj sensowne przykładowe dane seed do prezentacji UI.
- Jeśli zapis danych ma kilka opcji, wybierz tę najprostszą i najmniej problematyczną dla uruchomienia lokalnego.

## UX
- Priorytetem jest szybki podgląd stanu auta.
- Najważniejsze akcje mają być łatwo dostępne.
- Statusy części i koszty muszą być czytelne na pierwszy rzut oka.
- Formularze mają być krótkie, praktyczne i proste.
- Zadbaj o sensowne stany pustych danych.
- Zadbaj o dark mode.
- Zadbaj o responsywność, tak aby aplikacja była wygodna także na telefonie w sieci domowej.

## Jakość
- Po każdej większej zmianie uruchom build.
- Naprawiaj błędy TypeScript na bieżąco.
- Unikaj martwego kodu.
- Nie zostawiaj placeholderów, jeśli można dodać sensowną treść przykładową.
- Nie kończ pracy na "powinno działać" — sprawdź to.

## Odpowiedzialność agenta
Traktuj użytkownika jak osobę, która praktycznie nie wie, co robi przy tworzeniu aplikacji webowej od strony developmentu.
To znaczy:
- Ty odpowiadasz za architekturę projektu.
- Ty odpowiadasz za tworzenie i edycję plików.
- Ty odpowiadasz za dobór technologii w ramach ustalonego stacku.
- Ty odpowiadasz za uruchamianie projektu i sprawdzanie, czy działa.
- Ty odpowiadasz za podawanie użytkownikowi dokładnych komend tylko wtedy, gdy naprawdę musi coś zrobić ręcznie.

## Format odpowiedzi
Zawsze odpowiadaj w układzie:
- Plan
- Zmiany
- Pliki
- Weryfikacja
- Co mam teraz uruchomić

## Sekcja końcowa
W sekcji "Co mam teraz uruchomić" podawaj tylko rzeczy konieczne.
Podawaj je zawsze w prostym formacie:
- Otwórz terminal w katalogu projektu
- Wklej: npm run dev
- Oczekiwany efekt: aplikacja uruchomi się lokalnie pod adresem ...

Jeśli na danym etapie użytkownik nie musi nic robić ręcznie, napisz to wprost.
