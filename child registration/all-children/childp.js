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
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 13.5a7.7 7.7 0 000-3l2-1.5-2-3.4-2.3.9a7.5 7.5 0 00-2.6-1.5L14 2h-4l-.5 2.5a7.5 7.5 0 00-2.6 1.5l-2.3-.9-2 3.4 2 1.5a7.7 7.7 0 000 3l-2 1.6 2 3.4 2.3-1a7.5 7.5 0 002.6 1.5L10 22h4l.5-2.5a7.5 7.5 0 002.6-1.5l2.3 1 2-3.4z"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.5-7 8-7s8 3 8 7"/></svg>`,
  userPlus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21c0-4 3-7 7-7s7 3 7 7"/><path d="M18 8v6M15 11h6"/></svg>`,
  stethoscope: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3v6a4 4 0 004 4 4 4 0 004-4V3"/><path d="M12 13v3a5 5 0 005 5 5 5 0 005-5"/><circle cx="20" cy="6" r="2"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`,
  logout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>`,
  file2: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h9l5 5v15H6z"/><path d="M15 2v5h5"/><path d="M9 13h6M9 17h6"/></svg>`
};

/* =========================================================
   SIDEBAR ROUTING (same structure across the app)
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

/* current page filename, used to mark the active nav item */
const currentPage = (location.pathname.split("/").pop() || "childp.html").toLowerCase();

document.getElementById("headerMeta").innerHTML = `
  <span>${ICON.calendar} July 7, 2026</span>
  <span>${ICON.user} Dr. Ananya Sharma</span>
  <span>${ICON.activity} Sunshine Pediatric Clinic</span>
`;

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

const sidebar = document.getElementById("sidebar");
document.getElementById("sidebarToggle").addEventListener("click", () => sidebar.classList.toggle("expanded"));

const logoutOverlay = document.getElementById("logoutOverlay");
document.querySelector("#logoutOverlay .logout-modal-icon").innerHTML = ICON.logout;
function openLogoutOverlay(){ logoutOverlay.classList.add("show"); }
function closeLogoutOverlay(){ logoutOverlay.classList.remove("show"); }
document.getElementById("logoutCancelBtn").addEventListener("click", closeLogoutOverlay);
logoutOverlay.addEventListener("click", (e) => { if (e.target === logoutOverlay) closeLogoutOverlay(); });
document.getElementById("logoutConfirmBtn").addEventListener("click", () => { window.location.href = "login.html"; });

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
   MOCK PATIENT DATA
========================================================= */
const patient = {
  name: "Aarav Mehta",
  initials: "AM",
  patientId: "CH-2026-1042",
  age: "3 yrs 4 mo",
  bloodGroup: "O+",
  gender: "Male",
  parentName: "Rohit Mehta",
  phone: "+91 98765 43210"
};

document.getElementById("profilePhoto").textContent = patient.initials;
document.getElementById("pChildName").textContent = patient.name;
document.getElementById("pPatientId").textContent = patient.patientId;
document.getElementById("pAge").textContent = patient.age;
document.getElementById("pBloodGroup").textContent = patient.bloodGroup;
document.getElementById("pGender").textContent = patient.gender;
document.getElementById("pParentName").textContent = patient.parentName;
document.getElementById("pPhone").textContent = patient.phone;

/* =========================================================
   OVERVIEW TAB
========================================================= */
const overviewKpis = [
  { label: "Upcoming Vaccine",  value: "MMR — 2nd Dose", sub: "Due 15 Jul 2026",  icon: ICON.syringe },
  { label: "Next Appointment",  value: "22 Jul, 10:30 AM", sub: "Dr. Ananya Sharma", icon: ICON.calendar },
  { label: "Last Visit",        value: "28 Jun 2026",    sub: "OPD Consultation", icon: ICON.stethoscope },
  { label: "Current Weight",    value: "14.2 kg",        sub: "as of last visit", icon: ICON.activity },
  { label: "Current Height",    value: "96 cm",          sub: "as of last visit", icon: ICON.ruler }
];

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
renderKpiRow("overviewKpis", overviewKpis);

const recentPrescriptions = [
  { medicine: "Paracetamol Syrup", dosage: "5ml", duration: "3 days", by: "Dr. Ananya Sharma", date: "28 Jun 2026" },
  { medicine: "Vitamin D Drops",   dosage: "1ml", duration: "30 days", by: "Dr. Ananya Sharma", date: "28 Jun 2026" }
];
document.getElementById("overviewPrescriptionBody").innerHTML = recentPrescriptions.map(p => `
  <tr><td>${p.medicine}</td><td>${p.dosage}</td><td>${p.duration}</td><td>${p.by}</td><td>${p.date}</td></tr>
`).join("");

/* =========================================================
   MEDICAL HISTORY TAB
========================================================= */
function reviewItem(label, value) {
  return `<div class="review-item"><span class="k">${label}</span><span class="v">${value || ""}</span></div>`;
}

document.getElementById("birthHistoryGrid").innerHTML = [
  reviewItem("Birth Weight", "3.1 kg"),
  reviewItem("Delivery Type", "Normal"),
  reviewItem("Premature?", "No")
].join("");

document.getElementById("healthBackgroundGrid").innerHTML = [
  reviewItem("Past Illness", "Chickenpox (2024)"),
  reviewItem("Allergies", "None known"),
  reviewItem("Hospital Admission", "None"),
  reviewItem("Current Medicines", "Vitamin D drops"),
  reviewItem("Chronic Disease", "None"),
  reviewItem("Family Disease", "Type 2 Diabetes (paternal grandfather)"),
  reviewItem("Development Milestones", "Walking at 13 months, first words at 11 months")
].join("");

/* =========================================================
   VACCINATION TAB
========================================================= */
const vaccinationData = [
  { name: "BCG",   given: "12 Jan 2023", due: "—",             status: "Completed" },
  { name: "OPV-1", given: "12 Jan 2023", due: "—",             status: "Completed" },
  { name: "DPT-1", given: "10 Feb 2023", due: "—",             status: "Completed" },
  { name: "MMR-1", given: "05 Jan 2024", due: "—",             status: "Completed" },
  { name: "MMR-2", given: "—",           due: "15 Jul 2026",   status: "Due" },
  { name: "Typhoid", given: "—",         due: "01 Sep 2026",   status: "Pending" }
];
const statusClassMap = {
  Completed: "status-completed", Due: "status-due", Pending: "status-pending",
  Overdue: "status-overdue", Upcoming: "status-upcoming", Cancelled: "status-cancelled", Paid: "status-paid"
};
document.getElementById("vaccinationBody").innerHTML = vaccinationData.map(v => `
  <tr>
    <td>${v.name}</td><td>${v.given}</td><td>${v.due}</td>
    <td><span class="status-pill ${statusClassMap[v.status]}">${v.status}</span></td>
    <td><button class="link-btn">${v.status === "Completed" ? "View" : "Record"}</button></td>
  </tr>
`).join("");
document.getElementById("addVaccineBtn").addEventListener("click", () => showToast("Add vaccine form would open here"));

/* =========================================================
   GROWTH TAB
========================================================= */
const growthKpis = [
  { label: "Height",              value: "96 cm",  sub: "50th percentile", icon: ICON.ruler },
  { label: "Weight",               value: "14.2 kg", sub: "55th percentile", icon: ICON.activity },
  { label: "BMI",                  value: "15.4",    sub: "Healthy range",   icon: ICON.check },
  { label: "Head Circumference",   value: "47.5 cm", sub: "as of last visit", icon: ICON.ruler }
];
renderKpiRow("growthKpis", growthKpis);

const growthHistory = [
  { date: "10 Jan 2024", h: 72, w: 9.1, bmi: 17.6, doctor: "Dr. Ananya Sharma" },
  { date: "12 Jul 2024", h: 82, w: 11.0, bmi: 16.4, doctor: "Dr. Ananya Sharma" },
  { date: "15 Jan 2025", h: 89, w: 12.6, bmi: 15.9, doctor: "Dr. Rohan Mehta" },
  { date: "20 Jul 2025", h: 93, w: 13.5, bmi: 15.6, doctor: "Dr. Ananya Sharma" },
  { date: "28 Jun 2026", h: 96, w: 14.2, bmi: 15.4, doctor: "Dr. Ananya Sharma" }
];
document.getElementById("growthHistoryBody").innerHTML = growthHistory.map(g => `
  <tr><td>${g.date}</td><td>${g.h}</td><td>${g.w}</td><td>${g.bmi}</td><td>${g.doctor}</td></tr>
`).join("");

function drawGrowthChart(data) {
  const svg = document.getElementById("growthChart");
  const tooltip = document.getElementById("growthTooltip");
  const W = 720, H = 240, padL = 34, padR = 14, padT = 14, padB = 26;
  const plotW = W - padL - padR, plotH = H - padT - padB;

  const maxH = Math.max(...data.map(d => d.h)) * 1.15;
  const stepX = plotW / (data.length - 1);

  const xy = (i, val, max) => [padL + i * stepX, padT + plotH - (val / max) * plotH];

  let svgHTML = "";
  for (let g = 0; g <= 4; g++) {
    const y = padT + (plotH / 4) * g;
    svgHTML += `<line x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}" class="grid-line"/>`;
  }
  data.forEach((d, i) => {
    const [x] = xy(i, 0, maxH);
    svgHTML += `<text x="${x}" y="${H - 6}" text-anchor="middle" class="axis-label">${d.date.split(" ").slice(0,2).join(" ")}</text>`;
  });

  const heightPath = data.map((d, i) => {
    const [x, y] = xy(i, d.h, maxH);
    return (i === 0 ? "M" : "L") + x.toFixed(1) + " " + y.toFixed(1);
  }).join(" ");
  svgHTML += `<path d="${heightPath}" fill="none" stroke="var(--primary)" stroke-width="2.5"/>`;

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
      tooltip.innerHTML = `<strong>${d.date}</strong><br>Height: ${d.h} cm<br>Weight: ${d.w} kg`;
    });
    pt.addEventListener("mouseleave", () => tooltip.style.display = "none");
  });
}
drawGrowthChart(growthHistory);

/* =========================================================
   APPOINTMENTS TAB
========================================================= */
const appointments = [
  { doctor: "Dr. Ananya Sharma", date: "22 Jul 2026", time: "10:30 AM", reason: "Routine Checkup", status: "Upcoming" },
  { doctor: "Dr. Ananya Sharma", date: "28 Jun 2026", time: "11:00 AM", reason: "Fever & Cold",     status: "Completed" },
  { doctor: "Dr. Rohan Mehta",   date: "15 Jan 2025", time: "09:15 AM", reason: "Growth Checkup",   status: "Completed" },
  { doctor: "Dr. Ananya Sharma", date: "02 Dec 2024", time: "04:00 PM", reason: "Vaccination",       status: "Cancelled" }
];
document.getElementById("appointmentsBody").innerHTML = appointments.map(a => `
  <tr>
    <td>${a.doctor}</td><td>${a.date}</td><td>${a.time}</td><td>${a.reason}</td>
    <td><span class="status-pill ${statusClassMap[a.status]}">${a.status}</span></td>
  </tr>
`).join("");

/* =========================================================
   CONSULTATION TAB
========================================================= */
const consultations = [
  { date: "28 Jun 2026", title: "Fever & Cold", text: "<strong>Complaint:</strong> Fever for 2 days, mild cough. <strong>Diagnosis:</strong> Viral upper respiratory infection. Advised rest, fluids, and follow-up if fever persists beyond 3 days." },
  { date: "15 Jan 2025", title: "Growth Checkup", text: "<strong>Complaint:</strong> Routine growth monitoring. <strong>Diagnosis:</strong> Growth within normal percentile range. No concerns noted." },
  { date: "05 Jan 2024", title: "MMR Vaccination Visit", text: "<strong>Complaint:</strong> Scheduled vaccination. <strong>Diagnosis:</strong> Healthy, vaccine administered without reaction." }
];
document.getElementById("consultationList").innerHTML = consultations.map(c => `
  <div class="timeline-item">
    <div class="timeline-dot-col"><span class="timeline-dot"></span></div>
    <div class="timeline-body">
      <div class="timeline-date">${c.date}</div>
      <div class="timeline-title">${c.title}</div>
      <div class="timeline-text">${c.text}</div>
    </div>
  </div>
`).join("");

/* =========================================================
   PRESCRIPTION TAB
========================================================= */
const prescriptions = [
  { medicine: "Paracetamol Syrup", morning: "5ml", afternoon: "—",   night: "5ml", duration: "3 days",  date: "28 Jun 2026" },
  { medicine: "Vitamin D Drops",   morning: "1ml", afternoon: "—",   night: "—",   duration: "30 days", date: "28 Jun 2026" },
  { medicine: "ORS Solution",      morning: "—",   afternoon: "as needed", night: "—", duration: "3 days", date: "28 Jun 2026" }
];
document.getElementById("prescriptionBody").innerHTML = prescriptions.map(p => `
  <tr><td>${p.medicine}</td><td>${p.morning}</td><td>${p.afternoon}</td><td>${p.night}</td><td>${p.duration}</td><td>${p.date}</td></tr>
`).join("");

/* =========================================================
   DOCUMENTS TAB (view-only, no upload)
========================================================= */
const documents = [
  { name: "Birth Certificate", meta: "PDF · 240 KB · Added 12 Jan 2023" },
  { name: "Parent ID Proof",   meta: "PDF · 180 KB · Added 12 Jan 2023" },
  { name: "Medical Report",    meta: "PDF · 320 KB · Added 28 Jun 2026" },
  { name: "Prescription — 28 Jun", meta: "PDF · 95 KB · Added 28 Jun 2026" }
];
document.getElementById("documentsGrid").innerHTML = documents.map(d => `
  <div class="doc-card">
    <div class="doc-icon">${ICON.file2}</div>
    <div class="doc-name">${d.name}</div>
    <div class="doc-meta">${d.meta}</div>
    <div class="doc-actions">
      <button class="btn btn-outline" onclick="showToast('Opening preview...')">Preview</button>
      <button class="btn btn-outline" onclick="showToast('Downloading...')">Download</button>
    </div>
  </div>
`).join("");

/* =========================================================
   BILLING TAB
========================================================= */
const billing = [
  { invoice: "INV-2026-0142", date: "28 Jun 2026", amount: "₹1,200", status: "Paid" },
  { invoice: "INV-2026-0098", date: "15 Jan 2025", amount: "₹900",   status: "Paid" },
  { invoice: "INV-2026-0201", date: "22 Jul 2026", amount: "₹700",   status: "Pending" }
];
document.getElementById("billingBody").innerHTML = billing.map(b => `
  <tr>
    <td>${b.invoice}</td><td>${b.date}</td><td>${b.amount}</td>
    <td><span class="status-pill ${statusClassMap[b.status]}">${b.status}</span></td>
    <td><button class="link-btn">View</button></td>
  </tr>
`).join("");