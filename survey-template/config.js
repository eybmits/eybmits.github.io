window.SURVEY_CONFIG = {
  title: "Kurzfeedback zur Veranstaltung",
  intro: "Dein Feedback hilft uns, die Veranstaltung gezielt weiterzuentwickeln.",
  duration: "ca. 2 Minuten",
  recipientEmail: "mwbootb@googlemail.com",
  emailSubject: "Neue Veranstaltungsbewertung",
  scaleLeft: "trifft gar nicht zu",
  scaleRight: "trifft voll zu",
  questions: [
    { type: "scale", text: "Ich würde die Veranstaltung anderen Teilnehmenden weiterempfehlen.", required: true },
    { type: "scale", text: "Die Veranstaltung war gut organisiert.", required: true },
    { type: "scale", text: "Die Lernziele und erwarteten Leistungen waren klar.", required: true },
    { type: "scale", text: "Die Inhalte waren verständlich aufbereitet.", required: true },
    { type: "scale", text: "Die Aufgaben und Materialien waren hilfreich.", required: true },
    { type: "scale", text: "Das Lerntempo war angemessen.", required: true },
    { type: "scale", text: "Der Arbeitsaufwand war angemessen.", required: true },
    { type: "scale", text: "Die Betreuung und das Feedback waren hilfreich.", required: true },
    { type: "text", text: "Was hat dir besonders gut gefallen?", required: false, placeholder: "Optionales Feedback" },
    { type: "text", text: "Was sollten wir beim nächsten Durchlauf verbessern?", required: false, placeholder: "Optionales Feedback" }
  ]
};
