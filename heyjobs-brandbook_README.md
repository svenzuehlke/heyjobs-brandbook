# HeyJobs Brandbook

![HeyJobs Logo](assets/logos/heyjobs-primary-logo.png)

**Version 1.0 (B2B Edition)**  
Design System & Tone of Voice für professionelle B2B-Kommunikation

---

## 📋 Inhalt

Dieses Brandbook enthält das komplette HeyJobs Design System für B2B-Kommunikation mit Arbeitgebern, Recruitern und HR-Professionals.

### Enthalten:
- ✅ **Farben** – 80/7.5/7.5/5 Regel, Gradient, Grau-Skala
- ✅ **Typografie** – Rebond Grotesque Bold, IBM Plex Sans
- ✅ **Spacing System** – 8px Grid
- ✅ **Komponenten** – Buttons, Cards, Forms, Navigation
- ✅ **Logos** – Alle Varianten (Primary, White, Secondary)
- ✅ **Tone of Voice** – Die 5 Säulen der B2B-Kommunikation
- ✅ **Use Cases** – Präsentationen, LinkedIn Ads, Landing Pages

---

## 🚀 Live-Website ansehen

Die Brandbook-Website ist deployed auf GitHub Pages:

**👉 [heyjobs-brandbook.github.io](https://svenzuehlke.github.io/heyjobs-brandbook/)** *(nach Deployment)*

---

## 📦 Struktur

```
heyjobs-brandbook/
├── index.html              # Hauptseite
├── css/
│   └── style.css          # Alle Styles
├── js/
│   └── main.js            # Copy-to-Clipboard, Navigation
├── assets/
│   ├── fonts/             # Rebond Grotesque (separat im Repo)
│   ├── logos/             # Alle Logo-Varianten (PNG)
│   └── images/            # Bilder, Skribbles
└── README.md              # Diese Datei
```

---

## 🎨 Quick Reference

### Farben
- **GOLD**: `#F5B100` (7.5% – Primäre Akzente)
- **COSMO**: `#D02879` (7.5% – Sekundäre Akzente)
- **GRAY 100**: `#181A22` (5% – Text)
- **WHITE**: `#FFFFFF` (80% – Basis)
- **Gradient**: `linear-gradient(90deg, #F5B100 0%, #F6694E 50%, #D02879 100%)`

⚠️ **FIRE (#F6694E) NIEMALS standalone – nur im Gradient!**

### Typografie
- **Headlines**: Rebond Grotesque Bold, 100-130% Line-height
- **Body**: IBM Plex Sans Regular, 150% Line-height
- **UI**: IBM Plex Sans Semibold

### Spacing
Basiert auf 8px Grid: `4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px, 128px`

---

## 🌐 Deployment auf GitHub Pages

### Schritt 1: Repo klonen
```bash
git clone https://github.com/svenzuehlke/heyjobs-brandbook.git
cd heyjobs-brandbook
```

### Schritt 2: Dateien committen (falls Änderungen)
```bash
git add .
git commit -m "Update brandbook"
git push origin main
```

### Schritt 3: GitHub Pages aktivieren
1. Gehe zu GitHub Repo: [github.com/svenzuehlke/heyjobs-brandbook](https://github.com/svenzuehlke/heyjobs-brandbook)
2. Klicke auf **Settings**
3. Scrolle zu **Pages** (linke Sidebar)
4. Unter **Source**: Wähle `main` Branch
5. Klicke **Save**
6. Nach ~1 Minute ist die Website live unter:  
   `https://svenzuehlke.github.io/heyjobs-brandbook/`

---

## 💾 Downloads

### Logos
Alle Logo-Varianten (PNG) sind im `/assets/logos/` Ordner:
- `heyjobs-primary-logo.png` – Primary Logo (job in GOLD)
- `heyjobs-logo-white.png` – White Logo (für dunkle Backgrounds)
- `heyjobs-secondary-gold.png` – Secondary GOLD
- `heyjobs-secondary-cosmo.png` – Secondary COSMO
- `favicon.png` – Favicon

### Fonts
Rebond Grotesque Bold ist im `/assets/fonts/` Ordner verfügbar.  
IBM Plex Sans ist via [Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Sans) kostenlos verfügbar.

### Design System (Markdown)
Das komplette Design System als Markdown:
- `heyjobs-design-system-b2b.md` (im Root-Verzeichnis)

---

## 🛠️ Lokales Development

### Voraussetzungen
- Einfacher Webserver (z.B. Python, Node.js, VS Code Live Server)

### Option 1: Python
```bash
cd heyjobs-brandbook
python3 -m http.server 8000
```
Dann öffne: `http://localhost:8000`

### Option 2: VS Code Live Server
1. Installiere "Live Server" Extension
2. Rechtsklick auf `index.html` → "Open with Live Server"

### Option 3: Node.js (http-server)
```bash
npx http-server
```

---

## 📝 Änderungen vornehmen

### Farben ändern
Bearbeite `/css/style.css` → `:root` CSS-Variablen

### Content ändern
Bearbeite `/index.html` → Sections

### JavaScript anpassen
Bearbeite `/js/main.js` → Copy-to-Clipboard, Navigation

---

## 🎯 Use Cases

### 1. Präsentationen
- Verwende Farben: 80% WHITE, 7.5% GOLD/COSMO
- Headlines: Rebond Grotesque Bold
- Scribble-Unterstreichungen auf Keywords

### 2. LinkedIn Ads
- Sie-Ansprache, datengetrieben
- Primary Button: GOLD
- Metriken prominent (CPH, CPA, Time-to-Hire)

### 3. Landing Pages
- Hero mit Gradient-Background oder WHITE
- Trust-Badges: "DSGVO-konform • Made in Berlin"
- Clear CTAs: "Jetzt beraten lassen"

---

## 🤝 Skills (Langdock)

Zwei Skills wurden erstellt für automatische Anwendung des Design Systems:

1. **HeyJobs Design System (B2B)** – Farben, Komponenten, Spacing, Logos
2. **HeyJobs Tone of Voice (B2B)** – Sie-Ansprache, Messaging, Do's & Don'ts

Aktiviere diese Skills in Claude, um automatisch brand-konforme Inhalte zu erstellen.

---

## 📞 Kontakt

**HeyJobs GmbH**  
Berlin, Deutschland

- Website: [heyjobs.co](https://www.heyjobs.co)
- GitHub: [github.com/svenzuehlke/heyjobs-brandbook](https://github.com/svenzuehlke/heyjobs-brandbook)

---

## 📜 Lizenz

© 2026 HeyJobs GmbH. Alle Rechte vorbehalten.

Dieses Design System ist ausschließlich für interne Verwendung bei HeyJobs und autorisierten Partnern bestimmt.

---

**Version**: 1.0 (B2B Edition)  
**Letzte Aktualisierung**: Juni 2026  
**Status**: ✅ Production Ready

---

Made with ❤️ in Berlin