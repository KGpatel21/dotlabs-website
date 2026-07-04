# Google Sheets Form Capture — Setup (10 minutes)

Every contact-form submission will be appended as a row in a Google Sheet you own.
No backend server needed — a free Google Apps Script Web App receives the form POST.

## Step 1 — Create the Sheet

1. Go to https://sheets.google.com → Blank spreadsheet.
2. Name it e.g. **Sparken Website Inquiries**.
3. In row 1 add headers exactly:
   `Timestamp | Source | Name | Email | Company | Budget | Message | Page`

## Step 2 — Add the Apps Script

1. In the sheet: **Extensions → Apps Script**.
2. Delete the sample code, paste this, and save:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var p = e.parameter;
  sheet.appendRow([
    new Date(),
    p.source || "",
    p.name || "",
    p.email || "",
    p.company || "",
    p.budget || "",
    p.message || "",
    p.page || "",
  ]);

  // Optional: email yourself on every inquiry (uncomment to enable)
  // MailApp.sendEmail(
  //   "info@sparkentechnologies.com",
  //   "New website inquiry from " + (p.name || "Unknown"),
  //   "Name: " + p.name + "\nEmail: " + p.email + "\nCompany: " + p.company +
  //   "\nBudget: " + p.budget + "\n\n" + p.message
  // );

  return ContentService.createTextOutput("ok");
}
```

## Step 3 — Deploy as a Web App

1. Click **Deploy → New deployment**.
2. Gear icon → type **Web app**.
3. Description: `website form`; Execute as: **Me**; Who has access: **Anyone**.
4. Click **Deploy**, authorize with your Google account, and copy the
   **Web app URL** (looks like `https://script.google.com/macros/s/AKfycb.../exec`).

> "Anyone" only means anyone can POST form data to it — nobody can read your sheet.

## Step 4 — Give the site the URL

**Netlify:** Site settings → Environment variables → Add:

```
Key:   NEXT_PUBLIC_SHEETS_WEBHOOK
Value: https://script.google.com/macros/s/AKfycb.../exec
```

Then trigger a redeploy. (For local dev, put the same line in `.env.local`.)

## Step 5 — Test

Submit the form on the live site → a new row should appear in the sheet within seconds.

## Notes

- If you later edit the Apps Script, use **Deploy → Manage deployments → Edit → New version**
  (creating a brand-new deployment changes the URL).
- The same endpoint can accept other forms too — we send a `source` field
  (`contact-form`) so you can filter or add tabs later.
