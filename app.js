// =====================================================================
//  app.js — renders the card from config.js and wires up the buttons.
//  You normally DON'T need to edit this file. Edit config.js instead.
// =====================================================================

// ---- Social network icons + brand colors ----------------------------
const SOCIAL_ICONS = {
  linkedin: {
    color: "#0a83c4",
    path: "M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.05A4.17 4.17 0 0 1 16.6 8.8c4 0 4.74 2.63 4.74 6.05V21h-4v-5.36c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.39-2.05 2.83V21H9V9Z",
  },
  twitter: {
    color: "#000000",
    path: "M18.9 2H22l-7.5 8.6L23 22h-6.9l-5.4-7-6.2 7H1.3l8-9.2L1 2h7l4.9 6.5L18.9 2Zm-2.4 18h1.9L7.6 4H5.6l10.9 16Z",
  },
  instagram: {
    color: "#E1306C",
    path: "M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.86s0 3.6-.07 4.86c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.9.07s-3.6 0-4.86-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.86c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5 0-4.74.07-.9.04-1.38.2-1.7.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.12.32-.28.8-.32 1.7C3.42 8.5 3.4 8.85 3.4 12s0 3.5.07 4.74c.04.9.2 1.38.32 1.7.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.12.8.28 1.7.32 1.24.07 1.59.07 4.74.07s3.5 0 4.74-.07c.9-.04 1.38-.2 1.7-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.12-.32.28-.8.32-1.7.07-1.24.07-1.59.07-4.74s0-3.5-.07-4.74c-.04-.9-.2-1.38-.32-1.7a2.85 2.85 0 0 0-.69-1.06 2.85 2.85 0 0 0-1.06-.69c-.32-.12-.8-.28-1.7-.32C15.5 4 15.15 4 12 4Zm0 3.06A4.94 4.94 0 1 1 12 17a4.94 4.94 0 0 1 0-9.88Zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28Zm5.15-3.2a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z",
  },
  facebook: {
    color: "#1877F2",
    path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z",
  },
  youtube: {
    color: "#FF0000",
    path: "M23 12s0-3.2-.4-4.74a2.5 2.5 0 0 0-1.76-1.77C19.3 5.1 12 5.1 12 5.1s-7.3 0-8.84.4A2.5 2.5 0 0 0 1.4 7.26C1 8.8 1 12 1 12s0 3.2.4 4.74a2.5 2.5 0 0 0 1.76 1.77c1.54.4 8.84.4 8.84.4s7.3 0 8.84-.4a2.5 2.5 0 0 0 1.76-1.77C23 15.2 23 12 23 12Zm-13 3.06V8.94L15.2 12 10 15.06Z",
  },
  github: {
    color: "#181717",
    path: "M12 2A10 10 0 0 0 8.84 21.5c.5.08.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.9-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.16.57.67.48A10 10 0 0 0 12 2Z",
  },
  tiktok: {
    color: "#010101",
    path: "M16.6 5.82a4.28 4.28 0 0 1-1.06-2.82h-3.1v12.6a2.6 2.6 0 0 1-2.6 2.4 2.6 2.6 0 0 1 0-5.2c.27 0 .53.04.78.12v-3.2a5.7 5.7 0 0 0-.78-.05 5.72 5.72 0 1 0 5.72 5.72V9.01a7.35 7.35 0 0 0 4.3 1.38V7.28a4.28 4.28 0 0 1-3.26-1.46Z",
  },
  website: {
    color: "#4a4a4a",
    path: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.92 6h-2.95a15.7 15.7 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8ZM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96ZM4.26 14a7.96 7.96 0 0 1 0-4h3.38a16.6 16.6 0 0 0 0 4H4.26Zm.82 2h2.95c.34 1.27.8 2.46 1.38 3.56A8.03 8.03 0 0 1 5.08 16Zm2.95-8H5.08a8.03 8.03 0 0 1 4.33-3.56A15.7 15.7 0 0 0 8.03 8ZM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96ZM14.34 14H9.66a14.7 14.7 0 0 1 0-4h4.68a14.7 14.7 0 0 1 0 4Zm.25 5.56c.58-1.1 1.04-2.29 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56ZM16.36 14a16.6 16.6 0 0 0 0-4h3.38a7.96 7.96 0 0 1 0 4h-3.38Z",
  },
};

// ---- Small helpers --------------------------------------------------
const $ = (id) => document.getElementById(id);
const svg = (path) =>
  `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${path}"/></svg>`;

const DETAIL_ICONS = {
  phone: "M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z",
  email: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.4l8 5 8-5V6H4Zm16 2.7-8 5-8-5V18h16V8.7Z",
  company: "M10 4h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h4V6a2 2 0 0 1 2-2Zm0 3h4V6h-4v1Z",
  website: SOCIAL_ICONS.website.path,
};

// ---- Render the card ------------------------------------------------
function render(p) {
  document.documentElement.style.setProperty("--accent", p.accent || "#c47d45");
  document.title = `${p.firstName} ${p.lastName} — Digital Business Card`;

  // Avatar (photo, or initials fallback)
  const initials = (p.firstName[0] || "") + (p.lastName[0] || "");
  const avatar = $("avatar");
  avatar.innerHTML = `<span class="avatar__initials">${initials.toUpperCase()}</span>`;
  if (p.photo) {
    const img = document.createElement("img");
    img.src = p.photo;
    img.alt = `Portrait of ${p.firstName} ${p.lastName}`;
    img.onerror = () => img.remove();
    avatar.appendChild(img);
  }

  $("name").textContent = `${p.firstName} ${p.lastName}`;
  $("role").textContent = p.title || "";
  $("bio").textContent = p.bio || "";

  // Header quick actions
  $("quickCall").href = `tel:${p.phone}`;
  $("quickEmail").href = `mailto:${p.email}`;

  // Contact detail rows (skip any that aren't filled in)
  const rows = [];
  if (p.phone)
    rows.push(detailRow("phone", `tel:${p.phone}`, p.phoneDisplay || p.phone, p.phoneLabel || "Phone"));
  if (p.email)
    rows.push(detailRow("email", `mailto:${p.email}`, p.email, "Email"));
  if (p.company)
    rows.push(detailRow("company", null, p.company, p.title || ""));
  if (p.website)
    rows.push(detailRow("website", p.website, p.websiteDisplay || p.website, "Website", true));
  $("details").innerHTML = rows.join("");

  // Social links
  const socials = (p.socials || []).filter((s) => s.url && SOCIAL_ICONS[s.type]);
  if (socials.length) {
    $("social").hidden = false;
    $("socialLinks").innerHTML = socials
      .map((s) => {
        const icon = SOCIAL_ICONS[s.type];
        return `<a class="social__link" href="${s.url}" target="_blank" rel="noopener"
                   style="background:${icon.color}" aria-label="${s.type}">${svg(icon.path)}</a>`;
      })
      .join("");
  }
}

function detailRow(iconKey, href, main, label, external) {
  const icon = `<span class="detail__icon">${svg(DETAIL_ICONS[iconKey])}</span>`;
  const mainEl = href
    ? `<a class="detail__main" href="${href}"${external ? ' target="_blank" rel="noopener"' : ""}>${main}</a>`
    : `<span class="detail__main">${main}</span>`;
  const labelEl = label ? `<span class="detail__label">${label}</span>` : "";
  return `<li class="detail">${icon}${mainEl}${labelEl}</li>`;
}

// ---- vCard (.vcf) download ------------------------------------------
function buildVCard(p) {
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${p.lastName};${p.firstName};;;`,
    `FN:${p.firstName} ${p.lastName}`,
    p.company ? `ORG:${p.company}` : "",
    p.title ? `TITLE:${p.title}` : "",
    p.phone ? `TEL;TYPE=CELL:${p.phone}` : "",
    p.email ? `EMAIL;TYPE=WORK:${p.email}` : "",
    p.website ? `URL:${p.website}` : "",
    ...(p.socials || []).map((s) => `X-SOCIALPROFILE;TYPE=${s.type}:${s.url}`),
    "END:VCARD",
  ]
    .filter(Boolean)
    .join("\r\n");
}

function downloadVCard(p) {
  const blob = new Blob([buildVCard(p)], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${p.firstName}_${p.lastName}.vcf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("vCard downloaded");
}

// ---- Share ----------------------------------------------------------
async function sharePage(p) {
  const data = {
    title: `${p.firstName} ${p.lastName}`,
    text: `${p.firstName} ${p.lastName} — ${p.title}`,
    url: window.location.href,
  };
  if (navigator.share) {
    try {
      await navigator.share(data);
    } catch (_) {
      /* user cancelled */
    }
    return;
  }
  try {
    await navigator.clipboard.writeText(window.location.href);
    showToast("Link copied to clipboard");
  } catch (_) {
    showToast("Copy the URL from your browser to share");
  }
}

// ---- Toast ----------------------------------------------------------
let toastTimer;
function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  void toast.offsetWidth;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

// ---- Boot -----------------------------------------------------------
render(profile);
$("downloadBtn").addEventListener("click", () => downloadVCard(profile));
$("shareBtn").addEventListener("click", () => sharePage(profile));
