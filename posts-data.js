/* posts-data.js
   ---------------------------------------------------------------
   Hier trägst du neue Funde ein. Jeder Eintrag ist ein Objekt in
   der Liste unten. Die Reihenfolge ist egal — die Seite sortiert
   automatisch nach Datum (neueste zuerst).

   Felder:
   id      – eindeutige Kennung, z. B. "107-4" (wird auch als
             Adresse benutzt: post.html?id=107-4)
   freq    – die "Frequenz", rein optisch, z. B. "107.4"
   title   – Titel des Fundes
   genre   – ein Genre-Wort, taucht als Filter-Preset auf
   date    – ISO-Datum "YYYY-MM-DD", steuert die Sortierung
   dateLabel – Datum in Lesetext, z. B. "8. September 2026"
   blurb   – ein bis zwei Sätze für die Log-Ansicht
   body    – der ausführliche Text, als Array von Absätzen
   link    – optional: URL zum Track/Album (Bandcamp, YouTube, etc.)
   linkLabel – Beschriftung für den Link, z. B. "Auf Bandcamp hören"
   ---------------------------------------------------------------
   Die Einträge unten sind Platzhalter zum Ausprobieren des Designs.
   Ersetze sie einfach durch deine eigenen Funde. */

const POSTS = [
  {
    id: "107-4",
    freq: "107.4",
    title: "Ein Kassettenmitschnitt aus einem Proberaum in Duisburg",
    genre: "Punk",
    date: "2026-09-08",
    dateLabel: "8. September 2026",
    blurb: "Drei Akkorde, ein kaputtes Mikro und ein Refrain, der noch tagelang hängen bleibt.",
    body: [
      "Ein Bekannter hat mir eine digitalisierte Kassette geschickt, die er auf einem Flohmarkt gefunden hat. Keine Bandinfo, kein Booklet — nur ein handbeschrifteter Aufkleber mit einem Datum von 1994.",
      "Die Aufnahme ist grob, die Snare übersteuert komplett, und genau das macht sie so gut. Kein Streaming-Dienst hätte mir das je vorgeschlagen, weil es nirgendwo katalogisiert ist."
    ],
    link: "",
    linkLabel: "Quelle noch nicht öffentlich"
  },
  {
    id: "099-9",
    freq: "099.9",
    title: "Fieldrecording-Ambient von einer Nachtschicht in einer Gießerei",
    genre: "Ambient",
    date: "2026-08-27",
    dateLabel: "27. August 2026",
    blurb: "Maschinenbrummen, langsam zu Drone verarbeitet. Läuft am besten mit Kopfhörern und geschlossenen Augen.",
    body: [
      "Gefunden über einen Kommentar unter einem ganz anderen Video. Jemand hatte Feldaufnahmen aus seiner Nachtschicht mit einem simplen Reverb-Pedal verlängert und als Halbstunden-Stück hochgeladen.",
      "Es ist nicht perfekt produziert, aber genau die Unperfektion trägt die Atmosphäre. Fühlt sich an wie ein Ort, kein Song."
    ],
    link: "#",
    linkLabel: "Anhören (Beispiel-Link)"
  },
  {
    id: "094-2",
    freq: "094.2",
    title: "Alte Highlife-Platte aus Accra, neu gepresst",
    genre: "Highlife",
    date: "2026-08-15",
    dateLabel: "15. August 2026",
    blurb: "Ein Reissue-Label hat eine komplette Session von 1978 ausgegraben. Bläser, die tanzen, bevor der Rhythmus überhaupt einsetzt.",
    body: [
      "Reissue-Label-Kataloge sind für mich die ehrlichste Art, Musik zu entdecken: Jemand hat sich die Mühe gemacht, Lizenzen zu klären, Bänder zu restaurieren und Kontext zu recherchieren, nur damit die Platte überhaupt wieder existiert.",
      "Dieses Album stand nie in einer Empfehlung, es stand nur im Katalog eines Labels, das ich aus einem ganz anderen Grund abonniert habe."
    ],
    link: "#",
    linkLabel: "Anhören (Beispiel-Link)"
  },
  {
    id: "088-1",
    freq: "088.1",
    title: "Ein Techno-Edit, der nur als Vinyl-Rip existiert",
    genre: "Techno",
    date: "2026-07-30",
    dateLabel: "30. Juli 2026",
    blurb: "Zwölf Minuten, ein Loop, keine offizielle Digitalveröffentlichung. Genau deshalb bleibt er hier stehen.",
    body: [
      "Manche Tracks schaffen es nie auf Streaming-Plattformen, weil Sample-Clearing zu teuer ist oder sich schlicht niemand die Mühe macht. Dieser Edit lebt nur als Rip von einer limitierten 12″.",
      "Ich finde das charmant: Es zwingt einen, sich die Herkunft anzusehen, statt einfach auf Play zu drücken."
    ],
    link: "#",
    linkLabel: "Anhören (Beispiel-Link)"
  },
  {
    id: "101-2",
    freq: "101.2",
    title: "Free-Jazz-Session, live in einem Dortmunder Hinterzimmer",
    genre: "Jazz",
    date: "2026-07-12",
    dateLabel: "12. Juli 2026",
    blurb: "Vier Musiker, kein Soundcheck, ein Mitschnitt mit einem Handy. Klingt trotzdem größer als die meisten Studioalben.",
    body: [
      "Ein Freund hat mich mitgenommen, ohne zu sagen, was mich erwartet. Am Ende saßen zwanzig Leute auf dem Boden eines umgebauten Ladenlokals.",
      "Die Aufnahme, die am Ende kursierte, ist technisch schlecht und musikalisch genau richtig."
    ],
    link: "#",
    linkLabel: "Anhören (Beispiel-Link)"
  },
  {
    id: "092-8",
    freq: "092.8",
    title: "Ein Folk-Demo, das nie fertig aufgenommen wurde",
    genre: "Folk",
    date: "2026-06-24",
    dateLabel: "24. Juni 2026",
    blurb: "Nur Gitarre und Stimme, mitten im Satz abgebrochen. Trotzdem das Stück, das ich diesen Monat am häufigsten gehört habe.",
    body: [
      "Manchmal ist ein unfertiges Demo ehrlicher als die fertige Version. Diese Aufnahme bricht nach zwei Strophen ab, weil offenbar jemand an die Tür geklopft hat.",
      "Ich habe versucht herauszufinden, ob es je eine vollständige Fassung gab. Bisher: nein."
    ],
    link: "#",
    linkLabel: "Anhören (Beispiel-Link)"
  }
];
