# HeyJobs Brandbook

**Version 1.0 (B2B Edition)**  
Das zentrale HeyJobs Design System & Tone of Voice – die Single Source of Truth für alle Mitarbeitenden.

![HeyJobs Logo](assets/logos/heyjobs-primary-logo.png)

---

## 🎯 Übersicht

Dieses Repository ist die **zentrale Quelle** für alle Design- und Kommunikations-Guidelines bei HeyJobs B2B.

### Was ist drin?

- ✅ **Design System** – Farben, Typografie, Komponenten, Spacing, Logos
- ✅ **Tone of Voice** – B2B-Kommunikationsrichtlinien (Sie-Ansprache)
- ✅ **Brandbook-Website** – Interaktive Dokumentation (GitHub Pages)
- ✅ **Assets** – Logos, Fonts, Icons, Scribbles
- ✅ **Templates** – PPTX, HTML, LinkedIn Ads (coming soon)
- ✅ **Beispiele** – Best Practices aus echten Kampagnen

---

## 🚀 Quick Start

### Für Designer & Entwickler

**Design-Specs nachschlagen:**
```bash
# Repo klonen
git clone https://github.com/svenzuehlke/heyjobs-brandbook.git

# Design System öffnen
open design-system/HeyJobs-Design-System-B2B.md
```

**Wichtigste Infos:**
- **Farben:** GOLD `#F5B100`, COSMO `#D02879`, GRAY 100 `#181A22`, WHITE `#FFFFFF`
- **Typografie:** Rebond Grotesque Bold (Headlines), IBM Plex Sans (Body)
- **Spacing:** 8px Grid-System
- **80/7.5/7.5/5 Regel:** 80% WHITE, 7.5% GOLD, 7.5% COSMO, 5% GRAY 100

---

### Für Copywriter & Marketing

**Tone of Voice Guidelines:**
```bash
# Tone of Voice öffnen
open tone-of-voice/HeyJobs-Tone-of-Voice-B2B.md
```

**Wichtigste Regeln:**
- **Sie-Ansprache** (immer formal, nie Du in B2B)
- **Datengetrieben** (CPH, CPA, Time-to-Hire, konkrete Zahlen)
- **Lösungsorientiert** (Problem → Lösung)
- **Keine Buzzwords** (disruptiv, synergistisch, best-in-class ❌)
- **Gendering:** Kandidat:innen (mit Doppelpunkt)

---

### Für AI-Tools (Claude, ChatGPT)

**Design System direkt nutzen:**
```
https://raw.githubusercontent.com/svenzuehlke/heyjobs-brandbook/main/design-system/HeyJobs-Design-System-B2B.md
```

**Tone of Voice direkt nutzen:**
```
https://raw.githubusercontent.com/svenzuehlke/heyjobs-brandbook/main/tone-of-voice/HeyJobs-Tone-of-Voice-B2B.md
```

**Beispiel-Prompt für Claude:**
> "Nutze das HeyJobs Design System aus diesem Link [URL] und erstelle mir eine Präsentations-Folie zum Thema 'Performance Recruiting'."

---

## 🌐 Brandbook-Website (Live)

**👉 [svenzuehlke.github.io/heyjobs-brandbook](https://svenzuehlke.github.io/heyjobs-brandbook/)**

Die interaktive Brandbook-Website bietet:
- ✅ Copy-to-Clipboard für alle Farbcodes
- ✅ Live-Beispiele für Komponenten
- ✅ Interaktive Buttons, Cards, Forms
- ✅ Download-Links für alle Assets
- ✅ Mobile-optimiert

---

## 📂 Repository-Struktur

```
heyjobs-brandbook/
│
├── README.md                                    # Diese Datei
├── index.html                                   # Brandbook-Website (GitHub Pages)
│
├── design-system/
│   └── HeyJobs-Design-System-B2B.md            # ← Für Claude/GPT/Designer
│
├── tone-of-voice/
│   └── HeyJobs-Tone-of-Voice-B2B.md            # ← Für Claude/GPT/Copywriter
│
├── assets/
│   ├── logos/
│   │   ├── heyjobs-primary-logo.png            # Primary Logo (job in GOLD)
│   │   ├── heyjobs-logo-white.png              # White Logo (dunkle Backgrounds)
│   │   ├── heyjobs-secondary-gold.png          # Secondary GOLD
│   │   ├── heyjobs-secondary-cosmo.png         # Secondary COSMO
│   │   └── favicon.png                         # Favicon
│   ├── fonts/
│   │   └── .gitkeep                            # Rebond Grotesque hier ablegen
│   ├── icons/
│   │   └── scribbles/
│   │       └── .gitkeep                        # Scribble-Unterstreichungen (SVG)
│   └── images/
│       └── .gitkeep                            # Beispiel-Fotos für Dokumentation
│
├── templates/
│   └── .gitkeep                                # PPTX, HTML, Email Templates (coming soon)
│
├── examples/
│   └── .gitkeep                                # Best Practice Beispiele (coming soon)
│
├── css/
│   └── style.css                               # Styles für Brandbook-Website
│
└── js/
    └── main.js                                 # JavaScript für Brandbook-Website
```

---

## 🎨 Design System – Quick Reference

### Farben
```css
--gold: #F5B100        /* Primary Accent (7.5%) */
--cosmo: #D02879       /* Secondary Accent (7.5%) */
--gray-100: #181A22    /* Text & Structure (5%) */
--white: #FFFFFF       /* Primary Base (80%) */

/* Gradient */
linear-gradient(90deg, #F5B100 0%, #F6694E 50%, #D02879 100%)
```

⚠️ **FIRE (#F6694E) nur im Gradient, nie standalone!**

### Typografie
```
Headlines:  Rebond Grotesque Bold, 100-130% Line-height
Body:       IBM Plex Sans Regular, 150% Line-height
UI:         IBM Plex Sans Semibold
```

### Spacing (8px Grid)
```
4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px, 128px
```

---

## 💬 Tone of Voice – Quick Reference

### Die 5 Säulen
1. **Professionell & Kompetent** – Datengetrieben, Expertise zeigen
2. **Lösungsorientiert** – Problem → Lösung, konkret nicht abstrakt
3. **Persönlich (trotz Sie)** – Warm, nahbar, partnerschaftlich
4. **Transparent & Ehrlich** – Klare Kosten, realistische Erwartungen
5. **Performance-fokussiert** – ROI, Metriken (CPH, CPA, Time-to-Hire)

### Verbotene Buzzwords
❌ Disruptiv, Synergien, Best-in-class, Cutting-edge, Paradigmenwechsel, Ganzheitlich, Game-changer

### Bevorzugte Begriffe
✅ Performance Recruiting, Einstellbare Kandidat:innen, Cost-per-Hire (CPH), Messbare Ergebnisse, DSGVO-konform

---

## 📥 Downloads

### Logos
- [Primary Logo (PNG)](assets/logos/heyjobs-primary-logo.png)
- [White Logo (PNG)](assets/logos/heyjobs-logo-white.png)
- [Secondary GOLD (PNG)](assets/logos/heyjobs-secondary-gold.png)
- [Secondary COSMO (PNG)](assets/logos/heyjobs-secondary-cosmo.png)

### Fonts
- **Rebond Grotesque Bold**: Im `/assets/fonts/` Ordner ablegen
- **IBM Plex Sans**: [Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Sans) (Open Source)

### Design System Files (für Claude/AI)
- [Design System (MD)](design-system/HeyJobs-Design-System-B2B.md)
- [Tone of Voice (MD)](tone-of-voice/HeyJobs-Tone-of-Voice-B2B.md)

---

## 🔄 Workflow: Änderungen vorschlagen

### Für Design-Updates

1. **Branch erstellen:**
   ```bash
   git checkout -b update-design-system
   ```

2. **Änderungen machen:**
   - `design-system/HeyJobs-Design-System-B2B.md` bearbeiten
   - Oder `index.html` für Brandbook-Website

3. **Pull Request erstellen:**
   - Beschreibe die Änderung
   - Tag relevante Team-Mitglieder
   - Warte auf Review & Approval

4. **Merge:**
   - Automatisch deployed auf GitHub Pages
   - Alle haben Zugriff auf neueste Version

---

## 🧪 Use Cases

### Präsentation erstellen
```
1. Öffne design-system/HeyJobs-Design-System-B2B.md
2. Checke Farben (80/7.5/7.5/5 Regel)
3. Nutze Rebond Grotesque Bold für Headlines
4. Scribble-Unterstreichung auf wichtigem Keyword
5. Metriken in GOLD/COSMO (Rebond Grotesque Bold, 56px)
```

### LinkedIn Ad schreiben
```
1. Öffne tone-of-voice/HeyJobs-Tone-of-Voice-B2B.md
2. Sie-Ansprache nutzen
3. Headline: Problem → Lösung (max 70 Zeichen)
4. Body: Konkrete Metrik einbauen (CPH, CPA, Time-to-Hire)
5. CTA: "Jetzt beraten lassen" oder "Mehr erfahren"
```

### Mit Claude arbeiten
```
1. Gehe zu claude.ai
2. Erstelle Project: "HeyJobs B2B"
3. Uploade beide MD-Files:
   - design-system/HeyJobs-Design-System-B2B.md
   - tone-of-voice/HeyJobs-Tone-of-Voice-B2B.md
4. Prompt: "Erstelle mir eine LinkedIn Ad für Performance Recruiting"
5. Claude nutzt automatisch Design System + Tone of Voice!
```

---

## 🌟 GitHub Pages Deployment

### Aktivieren
1. Gehe zu **Settings** → **Pages**
2. Source: `main` branch
3. Save
4. Website ist live unter: `https://svenzuehlke.github.io/heyjobs-brandbook/`

### Automatisches Update
- Jeder Push auf `main` triggert automatisches Deployment
- Nach ~1 Minute sind Änderungen live

---

## 🤝 Team-Links

**Für Slack/Teams:**
```
📚 Brandbook: https://svenzuehlke.github.io/heyjobs-brandbook/
🎨 Design System: https://github.com/svenzuehlke/heyjobs-brandbook/blob/main/design-system/HeyJobs-Design-System-B2B.md
💬 Tone of Voice: https://github.com/svenzuehlke/heyjobs-brandbook/blob/main/tone-of-voice/HeyJobs-Tone-of-Voice-B2B.md
```

---

## 📞 Kontakt & Support

**Fragen zum Design System?**  
→ Issue erstellen im GitHub Repo

**Design-Updates vorschlagen?**  
→ Pull Request erstellen

**Allgemeine Fragen?**  
→ #design oder #marketing Channel in Slack

---

## 📜 Lizenz

© 2026 HeyJobs GmbH. Alle Rechte vorbehalten.

Dieses Design System ist ausschließlich für interne Verwendung bei HeyJobs und autorisierten Partnern bestimmt.

---

## 🔖 Version History

**Version 1.0** – Juni 2026
- Initial Release
- Design System (B2B)
- Tone of Voice (B2B)
- Brandbook-Website (GitHub Pages)
- Logo-Varianten (Primary, White, Secondary)

---

**Made with ❤️ in Berlin**

🔗 **Website:** [heyjobs.co](https://www.heyjobs.co)  
🐙 **GitHub:** [github.com/svenzuehlke/heyjobs-brandbook](https://github.com/svenzuehlke/heyjobs-brandbook)