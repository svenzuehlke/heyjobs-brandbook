# Beitragsrichtlinien

Vielen Dank für dein Interesse, zum HeyJobs Brandbook beizutragen! 🎨

---

## 📋 Wie du beitragen kannst

### 1. Design System Updates

**Beispiel: Neue Farbe hinzufügen**

```bash
# Branch erstellen
git checkout -b add-success-color

# Datei bearbeiten
# design-system/HeyJobs-Design-System-B2B.md

# Commit & Push
git add design-system/HeyJobs-Design-System-B2B.md
git commit -m "Add success green color to functional colors"
git push origin add-success-color

# Pull Request erstellen auf GitHub
```

---

### 2. Tone of Voice Updates

**Beispiel: Neue Messaging-Pattern hinzufügen**

```bash
git checkout -b add-testimonial-pattern
# Bearbeite tone-of-voice/HeyJobs-Tone-of-Voice-B2B.md
git add tone-of-voice/HeyJobs-Tone-of-Voice-B2B.md
git commit -m "Add testimonial messaging pattern"
git push origin add-testimonial-pattern
```

---

### 3. Assets hinzufügen

**Neue Logos, Fonts, Icons:**

```bash
# Dateien in passenden Ordner legen
assets/logos/new-logo-variant.png
assets/fonts/RebondGrotesque-Bold.woff2
assets/icons/scribbles/scribble-gold.svg

git add assets/
git commit -m "Add new logo variant and scribble assets"
git push
```

---

### 4. Templates & Beispiele

**Neue Templates:**
- PPTX → `templates/`
- HTML → `templates/`
- Beispiele → `examples/`

---

## ✅ Pull Request Checklist

Bevor du einen Pull Request erstellst:

- [ ] Änderungen sind getestet (Brandbook-Website funktioniert)
- [ ] Markdown ist korrekt formatiert
- [ ] Assets sind optimiert (Bilder komprimiert, Fonts subset)
- [ ] README.md ist aktualisiert (falls nötig)
- [ ] Commit-Message ist klar und beschreibend

---

## 🔍 Review-Prozess

1. **Pull Request erstellen**
2. **Review durch Design/Marketing Team**
3. **Anpassungen vornehmen** (falls nötig)
4. **Approval** von mindestens 1 Team-Mitglied
5. **Merge in `main`**
6. **Automatisches Deployment** auf GitHub Pages

---

## 💬 Fragen?

→ Issue erstellen im GitHub Repo  
→ Slack: #design oder #marketing Channel

---

Danke für deinen Beitrag! 🙌