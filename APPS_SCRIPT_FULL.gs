// ═══════════════════════════════════════════════════════════════════════
// SPARKEN TECHNOLOGIES — COMPLETE APPS SCRIPT (replace EVERYTHING with this)
// ═══════════════════════════════════════════════════════════════════════
// Where: your "Sparken Leads" sheet → Extensions → Apps Script
// 1. Select all existing code → delete → paste this whole file
// 2. Put your real Turnstile SECRET key on the line below
// 3. Deploy → Manage deployments → ✏️ Edit → Version: "New version" → Deploy
//    (do NOT create a "New deployment" — that changes your URL)
// ═══════════════════════════════════════════════════════════════════════

// ⬇️ PASTE YOUR CLOUDFLARE TURNSTILE *SECRET* KEY HERE (starts with 0x…)
var TURNSTILE_SECRET = "PASTE_YOUR_SECRET_KEY_HERE";

// Which mailbox gets notified for each form type
var NOTIFY = {
  "contact-form":        "sales@sparkentechnologies.com",
  "call-request":        "hello@sparkentechnologies.com",
  "careers-application": "careers@sparkentechnologies.com",
  "newsletter":          "hello@sparkentechnologies.com"
};

function doPost(e) {
  var p = e.parameter;

  // ── Spam gate: verify the Turnstile token server-side ──────────────────
  // Bots that POST directly to this URL (skipping your website) have no
  // valid token and get rejected here.
  if (!verifyTurnstile(p.turnstileToken)) {
    return ContentService.createTextOutput("blocked");
  }

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

  } else if (source === "call-request") {
    ss.getSheetByName("Calls").appendRow([
      now, p.name, p.email, p.phone, p.preferred, p.message, p.page
    ]);
    notify(source, "📞 Call request — " + (p.name || "") + " (" + (p.preferred || "any time") + ")",
      "Name: " + p.name + "\nEmail: " + p.email + "\nPhone: " + p.phone +
      "\nPreferred: " + p.preferred + "\n\n" + (p.message || "") +
      "\n\nConfirm manually by phone/WhatsApp before the slot.");

  } else if (source === "newsletter") {
    ss.getSheetByName("Subscribers").appendRow([now, p.email, p.page]);
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

function verifyTurnstile(token) {
  // If you haven't pasted the secret yet, submissions still pass (soft mode).
  if (!TURNSTILE_SECRET || TURNSTILE_SECRET.indexOf("PASTE_") === 0) return true;
  if (!token) return false; // secret configured but no token = direct bot POST
  try {
    var res = UrlFetchApp.fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      { method: "post", payload: { secret: TURNSTILE_SECRET, response: token } }
    );
    return JSON.parse(res.getContentText()).success === true;
  } catch (err) {
    return true; // if Cloudflare is unreachable, don't lose real leads
  }
}

// ═══════════════════════════════════════════════════════════════════════
// SHEET TABS + EXACT HEADER ROWS (row 1 of each tab)
//   Inquiries:    Timestamp | Type | Name | Email | Company | Budget | Message | Page
//   Calls:        Timestamp | Name | Email | Phone | Preferred Time | Message | Page
//   Applications: Timestamp | Role | Name | Email | Experience | Resume Link | Message
//   Subscribers:  Timestamp | Email | Page
//
// ⚠️ YOUR SCREENSHOT: the Calls tab starts with "Name" in column A.
//    Right-click column A → "Insert 1 column left" → type "Timestamp" in A1.
//    Without it, every row will be shifted one cell to the left.
// ═══════════════════════════════════════════════════════════════════════
