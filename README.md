```diff
If you want to use the arxiv crawling tool please make sure to clone at $GOPATH/src/github.com/dnk0/
or go with
go get github.com/dnk0/CitationPatterns/src/crawl
```

# CitationPatterns

## Modul

[Wissens- und Contentmanagement (10-202-2323)](http://asv.informatik.uni-leipzig.de/moduls/1)

[Praktikum Wissens- und Contentmanagement](http://asv.informatik.uni-leipzig.de/de/courses/236)

## Studenten

1. [Simon Bordewisch](https://github.com/sic42) - #3684379
2. [Tim Niehoff](https://github.com/regexpr) - #3678507
3. [Dennis Kreußel](https://github.com/dnk0) - #3673972

## Scrum
[`Mitschriften`](scrum/index.md)
## Einleitung

Akademische Forschung besteht zu einem Großteil aus dem lesen und schreiben von Texten.
Die Idee dieser Arbeit soll es sein diese Texte als eine Art Gespräch interpretierbar zu machen.
An einem solchen modellhaften Gespräch nimmt ein Wissenschaftler passiv (lesen, hören) und aktiv (schreiben) teil.

Mit dem Wachstum des Anteils der wissenschaftlichen Arbeiten in Open Access (OA) im letzten Jahrzent stieg
ebenfalls das Interesse an der Analyse dieser Daten.
Exemplarisch fällt es einer Vielzahl von Wissenschaftlern im klinischen Bereich schwer mit der Anzahl der
veröffentlichten Artikel mitzuhalten. Dies wird besonders beim Betrachten der Anzahl veröffentlichten klinischen
Studien deutlich.

Als Texte werden in diesem Zusammmenhang Buchkapitel, Artikel in (peer-reviewed) Zeitschriften (traditionelle und OpenAccess Zeitschriften), Konferenzpaper, etc. betrachtet.

Für die Wissenschaftler besteht eine der Hauptaufgaben vorerst darin zu untersuchen welche dieser Texte für ihre Forschung relevant sind, um diese dann weiter zu untersuchen.
Im Endeffekt könnten solche Dienste in Software wie EndNote eingebunden werden um die Produktivität einer Vielzahl von Wissenschaftlern zu steigern

---
Um die Arbeit mit dieser Menge an Daten zu vereinfachen sollen hier folgende Aufgaben bearbeitet werden:

## Aufgaben

| Aufgabe | Beschreibung | Priorität | mList|
| --- | --- | --- | --- |
| [`Konzeptanalyse` :link:](doc/Konzeptanalyse.md) | Betrachten von Kernkonzepten (z.B. Relevanz) und was müssen uns Datensätze dafür bieten | Must-have | <ul><li>[ ] Done</li></ul>|
| [`Datenbeschaffung` :soon:]() | Analyse möglicher Datensätze, Crawloptionen, Identifikation möglicher Scopes (z.B. wäre es cool zu überprüfen wie unsere Ansätze auf Medizinischen Artikeln im Vergleich zu CS-Artikeln abschneiden?) | Must-have |<ul><li>[ ] Done</li></ul>|
| [`Datenanalyse` :soon:]() | Erstmal paar Statistiken machen vielleicht um mögliche Biases etc. zu identifizieren | Must-have |<ul><li>[ ] Done</li></ul>|
| [`Datenstrukturierung` :soon:]() | Wichtige Daten => Graph | Must-have |<ul><li>[ ] Done</li></ul>|
| [`Analyse::Referenzen` :soon:]() | `searchable refs` | Must-have |<ul><li>[ ] Done</li></ul>|
| [`Analyse::Zitation` :soon:]() | `searchable cites` | Must-have |<ul><li>[ ] Done</li></ul>|
| [`Analyse::Relevanzmuster` :soon:]() | e.g. `everything cited by mr. x`, `who cited more than 5 articles of a specific cluster` | Must-have |<ul><li>[ ] Done</li></ul>|
| [`Debatte::basic` :soon:]() | `A =Kritik=> B`  | Must-have |<ul><li>[ ] Done</li></ul>|
| [`Debatte::complex` :soon:]() | `responses to article x`, `critics to argument by mr. x`, `cluster like >debates sparked by x<` etc. | TBD(decided after Debatte::basic) |<ul><li>[ ] Done</li></ul>|

## Zeitplan
