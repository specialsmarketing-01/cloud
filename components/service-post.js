import React from "react";
import servicedetails1 from "@/images/services/Herd-Backofen-Reparatur.jpg";
import Img from "./img";
import { useRouter } from "next/router";
import Link from "@/components/link";

const SERVICE_CONTENT = {
  "herd-backofen-reparatur": {
    title: "Herd & Backofen Reparatur",
    intro:
      "Ihr Herd oder Backofen heizt nicht mehr richtig, brennt einseitig an oder zeigt Fehlercodes? Wir prüfen Heizelemente, Temperaturfühler, Steuerung und Verkabelung und bringen Ihr Kochfeld wieder zuverlässig zum Laufen.",
    problems: [
      "Backofen wird nicht heiß oder erreicht die gewünschte Temperatur nicht.",
      "Ober-/Unterhitze oder Umluft funktionieren nur teilweise.",
      "Herdplatten werden zu heiß oder lassen sich nicht mehr regeln.",
      "Fehlercodes im Display oder Sicherung fliegt beim Einschalten.",
      "Backofenlüfter ist laut oder läuft dauerhaft nach."
    ]
  },
  "waschmaschinen-reparatur": {
    title: "Waschmaschinen Reparatur",
    intro:
      "Eine defekte Waschmaschine stört schnell den gesamten Alltag. Wir diagnostizieren Fehler an Pumpe, Trommel, Motor, Elektronik und Wassersystem fachgerecht und reparieren in vielen Fällen direkt vor Ort.",
    problems: [
      "Maschine pumpt nicht ab oder bleibt mit Wasser stehen.",
      "Trommel dreht nicht oder macht ungewöhnliche Geräusche.",
      "Wasser läuft aus oder die Maschine zieht kein Wasser.",
      "Programme brechen ab oder bleiben an einer Stelle hängen.",
      "Fehlercodes im Display (z. B. E‑, F‑ oder andere Hinweise)."
    ]
  },
  "trockner-reparatur": {
    title: "Trockner Reparatur",
    intro:
      "Wenn der Trockner nicht mehr richtig trocknet, zu heiß wird oder gar nicht mehr startet, prüfen wir Heizung, Sensorik, Luftwege und Kondensationssystem – bei Wärmepumpen‑, Kondens- und Ablufttrocknern.",
    problems: [
      "Wäsche bleibt feucht, obwohl das Programm fertig ist.",
      "Trockner wird sehr heiß oder schaltet wegen Überhitzung ab.",
      "Flusssieb- oder Behälterwarnungen trotz geleerter Behälter.",
      "Ungewöhnliche Geräusche durch Lager oder Fremdkörper.",
      "Trockner startet nicht oder bricht Programme vorzeitig ab."
    ]
  },
  "elektroherd-reparatur": {
    title: "Elektroherd Reparatur",
    intro:
      "Defekte Kochplatten, durchgebrannte Heizspiralen oder Probleme mit der Steuerung – wir reparieren Elektroherde aller gängigen Marken, sicher und normgerecht.",
    problems: [
      "Eine oder mehrere Kochzonen heizen gar nicht oder nur schwach.",
      "Platten lassen sich nicht mehr regeln und bleiben dauerhaft heiß.",
      "Schalter, Touch‑Bedienung oder Anzeigen reagieren nicht.",
      "Sicherung löst beim Einschalten aus.",
      "Verfärbte oder beschädigte Anschlüsse am Herdanschluss."
    ]
  },
  "mikrowellen-reparatur": {
    title: "Mikrowellen Reparatur",
    intro:
      "Ihre Mikrowelle wärmt nicht mehr richtig auf, macht ungewöhnliche Geräusche oder zeigt Fehler an? Wir prüfen Elektronik, Hochspannungsteil, Drehtellerantrieb und Türsicherung.",
    problems: [
      "Gericht wird nicht mehr heiß oder nur ungleichmäßig warm.",
      "Drehteller dreht sich nicht oder ruckelt stark.",
      "Lautes Brummen, Knistern oder Funkenbildung im Garraum.",
      "Feuchtigkeit oder Rost im Innenraum.",
      "Mikrowelle lässt sich nicht starten oder schaltet sofort ab."
    ]
  },
  "altgeraete-entsorgen": {
    title: "Altgeräte Entsorgen",
    intro:
      "Sie möchten ein altes oder defektes Gerät fachgerecht entsorgen lassen? Wir holen Altgeräte ab, kümmern uns um den sicheren Transport und die umweltgerechte Verwertung.",
    problems: [
      "Platz für ein neues Gerät schaffen, ohne selbst schleppen zu müssen.",
      "Fachgerechte und gesetzeskonforme Entsorgung von Elektroaltgeräten.",
      "Abholung mehrerer Geräte in einem Termin.",
      "Koordination von Lieferung des Neugerätes und Abholung des Altgerätes.",
      "Beratung, ob sich vor der Entsorgung noch eine Reparatur lohnt."
    ]
  },
  "geschirrspueler-reparatur": {
    title: "Geschirrspüler Reparatur",
    intro:
      "Ein defekter Geschirrspüler kostet Zeit und Nerven. Wir reinigen Düsen und Siebe, prüfen Pumpen, Sensoren und Elektronik und sorgen wieder für sauberes Geschirr.",
    problems: [
      "Geschirr kommt schmutzig oder fleckig aus dem Programm.",
      "Maschine pumpt nicht ab oder bleibt mit Wasser stehen.",
      "Fehlermeldungen zu Wasserzulauf oder Abfluss.",
      "Ungewöhnliche Geräusche von Pumpe oder Sprüharmen.",
      "Wasser tritt aus der Tür oder unter dem Gerät aus."
    ]
  },
  "kuehlschrank-reparatur": {
    title: "Kühlschrank Reparatur",
    intro:
      "Ob Kühlschrank oder Gefriergerät – wir kümmern uns um Temperaturprobleme, laute Geräusche und starke Eisbildung, bevor Lebensmittel verderben.",
    problems: [
      "Gerät kühlt zu wenig oder gar nicht mehr.",
      "Starke Eis- oder Reifbildung im Innenraum.",
      "Kompressor läuft dauerhaft oder ist sehr laut.",
      "Wasser sammelt sich im Innenraum oder unter dem Gerät.",
      "Türdichtungen sind beschädigt oder schließen nicht richtig."
    ]
  }
};

const ServicePost = () => {
  const { query } = useRouter();
  const slug = query.slug;

  const content =
    (slug && SERVICE_CONTENT[slug]) || {
      title: "Reparatur von Haushaltsgeräten",
      intro:
        "Wir sind Ihr Ansprechpartner für die fachgerechte Reparatur von Herd, Backofen, Elektroherd, Waschmaschine, Trockner, Geschirrspüler, Mikrowelle und Kühlschrank. Statt direkt neu zu kaufen, prüfen wir sorgfältig, ob sich eine Reparatur lohnt und erklären Ihnen transparent alle Optionen.",
      problems: [
        "Gerät startet nicht oder bricht Programme ab.",
        "Ungewöhnliche Geräusche, Vibrationen oder Geruchsentwicklung.",
        "Wäsche oder Geschirr wird nicht sauber bzw. nicht trocken.",
        "Gerät heizt nicht mehr richtig oder wird zu heiß.",
        "Kühlschrank kühlt zu stark, zu wenig oder bildet stark Eis.",
        "Wasser tritt aus Maschine oder sammelt sich unter dem Gerät."
      ]
    };

  return (
    <div className="service_details_left">
      <Img src={servicedetails1} alt="Service Details Image" />
      <h1>{content.title}</h1>
      <p>{content.intro}</p>
      <h2>Typische Probleme bei diesem Service</h2>
      <ul>
        {content.problems.map((item, index) => (
          <li key={index}>
            <i className="fa fa-check-circle"></i> {item}
          </li>
        ))}
      </ul>
      <p className="extra_mr">
        Wenn eines Ihrer Geräte plötzlich ausfällt oder Fehlermeldungen zeigt,{" "}
        <Link href="/contact">kontaktieren Sie uns</Link> für eine schnelle Diagnose
        und einen kurzfristigen Termin.
      </p>
      <h2>Reparatur oder Neukauf – was lohnt sich?</h2>
      <ul className="service_details_ac">
        <li>
          <i className="fa fa-check-circle"></i> Alter des Geräts – wir prüfen,
          ob eine Reparatur wirtschaftlich sinnvoll ist oder ein Austausch mehr
          Sinn ergibt.
        </li>
        <li>
          <i className="fa fa-check-circle"></i> Kosten – wir geben Ihnen eine
          ehrliche Einschätzung der zu erwartenden Reparaturkosten im Vergleich
          zum Neukauf.
        </li>
        <li>
          <i className="fa fa-check-circle"></i> Energieverbrauch – oft lässt
          sich durch eine Reparatur und Wartung der Verbrauch senken und die
          Lebensdauer deutlich verlängern.
        </li>
      </ul>
      <p className="info_mr">
        Nutzen Sie unser <Link href="/contact">Kontaktformular</Link>, um uns Ihr
        Problem zu schildern – wir melden uns mit einem unverbindlichen
        Vorschlag zur weiteren Vorgehensweise.
      </p>
    </div>
  );
};

export default ServicePost;
