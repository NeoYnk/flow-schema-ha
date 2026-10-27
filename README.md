# flow-schema-madz (`madz-flow-card`)

Eigenständiger Fork der [schematic-flow-card v0.1.0](https://github.com/birkir/home-assistant-schematic-flow-card/releases/tag/v0.1.0)
für Home Assistant. Die Karte läuft unter dem eigenen Custom-Element-Namen
**`madz-flow-card`** und kann daher parallel zum Original installiert werden.

Datei: [`flow-schema-madz.js`](flow-schema-madz.js)

## Installation

1. `flow-schema-madz.js` nach `config/www/` kopieren.
2. Ressource hinzufügen: *Einstellungen → Dashboards → Ressourcen* →
   `/local/flow-schema-madz.js` (Typ: JavaScript-Modul).
3. Karte verwenden mit `type: custom:madz-flow-card`.

Die komplette Konfiguration (Canvas, Nodes, Pipes, Header-Chips, Annotationen,
Farbskalen, Animationen) entspricht dem Original. Zusätzlich gibt es die
unten beschriebenen 12 optionalen Styling-Parameter für Nodes.

## Was gegenüber dem Original geändert wurde

| Stelle | Original | Fork |
| --- | --- | --- |
| Custom Element | `schematic-flow-card` | `madz-flow-card` |
| Editor-Element | `schematic-flow-card-editor` | `madz-flow-card-editor` |
| Kartenauswahl (`customCards`) | `schematic-flow-card` | `madz-flow-card` |
| ES-Export | `SchematicFlowCard` | `MadzFlowCard` |
| Neue Funktion | – | `wt_param()` (generische Stop-Interpolation) |
| Node-Rendering (`jt`) | – | setzt die neuen Parameter als Inline-Styles / SVG-Attribute |

Der innere Code (Klassen, CSS-Klassennamen wie `node__tile`) blieb unangetastet.

## Die 12 optionalen Styling-Parameter

Jeder Parameter kann **global auf der Node** gesetzt werden und/oder
**dynamisch in den `stops`** der Farbskala (`color.stops`). Reihenfolge:

1. Wert aus den `stops` (interpoliert nach dem Entity-Wert), falls dort definiert
2. sonst der globale Wert auf der Node
3. sonst das Original-Verhalten der Karte

| Parameter | Wirkung | Beispiel |
| --- | --- | --- |
| `body_color` | Feste Kastenfarbe, überschreibt den dynamischen Leistungsverlauf | `"#223344"` |
| `body_opacity` | Deckkraft des Kastens, `0.0` bis `1.0` (Standard `1.0`) | `0.8` |
| `border_width` | Rahmenbreite in px. Bei `0` wird der Rahmen entfernt und der Hover-Effekt blockiert | `2` |
| `border_color` | Separate Rahmenfarbe | `"#ff00ff"` |
| `border_radius` | Eckenrundung in px (Standard `14`) | `4` |
| `icon_color` | Feste Icon-Farbe, unabhängig vom Leistungsverlauf | `"#37474f"` |
| `icon_opacity` | Deckkraft des Icons, `0.0` bis `1.0` | `0.7` |
| `icon_bg_color` | Hintergrundfarbe des Icon-Kreises | `"#333333"` |
| `icon_bg_opacity` | Deckkraft des Icon-Kreises. Bei `0.0` schwebt das Icon frei | `0` |
| `icon_color_font` | Schriftfarbe von Label und Werten | `"#00aa00"` |
| `font_size` | Schriftgröße von Label und Werten (`12px` oder Zahl in px) | `"13px"` |
| `status_glow` | Neon-Schatten um die Box: `true` (Akzentfarbe), `false` oder HEX-Farbe | `"#00ff00"` |

### Interpolation in den `stops`

`wt_param()` arbeitet analog zur Farbberechnung des Originals:

- HEX-Farben (`#rgb` / `#rrggbb`) werden mit der Mischfunktion der Karte überblendet.
- Zahlen (`border_width`, `border_radius`, Deckkräfte, numerische `font_size`) werden linear interpoliert.
- Alles andere (`true`/`false`, `"12px"`, CSS-Variablen) schaltet in der Mitte zwischen zwei Stops um.
- Stops, die einen Parameter nicht definieren, werden für diesen Parameter übersprungen.
- Ist der Entity-Wert nicht verfügbar, greift der globale Node-Wert bzw. das Original.

## Beispiel

```yaml
type: custom:madz-flow-card
title: Wärmepumpe
canvas:
  width: 600
  height: 300
nodes:
  hp:
    x: 40
    y: 100
    label: Wärmepumpe
    icon: mdi:heat-pump
    labels:
      - sensor.hp_power
    # global
    border_radius: 8
    icon_color: "#37474f"
    icon_color_font: "#212121"
    font_size: 12px
    # dynamisch über die Leistung
    color:
      entity: sensor.hp_power
      stops:
        - at: 0
          color: "#9e9e9e"
          body_color: "#f5f5f5"
          border_width: 1
          status_glow: false
        - at: 1500
          color: "#4caf50"
          body_color: "#e8f5e9"
          border_width: 2
          status_glow: true
        - at: 4000
          color: "#f44336"
          body_color: "#ffebee"
          border_width: 3
          status_glow: "#ff1744"
  house:
    x: 400
    y: 100
    label: Haus
    kind: sink
    icon: mdi:home
    body_color: "#ffffff"
    body_opacity: 0.9
    border_width: 0
    icon_bg_opacity: 0
    icon_opacity: 0.85
pipes:
  - id: heat
    from: hp
    to: house
    animation:
      entity: sensor.hp_power
      min: 0
      max: 4000
```

## Lizenz

MIT, siehe [LICENSE](LICENSE). Basierend auf schematic-flow-card von Birkir Gudjonsson.
