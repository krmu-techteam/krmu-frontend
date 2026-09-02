# 🌐 Local Website Ko Live URL Banane Ka Aasan Tarika

Aap local machine (`http://127.0.0.1:3000`) par jo bhi kaam karte hain, usko kisi ko bhi dikhane ya test karne ke liye 2 sabse aasan tarike hain:

---

### 🔹 Tarika 1: Double-Click File (Sabse Aasan)

1. Project folder me jayein: `d:\KRMU\krmu-frontend\`
2. **`start-tunnel.bat`** file par double-click karein.
3. Ek black window khulegi aur usme aapko live link mil jayega (Jaise: `https://...trycloudflare.com`). Is link ko share kar dein!

---

### 🔹 Tarika 2: Terminal Command

Terminal me yeh command chalayein:

```bash
npm run tunnel
```

---

### 📌 Note:

- Command ya Batch file chalane se pehle aapka `npm run dev` start hona chahiye.
- Target IP **`127.0.0.1:3000`** set kiya hai taaki Windows par IPv6 `[::1]` resolution error (red error) na aaye.
- Jab tak window open rahegi, tab tak live URL kaam karega. Window close karne par tunnel band ho jayega.
