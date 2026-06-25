// ---------------------------------------------------------------------------
// Contact data — edit this object to reuse the template for anyone.
// ---------------------------------------------------------------------------
const contact = {
  firstName: "Lorena",
  lastName: "Roberts",
  title: "Sr. National Account Mgr.",
  company: "March Products Inc.",
  phone: "+19096348698",
  phoneDisplay: "(909) 634-8698",
  email: "lroberts@marchproducts.com",
  website: "https://www.marchproducts.com",
  linkedin: "https://www.linkedin.com/",
};

// ---------------------------------------------------------------------------
// vCard (.vcf) generation
// ---------------------------------------------------------------------------
function buildVCard(c) {
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${c.lastName};${c.firstName};;;`,
    `FN:${c.firstName} ${c.lastName}`,
    `ORG:${c.company}`,
    `TITLE:${c.title}`,
    `TEL;TYPE=CELL:${c.phone}`,
    `EMAIL;TYPE=WORK:${c.email}`,
    `URL:${c.website}`,
    c.linkedin ? `X-SOCIALPROFILE;TYPE=linkedin:${c.linkedin}` : "",
    "END:VCARD",
  ]
    .filter(Boolean)
    .join("\r\n");
}

function downloadVCard() {
  const blob = new Blob([buildVCard(contact)], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${contact.firstName}_${contact.lastName}.vcf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("vCard downloaded");
}

// ---------------------------------------------------------------------------
// Share — uses the native share sheet where available, clipboard otherwise.
// ---------------------------------------------------------------------------
async function sharePage() {
  const shareData = {
    title: `${contact.firstName} ${contact.lastName}`,
    text: `${contact.firstName} ${contact.lastName} — ${contact.title}`,
    url: window.location.href,
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (err) {
      // User cancelled — no action needed.
    }
    return;
  }

  try {
    await navigator.clipboard.writeText(window.location.href);
    showToast("Link copied to clipboard");
  } catch (err) {
    showToast("Could not share — copy the URL manually");
  }
}

// ---------------------------------------------------------------------------
// Lightweight toast
// ---------------------------------------------------------------------------
let toastTimer;
function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  // Force reflow so the transition replays on rapid clicks.
  void toast.offsetWidth;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

// ---------------------------------------------------------------------------
// Wire up
// ---------------------------------------------------------------------------
document.getElementById("downloadBtn").addEventListener("click", downloadVCard);
document.getElementById("shareBtn").addEventListener("click", sharePage);
