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
    id: "001",
    freq: "001",
    title: "Beacon - Adrift : Mein erster Song",
    genre: "Punk",
    date: "2026-09-08",
    dateLabel: "8. September 2026",
    blurb: "Hiermit bingt alles, dieser Song ist vielleicht nicht besonders aber bringt dich gewiss in eine Traumwelt.",
    body: [
      "Eigentlich habe ich nicht diesen einen Song wo ich sage das ist mein Lieblingslied, jedoch ist es der erste bei dem ich mir gedacht habe das könnte mein Lieblingssong sein."
      "Dieser Song löst in mir immer eine gewisse Nostalgie aus und wirft mich in eine Traumwelt für 2:30min."
    ],
    link: "",
    linkLabel: "Quelle noch nicht öffentlich"
  },
  
];
