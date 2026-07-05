# Form Capture Setup — Google Sheets + Email Notifications

Every form on the site (contact, careers, newsletter) sends its data to ONE
Google Apps Script Web App. The script writes a row to the right tab AND emails
you. No paid service, no backend server.

Forms and where they go:

| Form            | source value          | Sheet tab      | Emails            |
|-----------------|-----------------------|----------------|-------------------|
| Contact         | `contact-form`        | Inquiries      | sales@            |
| Careers apply   | `careers-application` | Applications   | careers@          |
| Newsletter      | `newsletter`          | Subscribers    | hello@ (optional) |

---

## Step 1 — Create the Sheet with 3 tabs

1. Go to https://sheets.google.com → new blank sheet → name it **Sparken Leads**.
2. Create three tabs (bottom-left "+"): **Inquiries**, **Applications**, **Subscribers**.
3. Header row for each (row 1):

**Inquiries:** `Timestamp | Type | Name | Email | Company | Budget | Message | Page`
**Applications:** `Timestamp | Role | Name | Email | Experience | Resume Link | Message`
**Subscribers:** `Timestamp | Email | Page`

## Step 2 — Apps Script

In the sheet: **Extensions → Apps Script**, delete the sample, paste this, Save:

```javascript
// Where each form's notifications go:
var NOTIFY = {
  "contact-form":        "sales@sparkentechnologies.com",
  "careers-application": "careers@sparkentechnologies.com",
  "newsletter":          "hello@sparkentechnologies.com"
};

function doPost(e) {
  var p = e.parameter;
  var source = p.source || "contact-form";
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var now = new Date();

  if (source === "careers-application") {
    ss.getSheetByName("Applications").appendRow([
      now, p.role, p.name, p.email, p.experience, p.resume, p.message
    ]);
    notify(source, "New job application — " + (p.role || ""),
      "Name: " + p.name + "\nEmail: " + p.email + "\nRole: " + p.role +
      "\nExperience: " + p.experience + "\nResume: " + p.resume +
      "\n\n" + (p.message || ""));

  } else if (source === "newsletter") {
    ss.getSheetByName("Subscribers").appendRow([now, p.email, p.page]);
    // newsletter email notification optional — comment out next line to silence
    notify(source, "New newsletter subscriber", p.email);

  } else { // contact-form
    ss.getSheetByName("Inquiries").appendRow([
      now, p.type, p.name, p.email, p.company, p.budget, p.message, p.page
    ]);
    notify(source, "New inquiry (" + (p.type || "") + ") — " + (p.name || ""),
      "Type: " + p.type + "\nName: " + p.name + "\nEmail: " + p.email +
      "\nCompany: " + p.company + "\nBudget: " + p.budget +
      "\n\n" + (p.message || ""));
  }
  return ContentService.createTextOutput("ok");
}

function notify(source, subject, body) {
  var to = NOTIFY[source];
  if (to) MailApp.sendEmail(to, subject, body);
}
```

## Step 3 — Deploy

1. **Deploy → New deployment** → gear → **Web app**.
2. Execute as: **Me**. Who has access: **Anyone**.
3. **Deploy**, authorize, copy the **Web app URL** (`.../exec`).

> "Anyone" = anyone can POST to it. Nobody can read your sheet or email.

## Step 4 — Add the URL to Vercel (this is the Vercel-specific bit)

1. Vercel dashboard → your project → **Settings → Environment Variables**.
2. Add:
   - Key: `NEXT_PUBLIC_SHEETS_WEBHOOK`
   - Value: your `.../exec` URL
   - Environments: tick **Production, Preview, Development**
3. **Save**, then **Deployments → ⋯ → Redeploy** (env vars only apply to new builds).

For local testing, create `.env.local` with the same line.

## Step 5 — Test each form

- Contact form → row in **Inquiries** + email to sales@
- Careers apply → row in **Applications** + email to careers@
- Newsletter → row in **Subscribers**

## Spam protection (already built in)

- **Honeypot** hidden field — bots fill it, humans don't; those submissions are dropped.
- **Time-trap** — submissions faster than 3 seconds are rejected.
- **Cloudflare Turnstile** (optional, stronger) — see `SECURITY_TURNSTILE.md`.

## If you edit the script later

Use **Deploy → Manage deployments → Edit (pencil) → New version**. Creating a
brand-new deployment changes the URL and you'd have to update Vercel.
