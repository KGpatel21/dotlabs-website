# Spam Protection — Cloudflare Turnstile (optional, free)

The forms already block most spam with a honeypot + time-trap. Turnstile adds a
proper "are you human?" check with no annoying puzzles. Free, unlimited.

## Setup (2 minutes)

1. Go to https://dash.cloudflare.com → **Turnstile** → **Add site**.
2. Site name: Sparken. Domain: `sparkentechnologies.com`. Widget: **Managed**.
3. You get a **Site Key** (public) and a **Secret Key** (private).

## Add keys to Vercel

Settings → Environment Variables:

```
NEXT_PUBLIC_TURNSTILE_SITE_KEY = 0x4AAA...   (site key — safe to be public)
TURNSTILE_SECRET_KEY           = 0x4AAA...   (secret — used for server verify)
```

Redeploy. The widget now appears automatically on the contact and careers forms.

## Verify tokens (recommended, in the Apps Script)

The forms send a `turnstileToken` with each submission. To actually reject fakes,
add this near the top of `doPost` in your Apps Script and set your secret:

```javascript
var TURNSTILE_SECRET = "0x4AAA...";  // your secret key

function verifyTurnstile(token) {
  if (!TURNSTILE_SECRET || !token) return true; // skip if not configured
  var res = UrlFetchApp.fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    { method: "post", payload: { secret: TURNSTILE_SECRET, response: token } }
  );
  return JSON.parse(res.getContentText()).success === true;
}
```

Then at the start of `doPost`:

```javascript
if (!verifyTurnstile(p.turnstileToken)) {
  return ContentService.createTextOutput("blocked");
}
```

Until you add the site key, forms work fine with just the honeypot + time-trap.
