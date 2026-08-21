// One-time OAuth2 callback for Ahmad's personal Upwork API integration.
//
// Flow: Ahmad manually visits Upwork's authorize URL in his browser, approves
// access, and Upwork redirects here with a `?code=...` query param. This
// route exchanges that code server-side for an access token + refresh token
// and renders them once so Ahmad can copy the refresh token into his
// credentials file. Nothing is persisted to a database — this mirrors how
// other one-time OAuth setups (Google Search Console, Google Ads) were
// handled in this engagement.
//
// Token endpoint verified against Upwork's official OAuth2 client libraries
// (python-upwork-oauth2, node-upwork-oauth2) and third-party integration
// guides, all consistent on: POST https://www.upwork.com/api/v3/oauth2/token
// with grant_type=authorization_code, code, client_id, client_secret,
// redirect_uri as a standard application/x-www-form-urlencoded body.
//
// Not tested end-to-end yet: Upwork's API key application is pending review,
// so UPWORK_CLIENT_ID / UPWORK_CLIENT_SECRET are not set. Once Ahmad has
// real values, add them as Vercel env vars and redeploy (see .env.example).

export const dynamic = "force-dynamic";

const UPWORK_TOKEN_ENDPOINT = "https://www.upwork.com/api/v3/oauth2/token";
const REDIRECT_URI = "https://maatechllc.com/oauth/upwork/callback";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function page(title: string, bodyHtml: string): string {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex, nofollow" />
<title>${escapeHtml(title)}</title>
<style>
  :root { color-scheme: light dark; }
  body {
    margin: 0;
    padding: 48px 24px;
    background: #0f1115;
    color: #e6e8eb;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.5;
  }
  .card {
    max-width: 720px;
    margin: 0 auto;
    background: #171a21;
    border: 1px solid #2a2e38;
    border-radius: 12px;
    padding: 32px;
  }
  h1 { font-size: 1.4rem; margin: 0 0 8px; }
  .status-ok { color: #4ade80; }
  .status-err { color: #f87171; }
  p.lead { color: #a9afbc; margin-top: 0; }
  .field { margin: 20px 0; }
  .field label {
    display: block;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: #8b91a0;
    margin-bottom: 6px;
  }
  .field .value {
    display: block;
    background: #0c0e12;
    border: 1px solid #2a2e38;
    border-radius: 8px;
    padding: 12px 14px;
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 0.85rem;
    word-break: break-all;
    white-space: pre-wrap;
  }
  .note {
    margin-top: 28px;
    padding: 14px 16px;
    background: rgba(96, 165, 250, 0.1);
    border: 1px solid rgba(96, 165, 250, 0.3);
    border-radius: 8px;
    font-size: 0.9rem;
  }
  .note.warn {
    background: rgba(248, 113, 113, 0.1);
    border-color: rgba(248, 113, 113, 0.3);
  }
  pre.raw {
    background: #0c0e12;
    border: 1px solid #2a2e38;
    border-radius: 8px;
    padding: 14px;
    overflow-x: auto;
    font-size: 0.82rem;
  }
</style>
</head>
<body>
  <div class="card">
    ${bodyHtml}
  </div>
</body>
</html>`;
}

function htmlResponse(html: string, status: number): Response {
  return new Response(html, {
    status,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

function renderError(heading: string, detail: string, rawDetail?: string): Response {
  const body = `
    <h1 class="status-err">${escapeHtml(heading)}</h1>
    <p class="lead">${escapeHtml(detail)}</p>
    ${
      rawDetail
        ? `<div class="field">
             <label>Raw response from Upwork</label>
             <pre class="raw">${escapeHtml(rawDetail)}</pre>
           </div>`
        : ""
    }
    <div class="note warn">
      This is the Upwork OAuth callback for maatechllc.com. If you did not expect this,
      you can ignore it. If you are Ahmad debugging the integration, check the details above
      and the Vercel function logs for this route.
    </div>
  `;
  return htmlResponse(page("Upwork connection failed", body), 400);
}

function renderSuccess(tokens: {
  access_token: string;
  refresh_token?: string;
  expires_in?: string | number;
  token_type?: string;
  scope?: string;
}): Response {
  const body = `
    <h1 class="status-ok">Upwork connected</h1>
    <p class="lead">The authorization code was exchanged for tokens successfully.</p>

    <div class="field">
      <label>Access token</label>
      <span class="value">${escapeHtml(tokens.access_token)}</span>
    </div>

    <div class="field">
      <label>Refresh token</label>
      <span class="value">${escapeHtml(tokens.refresh_token ?? "(not returned)")}</span>
    </div>

    <div class="field">
      <label>Expires in (seconds)</label>
      <span class="value">${escapeHtml(String(tokens.expires_in ?? "(not returned)"))}</span>
    </div>

    ${
      tokens.token_type
        ? `<div class="field">
             <label>Token type</label>
             <span class="value">${escapeHtml(tokens.token_type)}</span>
           </div>`
        : ""
    }

    <div class="note">
      Copy the refresh token above into your credentials file now. This page will not be
      reachable again with the same code, authorization codes are single-use, and the access
      token above will expire. If you need a new access token later, use the saved refresh
      token with Upwork's token endpoint and grant_type=refresh_token, this callback page
      only handles the initial one-time authorization.
    </div>
  `;
  return htmlResponse(page("Upwork connected", body), 200);
}

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const oauthError = url.searchParams.get("error");
  const oauthErrorDescription = url.searchParams.get("error_description");

  if (oauthError) {
    return renderError(
      "Upwork returned an error",
      oauthErrorDescription
        ? `Upwork sent back: ${oauthError} - ${oauthErrorDescription}`
        : `Upwork sent back an error code: ${oauthError}. This usually means access was denied during authorization.`
    );
  }

  if (!code) {
    return renderError(
      "Missing authorization code",
      "This URL is the Upwork OAuth callback and it expects a ?code= query parameter from " +
        "Upwork's authorization redirect. If you are loading this directly (no code), that is " +
        "expected, it means the route is deployed and reachable but there is nothing to exchange yet."
    );
  }

  const clientId = process.env.UPWORK_CLIENT_ID;
  const clientSecret = process.env.UPWORK_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return renderError(
      "Server is not configured yet",
      "UPWORK_CLIENT_ID and/or UPWORK_CLIENT_SECRET are not set as environment variables. " +
        "Add the real values from Upwork's developer portal once the API key application is " +
        "approved, then redeploy or add them in the Vercel dashboard, and try the authorization " +
        "link again (a fresh code will be needed since this one may now be expired)."
    );
  }

  let tokenResponse: Response;
  try {
    tokenResponse = await fetch(UPWORK_TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: REDIRECT_URI,
      }).toString(),
    });
  } catch (networkError) {
    return renderError(
      "Network error contacting Upwork",
      "The request to Upwork's token endpoint failed before getting a response. This could be " +
        "a temporary network issue, try the authorization link again to get a fresh code.",
      networkError instanceof Error ? networkError.message : String(networkError)
    );
  }

  const rawBody = await tokenResponse.text();
  let parsed: Record<string, unknown> | null = null;
  try {
    parsed = JSON.parse(rawBody);
  } catch {
    parsed = null;
  }

  if (!tokenResponse.ok || !parsed || typeof parsed.access_token !== "string") {
    return renderError(
      `Upwork rejected the token exchange (HTTP ${tokenResponse.status})`,
      "Upwork did not return a valid access token for this code. The authorization code may " +
        "already be used, expired, or the client credentials may be wrong. Get a fresh code by " +
        "visiting the authorization URL again.",
      rawBody
    );
  }

  return renderSuccess({
    access_token: parsed.access_token,
    refresh_token: typeof parsed.refresh_token === "string" ? parsed.refresh_token : undefined,
    expires_in:
      typeof parsed.expires_in === "number" || typeof parsed.expires_in === "string"
        ? parsed.expires_in
        : undefined,
    token_type: typeof parsed.token_type === "string" ? parsed.token_type : undefined,
    scope: typeof parsed.scope === "string" ? parsed.scope : undefined,
  });
}
