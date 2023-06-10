interface Question {
    id: number
    question: string
    noAnswerShuffle?: boolean
    answers: Answer[]
}

interface Answer {
    id: number
    answer: string
    correct?: boolean
}

const questions: Question[] = [
    {
        id: 1,
        question: "Pamięć, w której wszystkie procesy widzą ten sam ciąg odwołań jest:",
        answers: [
            {
                id: 1,
                answer: "Spójna ściśle",
            },
            {
                id: 2,
                answer: "Spójna przyczynowo",
            },
            {
                id: 3,
                answer: "Spójna słabo",
            },
            {
                id: 4,
                answer: "Spójna sekwencyjnie",
                correct: true,
            },
        ],
    },
    {
        id: 2,
        question: "Aktualizacja plików przez głosowanie: dla 10 serwerów przyjęto, że 4 muszą wydać zgodę na zapis. " +
            "Zatem:",
        answers: [
            {
                id: 1,
                answer: "kworum pisania > 6",
            },
            {
                id: 2,
                answer: "kworum czytania > 6",
                correct: true,
            },
            {
                id: 3,
                answer: "kworum czytania = 4",
            },
            {
                id: 4,
                answer: "kworum pisania = 6",
            },
        ],
    },
    {
        id: 3,
        question: "Stronicowanie: okno zbioru roboczego = 10. Zbiór roboczy to:",
        answers: [
            {
                id: 1,
                answer: "Zbiór stron, których dotyczy 10 ostatnich odwołań.",
                correct: true,
            },
            {
                id: 2,
                answer: "10 aktywnych procesów",
            },
            {
                id: 3,
                answer: "10 ramek danego procesu",
            },
            {
                id: 4,
                answer: "Procesy generujące >10 błędów strony",
            },
        ],
    },
    {
        id: 4,
        question: "Najkrótszy średni czas oczekiwania procesu w kolejce zapewnia algorytm:",
        answers: [
            {
                id: 1,
                answer: "FCFS",
            },
            {
                id: 2,
                answer: "SJF",
            },
            {
                id: 3,
                answer: "SJF z wywłaszczeniem",
                correct: true,
            },
            {
                id: 4,
                answer: "Rotacyjny",
            },
        ],
    },
    {
        id: 5,
        question: "Twardy dysk: do obsługi żądań czasu rzeczywistego stosowany jest algorytm",
        answers: [
            {
                id: 1,
                answer: "EDF",
                correct: true,
            },
            {
                id: 2,
                answer: "LOOK",
            },
            {
                id: 3,
                answer: "SSTF",
            },
            {
                id: 4,
                answer: "C-SCAN",
            },
        ],
    },
    {
        id: 6,
        question: "W alg. rozproszonego wykrywania blokad wykrycie blokady ma miejsce gdy proces odbierze komunikat:",
        answers: [
            {
                id: 1,
                answer: "Z własnym numerem w polu \"twórca komunikatu\"",
                correct: true,
            },
            {
                id: 2,
                answer: "Przeterminowany",
            },
            {
                id: 3,
                answer: "Z numerem swojego następnika",
            },
            {
                id: 4,
                answer: "Z numerem zasobu, na który czeka",
            },
        ],
    },
    {
        id: 7,
        question: "Występowanie ciągłych błędów strony na skutek zastępowania stron, do których są częste odwołania " +
            "to:",
        answers: [
            {
                id: 1,
                answer: "Głodzenie",
            },
            {
                id: 2,
                answer: "Nieporozumienie",
            },
            {
                id: 3,
                answer: "Fragmentacja",
            },
            {
                id: 4,
                answer: "Szamotanie",
                correct: true,
            },
        ],
    },
    {
        id: 8,
        question: "Przy segmentacji RAM występuje:",
        answers: [
            {
                id: 1,
                answer: "Inflacja adresów",
            },
            {
                id: 2,
                answer: "Fragmentacja wewnętrzna",
            },
            {
                id: 3,
                answer: "Fragmentacja zewnętrzna",
                correct: true,
            },
            {
                id: 4,
                answer: "Głodzenie procesów",
            },
        ],
    },
    {
        id: 9,
        question: "Alg. optymalny usuwa stronę:",
        answers: [
            {
                id: 1,
                answer: "Najwcześniej załadowaną",
            },
            {
                id: 2,
                answer: "Najdłużej nieużywaną",
            },
            {
                id: 3,
                answer: "Najczęściej używaną",
            },
            {
                id: 4,
                answer: "Taką, która nie będzie najdłużej używana",
                correct: true,
            },
        ],
    },
    {
        id: 10,
        question: "Algorytm Lamporta zapewnia:",
        answers: [
            {
                id: 1,
                answer: "Spójność RAM",
            },
            {
                id: 2,
                answer: "Ustalenie max współczynnika odchylenia",
            },
            {
                id: 3,
                answer: "Uporządkowanie czasowe zdarzeń",
                correct: true,
            },
            {
                id: 4,
                answer: "Wykrycie blokady",
            },
        ],
    },
    {
        id: 11,
        question: "W aproksymowanym LRU bit odniesienia jest zerowany:",
        answers: [
            {
                id: 1,
                answer: "Przy załadowaniu strony",
            },
            {
                id: 2,
                answer: "Przy usuwaniu strony",
            },
            {
                id: 3,
                answer: "Przy poszukiwaniu strony do usunięcia",
                correct: true,
            },
            {
                id: 4,
                answer: "Przy błędzie strony",
            },
        ],
    },
    {
        id: 12,
        question: "Przy planowaniu przydziału procesora metodą SJF średni czas oczekiwania procesu:",
        answers: [
            {
                id: 1,
                answer: "Jest zawsze optymalny (najkrótszy)",
                correct: true,
            },
            {
                id: 2,
                answer: "Jest zawsze najdłuższy",
            },
            {
                id: 3,
                answer: "Jest równy czasowi dla metody FIFO z wywłaszczeniem",
            },
            {
                id: 4,
                answer: "Zależy od przyjętej długości kwantu czasu",
            },
        ],
    },
    {
        id: 13,
        question: "Algorytm FCFS planowania przydziału procesora:",
        answers: [
            {
                id: 1,
                answer: "Wymaga wywłaszczania",
            },
            {
                id: 2,
                answer: "Wymaga oszacowania długości fazy procesora",
            },
            {
                id: 3,
                answer: "Jest zawsze niewywłaszczający",
                correct: true,
            },
            {
                id: 4,
                answer: "Ma złożoność obliczeniową O(n^2)",
            },
        ],
    },
    {
        id: 14,
        question: "W pewnym systemie średni czas oczekiwania procesu wynosi 4 sek, a nowe procesy przybywają w " +
            "tempie 12 procesów/sek. Wobec tego średnia długość kolejki procesów oczekujących wynosi:",
        answers: [
            {
                id: 1,
                answer: "48 procesów",
                correct: true,
            },
            {
                id: 2,
                answer: "3 procesy",
            },
            {
                id: 3,
                answer: "0,33 procesu",
            },
            {
                id: 4,
                answer: "18 procesów",
            },
        ],
    },
    {
        id: 15,
        question: "Operacja SYGNALIZUJ na semaforze S jest zdefiniowana następująco:",
        noAnswerShuffle: true,
        answers: [
            {
                id: 1,
                answer: "S=0",
            },
            {
                id: 2,
                answer: "S=1",
            },
            {
                id: 3,
                answer: "while S<=0 do nothing; S=S-1",
            },
            {
                id: 4,
                answer: "S=S+1",
                correct: true,
            },
        ],
    },
    {
        id: 16,
        question: "Operacja CZEKAJ na semaforze S jest zdefiniowana następująco:",
        noAnswerShuffle: true,
        answers: [
            {
                id: 1,
                answer: "S=0",
            },
            {
                id: 2,
                answer: "S=1",
            },
            {
                id: 3,
                answer: "while S<=0 do nothing; S=S-1",
                correct: true,
            },
            {
                id: 4,
                answer: "S=S+1",
            },
        ],
    },
    {
        id: 17,
        question: "Jeśli w grafie przydziału zasobów występuje cykl, to:",
        answers: [
            {
                id: 1,
                answer: "Na pewno nie ma blokady",
            },
            {
                id: 2,
                answer: "Zawsze jest blokada",
            },
            {
                id: 3,
                answer: "Jest blokada przy jednokrotnych zasobach",
                correct: true,
            },
            {
                id: 4,
                answer: "Zasoby są wielokrotne",
            },
        ],
    },
    {
        id: 18,
        question: "Warunkiem powstania blokady nie jest:",
        answers: [
            {
                id: 1,
                answer: "Wzajemne włączanie",
            },
            {
                id: 2,
                answer: "Przetrzymanie (zasobów) i oczekiwanie (na zasoby)",
            },
            {
                id: 3,
                answer: "Zwielokrotnienie zasobów",
                correct: true,
            },
            {
                id: 4,
                answer: "Brak wywłaszczeń",
            },
        ],
    },
    {
        id: 19,
        question: "Istnienie niewykorzystanej pamięci w obrębie już przydzielonych obszarów to:",
        answers: [
            {
                id: 1,
                answer: "Fragmentacja zewnętrzna",
            },
            {
                id: 2,
                answer: "Fragmentacja wewnętrzna",
                correct: true,
            },
            {
                id: 3,
                answer: "Wymiana",
            },
            {
                id: 4,
                answer: "Deadlock",
            },
        ],
    },
    {
        id: 20,
        question: "W algorytmie FIFO zastępowania stron:",
        answers: [
            {
                id: 1,
                answer: "Usuwamy najwcześniej załadowaną do RAM stronę",
                correct: true,
            },
            {
                id: 2,
                answer: "Usuwamy stronę, która nie będzie najdłużej używana",
            },
            {
                id: 3,
                answer: "Usuwamy stronę, która najdłużej nie była używana",
            },
            {
                id: 4,
                answer: "Usuwamy najczęściej używaną stronę",
            },
        ],
    },
    {
        id: 21,
        question: "Stronicowanie: w tzw. modelu strefowym \"strefa\" procesu to:",
        answers: [
            {
                id: 1,
                answer: "Zbiór stron procesu w jednoczesnym użyciu",
                correct: true,
            },
            {
                id: 2,
                answer: "Zbiór stron w pamięci asocjacyjnej",
            },
            {
                id: 3,
                answer: "Zawartość tablicy stron",
            },
            {
                id: 4,
                answer: "Zbiór pustych ramek",
            },
        ],
    },
    {
        id: 22,
        question: "Operacje CZEKAJ i SYGNALIZUJ na semaforze S muszą być:",
        answers: [
            {
                id: 1,
                answer: "Pisane w języku maszynowym",
            },
            {
                id: 2,
                answer: "Niepodzielne",
                correct: true,
            },
            {
                id: 3,
                answer: "Prekompilowane",
            },
            {
                id: 4,
                answer: "Nic nie muszą",
            },
        ],
    },
    {
        id: 23,
        question: "Planowanie dostępu do dysku metodą SSTF charakteryzuje się tym, że:",
        answers: [
            {
                id: 1,
                answer: "Występują gwałtowne i częste wychylenia głowicy",
            },
            {
                id: 2,
                answer: "Możliwe jest \"głodzenie\" niektórych zamówień",
                correct: true,
            },
            {
                id: 3,
                answer: "Głowica porusza się tylko w kierunku rosnących ścieżek numerów",
            },
            {
                id: 4,
                answer: "Temperatura dysku jest stała",
            },
        ],
    },
    {
        id: 24,
        question: "Bezpieczeństwo: ustalenie identyczności podmiotów to:",
        answers: [
            {
                id: 1,
                answer: "Kontrola dostępu",
            },
            {
                id: 2,
                answer: "Autoryzacja",
                correct: true,
            },
            {
                id: 3,
                answer: "Audyt",
            },
            {
                id: 4,
                answer: "Dekompaktyfikacja",
            },
        ],
    },
    {
        id: 25,
        question: "Ograniczenie dostępu do obiektów na bazie stopnia poufności informacji przechowywanej przez " +
            "obiekt to:",
        answers: [
            {
                id: 1,
                answer: "Mandatory Access Control",
                correct: true,
            },
            {
                id: 2,
                answer: "Audyt",
            },
            {
                id: 3,
                answer: "Discretionary Access Control",
            },
            {
                id: 4,
                answer: "Autoryzacja",
            },
        ],
    },
    {
        id: 26,
        question: "Do maszyn klasy MISD (zgodnie z tzw. taksonomią Flynna) zaliczymy:",
        answers: [
            {
                id: 1,
                answer: "Jednoprocesorowy PC",
            },
            {
                id: 2,
                answer: "Multikomputer",
            },
            {
                id: 3,
                answer: "Procesor macierzowy",
            },
            {
                id: 4,
                answer: "Nie konstruuje się maszyn tej klasy",
                correct: true,
            },
        ],
    },
    {
        id: 27,
        question: "Dla zegara, którego wskazania różnią się od czasu absolutnego o maksymalnie 2 sek. na każde 10 " +
            "sekund wartość maksymalnego współczynnika odchylenia β będzie wynosiła:",
        answers: [
            {
                id: 1,
                answer: "Mniej niż zero",
            },
            {
                id: 2,
                answer: "Dokładnie 0,2",
                correct: true,
            },
            {
                id: 3,
                answer: "Dokładnie 1,2",
            },
            {
                id: 4,
                answer: "Dokładnie 5",
            },
        ],
    },
    {
        id: 28,
        question: "W algorytmie tyrana proces rozpoczynający elekcję wysyła komunikat do:",
        answers: [
            {
                id: 1,
                answer: "Wszystkich procesów",
            },
            {
                id: 2,
                answer: "Procesów o wyższych numerach",
                correct: true,
            },
            {
                id: 3,
                answer: "Procesów o niższych numerach",
            },
            {
                id: 4,
                answer: "Serwera czasu",
            },
        ],
    },
    {
        id: 29,
        question: "\"Spójność transakcji\" oznacza, że transakcja:",
        answers: [
            {
                id: 1,
                answer: "Nie może naruszać niezmienników systemu",
                correct: true,
            },
            {
                id: 2,
                answer: "Nie może być odwołana po zakończeniu",
            },
            {
                id: 3,
                answer: "Jest realizowana w całości albo wcale",
            },
            {
                id: 4,
                answer: "Nie jest możliwe zagnieżdżanie transakcji",
            },
        ],
    },
    {
        id: 30,
        question: "W systemach z procesami wielowątkowymi elementami procesu są m.in.:",
        answers: [
            {
                id: 1,
                answer: "Semafory, otwarte pliki, przestrzeń adresowa",
                correct: true,
            },
            {
                id: 2,
                answer: "Lista żądanych zasobów",
            },
            {
                id: 3,
                answer: "Stos, rejestry, licznik rozkazów",
            },
            {
                id: 4,
                answer: "Stan, zmienne globalne, stos, otwarte pliki",
            },
        ],
    },
    {
        id: 31,
        question: "Rozważmy dwa systemy obsługi: 1. Pulę N identycznych procesorów z jedną wspólną kolejką procesów " +
            "2. N identycznych procesorów, z których każdy ma własną kolejkę procesów. Dla takiego samego w obu " +
            "przypadkach testowego ciągu zadań średni czas obsługi procesu w drugim systemie będzie teoretycznie:",
        answers: [
            {
                id: 1,
                answer: "Taki sam",
            },
            {
                id: 2,
                answer: "n razy większy",
                correct: true,
            },
            {
                id: 3,
                answer: "n/2 razy większy",
            },
            {
                id: 4,
                answer: "n razy mniejszy",
            },
        ],
    },
    {
        id: 32,
        question: "Metoda przydziału procesorów za pomocą deterministycznego algorytmu opartego na teoretycznym " +
            "grafie ma na celu przydział:",
        answers: [
            {
                id: 1,
                answer: "Gwarantujący równy udział użytkowników w mocy obliczeniowej",
            },
            {
                id: 2,
                answer: "Minimalizujący śr. czas oczekiwania",
            },
            {
                id: 3,
                answer: "Minimalizujący ruch w sieci",
                correct: true,
            },
            {
                id: 4,
                answer: "Nie wymagający centralnego zarządzania",
            },
        ],
    },
    {
        id: 33,
        question: "Semantyka dzielenia plików, w której obowiązuje zasada \"zmiany w otwartym pliku są dopiero " +
            "widoczne po jego zamknięciu\" nosi nazwę: ",
        answers: [
            {
                id: 1,
                answer: "Semantyki sesji",
                correct: true,
            },
            {
                id: 2,
                answer: "Semantyki uniksowej",
            },
            {
                id: 3,
                answer: "Semantyki plików starych",
            },
            {
                id: 4,
                answer: "Semantyki sprowadzania",
            },
        ],
    },
    {
        id: 34,
        question: "Pamięć, w której dostępy do zmiennych synchronizujących są spójne sekwencyjnie jest:",
        answers: [
            {
                id: 1,
                answer: "Spójna ściśle",
            },
            {
                id: 2,
                answer: "Spójna sekwencyjnie",
            },
            {
                id: 3,
                answer: "Spójna przyczynowo",
            },
            {
                id: 4,
                answer: "Spójna słabo",
                correct: true,
            },
        ],
    },
    {
        id: 35,
        question: "Algorytm EDF wybierze żądanie odczytu bloku dyskowego:",
        answers: [
            {
                id: 1,
                answer: "O minimalnym adresie",
            },
            {
                id: 2,
                answer: "O najbliższym ograniczeniu czasowym",
                correct: true,
            },
            {
                id: 3,
                answer: "Nie wymagające ruchu głowicy",
            },
            {
                id: 4,
                answer: "Możliwe do wykonania w najkrótszym czasie",
            },
        ],
    },
    {
        id: 36,
        question: "Przy stronicowaniu fragmentacja zewnętrzna:",
        answers: [
            {
                id: 1,
                answer: "Występuje dla dużego rozmiaru strony",
            },
            {
                id: 2,
                answer: "Występuje dla małego rozmiaru strony",
            },
            {
                id: 3,
                answer: "Wynika z nieciągłości przestrzeni adresowej ramek",
            },
            {
                id: 4,
                answer: "Nie występuje",
                correct: true,
            },
        ],
    },
    {
        id: 37,
        question: "Kto jest autorem zdjęcia koali?",
        answers: [
            {
                id: 1,
                answer: "Borzo",
                correct: true,
            },
            {
                id: 2,
                answer: "Prof. Meme",
            },
            {
                id: 3,
                answer: "Gawro",
            },
            {
                id: 4,
                answer: "Rataj",
            },
        ],
    },
    {
        id: 38,
        question: "W pewnym systemie rozproszonym maks. współczynnik odchylenia dla każdego z zegarów wynosi β. " +
            "Wiadomo zatem, że po upływie czasu t od synchronizacji maks. różnica między ich wskazaniami wyniesie co " +
            "najwyżej:",
        answers: [
            {
                id: 1,
                answer: "βt",
            },
            {
                id: 2,
                answer: "2β",
            },
            {
                id: 3,
                answer: "2βt",
                correct: true,
            },
            {
                id: 4,
                answer: "β/t",
            },
        ],
    },
    {
        id: 39,
        question: "Do czego służy rejestr zapisów wyprzedzających?",
        answers: [
            {
                id: 1,
                answer: "Do zapisu danych na dysku",
            },
            {
                id: 2,
                answer: "Do obsługi transakcji",
                correct: true,
            },
            {
                id: 3,
                answer: "Do tworzenia wątków",
            },
            {
                id: 4,
                answer: "Do przydziału ramek",
            },
        ],
    },
    {
        id: 40,
        question: "Semantyka dzielenia plików, w której odczyt z pliku zwraca ostatnio zapisaną wartość to:",
        answers: [
            {
                id: 1,
                answer: "Semantyka plików stałych",
            },
            {
                id: 2,
                answer: "Semantyka sesji",
            },
            {
                id: 3,
                answer: "Semantyka transakcyjna",
            },
            {
                id: 4,
                answer: "Semantyka uniksowa",
                correct: true,
            },
        ],
    },
    {
        id: 41,
        question: "(Nowe 2023) W algorytmie rozproszonego wykrywania blokad (Chandry-Misra-Haasa) przekazywany przez " +
            "procesy komunikat zawiera:",
        answers: [
            {
                id: 1,
                answer: "m.in. czas nadania",
            },
            {
                id: 2,
                answer: "numer twórcy komunikatu, nr wysyłającego oraz nr odbiorcy",
                correct: true,
            },
            {
                id: 3,
                answer: "tylko nr nadawcy oraz nr odbiorcy",
            },
            {
                id: 4,
                answer: "nr nadawcy oraz nr żądanego zasobu",
            },
        ],
    },
    {
        id: 42,
        question: "(Nowe 2023) Stronicowanie: w tzw. modelu strefowym, zbiór roboczy dla wielkości okna zbioru " +
            "roboczego równego 10 to:",
        answers: [
            {
                id: 1,
                answer: "10 ramek danego procesu",
            },
            {
                id: 2,
                answer: "zbiór stron, do których nastąpiło 10 poprzednich odwołań",
                correct: true,
            },
            {
                id: 3,
                answer: "10 aktywnych procesów",
            },
            {
                id: 4,
                answer: "strony, do których odwołano się min. 10 razy",
            },
        ],
    },
    {
        id: 43,
        question: "(Nowe 2023) Systemowa kolejka procesów gotowych zawiera procesy:",
        answers: [
            {
                id: 1,
                answer: "załadowane do RAM i czekające na przydział procesora",
                correct: true,
            },
            {
                id: 2,
                answer: "czekające na załadowanie do RAM",
            },
            {
                id: 3,
                answer: "czekające na zakończenie",
            },
            {
                id: 4,
                answer: "czekające na dostęp do urządzenia We/Wy",
            },
        ],
    },
    {
        id: 44,
        question: "(Nowe 2023) System realizujący założenia obligatoryjnej kontroli dostępu (Mandatory Access " +
            "Control) należy zgodnie z 'Kryteriami ewaluacji bezpieczeństwa systemów komp.' (tzw. Orange Book) do:",
        answers: [
            {
                id: 1,
                answer: "Kategorii bezpieczeństwa D",
            },
            {
                id: 2,
                answer: "Kategorii bezpieczeństwa C1",
            },
            {
                id: 3,
                answer: "Kategorii bezpieczeństwa C2",
            },
            {
                id: 4,
                answer: "Kategorii bezpieczeństwa A lub B",
                correct: true,
            },
        ],
    },
    {
        id: 45,
        question: "(Nowe 2023) W pewnym systemie średnia wartość strumienia zgłoszeń wynosi  4 procesy/sek a średnia " +
            "wartość strumienia obsługi m=6 procesów/sek. Wobec tego średni czas obsługi procesu wynosi (por. wzór " +
            "Kleinrocka): ",
        answers: [
            {
                id: 1,
                answer: "1.5 sek.",
            },
            {
                id: 2,
                answer: "0.66 sek.",
                correct: true,
            },
            {
                id: 3,
                answer: "24 sek.",
            },
            {
                id: 4,
                answer: "0.5 sek.",
            },
        ],
    },
    {
        id: 46,
        question: "(Nowe 2023) Przy planowaniu przydziału procesora metodą FCFS średni czas oczekiwania procesu:",
        answers: [
            {
                id: 1,
                answer: "jest zawsze optymalny (najkrótszy)",
            },
            {
                id: 2,
                answer: "jest zawsze najdłuższy",
            },
            {
                id: 3,
                answer: "zależy od kolejności zgłaszających się procesów",
                correct: true,
            },
            {
                id: 4,
                answer: "zależy od przyjętej długości kwantu czasu",
            },
        ],
    },
    {
        id: 47,
        question: "(Nowe 2023) W pewnym systemie rozproszonym do aktualizacji zwielokrotnionych kopii plików stosuje " +
            "się protokół głosowania. Dla 10 serwerów przyjęto, że 4 z nich muszą wydać zgodę przy próbie pisania do " +
            "pliku. Wobec tego w tym systemie:",
        answers: [
            {
                id: 1,
                answer: "quorum czytania wynosi co najmniej 6",
            },
            {
                id: 2,
                answer: "quorum czytania wynosi 4",
            },
            {
                id: 3,
                answer: "quorum pisania wynosi co najmniej 5",
            },
            {
                id: 4,
                answer: "quorum czytania wynosi co najmniej 7",
                correct: true,
            },
        ],
    },
    {
        id: 48,
        question: "(Nowe 2023) W systemie operacyjnym Singularity (Microsoft) procesy izolowane programowo " +
            "(Software-Isolated Processes) komunikują się za pomocą:",
        answers: [
            {
                id: 1,
                answer: "Dostępu do pamięci dzielonej",
            },
            {
                id: 2,
                answer: "Wymiany komunikatów",
                correct: true,
            },
            {
                id: 3,
                answer: "Routingu niezależnego od lokalizacji",
            },
            {
                id: 4,
                answer: "Obsługiwanych przez jądro systemu plików wymiany",
            },
        ],
    },
    {
        id: 49,
        question: "(Nowe 2023) W algorytmie optymalnym zastępowania stron:",
        answers: [
            {
                id: 1,
                answer: "usuwamy najwcześniej załadowaną do RAM stronę",
            },
            {
                id: 2,
                answer: "usuwamy stronę, która najdłużej nie będzie używana",
                correct: true,
            },
            {
                id: 3,
                answer: "usuwamy stronę, która najdłużej nie była używana",
            },
            {
                id: 4,
                answer: "usuwamy stronę, która była najczęściej używana",
            },
        ],
    },
    {
        id: 50,
        question: "(Nowe 2023) Bezpieczeństwo: aktywny komponent systemu (proces, aplikacja) to:",
        answers: [
            {
                id: 1,
                answer: "obiekt",
            },
            {
                id: 2,
                answer: "autentykator",
            },
            {
                id: 3,
                answer: "audytor",
            },
            {
                id: 4,
                answer: "podmiot",
                correct: true,
            },
        ],
    },
    {
        id: 51,
        question: "(Nowe 2023) Algorytm EDF wybierze żądanie odczytu bloku dyskowego:",
        answers: [
            {
                id: 1,
                answer: "o minimalnym adresie",
            },
            {
                id: 2,
                answer: "o najbliższym ograniczeniu czasowym (deadline)",
                correct: true,
            },
            {
                id: 3,
                answer: "nie wymagające ruchu głowicy",
            },
            {
                id: 4,
                answer: "możliwe do wykonania w najkrótszym czasie",
            },
        ],
    },
    {
        id: 52,
        question: "(Nowe 2023) Wykorzystywanie przy przydziale miejsca na dysku specjalnych bloków zawierających " +
            "tablice adresów bloków dyskowych należących do danego pliku nosi nazwę:",
        answers: [
            {
                id: 1,
                answer: "przydziału listowego",
            },
            {
                id: 2,
                answer: "przydziału indeksowego",
                correct: true,
            },
            {
                id: 3,
                answer: "przydziału ciągłego",
            },
            {
                id: 4,
                answer: "przydziału stochastycznego",
            },
        ],
    },
    {
        id: 53,
        question: "(Nowe 2023) Istnienie wielu rozłącznych obszarów nieprzydzielonej pamięci to:",
        answers: [
            {
                id: 1,
                answer: "fragmentacja zewnętrzna",
                correct: true,
            },
            {
                id: 2,
                answer: "fragmentacja wewnętrzna",
            },
            {
                id: 3,
                answer: "wymiana",
            },
            {
                id: 4,
                answer: "deadlock",
            },
        ],
    },
    {
        id: 54,
        question: "(Nowe 2023) Ograniczenie dostępu do obiektów na bazie tożsamości podmiotów to:",
        answers: [
            {
                id: 1,
                answer: "Mandatory Access Control",
            },
            {
                id: 2,
                answer: "audyt",
            },
            {
                id: 3,
                answer: "Discretionary Access Control",
                correct: true,
            },
            {
                id: 4,
                answer: "autentyfikacja",
            },
        ],
    },
    {
        id: 55,
        question: "(Nowe 2023) W algorytmie pierścieniowym przekazywany komunikat zawiera:",
        answers: [
            {
                id: 1,
                answer: "aktualny czas",
            },
            {
                id: 2,
                answer: "numery wszystkich procesów w pierścieniu",
            },
            {
                id: 3,
                answer: "numer strony",
            },
            {
                id: 4,
                answer: "listę aktywnych procesów przekazujących komunikat",
                correct: true,
            },
        ],
    },
    {
        id: 56,
        question: "(Nowe 2023) Rotacyjny algorytm planowania przydziału procesora:",
        answers: [
            {
                id: 1,
                answer: "wymaga wywłaszczania",
                correct: true,
            },
            {
                id: 2,
                answer: "wymaga oszacowania długości fazy procesora",
            },
            {
                id: 3,
                answer: "jest zawsze niewywłaszczający",
            },
            {
                id: 4,
                answer: "ma złożoność obliczeniową O(2n)",
            },
        ],
    },
    {
        id: 57,
        question: "(Nowe 2023) Z tzw. Kodowania M z N korzystamy w systemach GRID aby zapewnić:",
        answers: [
            {
                id: 1,
                answer: "niezawodność routingu TCP/IP",
            },
            {
                id: 2,
                answer: "bezstratne przechowywanie danych w środowisku rozproszonym",
                correct: true,
            },
            {
                id: 3,
                answer: "spójność semantyczną",
            },
            {
                id: 4,
                answer: "niezawodny billing",
            },
        ],
    },
    {
        id: 58,
        question: "(Nowe 2023) Rozpr. pamięć dzielona, protokół jednokrotnego zapisu: strona pamięci podręcznej, "
            + "zawierająca aktualne dane, których nie ma w innych pamięciach podręcznych, ani w pamięci głównej, to " +
            "strona:",
        answers: [
            {
                id: 1,
                answer: "czysta",
            },
            {
                id: 2,
                answer: "brudna",
                correct: true,
            },
            {
                id: 3,
                answer: "unieważniona",
            },
            {
                id: 4,
                answer: "główna",
            },
        ],
    },
    {
        id: 59,
        question: "(Nowe 2023) Cylinder dysku twardego to:",
        answers: [
            {
                id: 1,
                answer: "zbiór parzystych sektorów",
            },
            {
                id: 2,
                answer: "zbiór ścieżek, dostęp do których nie wymaga ruchu głowicy",
                correct: true,
            },
            {
                id: 3,
                answer: "cześć obudowy",
            },
            {
                id: 4,
                answer: "zbiór ścieżek należących do jednej z powierzchni dysku",
            },
        ],
    },
    {
        id: 60,
        question: "(Nowe 2023) Przy stronicowaniu fragmentacja zewnętrzna:",
        answers: [
            {
                id: 1,
                answer: "występuje dla dużego rozmiaru strony",
            },
            {
                id: 2,
                answer: "występuje dla małego rozmiaru strony",
            },
            {
                id: 3,
                answer: "wynika z nieciągłości przestrzeni adresowej ramek",
            },
            {
                id: 4,
                answer: "nie występuje",
                correct: true,
            },
        ],
    },
    {
        id: 61,
        question: "(Nowe 2023) Algorytm Lamporta zapewnia:",
        answers: [
            {
                id: 1,
                answer: "spójność pamięci dzielonej",
            },
            {
                id: 2,
                answer: "uzgodnienie wartości rejestrów podtrzymujących zegarów",
            },
            {
                id: 3,
                answer: "ustalenie max. współczynnika odchylenia",
            },
            {
                id: 4,
                answer: "uporządkowanie czasowe zdarzeń w systemie",
                correct: true,
            },
        ],
    },
    {
        id: 62,
        question: "(2022) Z tzw. Kodowania M z N korzystamy w systemach GRID aby zapewnić:",
        answers: [
            {
                id: 1,
                answer: "Spójność semantyczną danych",
            },
            {
                id: 2,
                answer: "Odporne na uszkodzenia przechowywanie danych w środowisku rozproszonym",
                correct: true,
            },
            {
                id: 3,
                answer: "Niezawodny billing",
            },
            {
                id: 4,
                answer: "Niezawodność routingu TCP/IP",
            },
        ],
    },
    {
        id: 63,
        question: "Czy na kolosie z SO w 2023 było pytanie o zdjęcie koali?",
        answers: [
            {
                id: 1,
                answer: "tak",
            },
            {
                id: 2,
                answer: "nie",
                correct: true,
            },
            {
                id: 3,
                answer: "król smoków",
                correct: true,
            },
            {
                id: 4,
                answer: "koala ale to drill",
                correct: true,
            },
            {
                id: 5,
                answer: "burza magentyczna",
                correct: true,
            },
        ],
    },
    {
        id: 64,
        question: "(2022) W systemach GRID tzw. Filtr Bloom’a można wykorzystać do:",
        answers: [
            {
                id: 1,
                answer: "Lokalizacji zasobów w systemie rozproszonym",
                correct: true,
            },
            {
                id: 2,
                answer: "Zapewnienia poufności przechowywania informacji",
            },
            {
                id: 3,
                answer: "Poprawy nastroju administratora systemu",
            },
            {
                id: 4,
                answer: "Zapewnienia spójności rozproszonej pamięci dzielonej",
            },
        ],
    },
]

export default questions
