/* =========================================================
   AUTH GUARD
   Uncomment once every page's login flow is wired end to end.
========================================================= */
// protectPage();

/* =========================================================
   ICON LIBRARY (same set used across the dashboard)
========================================================= */
const ICON = {
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6"/><circle cx="17" cy="9" r="2.6"/><path d="M15 20c0-2.4 1-4.2 2.7-5.2"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18"/><path d="M8 3v4M16 3v4"/></svg>`,
  syringe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2l4 4-3 3-2-2"/><path d="M17 7l-9.5 9.5"/><path d="M4 20l2.5-2.5"/><path d="M9 12l3 3M11 10l3 3"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5 5-5.5"/></svg>`,
  ruler: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="8" rx="1.5"/><path d="M7 8v3M11 8v3M15 8v3"/></svg>`,
  activity: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l2 7 4-14 2 7h6"/></svg>`,
  clipboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="4" width="14" height="17" rx="2"/><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h6"/></svg>`,
  file: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h9l5 5v15H6z"/><path d="M15 2v5h5"/></svg>`,
  receipt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 2h14v20l-3-2-2 2-2-2-2 2-2-2-3 2z"/><path d="M8 8h8M8 12h8"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.5-7 8-7s8 3 8 7"/></svg>`,
  userPlus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21c0-4 3-7 7-7s7 3 7 7"/><path d="M18 8v6M15 11h6"/></svg>`,
  stethoscope: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3v6a4 4 0 004 4 4 4 0 004-4V3"/><path d="M12 13v3a5 5 0 005 5 5 5 0 005-5"/><circle cx="20" cy="6" r="2"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`,
  logout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>`,
  file2: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h9l5 5v15H6z"/><path d="M15 2v5h5"/><path d="M9 13h6M9 17h6"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12z"/><circle cx="12" cy="12" r="3"/></svg>`,
  pencil: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4a1 1 0 011-1h6a1 1 0 011 1v2"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg>`
};

const statusClassMap = {
  Completed: "status-completed", Due: "status-due", Pending: "status-pending",
  Overdue: "status-overdue", Upcoming: "status-upcoming", Cancelled: "status-cancelled", Paid: "status-paid"
};

function escapeHtml(str) {
  return String(str == null ? "" : str).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
}

/* =========================================================
   SIDEBAR ROUTING (same structure as the dashboard)
========================================================= */
const sidebarItems = [
  { type: "link",  icon: ICON.home,        label: "Dashboard",         href: "../dashboard.html" },
  { type: "group", icon: ICON.users,       label: "Children",         key: "children", children: [
      { label: "All Children",   href: "childp.html" },
      { label: "Register Child", href: "../registerchild/registerchild.html" }
    ]
  },
  { type: "link",  icon: ICON.calendar,    label: "Appointments",      href: "../../appointment/appointment.html" },
  { type: "link",  icon: ICON.stethoscope, label: "Consultations",     href: "../../consultation/opd.html" },
  { type: "link",  icon: ICON.clipboard,   label: "Prescriptions",     href: "../../prescription/prescription.html" },
  { type: "link",  icon: ICON.syringe,     label: "Vaccinations",      href: "../../vaccination.html" },
  { type: "link",  icon: ICON.activity,    label: "Growth Monitoring", href: "../../Growth/growth.html" },
  { type: "link",  icon: ICON.file,        label: "Reports",           href: "../../reports.html" },
  { type: "link",  icon: ICON.receipt,     label: "Billing",           href: "../../billing.html" },
  { type: "link",  icon: ICON.userPlus,    label: "User Management",   href: "../../user.html" },
  { type: "action", icon: ICON.logout,      label: "Logout",            action: "logout" }
];

const currentPage = (location.pathname.split("/").pop() || "childp.html").toLowerCase();

/* =========================================================
   LOGGED-IN USER — reads the SAME storage auth.js writes to.
   auth.js exposes: isAuthenticated(), login(), logout(),
   protectPage(), getCurrentUser() (key: "clinicUser").
   We reuse those directly instead of re-implementing our own
   (a second, mismatched getCurrentUser()/storage key was the
   root cause of the broken logout/profile display).
========================================================= */
function initialsFromName(name) {
  if (!name) return "DR";
  return name
    .replace(/^Dr\.?\s*/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join("");
}

function currentClinicUser() {
  const fallback = { name: "Dr. Ananya Sharma", email: "ananya.sharma@clinic.com", role: "Pediatrician" };
  if (typeof window.getCurrentUser === "function") {
    return window.getCurrentUser() || fallback;
  }
  return fallback;
}

const clinicUser = currentClinicUser();
const CLINIC_NAME = "Sunshine Pediatric Clinic";

function renderHeaderMeta() {
  const todayStr = new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });
  document.getElementById("headerMeta").innerHTML = `
    <span>${ICON.calendar} ${todayStr}</span>
    <span>${ICON.user} ${escapeHtml(clinicUser.name || "Doctor")}</span>
    <span>${ICON.activity} ${CLINIC_NAME}</span>
  `;
}
renderHeaderMeta();

function renderSidebarProfile() {
  document.getElementById("profileAvatar").textContent = initialsFromName(clinicUser.name);
  document.getElementById("profileName").textContent = clinicUser.name || "";
  document.getElementById("profileEmail").textContent = clinicUser.email || "";
}
renderSidebarProfile();

/* =========================================================
   SIDEBAR NAV RENDER
========================================================= */
const sidebarNav = document.getElementById("sidebarNav");
sidebarNav.style.display = "contents";

sidebarItems.forEach(item => {
  if (item.type === "link") {
    const a = document.createElement("a");
    const isActive = item.href.toLowerCase() === currentPage;
    a.className = "nav-item" + (isActive ? " active" : "");
    a.href = item.href;
    a.title = item.label;
    a.innerHTML = item.icon + `<span class="nav-label">${item.label}</span>`;
    sidebarNav.appendChild(a);
    return;
  }

  if (item.type === "action") {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "nav-item";
    btn.title = item.label;
    btn.innerHTML = item.icon + `<span class="nav-label">${item.label}</span>`;
    btn.addEventListener("click", () => { if (item.action === "logout") openLogoutOverlay(); });
    sidebarNav.appendChild(btn);
    return;
  }

  const childActive = item.children.some(c => c.href.toLowerCase() === currentPage);
  const group = document.createElement("div");
  group.className = "nav-group" + (childActive ? " open" : "");

  const parent = document.createElement("button");
  parent.type = "button";
  parent.className = "nav-parent" + (childActive ? " active" : "");
  parent.title = item.label;
  parent.innerHTML = item.icon + `<span class="nav-label">${item.label}</span>` + `<span class="nav-chevron">${ICON.chevron}</span>`;
  parent.addEventListener("click", () => { group.classList.toggle("open"); parent.classList.toggle("open"); });

  const submenu = document.createElement("div");
  submenu.className = "nav-submenu";
  item.children.forEach(c => {
    const a = document.createElement("a");
    const isActive = c.href.toLowerCase() === currentPage;
    a.className = "nav-subitem" + (isActive ? " active" : "");
    a.href = c.href;
    a.innerHTML = `<span class="dot-sm"></span>${c.label}`;
    submenu.appendChild(a);
  });

  group.appendChild(parent);
  group.appendChild(submenu);
  sidebarNav.appendChild(group);
});

/* =========================================================
   SIDEBAR OPEN/CLOSE — expanded by default, becomes an
   overlay drawer with backdrop on small screens (matches the
   Register Child module exactly).
========================================================= */
const sidebar = document.getElementById("sidebar");
const sidebarBackdrop = document.getElementById("sidebarBackdrop");
const MOBILE_BREAKPOINT = 760;

function isMobile() { return window.innerWidth <= MOBILE_BREAKPOINT; }

function syncBackdrop() {
  sidebarBackdrop.classList.toggle("show", isMobile() && sidebar.classList.contains("expanded"));
}
function openSidebar() { sidebar.classList.add("expanded"); syncBackdrop(); }
function closeSidebar() { sidebar.classList.remove("expanded"); syncBackdrop(); }

openSidebar();
document.getElementById("sidebarToggle").addEventListener("click", () => {
  sidebar.classList.contains("expanded") ? closeSidebar() : openSidebar();
});
sidebarBackdrop.addEventListener("click", closeSidebar);
window.addEventListener("resize", syncBackdrop);

/* =========================================================
   LOGOUT — delegates to auth.js's logout(), which clears the
   correct keys ("isLoggedIn" / "clinicUser") and redirects.
========================================================= */
const logoutOverlay = document.getElementById("logoutOverlay");
document.querySelector("#logoutOverlay .logout-modal-icon").innerHTML = ICON.logout;
function openLogoutOverlay() { logoutOverlay.classList.add("show"); }
function closeLogoutOverlay() { logoutOverlay.classList.remove("show"); }
document.getElementById("logoutCancelBtn").addEventListener("click", closeLogoutOverlay);
logoutOverlay.addEventListener("click", (e) => { if (e.target === logoutOverlay) closeLogoutOverlay(); });
document.getElementById("logoutConfirmBtn").addEventListener("click", () => {
  if (typeof window.logout === "function") {
    window.logout();
  } else {
    // Fallback only if auth.js failed to load, using the same keys auth.js defines.
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("clinicUser");
    sessionStorage.clear();
    window.location.replace("index.html");
  }
});

/* toast */
const toast = document.getElementById("toast");
let toastTimer;
function showToast(msg) {
  clearTimeout(toastTimer);
  toast.textContent = msg;
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

/* =========================================================
   TAB SWITCHING
========================================================= */
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    panels.forEach(p => p.classList.remove("active"));
    tab.classList.add("active");
    document.querySelector(`.tab-panel[data-panel="${tab.dataset.tab}"]`).classList.add("active");
  });
});

/* =========================================================
   CHILDREN DATA STORE (shared with Register Child page via
   localStorage, so a new registration shows up here instantly)
========================================================= */
const STORE_KEY = "pedClinicChildren";

function seedDemoChild() {
  return {
    id: "seed-1",
    patientId: "CH-2026-1042",
    name: "Aarav Mehta",
    gender: "Male",
    dob: "2023-03-04",
    age: "3 yrs 4 mo",
    bloodGroup: "O+",
    parentName: "Rohit Mehta",
    fatherName: "Rohit Mehta",
    motherName: "Sneha Mehta",
    mobile: "+91 98765 43210",
    email: "",
    emergencyContact: "",
    address: "",
    photo: null,
    birthWeight: "3.1", deliveryType: "Normal", premature: "No",
    pastIllness: "Chickenpox (2024)", allergies: "None known",
    hospitalAdmission: "None", currentMedicines: "Vitamin D drops",
    chronicDisease: "None", familyDisease: "Type 2 Diabetes (paternal grandfather)",
    milestones: "Walking at 13 months, first words at 11 months",
    height: "96", weight: "14.2", bmi: "15.4", headCirc: "47.5", growthNotes: "",
    vaccines: [
      { name: "BCG",   given: "2023-01-12", due: "",           doctor: "Dr. Ananya Sharma", status: "Completed", nextDue: "" },
      { name: "OPV-1", given: "2023-01-12", due: "",           doctor: "Dr. Ananya Sharma", status: "Completed", nextDue: "" },
      { name: "DPT-1", given: "2023-02-10", due: "",           doctor: "Dr. Ananya Sharma", status: "Completed", nextDue: "" },
      { name: "MMR-1", given: "2024-01-05", due: "",           doctor: "Dr. Ananya Sharma", status: "Completed", nextDue: "" },
      { name: "MMR-2", given: "",           due: "2026-07-15", doctor: "",                   status: "Due",       nextDue: "" },
      { name: "Typhoid", given: "",         due: "2026-09-01", doctor: "",                   status: "Pending",   nextDue: "" }
    ],
    growthHistory: [
      { date: "10 Jan 2024", h: 72, w: 9.1, bmi: 17.6, doctor: "Dr. Ananya Sharma" },
      { date: "12 Jul 2024", h: 82, w: 11.0, bmi: 16.4, doctor: "Dr. Ananya Sharma" },
      { date: "15 Jan 2025", h: 89, w: 12.6, bmi: 15.9, doctor: "Dr. Rohan Mehta" },
      { date: "20 Jul 2025", h: 93, w: 13.5, bmi: 15.6, doctor: "Dr. Ananya Sharma" },
      { date: "28 Jun 2026", h: 96, w: 14.2, bmi: 15.4, doctor: "Dr. Ananya Sharma" }
    ],
    appointments: [
      { doctor: "Dr. Ananya Sharma", date: "22 Jul 2026", time: "10:30 AM", reason: "Routine Checkup", status: "Upcoming" },
      { doctor: "Dr. Ananya Sharma", date: "28 Jun 2026", time: "11:00 AM", reason: "Fever & Cold",     status: "Completed" },
      { doctor: "Dr. Rohan Mehta",   date: "15 Jan 2025", time: "09:15 AM", reason: "Growth Checkup",   status: "Completed" },
      { doctor: "Dr. Ananya Sharma", date: "02 Dec 2024", time: "04:00 PM", reason: "Vaccination",       status: "Cancelled" }
    ],
    consultations: [
      { date: "28 Jun 2026", title: "Fever & Cold", text: "<strong>Complaint:</strong> Fever for 2 days, mild cough. <strong>Diagnosis:</strong> Viral upper respiratory infection. Advised rest, fluids, and follow-up if fever persists beyond 3 days." },
      { date: "15 Jan 2025", title: "Growth Checkup", text: "<strong>Complaint:</strong> Routine growth monitoring. <strong>Diagnosis:</strong> Growth within normal percentile range. No concerns noted." },
      { date: "05 Jan 2024", title: "MMR Vaccination Visit", text: "<strong>Complaint:</strong> Scheduled vaccination. <strong>Diagnosis:</strong> Healthy, vaccine administered without reaction." }
    ],
    prescriptions: [
      { medicine: "Paracetamol Syrup", morning: "5ml", afternoon: "—",   night: "5ml", duration: "3 days",  date: "28 Jun 2026" },
      { medicine: "Vitamin D Drops",   morning: "1ml", afternoon: "—",   night: "—",   duration: "30 days", date: "28 Jun 2026" },
      { medicine: "ORS Solution",      morning: "—",   afternoon: "as needed", night: "—", duration: "3 days", date: "28 Jun 2026" }
    ],
    documents: [
      { name: "Birth Certificate", meta: "PDF · 240 KB · Added 12 Jan 2023" },
      { name: "Parent ID Proof",   meta: "PDF · 180 KB · Added 12 Jan 2023" },
      { name: "Medical Report",    meta: "PDF · 320 KB · Added 28 Jun 2026" },
      { name: "Prescription — 28 Jun", meta: "PDF · 95 KB · Added 28 Jun 2026" }
    ],
    billing: [
      { invoice: "INV-2026-0142", date: "28 Jun 2026", amount: "₹1,200", status: "Paid" },
      { invoice: "INV-2026-0098", date: "15 Jan 2025", amount: "₹900",   status: "Paid" },
      { invoice: "INV-2026-0201", date: "22 Jul 2026", amount: "₹700",   status: "Pending" }
    ],
    registeredDate: "2023-01-12"
  };
}

function loadChildren() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) {
      const list = JSON.parse(raw);
      if (Array.isArray(list) && list.length) return list;
    }
  } catch (e) { console.warn("Could not read children store:", e); }
  const seeded = [seedDemoChild()];
  saveChildren(seeded);
  return seeded;
}

function saveChildren(list) {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(list)); }
  catch (e) { console.warn("Could not save children store:", e); }
}

let children = loadChildren();

/* =========================================================
   HELPERS
========================================================= */
function calcAge(dob) {
  if (!dob) return "";
  const d = new Date(dob);
  if (isNaN(d)) return "";
  const today = new Date();
  let years = today.getFullYear() - d.getFullYear();
  let months = today.getMonth() - d.getMonth();
  if (today.getDate() < d.getDate()) months--;
  if (months < 0) { years--; months += 12; }
  return years > 0 ? `${years} yr${years > 1 ? "s" : ""} ${months} mo` : `${months} mo`;
}

function ageInYears(child) {
  if (child.dob) {
    const d = new Date(child.dob);
    if (!isNaN(d)) return (Date.now() - d.getTime()) / (365.25 * 24 * 3600 * 1000);
  }
  const m = /^(\d+)\s*yr/.exec(child.age || "");
  if (m) return Number(m[1]);
  const m2 = /^(\d+)\s*mo/.exec(child.age || "");
  if (m2) return Number(m2[1]) / 12;
  return null;
}

function ageGroupOf(child) {
  const y = ageInYears(child);
  if (y == null) return "All";
  if (y < 1) return "0-1 yr";
  if (y < 3) return "1-3 yrs";
  if (y < 5) return "3-5 yrs";
  return "5+ yrs";
}

function overallVaccStatus(child) {
  const list = child.vaccines || [];
  if (!list.length) return "Pending";
  if (list.some(v => v.status === "Overdue")) return "Overdue";
  if (list.some(v => v.status === "Due")) return "Due";
  if (list.some(v => v.status === "Pending")) return "Pending";
  return "Completed";
}

function fmtDate(str) {
  if (!str) return "—";
  const d = new Date(str);
  if (isNaN(d)) return str;
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

/* =========================================================
   PROFILE + TABS RENDERING (driven by the selected child)
========================================================= */
let selectedChild = null;

function renderKpiRow(containerId, items) {
  const row = document.getElementById(containerId);
  row.innerHTML = "";
  items.forEach(k => {
    const div = document.createElement("div");
    div.className = "card kpi-card";
    div.innerHTML = `
      <div class="kpi-icon">${k.icon}</div>
      <div class="kpi-label">${k.label}</div>
      <div class="kpi-value">${k.value}</div>
      <div class="kpi-sub">${k.sub}</div>
    `;
    row.appendChild(div);
  });
}

function reviewItem(label, value) {
  return `<div class="review-item"><span class="k">${escapeHtml(label)}</span><span class="v">${value ? escapeHtml(value) : ""}</span></div>`;
}

function emptyTableRow(colspan, msg) {
  return `<tr class="empty-row"><td colspan="${colspan}">${escapeHtml(msg)}</td></tr>`;
}

function selectChild(child, opts) {
  opts = opts || {};
  selectedChild = child;
  renderProfileHeader(child);
  renderOverviewTab(child);
  renderMedicalTab(child);
  renderVaccinationTab(child);
  renderGrowthTab(child);
  renderAppointmentsTab(child);
  renderConsultationTab(child);
  renderPrescriptionTab(child);
  renderDocumentsTab(child);
  renderBillingTab(child);
  if (opts.scroll) {
    document.querySelector(".profile-card").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderProfileHeader(child) {
  const photoEl = document.getElementById("profilePhoto");
  photoEl.innerHTML = child.photo
    ? `<img src="${child.photo}" alt="${escapeHtml(child.name)}">`
    : initialsFromName(child.name || "Child").slice(0, 2);
  document.getElementById("pChildName").textContent = child.name || "—";
  document.getElementById("pPatientId").textContent = child.patientId || "—";
  document.getElementById("pAge").textContent = child.age || calcAge(child.dob) || "—";
  document.getElementById("pBloodGroup").textContent = child.bloodGroup || "Unknown";
  document.getElementById("pGender").textContent = child.gender || "—";
  document.getElementById("pParentName").textContent = child.parentName || "—";
  document.getElementById("pPhone").textContent = child.mobile || "—";
}

function renderOverviewTab(child) {
  const upcoming = (child.vaccines || []).find(v => v.status === "Due" || v.status === "Pending");
  const nextAppt = (child.appointments || []).find(a => a.status === "Upcoming");
  const lastAppt = (child.appointments || []).find(a => a.status === "Completed");

  renderKpiRow("overviewKpis", [
    { label: "Upcoming Vaccine", value: upcoming ? upcoming.name : "None due", sub: upcoming ? `Due ${fmtDate(upcoming.due)}` : "All caught up", icon: ICON.syringe },
    { label: "Next Appointment", value: nextAppt ? `${nextAppt.date}, ${nextAppt.time}` : "Not scheduled", sub: nextAppt ? nextAppt.doctor : "—", icon: ICON.calendar },
    { label: "Last Visit", value: lastAppt ? lastAppt.date : "—", sub: lastAppt ? lastAppt.reason : "No visits yet", icon: ICON.stethoscope },
    { label: "Current Weight", value: child.weight ? `${child.weight} kg` : "—", sub: "as of last visit", icon: ICON.activity },
    { label: "Current Height", value: child.height ? `${child.height} cm` : "—", sub: "as of last visit", icon: ICON.ruler }
  ]);

  const list = child.prescriptions || [];
  document.getElementById("overviewPrescriptionBody").innerHTML = list.length
    ? list.slice(0, 3).map(p => `<tr><td>${escapeHtml(p.medicine)}</td><td>${escapeHtml(p.morning || p.dosage || "—")}</td><td>${escapeHtml(p.duration)}</td><td>${escapeHtml(p.by || "—")}</td><td>${escapeHtml(p.date)}</td></tr>`).join("")
    : emptyTableRow(5, "No prescriptions on file yet.");
}

function renderMedicalTab(child) {
  document.getElementById("birthHistoryGrid").innerHTML = [
    reviewItem("Birth Weight", child.birthWeight ? `${child.birthWeight} kg` : ""),
    reviewItem("Delivery Type", child.deliveryType),
    reviewItem("Premature?", child.premature)
  ].join("");

  document.getElementById("healthBackgroundGrid").innerHTML = [
    reviewItem("Past Illness", child.pastIllness),
    reviewItem("Allergies", child.allergies),
    reviewItem("Hospital Admission", child.hospitalAdmission),
    reviewItem("Current Medicines", child.currentMedicines),
    reviewItem("Chronic Disease", child.chronicDisease),
    reviewItem("Family Disease", child.familyDisease),
    reviewItem("Development Milestones", child.milestones)
  ].join("");
}

function renderVaccinationTab(child) {
  const list = child.vaccines || [];
  document.getElementById("vaccinationBody").innerHTML = list.length
    ? list.map(v => `
        <tr>
          <td>${escapeHtml(v.name)}</td><td>${v.given ? fmtDate(v.given) : "—"}</td><td>${v.due ? fmtDate(v.due) : "—"}</td>
          <td><span class="status-pill ${statusClassMap[v.status] || "status-pending"}">${escapeHtml(v.status)}</span></td>
          <td><button class="link-btn">${v.status === "Completed" ? "View" : "Record"}</button></td>
        </tr>`).join("")
    : emptyTableRow(5, "No vaccines recorded yet.");
}

function drawGrowthChart(data) {
  const svg = document.getElementById("growthChart");
  const tooltip = document.getElementById("growthTooltip");
  const W = 720, H = 240, padL = 34, padR = 14, padT = 14, padB = 26;
  const plotW = W - padL - padR, plotH = H - padT - padB;

  if (!data.length) {
    svg.innerHTML = `<text x="${W/2}" y="${H/2}" text-anchor="middle" class="axis-label">No growth records yet</text>`;
    tooltip.style.display = "none";
    return;
  }

  const maxH = Math.max(...data.map(d => d.h)) * 1.15;
  const single = data.length === 1;
  const stepX = single ? 0 : plotW / (data.length - 1);

  const xy = (i, val, max) => {
    const x = single ? padL + plotW / 2 : padL + i * stepX;
    return [x, padT + plotH - (val / max) * plotH];
  };

  let svgHTML = "";
  for (let g = 0; g <= 4; g++) {
    const y = padT + (plotH / 4) * g;
    svgHTML += `<line x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}" class="grid-line"/>`;
  }
  data.forEach((d, i) => {
    const [x] = xy(i, 0, maxH);
    svgHTML += `<text x="${x}" y="${H - 6}" text-anchor="middle" class="axis-label">${escapeHtml(String(d.date).split(" ").slice(0,2).join(" "))}</text>`;
  });

  if (!single) {
    const heightPath = data.map((d, i) => {
      const [x, y] = xy(i, d.h, maxH);
      return (i === 0 ? "M" : "L") + x.toFixed(1) + " " + y.toFixed(1);
    }).join(" ");
    svgHTML += `<path d="${heightPath}" fill="none" stroke="var(--primary)" stroke-width="2.5"/>`;
  }

  data.forEach((d, i) => {
    const [x, y] = xy(i, d.h, maxH);
    svgHTML += `<circle class="pt" data-i="${i}" cx="${x}" cy="${y}" r="4" fill="var(--primary)" style="cursor:pointer"/>`;
  });

  svg.innerHTML = svgHTML;
  svg.querySelectorAll(".pt").forEach(pt => {
    pt.addEventListener("mousemove", (e) => {
      const i = pt.getAttribute("data-i");
      const d = data[i];
      tooltip.style.display = "block";
      tooltip.style.left = e.offsetX + 12 + "px";
      tooltip.style.top = e.offsetY - 10 + "px";
      tooltip.innerHTML = `<strong>${escapeHtml(d.date)}</strong><br>Height: ${d.h} cm<br>Weight: ${d.w} kg`;
    });
    pt.addEventListener("mouseleave", () => tooltip.style.display = "none");
  });
}

function renderGrowthTab(child) {
  renderKpiRow("growthKpis", [
    { label: "Height", value: child.height ? `${child.height} cm` : "—", sub: "as of last visit", icon: ICON.ruler },
    { label: "Weight", value: child.weight ? `${child.weight} kg` : "—", sub: "as of last visit", icon: ICON.activity },
    { label: "BMI", value: child.bmi || "—", sub: "Healthy range", icon: ICON.check },
    { label: "Head Circumference", value: child.headCirc ? `${child.headCirc} cm` : "—", sub: "as of last visit", icon: ICON.ruler }
  ]);

  const history = (child.growthHistory && child.growthHistory.length)
    ? child.growthHistory
    : (child.height && child.weight ? [{ date: fmtDate(child.registeredDate) || "Registration", h: Number(child.height), w: Number(child.weight), bmi: child.bmi, doctor: "Front Desk" }] : []);

  document.getElementById("growthHistoryBody").innerHTML = history.length
    ? history.map(g => `<tr><td>${escapeHtml(g.date)}</td><td>${g.h}</td><td>${g.w}</td><td>${g.bmi}</td><td>${escapeHtml(g.doctor)}</td></tr>`).join("")
    : emptyTableRow(5, "No growth records yet.");

  drawGrowthChart(history);
}

function renderAppointmentsTab(child) {
  const list = child.appointments || [];
  document.getElementById("appointmentsBody").innerHTML = list.length
    ? list.map(a => `
        <tr>
          <td>${escapeHtml(a.doctor)}</td><td>${escapeHtml(a.date)}</td><td>${escapeHtml(a.time)}</td><td>${escapeHtml(a.reason)}</td>
          <td><span class="status-pill ${statusClassMap[a.status] || "status-pending"}">${escapeHtml(a.status)}</span></td>
        </tr>`).join("")
    : emptyTableRow(5, "No appointments booked yet.");
}

function renderConsultationTab(child) {
  const list = child.consultations || [];
  document.getElementById("consultationList").innerHTML = list.length
    ? list.map(c => `
        <div class="timeline-item">
          <div class="timeline-dot-col"><span class="timeline-dot"></span></div>
          <div class="timeline-body">
            <div class="timeline-date">${escapeHtml(c.date)}</div>
            <div class="timeline-title">${escapeHtml(c.title)}</div>
            <div class="timeline-text">${c.text}</div>
          </div>
        </div>`).join("")
    : `<div class="empty-note">No consultations recorded yet.</div>`;
}

function renderPrescriptionTab(child) {
  const list = child.prescriptions || [];
  document.getElementById("prescriptionBody").innerHTML = list.length
    ? list.map(p => `<tr><td>${escapeHtml(p.medicine)}</td><td>${escapeHtml(p.morning)}</td><td>${escapeHtml(p.afternoon)}</td><td>${escapeHtml(p.night)}</td><td>${escapeHtml(p.duration)}</td><td>${escapeHtml(p.date)}</td></tr>`).join("")
    : emptyTableRow(6, "No prescriptions on file yet.");
}

function renderDocumentsTab(child) {
  const list = child.documents || [];
  document.getElementById("documentsGrid").innerHTML = list.length
    ? list.map(d => `
        <div class="doc-card">
          <div class="doc-icon">${ICON.file2}</div>
          <div class="doc-name">${escapeHtml(d.name)}</div>
          <div class="doc-meta">${escapeHtml(d.meta)}</div>
          <div class="doc-actions">
            <button class="btn btn-outline" onclick="showToast('Opening preview...')">Preview</button>
            <button class="btn btn-outline" onclick="showToast('Downloading...')">Download</button>
          </div>
        </div>`).join("")
    : `<div class="empty-note">No documents uploaded yet.</div>`;
}

function renderBillingTab(child) {
  const list = child.billing || [];
  document.getElementById("billingBody").innerHTML = list.length
    ? list.map(b => `
        <tr>
          <td>${escapeHtml(b.invoice)}</td><td>${escapeHtml(b.date)}</td><td>${escapeHtml(b.amount)}</td>
          <td><span class="status-pill ${statusClassMap[b.status] || "status-pending"}">${escapeHtml(b.status)}</span></td>
          <td><button class="link-btn">View</button></td>
        </tr>`).join("")
    : emptyTableRow(5, "No invoices on file yet.");
}

document.getElementById("addVaccineBtn").addEventListener("click", () => {
  if (selectedChild) openChildModal(selectedChild, "edit");
});
document.getElementById("editProfileBtn").addEventListener("click", () => {
  if (selectedChild) openChildModal(selectedChild, "edit");
});

/* =========================================================
   ALL CHILDREN TABLE: filters + search + pagination
========================================================= */
const tableState = { search: "", gender: "All", age: "All", blood: "All", vaccStatus: "All", page: 1, pageSize: 10 };

const searchInput = document.getElementById("searchInput");
const genderFilter = document.getElementById("genderFilter");
const ageFilter = document.getElementById("ageFilter");
const bloodFilter = document.getElementById("bloodFilter");
const vaccStatusFilter = document.getElementById("vaccStatusFilter");
const pageSizeSelect = document.getElementById("pageSizeSelect");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");
const filterStatusEl = document.getElementById("filterStatus");

let searchDebounce;
searchInput.addEventListener("input", () => {
  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(() => { tableState.search = searchInput.value.trim().toLowerCase(); tableState.page = 1; renderTable(); }, 180);
});
genderFilter.addEventListener("change", () => { tableState.gender = genderFilter.value; tableState.page = 1; renderTable(); });
ageFilter.addEventListener("change", () => { tableState.age = ageFilter.value; tableState.page = 1; renderTable(); });
bloodFilter.addEventListener("change", () => { tableState.blood = bloodFilter.value; tableState.page = 1; renderTable(); });
vaccStatusFilter.addEventListener("change", () => { tableState.vaccStatus = vaccStatusFilter.value; tableState.page = 1; renderTable(); });
pageSizeSelect.addEventListener("change", () => { tableState.pageSize = Number(pageSizeSelect.value); tableState.page = 1; renderTable(); });
resetFiltersBtn.addEventListener("click", () => {
  tableState.search = ""; tableState.gender = "All"; tableState.age = "All"; tableState.blood = "All"; tableState.vaccStatus = "All"; tableState.page = 1;
  searchInput.value = ""; genderFilter.value = "All"; ageFilter.value = "All"; bloodFilter.value = "All"; vaccStatusFilter.value = "All";
  renderTable();
});

function getFilteredChildren() {
  return children.filter(c => {
    if (tableState.gender !== "All" && c.gender !== tableState.gender) return false;
    if (tableState.age !== "All" && ageGroupOf(c) !== tableState.age) return false;
    if (tableState.blood !== "All" && (c.bloodGroup || "Unknown") !== tableState.blood) return false;
    if (tableState.vaccStatus !== "All" && overallVaccStatus(c) !== tableState.vaccStatus) return false;
    if (tableState.search) {
      const hay = `${c.name || ""} ${c.patientId || ""} ${c.parentName || ""} ${c.mobile || ""}`.toLowerCase();
      if (!hay.includes(tableState.search)) return false;
    }
    return true;
  });
}

function activeFilterSummary(total, shown) {
  const active = [];
  if (tableState.search) active.push(`search: "${tableState.search}"`);
  if (tableState.gender !== "All") active.push(`gender: ${tableState.gender}`);
  if (tableState.age !== "All") active.push(`age: ${tableState.age}`);
  if (tableState.blood !== "All") active.push(`blood group: ${tableState.blood}`);
  if (tableState.vaccStatus !== "All") active.push(`vaccination: ${tableState.vaccStatus}`);
  if (!active.length) return `Showing all ${total} registered ${total === 1 ? "child" : "children"}.`;
  return `Filtered by ${active.join(", ")} — ${shown} of ${total} matching.`;
}

function renderChildrenTableBody(pageItems) {
  const body = document.getElementById("childrenTableBody");
  if (!pageItems.length) {
    body.innerHTML = emptyTableRow(9, "No children match these filters.");
    return;
  }
  body.innerHTML = pageItems.map(c => {
    const vs = overallVaccStatus(c);
    const avatar = c.photo ? `<img src="${c.photo}" alt="">` : initialsFromName(c.name).slice(0, 2);
    return `
      <tr data-id="${c.id}">
        <td>
          <div class="cell-child">
            <div class="cell-avatar">${avatar}</div>
            <div>
              <div class="cell-child-name">${escapeHtml(c.name || "—")}</div>
              <div class="cell-child-sub">${escapeHtml(c.gender || "—")}</div>
            </div>
          </div>
        </td>
        <td class="mono">${escapeHtml(c.patientId || "—")}</td>
        <td>${escapeHtml(c.age || calcAge(c.dob) || "—")}</td>
        <td>${escapeHtml(c.gender || "—")}</td>
        <td>${escapeHtml(c.parentName || "—")}</td>
        <td>${escapeHtml(c.mobile || "—")}</td>
        <td><span class="status-pill ${statusClassMap[vs] || "status-pending"}">${vs}</span></td>
        <td>${fmtDate(c.registeredDate)}</td>
        <td>
          <div class="row-actions">
            <button class="icon-btn" data-action="view" title="View">${ICON.eye}</button>
            <button class="icon-btn" data-action="edit" title="Edit">${ICON.pencil}</button>
            <button class="icon-btn danger" data-action="delete" title="Remove">${ICON.trash}</button>
          </div>
        </td>
      </tr>`;
  }).join("");

  body.querySelectorAll("tr[data-id]").forEach(row => {
    const id = row.getAttribute("data-id");
    row.addEventListener("click", (e) => {
      if (e.target.closest("[data-action]")) return;
      const child = children.find(c => c.id === id);
      if (child) selectChild(child, { scroll: true });
    });
    row.querySelector('[data-action="view"]').addEventListener("click", () => {
      const child = children.find(c => c.id === id);
      if (child) openChildModal(child, "view");
    });
    row.querySelector('[data-action="edit"]').addEventListener("click", () => {
      const child = children.find(c => c.id === id);
      if (child) openChildModal(child, "edit");
    });
    row.querySelector('[data-action="delete"]').addEventListener("click", () => {
      const child = children.find(c => c.id === id);
      if (child) openDeleteConfirm(child);
    });
  });
}

function renderPagination(totalItems) {
  const pagEl = document.getElementById("pagination");
  const totalPages = Math.max(1, Math.ceil(totalItems / tableState.pageSize));
  if (tableState.page > totalPages) tableState.page = totalPages;

  let html = `<button class="page-btn" id="pgPrev" ${tableState.page === 1 ? "disabled" : ""}>&lsaquo;</button>`;

  const addPageBtn = (n) => `<button class="page-btn ${n === tableState.page ? "active" : ""}" data-page="${n}">${n}</button>`;
  const windowSize = 1;
  const pages = [];
  for (let n = 1; n <= totalPages; n++) {
    if (n === 1 || n === totalPages || Math.abs(n - tableState.page) <= windowSize) pages.push(n);
  }
  let prevPage = 0;
  pages.forEach(n => {
    if (prevPage && n - prevPage > 1) html += `<span class="page-dots">…</span>`;
    html += addPageBtn(n);
    prevPage = n;
  });

  html += `<button class="page-btn" id="pgNext" ${tableState.page === totalPages ? "disabled" : ""}>&rsaquo;</button>`;
  pagEl.innerHTML = html;

  pagEl.querySelectorAll("[data-page]").forEach(btn => {
    btn.addEventListener("click", () => { tableState.page = Number(btn.dataset.page); renderTable(); });
  });
  const prevBtn = document.getElementById("pgPrev");
  const nextBtn = document.getElementById("pgNext");
  if (prevBtn) prevBtn.addEventListener("click", () => { if (tableState.page > 1) { tableState.page--; renderTable(); } });
  if (nextBtn) nextBtn.addEventListener("click", () => { if (tableState.page < totalPages) { tableState.page++; renderTable(); } });
}

function renderTable() {
  const filtered = getFilteredChildren();
  const total = children.length;
  const start = (tableState.page - 1) * tableState.pageSize;
  const pageItems = filtered.slice(start, start + tableState.pageSize);

  renderChildrenTableBody(pageItems);
  renderPagination(filtered.length);

  const rowsInfo = document.getElementById("rowsInfo");
  if (!filtered.length) {
    rowsInfo.textContent = "0 results";
  } else {
    rowsInfo.textContent = `Showing ${start + 1}–${Math.min(start + tableState.pageSize, filtered.length)} of ${filtered.length}`;
  }
  filterStatusEl.textContent = activeFilterSummary(total, filtered.length);
}

/* =========================================================
   VIEW / EDIT MODAL
========================================================= */
const modalOverlay = document.getElementById("childModalOverlay");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalBody = document.getElementById("modalBody");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalCancelBtn = document.getElementById("modalCancelBtn");
const modalEditToggleBtn = document.getElementById("modalEditToggleBtn");
const modalSaveBtn = document.getElementById("modalSaveBtn");

let modalChild = null;
let modalEditable = false;

function field(id, label, value, opts) {
  opts = opts || {};
  const type = opts.type || "text";
  const dis = modalEditable ? "" : "disabled";
  let input;
  if (type === "select") {
    input = `<select id="${id}" ${dis}>${(opts.options || []).map(o => `<option value="${o}" ${o === value ? "selected" : ""}>${o || "Select"}</option>`).join("")}</select>`;
  } else if (type === "textarea") {
    input = `<textarea id="${id}" rows="2" ${dis}>${escapeHtml(value || "")}</textarea>`;
  } else {
    input = `<input type="${type}" id="${id}" value="${escapeHtml(value || "")}" ${dis}>`;
  }
  return `<div class="field"><label for="${id}">${label}</label>${input}</div>`;
}

function buildVaccineTable(vaccines) {
  const dis = modalEditable ? "" : "disabled";
  const rows = (vaccines || []).map((v, i) => `
    <tr data-idx="${i}">
      <td><input type="text" class="vx-name" value="${escapeHtml(v.name)}" ${dis}></td>
      <td><input type="date" class="vx-due" value="${v.due || ""}" ${dis}></td>
      <td><input type="date" class="vx-given" value="${v.given || ""}" ${dis}></td>
      <td><input type="text" class="vx-doctor" value="${escapeHtml(v.doctor || "")}" ${dis}></td>
      <td>
        <select class="vx-status" ${dis}>
          ${["Completed","Due","Pending","Overdue"].map(s => `<option value="${s}" ${s === v.status ? "selected" : ""}>${s}</option>`).join("")}
        </select>
      </td>
      <td>${modalEditable ? `<button type="button" class="vaccine-row-delete" title="Remove">✕</button>` : ""}</td>
    </tr>`).join("");
  return `
    <table class="modal-vaccine-table" id="modalVaccineTable">
      <thead><tr><th>Vaccine</th><th>Due</th><th>Given</th><th>Doctor</th><th>Status</th><th></th></tr></thead>
      <tbody>${rows || `<tr><td colspan="6" style="text-align:center;color:var(--muted);padding:12px;">No vaccines added.</td></tr>`}</tbody>
    </table>
    ${modalEditable ? `<button type="button" class="btn btn-add-mini" id="modalAddVaccineRow">+ Add Vaccine</button>` : ""}
  `;
}

function renderModalBody() {
  const c = modalChild;
  modalBody.innerHTML = `
    <div class="modal-section-title">Basic Details</div>
    <div class="grid grid-3">
      ${field("mf_name", "Child Name", c.name)}
      ${field("mf_gender", "Gender", c.gender, { type: "select", options: ["Male","Female","Other"] })}
      ${field("mf_dob", "Date of Birth", c.dob, { type: "date" })}
    </div>
    <div class="grid grid-3">
      ${field("mf_blood", "Blood Group", c.bloodGroup, { type: "select", options: ["Unknown","A+","A-","B+","B-","AB+","AB-","O+","O-"] })}
      ${field("mf_parent", "Parent Name", c.parentName)}
      ${field("mf_mobile", "Mobile", c.mobile)}
    </div>
    <div class="grid grid-2">
      ${field("mf_email", "Email", c.email, { type: "email" })}
      ${field("mf_emergency", "Emergency Contact", c.emergencyContact)}
    </div>
    ${field("mf_address", "Address", c.address, { type: "textarea" })}

    <div class="modal-section-title">Medical History</div>
    <div class="grid grid-3">
      ${field("mf_birthWeight", "Birth Weight (kg)", c.birthWeight, { type: "number" })}
      ${field("mf_delivery", "Delivery Type", c.deliveryType, { type: "select", options: ["","Normal","Cesarean","Assisted"] })}
      ${field("mf_premature", "Premature?", c.premature, { type: "select", options: ["","Yes","No"] })}
    </div>
    <div class="grid grid-2">
      ${field("mf_allergies", "Allergies", c.allergies, { type: "textarea" })}
      ${field("mf_pastIllness", "Past Illness", c.pastIllness, { type: "textarea" })}
    </div>
    <div class="grid grid-2">
      ${field("mf_chronic", "Chronic Disease", c.chronicDisease)}
      ${field("mf_family", "Family Disease", c.familyDisease)}
    </div>

    <div class="modal-section-title">Growth</div>
    <div class="grid grid-3">
      ${field("mf_height", "Height (cm)", c.height, { type: "number" })}
      ${field("mf_weight", "Weight (kg)", c.weight, { type: "number" })}
      ${field("mf_bmi", "BMI", c.bmi)}
    </div>

    <div class="modal-section-title">Vaccination</div>
    ${buildVaccineTable(c.vaccines)}
  `;

  document.getElementById("mf_bmi").disabled = true;
  const hIn = document.getElementById("mf_height");
  const wIn = document.getElementById("mf_weight");
  function recalcBmi() {
    const h = parseFloat(hIn.value) / 100;
    const w = parseFloat(wIn.value);
    document.getElementById("mf_bmi").value = (h > 0 && w > 0) ? (w / (h * h)).toFixed(1) : "";
  }
  if (modalEditable) {
    hIn.addEventListener("input", recalcBmi);
    wIn.addEventListener("input", recalcBmi);
    const addRowBtn = document.getElementById("modalAddVaccineRow");
    if (addRowBtn) addRowBtn.addEventListener("click", () => {
      const tbody = modalBody.querySelector("#modalVaccineTable tbody");
      const emptyMsg = tbody.querySelector("td[colspan]");
      if (emptyMsg) emptyMsg.closest("tr").remove();
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><input type="text" class="vx-name" placeholder="e.g. BCG"></td>
        <td><input type="date" class="vx-due"></td>
        <td><input type="date" class="vx-given"></td>
        <td><input type="text" class="vx-doctor" placeholder="Doctor"></td>
        <td>
          <select class="vx-status">
            ${["Completed","Due","Pending","Overdue"].map(s => `<option value="${s}">${s}</option>`).join("")}
          </select>
        </td>
        <td><button type="button" class="vaccine-row-delete" title="Remove">✕</button></td>
      `;
      tr.querySelector(".vaccine-row-delete").addEventListener("click", () => tr.remove());
      tbody.appendChild(tr);
    });
    modalBody.querySelectorAll(".vaccine-row-delete").forEach(btn => {
      btn.addEventListener("click", () => btn.closest("tr").remove());
    });
  }
}

function openChildModal(child, mode) {
  modalChild = child;
  modalEditable = mode === "edit";
  modalTitle.textContent = modalEditable ? `Edit ${child.name || "Child"}` : (child.name || "Child Details");
  modalSubtitle.textContent = `${child.patientId || ""} · Registered ${fmtDate(child.registeredDate)}`;
  modalEditToggleBtn.textContent = modalEditable ? "View Only" : "Edit";
  modalSaveBtn.hidden = !modalEditable;
  renderModalBody();
  modalOverlay.classList.add("show");
}

function closeChildModal() { modalOverlay.classList.remove("show"); modalChild = null; }

modalCloseBtn.addEventListener("click", closeChildModal);
modalCancelBtn.addEventListener("click", closeChildModal);
modalOverlay.addEventListener("click", (e) => { if (e.target === modalOverlay) closeChildModal(); });
modalEditToggleBtn.addEventListener("click", () => {
  modalEditable = !modalEditable;
  modalEditToggleBtn.textContent = modalEditable ? "View Only" : "Edit";
  modalSaveBtn.hidden = !modalEditable;
  renderModalBody();
});

function val(id) { const el = document.getElementById(id); return el ? el.value : ""; }

modalSaveBtn.addEventListener("click", () => {
  if (!modalChild) return;
  const c = modalChild;
  c.name = val("mf_name");
  c.gender = val("mf_gender");
  c.dob = val("mf_dob");
  c.age = calcAge(c.dob) || c.age;
  c.bloodGroup = val("mf_blood");
  c.parentName = val("mf_parent");
  c.mobile = val("mf_mobile");
  c.email = val("mf_email");
  c.emergencyContact = val("mf_emergency");
  c.address = val("mf_address");
  c.birthWeight = val("mf_birthWeight");
  c.deliveryType = val("mf_delivery");
  c.premature = val("mf_premature");
  c.allergies = val("mf_allergies");
  c.pastIllness = val("mf_pastIllness");
  c.chronicDisease = val("mf_chronic");
  c.familyDisease = val("mf_family");
  c.height = val("mf_height");
  c.weight = val("mf_weight");
  c.bmi = val("mf_bmi");

  const vaccineRows = modalBody.querySelectorAll("#modalVaccineTable tbody tr");
  const vaccines = [];
  vaccineRows.forEach(row => {
    const nameEl = row.querySelector(".vx-name");
    if (!nameEl) return;
    vaccines.push({
      name: nameEl.value,
      due: row.querySelector(".vx-due").value,
      given: row.querySelector(".vx-given").value,
      doctor: row.querySelector(".vx-doctor").value,
      status: row.querySelector(".vx-status").value,
      nextDue: ""
    });
  });
  c.vaccines = vaccines;

  saveChildren(children);
  renderTable();
  if (selectedChild && selectedChild.id === c.id) selectChild(c);
  showToast("Child record updated");
  closeChildModal();
});

/* =========================================================
   DELETE CONFIRMATION
========================================================= */
const deleteOverlay = document.getElementById("deleteOverlay");
document.getElementById("deleteModalIcon").innerHTML = ICON.trash;
let childPendingDelete = null;

function openDeleteConfirm(child) {
  childPendingDelete = child;
  document.getElementById("deleteModalText").textContent = `Remove ${child.name || "this child"}'s record? This cannot be undone.`;
  deleteOverlay.classList.add("show");
}
function closeDeleteConfirm() { deleteOverlay.classList.remove("show"); childPendingDelete = null; }

document.getElementById("deleteCancelBtn").addEventListener("click", closeDeleteConfirm);
deleteOverlay.addEventListener("click", (e) => { if (e.target === deleteOverlay) closeDeleteConfirm(); });
document.getElementById("deleteConfirmBtn").addEventListener("click", () => {
  if (!childPendingDelete) return;
  const wasSelected = selectedChild && selectedChild.id === childPendingDelete.id;
  children = children.filter(c => c.id !== childPendingDelete.id);
  saveChildren(children);
  showToast("Child record removed");
  closeDeleteConfirm();
  renderTable();
  if (wasSelected) selectChild(children[0] || seedDemoChild());
});

/* =========================================================
   INITIAL RENDER
========================================================= */
selectChild(children[0]);
renderTable();