import React from 'react';

const review1 = 'Będę całkowicie szczery, stwierdzając, że główny plakat promujący niemiecką produkcję spod szyldu Netflixa jest zarazem jego idealnym opisem. W każdym razie ja otrzymałem dokładnie to, co przeczuwałem odnośnie "Dark" (nie widząc wcześniej żadnych trailerów bądź teaserów) – tajemniczą i mroczną, a przy tym magicznie fascynującą historię. Biorąc pod uwagę, że przecież "przed chwilą" Netflix uraczył fanów drugim sezonem "Stranger Things", podjęcie decyzji o nakręceniu równolegle serii o bardzo podobnej tematyce nie wydawało się zmyślnym pomysłem. A jednak... Podobieństwa faktycznie da się zauważyć, zwłaszcza z początku: paczka nastolatków, małe miasteczko (gdzie wszyscy się znają), w tle enigmatyczny korporacyjny moloch (tutaj: elektrownia atomowa), cień rodzinnych tajemnic (chowanych za fasadą sąsiedzkich życzliwości)... Nagłe zniknięcie chłopca! Ono staje się zarzewiem, za sprawą którego zaczną puszczać u wielu blokady, tyle lat starające się oddzielać pamięć od mętnej przeszłości – prowadzić to będzie do miejsca niepojętego, które nie powinno nigdy zostać odkryte. Jednakże analogia między amerykańską i niemiecką wariacją kończy się zasadniczo na wyżej wymienionym rdzeniu. "Dark" bardzo szybko zacznie nas prowadzić w zupełnie innym kierunku fabularnym (także w zupełnie inny sposób), a mianowicie: co by było, gdyby Bracia Grimm żyli współcześnie i pracowali dla Netflixa, a ten postawiłby przed nimi zadanie napisania oraz zekranizowania wciągającej opowieści, przy okazji w obrazowy sposób poruszającej temat determinizmu i fizyki kwantowej? – tak z grubsza. Jeśli to kogoś nie zainteresowało, to ja już bardziej pomóc nie mogę. ';
const review2 = 'Chyba każdy z nas marzył o świecie magicznym, w którym mógłby stać się bohaterem i stawić czoła najstraszliwszym potworom. Podobne pragnienia towarzyszą uroczej grupie chłopców, którzy z upodobaniem urządzają sobie rozgrywki RPG w zaciszu piwnicy. Dla niewtajemniczonych – RPG, to gra towarzyska, w której gracze wcielają się w role fikcyjnych postaci. Cała rozgrywka toczy się zazwyczaj w wymyślonym świecie, istniejącym tylko w wyobraźni grających. Jednakże w krainie "Stranger Things", gdy przysłowiowe kości zostaną rzucone młodym bohaterom przyjdzie zmierzyć się zagrożeniem w realnym świecie. Reżyserzy, bracia Duffer, zdecydowali się wykorzystać sprawdzony schemat z kultowego "Jumanji". Zarówno w grze, jak i w świecie realnym bohaterom przyjdzie bowiem stawić czoła bestii. W kolejnych odcinkach widać zresztą jawnie zamiłowanie twórców serialu do klasyków gatunku. Z jednakowym upodobaniem sięgają oni po sprawdzone rozwiązania z kina sci-fi, a także fantasy. Każdy fan kinematografii rozpozna w młodych bohaterach nowe wcielenie hobbitów z "Drużyny pierścienia", a tropiący ich potwór przywodzi na myśl samego praojca horrorów – obcego. Jesienne liście dawno już opadły. Na dworze szybko się ściemnia. A najgorsze dopiero przed nami. Obywatele małego zaściankowej społeczności z lat 80. wkrótce przeżyją istne katharsis. W tajemniczych okolicznościach znika bowiem młodzieniec Will Byers (Noah Schnapp). A wydarzenie to na zawsze zmieni oblicze spokojnej mieściny. Przeważająca część z mieszkańców miasteczka mogłaby z powodzeniem wpisać się w stereotypy krążące wśród nastolatków. Na ekranie pojawiają się zatem: ładna kujonka, outsider z aparatem, a także jakżeby inaczej król podrywu i lanser w jednej osobie. Miejscowy policjant jest alkoholikiem zajadającym się pączkami, ale dalej... dalej jest już znacznie ciekawiej. Młode chłopaki od gry RPG przypominając nam o swobodzie dzieciństwa zdobywają sympatie i doping ze strony publiczności, kiedy tylko złapią za swoje rowery. Ciekawie i wiarygodnie wypada też zrozpaczona matka zaginionego chłopca Joyce Byers (Winona Ryder). Pierwsze skrzypce gra jednak objawienie pierwszego sezonu, czyli Nastka (Millie Bobby Brown). Dziewczynka o amorficznej twarzy została idealnie wypatrzona przez speców od castingu. Jest osobliwością sama w sobie, a jej nadnaturalne zdolności z powodzeniem mogłyby zawstydzić drużynę Avengers. "Stranger Things" to dzieło kompletne, które dzięki sprawnej realizacji ma szansę stać się najnowszą chlubą Netflixa. Moim zdaniem potencjał drzemiący w scenarzystach nie został, bowiem w pełni ujarzmiony. Jeśli zaś ktoś miałby wątpliwości czy oglądać epizody z swoimi pociechami, to myślę, że powinien uszanować sugerowaną granicę 13 roku życia. Serialowi bowiem bliżej jest do klimatu grozy z "Harry’ego Pottera" niźli z thrillerów Stephena Kinga. Twórcy stworzyli w oparciu o sprawdzone schematy ponadczasowe dzieło - choć często przewidywalne, to jednak ujmujące. Filmowcom udało się zatem nie zboczyć (w przeciwieństwie do Willa Byersa) z obranej przez nich "ścieżki rowerowej". ';

function Review({ match }) {
    return (
    <div>
        <main style={{margin: '100px 0 100px 0'}}>

            <div className="container">
               <h1>{match.params.id}</h1>
               <p className="text-justify">
                    {match.params.id == 'Allein in der Dunkelheit' ? review1 : review2 }
                </p>
                <p className="right">dodano przez anonymous</p>
            </div>
        </main>
      </div>

    );
  }

export default Review;