// protectPage();
/* =========================================================
   ICON LIBRARY
========================================================= */
const ICON = {
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6"/><circle cx="17" cy="9" r="2.6"/><path d="M15 20c0-2.4 1-4.2 2.7-5.2"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18"/><path d="M8 3v4M16 3v4"/></svg>`,
  syringe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2l4 4-3 3-2-2"/><path d="M17 7l-9.5 9.5"/><path d="M4 20l2.5-2.5"/><path d="M9 12l3 3M11 10l3 3"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5 5-5.5"/></svg>`,
  activity: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l2 7 4-14 2 7h6"/></svg>`,
  clipboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="4" width="14" height="17" rx="2"/><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h6"/></svg>`,
  file: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h9l5 5v15H6z"/><path d="M15 2v5h5"/></svg>`,
  receipt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 2h14v20l-3-2-2 2-2-2-2 2-2-2-3 2z"/><path d="M8 8h8M8 12h8"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 13.5a7.7 7.7 0 000-3l2-1.5-2-3.4-2.3.9a7.5 7.5 0 00-2.6-1.5L14 2h-4l-.5 2.5a7.5 7.5 0 00-2.6 1.5l-2.3-.9-2 3.4 2 1.5a7.7 7.7 0 000 3l-2 1.6 2 3.4 2.3-1a7.5 7.5 0 002.6 1.5L10 22h4l.5-2.5a7.5 7.5 0 002.6-1.5l2.3 1 2-3.4z"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.5-7 8-7s8 3 8 7"/></svg>`,
  userPlus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21c0-4 3-7 7-7s7 3 7 7"/><path d="M18 8v6M15 11h6"/></svg>`,
  stethoscope: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3v6a4 4 0 004 4 4 4 0 004-4V3"/><path d="M12 13v3a5 5 0 005 5 5 5 0 005-5"/><circle cx="20" cy="6" r="2"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>`,
  edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg>`,
  alertTriangle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 20h20L12 2z"/><path d="M12 9v5M12 17h.01"/></svg>`,
  pill: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 20.5L3.5 13.5a5 5 0 117-7l7 7a5 5 0 01-7 7z"/><path d="M8.5 8.5l7 7"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>`,
  printer: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V2h12v7"/><rect x="4" y="9" width="16" height="8" rx="1"/><path d="M6 14h12v8H6z"/></svg>`,
  logout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>`,
  link: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1.5 1.5"/><path d="M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1.5-1.5"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="M7 10l5 5 5-5"/><path d="M4 21h16"/></svg>`
};

/* =========================================================
   SIDEBAR
========================================================= */
/* =========================================================
   SIDEBAR NAV (Current Page: prescription/prescription.html)
========================================================= */
const sidebarItems = [
  { type: "link",  icon: ICON.home,        label: "Dashboard",         href: "../dashboard.html" },

  { type: "group", icon: ICON.users,       label: "Children", key: "children", children: [
      { label: "All Children",   href: "../child registration/all-children/childp.html" },
      { label: "Register Child", href: "../child registration/registerchild/registerchild.html" }
    ]
  },

  { type: "link",  icon: ICON.calendar,    label: "Appointments",      href: "../appointment/appointment.html" },

  { type: "link",  icon: ICON.stethoscope, label: "Consultations",     href: "../consultation/opd.html" },

  { type: "link",  icon: ICON.clipboard,   label: "Prescriptions",     href: "prescription.html" },

  { type: "link",  icon: ICON.syringe,     label: "Vaccinations",      href: "../vaccination.html" },

  { type: "link",  icon: ICON.activity,    label: "Growth Monitoring", href: "../Growth/growth.html" },

  { type: "link",  icon: ICON.file,        label: "Reports",           href: "../reports.html" },

  { type: "link",  icon: ICON.receipt,     label: "Billing",           href: "../billing.html" },

  { type: "link",  icon: ICON.userPlus,    label: "User Management",   href: "../user/user.html" },

  { type: "action", icon: ICON.logout, label: "Logout", action: "logout" }
];

const currentPage = (location.pathname.split("/").pop() || "prescription.html").toLowerCase();
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
    btn.addEventListener("click", () => { 
        if (item.action === "logout") logout(); 
    });
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
  parent.innerHTML = item.icon + `<span class="nav-label">${item.label}</span>` + `<span class="nav-chevron">${ICON.check}</span>`;
  parent.addEventListener("click", () => {
    group.classList.toggle("open");
    parent.classList.toggle("open");
  });
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

/* =========================================================
   HEADER META
========================================================= */
document.getElementById("headerMeta").innerHTML = `
  <span>${ICON.calendar} July 7, 2026 &middot; 10:15</span>
  <span>${ICON.user} Dr. Ananya Sharma</span>
  <span>${ICON.activity} Sunshine Pediatric Clinic</span>
`;

/* =========================================================
   CLINIC INFO (used across print / PDF / WhatsApp / invoice)
========================================================= */
const CLINIC = {
  name: "Sunshine Pediatric Clinic",
  address: "123 MG Road, Pune, Maharashtra",
  phone: "+91 98220 00000",
  doctorName: "Dr. Ananya Sharma",
  doctorSub: "MBBS, MD (Pediatrics) · Reg. No. MH-24681"
};

/* =========================================================
   MOCK DATA
========================================================= */
const patients = [
  { id: "PC-1042", name: "Aarav Kapoor",  age: "3 yrs",   parent: "Rohit Kapoor",  phone: "+91 98765 43210", blood: "B+",  weight: "14.2 kg", allergies: ["Penicillin"] },
  { id: "PC-1043", name: "Diya Sharma",   age: "1.5 yrs", parent: "Neha Sharma",   phone: "+91 91234 56780", blood: "O+",  weight: "10.5 kg", allergies: [] },
  { id: "PC-1044", name: "Vihaan Patel",  age: "5 yrs",   parent: "Meera Patel",   phone: "+91 99887 76655", blood: "A+",  weight: "17.8 kg", allergies: ["Peanuts", "Dust"] },
  { id: "PC-1045", name: "Ishaan Verma",  age: "7 mo",    parent: "Sanjay Verma",  phone: "+91 90000 11223", blood: "AB+", weight: "8.1 kg",  allergies: [] },
  { id: "PC-1046", name: "Anaya Iyer",    age: "4 yrs",   parent: "Priya Iyer",    phone: "+91 98123 45678", blood: "B-",  weight: "15.6 kg", allergies: ["Lactose"] },
  { id: "PC-1047", name: "Reyansh Gupta", age: "2 yrs",   parent: "Amit Gupta",    phone: "+91 97654 32109", blood: "O-",  weight: "12.3 kg", allergies: [] }
];

const foodOptions = ["Before Food", "After Food", "With Food", "Empty Stomach"];

let prescriptions = [
  {
    id: 1, patientId: "PC-1042", date: "2026-06-28",
    medicines: [
      { name: "Paracetamol Syrup", m: true,  a: false, n: true,  duration: "3 days", food: "After Food", instruction: "5 ml, if fever above 100°F" },
      { name: "Cough Syrup",       m: false, a: true,  n: true,  duration: "5 days", food: "After Food", instruction: "5 ml twice daily" }
    ],
    invoice: null
  },
  {
    id: 2, patientId: "PC-1044", date: "2026-07-01",
    medicines: [
      { name: "Cetirizine Drops", m: true, a: false, n: false, duration: "7 days", food: "After Food", instruction: "10 drops once daily" }
    ],
    invoice: null
  }
];
let nextRxId = prescriptions.length + 1;

let selectedPatient = null;
let currentMeds = [];
let nextRowId = 1;
let currentInvoice = null; /* set once "Generate Invoice" is clicked */

/* =========================================================
   KPI CARDS
========================================================= */
function renderKPIs(){
  const today = "2026-07-07";
  const totalMeds = prescriptions.reduce((sum, p) => sum + p.medicines.length, 0);
  const kpis = [
    { label: "Today's Prescriptions", value: prescriptions.filter(p => p.date === today).length, icon: ICON.clipboard },
    { label: "Total Medicines",       value: totalMeds, icon: ICON.pill },
    { label: "Patients Prescribed",   value: new Set(prescriptions.map(p => p.patientId)).size, icon: ICON.users },
    { label: "Total Prescriptions",   value: prescriptions.length, icon: ICON.file }
  ];
  document.getElementById("kpiRow").innerHTML = kpis.map(k => `
    <div class="card kpi-card">
      <div class="kpi-icon">${k.icon}</div>
      <div class="kpi-label">${k.label}</div>
      <div class="kpi-value">${k.value}</div>
    </div>
  `).join("");
}

/* =========================================================
   PATIENT SEARCH
========================================================= */
const patientSearch = document.getElementById("patientSearch");
const suggestList = document.getElementById("suggestList");

patientSearch.addEventListener("input", () => {
  const q = patientSearch.value.trim().toLowerCase();
  if (!q){ suggestList.classList.remove("show"); return; }
  const matches = patients.filter(p => p.name.toLowerCase().includes(q) || p.id.toLowerCase().includes(q));
  if (!matches.length){
    suggestList.innerHTML = `<div class="suggest-item">No matching child found</div>`;
    suggestList.classList.add("show");
    return;
  }
  suggestList.innerHTML = matches.map(p => `
    <div class="suggest-item" data-id="${p.id}">
      ${p.name} <span>${p.id} &middot; ${p.age} &middot; Parent: ${p.parent}</span>
    </div>
  `).join("");
  suggestList.classList.add("show");
});

suggestList.addEventListener("click", (e) => {
  const item = e.target.closest(".suggest-item[data-id]");
  if (!item) return;
  const p = patients.find(pp => pp.id === item.getAttribute("data-id"));
  selectPatient(p);
  suggestList.classList.remove("show");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-wrap")) suggestList.classList.remove("show");
});

function initials(name){
  return name.split(" ").map(n => n[0]).slice(0,2).join("").toUpperCase();
}
function formatDate(iso){
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}
function formatCurrency(n){
  return "₹" + Number(n).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

/* digits-only phone number for wa.me (assumes Indian country code already present, e.g. +91 98765 43210) */
function toWhatsappNumber(phone){
  return phone.replace(/[^\d]/g, "");
}

function selectPatient(p){
  selectedPatient = p;
  patientSearch.value = `${p.name} (${p.id})`;
  renderPatientSummary();
  document.getElementById("rxSection").style.display = "block";
  currentMeds = [];
  currentInvoice = null;
  document.getElementById("invoiceBreakdown").innerHTML = "";
  document.getElementById("feeMedicine").value = 0;
  addMedicineRow();
  renderRxTable();
  renderRxHistory();
  updateInvoiceActionState();
}

function renderPatientSummary(){
  const box = document.getElementById("patientSummaryBox");
  if (!selectedPatient){
    box.innerHTML = `
      <div class="summary-empty">
        <div class="summary-empty-icon">${ICON.search}</div>
        <p>Search and select a registered child above to write a prescription.</p>
      </div>
    `;
    return;
  }
  const p = selectedPatient;
  box.innerHTML = `
    <div class="summary-card">
      <div class="summary-avatar">${initials(p.name)}</div>
      <div class="summary-main">
        <div class="summary-name">${p.name}</div>
        <div class="summary-sub">${p.id} &middot; ${p.age} &middot; Blood Group ${p.blood}</div>
        <div class="summary-grid">
          <div class="summary-stat"><div class="summary-stat-label">Parent</div><div class="summary-stat-value">${p.parent}</div></div>
          <div class="summary-stat"><div class="summary-stat-label">Phone</div><div class="summary-stat-value">${p.phone}</div></div>
          <div class="summary-stat"><div class="summary-stat-label">Weight</div><div class="summary-stat-value">${p.weight}</div></div>
        </div>
        <div style="margin-top:10px;">
          <span style="font-size:11px; color:var(--muted);">Allergies:</span><br>
          ${p.allergies.length ? p.allergies.map(a => `<span class="allergy-pill">${ICON.alertTriangle}${a}</span>`).join("") : `<span style="font-size:12px; color:var(--muted);">None recorded</span>`}
        </div>
      </div>
    </div>
  `;
}

/* =========================================================
   MEDICINE TABLE
========================================================= */
function addMedicineRow(){
  currentMeds.push({ rowId: nextRowId++, name: "", m: false, a: false, n: false, duration: "", food: foodOptions[0], instruction: "" });
  renderRxTable();
}

function renderRxTable(){
  const tbody = document.getElementById("rxTableBody");
  if (!currentMeds.length){
    tbody.innerHTML = `<tr class="empty-row"><td colspan="7">No medicines added yet. Click "+ Add Medicine" to start.</td></tr>`;
    return;
  }
  tbody.innerHTML = currentMeds.map(row => `
    <tr data-row="${row.rowId}">
      <td class="med-name-col"><input type="text" class="med-name" value="${row.name}" placeholder="Medicine name"></td>
      <td><div class="dose-check-group"><button type="button" class="dose-check ${row.m ? "on" : ""}" data-dose="m">M</button></div></td>
      <td><div class="dose-check-group"><button type="button" class="dose-check ${row.a ? "on" : ""}" data-dose="a">A</button></div></td>
      <td><div class="dose-check-group"><button type="button" class="dose-check ${row.n ? "on" : ""}" data-dose="n">N</button></div></td>
      <td class="duration-col"><input type="text" class="med-duration" value="${row.duration}" placeholder="e.g. 5 days"></td>
      <td class="food-col">
        <select class="med-food">
          ${foodOptions.map(f => `<option value="${f}" ${f === row.food ? "selected" : ""}>${f}</option>`).join("")}
        </select>
      </td>
      <td class="instruction-col"><input type="text" class="med-instruction" value="${row.instruction}" placeholder="e.g. Twice daily"></td>
      <td><button type="button" class="remove-row-btn" title="Remove">${ICON.trash}</button></td>
    </tr>
  `).join("");
}

const rxTableBody = document.getElementById("rxTableBody");

rxTableBody.addEventListener("input", (e) => {
  const tr = e.target.closest("tr[data-row]");
  if (!tr) return;
  const row = currentMeds.find(r => r.rowId === Number(tr.getAttribute("data-row")));
  if (!row) return;
  if (e.target.classList.contains("med-name")) row.name = e.target.value;
  if (e.target.classList.contains("med-duration")) row.duration = e.target.value;
  if (e.target.classList.contains("med-instruction")) row.instruction = e.target.value;
});

rxTableBody.addEventListener("change", (e) => {
  const tr = e.target.closest("tr[data-row]");
  if (!tr) return;
  const row = currentMeds.find(r => r.rowId === Number(tr.getAttribute("data-row")));
  if (!row) return;
  if (e.target.classList.contains("med-food")) row.food = e.target.value;
});

rxTableBody.addEventListener("click", (e) => {
  const doseBtn = e.target.closest(".dose-check");
  const removeBtn = e.target.closest(".remove-row-btn");
  const tr = e.target.closest("tr[data-row]");
  if (!tr) return;
  const rowId = Number(tr.getAttribute("data-row"));
  const row = currentMeds.find(r => r.rowId === rowId);
  if (!row) return;

  if (doseBtn){
    const key = doseBtn.getAttribute("data-dose");
    row[key] = !row[key];
    doseBtn.classList.toggle("on", row[key]);
  } else if (removeBtn){
    currentMeds = currentMeds.filter(r => r.rowId !== rowId);
    renderRxTable();
  }
});

document.getElementById("addMedicineBtn").addEventListener("click", addMedicineRow);

/* recompute a sensible default medicine charge whenever meds change (editable by the user) */
function suggestMedicineCharge(){
  const count = getValidMeds().length;
  return count * 150;
}

/* =========================================================
   SAVE
========================================================= */
const rxError = document.getElementById("rxError");

function getValidMeds(){
  return currentMeds.filter(r => r.name.trim());
}

function doseLabel(m){
  const parts = [];
  if (m.m) parts.push("Morning");
  if (m.a) parts.push("Afternoon");
  if (m.n) parts.push("Night");
  return parts.length ? parts.join(" · ") : "As directed";
}

document.getElementById("saveRxBtn").addEventListener("click", () => {
  rxError.textContent = "";
  if (!selectedPatient){ rxError.textContent = "Please select a patient first."; return; }
  const meds = getValidMeds();
  if (!meds.length){ rxError.textContent = "Please add at least one medicine with a name."; return; }

  const feeMedicineInput = document.getElementById("feeMedicine");
  if (!Number(feeMedicineInput.value)) feeMedicineInput.value = suggestMedicineCharge();

  const savedRx = {
    id: nextRxId++,
    patientId: selectedPatient.id,
    date: "2026-07-07",
    medicines: meds.map(m => ({ ...m })),
    invoice: null
  };
  prescriptions.unshift(savedRx);

  renderKPIs();
  renderRxHistory();
  showToast(`Prescription saved for ${selectedPatient.name}`);
  updateInvoiceActionState();
});

/* =========================================================
   INVOICE
========================================================= */
function computeInvoice(){
  const consultation = Number(document.getElementById("feeConsultation").value) || 0;
  const medicine = Number(document.getElementById("feeMedicine").value) || 0;
  const discountPct = Number(document.getElementById("feeDiscount").value) || 0;
  const gstPct = Number(document.getElementById("feeGst").value) || 0;

  const subtotal = consultation + medicine;
  const discountAmt = subtotal * (discountPct / 100);
  const afterDiscount = subtotal - discountAmt;
  const gstAmt = afterDiscount * (gstPct / 100);
  const grandTotal = afterDiscount + gstAmt;

  return { consultation, medicine, discountPct, discountAmt, gstPct, gstAmt, subtotal, grandTotal };
}

function renderInvoiceBreakdown(inv){
  document.getElementById("invoiceBreakdown").innerHTML = `
    <div class="invoice-breakdown">
      <div class="invoice-row"><span>Consultation Fee</span><span class="invoice-value">${formatCurrency(inv.consultation)}</span></div>
      <div class="invoice-row"><span>Medicine Charges</span><span class="invoice-value">${formatCurrency(inv.medicine)}</span></div>
      <div class="invoice-row muted"><span>Subtotal</span><span class="invoice-value">${formatCurrency(inv.subtotal)}</span></div>
      <div class="invoice-row discount"><span>Discount (${inv.discountPct}%)</span><span class="invoice-value">- ${formatCurrency(inv.discountAmt)}</span></div>
      <div class="invoice-row muted"><span>GST (${inv.gstPct}%)</span><span class="invoice-value">+ ${formatCurrency(inv.gstAmt)}</span></div>
      <div class="invoice-row total"><span>Grand Total</span><span class="invoice-value">${formatCurrency(inv.grandTotal)}</span></div>
    </div>
  `;
}

function updateInvoiceActionState(){
  const hasMeds = getValidMeds().length > 0;
  const ready = !!selectedPatient && hasMeds && !!currentInvoice;
  ["printRxBtn", "downloadPdfBtn", "generateLinkBtn", "sendWhatsappBtn"].forEach(id => {
    document.getElementById(id).disabled = !ready;
  });
}
updateInvoiceActionState();

document.getElementById("generateInvoiceBtn").addEventListener("click", () => {
  const invoiceError = document.getElementById("invoiceError");
  invoiceError.textContent = "";
  if (!selectedPatient){ invoiceError.textContent = "Please select a patient first."; return; }
  const meds = getValidMeds();
  if (!meds.length){ invoiceError.textContent = "Please add at least one medicine before generating an invoice."; return; }

  const feeMedicineInput = document.getElementById("feeMedicine");
  if (!Number(feeMedicineInput.value)) feeMedicineInput.value = suggestMedicineCharge();

  currentInvoice = computeInvoice();
  renderInvoiceBreakdown(currentInvoice);
  updateInvoiceActionState();
  showToast("Invoice generated");
});

/* =========================================================
   BUILD PRINT / PDF CONTENT
========================================================= */
function buildRxDocumentHTML(patient, date, meds, invoice){
  return `
    <div class="rx-print-sheet">
      <div class="rx-print-head">
        <div>
          <div class="rx-clinic-name">${CLINIC.name}</div>
          <div class="rx-clinic-sub">${CLINIC.address} &middot; ${CLINIC.phone}</div>
        </div>
        <div>
          <div class="rx-doc-name">${CLINIC.doctorName}</div>
          <div class="rx-doc-sub">${CLINIC.doctorSub}</div>
        </div>
      </div>
      <div class="rx-patient-row">
        <div><span>Patient</span>${patient.name} (${patient.id})</div>
        <div><span>Age</span>${patient.age}</div>
        <div><span>Weight</span>${patient.weight}</div>
        <div><span>Date</span>${formatDate(date)}</div>
      </div>
      <table class="rx-print-table">
        <thead>
          <tr><th>Medicine</th><th>Dosage Timing</th><th>Duration</th><th>Food</th><th>Instruction</th></tr>
        </thead>
        <tbody>
          ${meds.map(m => `
            <tr>
              <td>${m.name}</td>
              <td>${doseLabel(m)}</td>
              <td>${m.duration || "—"}</td>
              <td>${m.food}</td>
              <td>${m.instruction || "—"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      ${invoice ? `
      <div class="rx-print-invoice">
        <div class="invoice-row"><span>Consultation Fee</span><span>${formatCurrency(invoice.consultation)}</span></div>
        <div class="invoice-row"><span>Medicine Charges</span><span>${formatCurrency(invoice.medicine)}</span></div>
        <div class="invoice-row"><span>Discount (${invoice.discountPct}%)</span><span>- ${formatCurrency(invoice.discountAmt)}</span></div>
        <div class="invoice-row"><span>GST (${invoice.gstPct}%)</span><span>+ ${formatCurrency(invoice.gstAmt)}</span></div>
        <div class="invoice-row total"><span>Grand Total</span><span>${formatCurrency(invoice.grandTotal)}</span></div>
      </div>` : ""}
      <div class="rx-print-footer">Generated via Pediatric Clinic Management System &middot; Please follow the dosage as prescribed.</div>
    </div>
  `;
}

/* =========================================================
   PRINT (prescription + invoice)
========================================================= */
document.getElementById("printRxBtn").addEventListener("click", () => {
  if (!selectedPatient || !currentInvoice) return;
  const meds = getValidMeds();
  if (!meds.length) return;
  document.getElementById("printArea").innerHTML = buildRxDocumentHTML(selectedPatient, "2026-07-07", meds, currentInvoice);
  window.print();
});

/* =========================================================
   DOWNLOAD PDF (uses jsPDF, loaded via CDN in prescription.html)
========================================================= */
document.getElementById("downloadPdfBtn").addEventListener("click", () => {
  if (!selectedPatient || !currentInvoice) return;
  const meds = getValidMeds();
  if (!meds.length) return;

  if (!window.jspdf){
    showToast("PDF library failed to load. Check your internet connection.");
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const margin = 40;
  let y = margin;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(108, 99, 255);
  doc.text(CLINIC.name, margin, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(139, 133, 166);
  y += 14;
  doc.text(`${CLINIC.address}  |  ${CLINIC.phone}`, margin, y);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(36, 30, 61);
  doc.text(CLINIC.doctorName, 400, margin);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(139, 133, 166);
  doc.text(CLINIC.doctorSub, 400, margin + 14);

  y += 20;
  doc.setDrawColor(108, 99, 255);
  doc.setLineWidth(1.2);
  doc.line(margin, y, 555, y);
  y += 24;

  doc.setFontSize(10);
  doc.setTextColor(36, 30, 61);
  doc.setFont("helvetica", "bold");
  doc.text(`Patient: ${selectedPatient.name} (${selectedPatient.id})`, margin, y);
  y += 14;
  doc.setFont("helvetica", "normal");
  doc.text(`Age: ${selectedPatient.age}   Weight: ${selectedPatient.weight}   Date: ${formatDate("2026-07-07")}`, margin, y);
  y += 24;

  doc.setFont("helvetica", "bold");
  doc.text("Prescription", margin, y);
  y += 16;

  const colX = [margin, margin + 150, margin + 260, margin + 340, margin + 410];
  doc.setFontSize(9);
  doc.setTextColor(139, 133, 166);
  doc.text("Medicine", colX[0], y);
  doc.text("Dosage", colX[1], y);
  doc.text("Duration", colX[2], y);
  doc.text("Food", colX[3], y);
  doc.text("Instruction", colX[4], y);
  y += 6;
  doc.setDrawColor(236, 232, 249);
  doc.line(margin, y, 555, y);
  y += 14;

  doc.setTextColor(36, 30, 61);
  meds.forEach(m => {
    doc.text(m.name.substring(0, 22), colX[0], y);
    doc.text(doseLabel(m), colX[1], y);
    doc.text(m.duration || "—", colX[2], y);
    doc.text(m.food, colX[3], y);
    doc.text((m.instruction || "—").substring(0, 24), colX[4], y);
    y += 16;
  });

  y += 10;
  doc.setDrawColor(236, 232, 249);
  doc.line(margin, y, 555, y);
  y += 20;

  doc.setFont("helvetica", "bold");
  doc.text("Invoice", margin, y);
  y += 16;
  doc.setFont("helvetica", "normal");

  const inv = currentInvoice;
  const invoiceLines = [
    ["Consultation Fee", formatCurrency(inv.consultation)],
    ["Medicine Charges", formatCurrency(inv.medicine)],
    [`Discount (${inv.discountPct}%)`, "- " + formatCurrency(inv.discountAmt)],
    [`GST (${inv.gstPct}%)`, "+ " + formatCurrency(inv.gstAmt)]
  ];
  invoiceLines.forEach(([label, value]) => {
    doc.text(label, margin, y);
    doc.text(value, 470, y);
    y += 15;
  });

  y += 4;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(108, 99, 255);
  doc.text("Grand Total", margin, y);
  doc.text(formatCurrency(inv.grandTotal), 470, y);

  y += 30;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(139, 133, 166);
  doc.text("Generated via Pediatric Clinic Management System. Please follow the dosage as prescribed.", margin, y);

  const fileName = `Prescription_${selectedPatient.id}_2026-07-07.pdf`;
  doc.save(fileName);
  showToast("Prescription PDF downloaded");
});

/* =========================================================
   SHAREABLE LINK
   Since this is a static front-end page (no backend/database),
   the prescription + invoice data is packed into the URL itself
   as base64 JSON, and read back by view-prescription.html.
========================================================= */
function buildSharePayload(){
  return {
    clinic: CLINIC,
    patient: {
      name: selectedPatient.name, id: selectedPatient.id, age: selectedPatient.age,
      parent: selectedPatient.parent, phone: selectedPatient.phone, weight: selectedPatient.weight
    },
    date: "2026-07-07",
    medicines: getValidMeds().map(m => ({ ...m })),
    invoice: currentInvoice
  };
}

function buildShareLink(){
  const payload = buildSharePayload();
  const encoded = encodeURIComponent(btoa(unescape(encodeURIComponent(JSON.stringify(payload)))));
  const base = location.href.replace(/[^/]*$/, ""); /* current folder */
  return `${base}view-prescription.html?data=${encoded}`;
}

document.getElementById("generateLinkBtn").addEventListener("click", () => {
  if (!selectedPatient || !currentInvoice) return;
  const link = buildShareLink();
  openLinkModal(link);
});

function openLinkModal(link){
  modalCard.className = "modal-card";
  modalCard.innerHTML = `
    <div class="modal-head">
      <div class="modal-title link"><span class="modal-icon">${ICON.link}</span>Shareable Prescription Link</div>
      <button class="modal-close" id="modalCloseBtn">${ICON.x}</button>
    </div>
    <p class="modal-text">Anyone with this link can view and print this prescription and invoice. The link works as long as it's opened from the same folder as this app (no server database is used).</p>
    <div class="link-box">
      <input type="text" id="shareLinkInput" value="${link}" readonly>
      <button type="button" id="copyLinkBtn">Copy</button>
    </div>
    <div class="modal-actions">
      <button class="btn btn-outline" id="modalDoneBtn">Close</button>
      <button class="btn btn-whatsapp" id="linkToWhatsappBtn">${ICON.whatsapp} Share on WhatsApp</button>
    </div>
  `;
  modalOverlay.classList.add("show");
  document.getElementById("modalCloseBtn").addEventListener("click", closeModal);
  document.getElementById("modalDoneBtn").addEventListener("click", closeModal);
  document.getElementById("copyLinkBtn").addEventListener("click", () => {
    const input = document.getElementById("shareLinkInput");
    input.select();
    navigator.clipboard.writeText(input.value).then(() => showToast("Link copied to clipboard"))
      .catch(() => { document.execCommand("copy"); showToast("Link copied to clipboard"); });
  });
  document.getElementById("linkToWhatsappBtn").addEventListener("click", () => {
    closeModal();
    sendPrescriptionOnWhatsapp(link);
  });
}

/* =========================================================
   WHATSAPP MESSAGE
   Builds a short, essential-only summary of the prescription
   (patient, medicines, total due, and a link for full details)
   and opens WhatsApp (wa.me) pre-filled with it, addressed to
   the patient's own registered mobile number. The user taps
   Send inside WhatsApp — actual sending always requires that
   final tap because there is no backend / WhatsApp Business
   API here.
========================================================= */
function buildWhatsappMessage(link){
  const p = selectedPatient;
  const meds = getValidMeds();
  const inv = currentInvoice;

  const medLines = meds.map((m, i) =>
    `${i + 1}. ${m.name} — ${doseLabel(m)}${m.duration ? ", " + m.duration : ""}`
  ).join("\n");

  return `*${CLINIC.name}*
Prescription for *${p.name}* (${p.id})
Date: ${formatDate("2026-07-07")}

*Medicines:*
${medLines}

*Amount Due: ${formatCurrency(inv.grandTotal)}*

Full prescription & invoice: ${link}`;
}

function sendPrescriptionOnWhatsapp(existingLink){
  if (!selectedPatient || !currentInvoice) return;
  const meds = getValidMeds();
  if (!meds.length) return;

  const link = existingLink || buildShareLink();
  const message = buildWhatsappMessage(link);
  const waNumber = toWhatsappNumber(selectedPatient.phone);
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

  openWhatsappPreviewModal(message, waUrl);
}

document.getElementById("sendWhatsappBtn").addEventListener("click", () => sendPrescriptionOnWhatsapp());

function openWhatsappPreviewModal(message, waUrl){
  modalCard.className = "modal-card wide";
  modalCard.innerHTML = `
    <div class="modal-head">
      <div class="modal-title whatsapp"><span class="modal-icon">${ICON.whatsapp}</span>Send on WhatsApp</div>
      <button class="modal-close" id="modalCloseBtn">${ICON.x}</button>
    </div>
    <p class="modal-text">This will open WhatsApp with the message below, pre-addressed to <strong>${selectedPatient.phone}</strong> (this child's registered number). Tap send inside WhatsApp to deliver it.</p>
    <div class="wa-preview">${message.replace(/</g, "&lt;")}</div>
    <div class="modal-actions">
      <button class="btn btn-outline" id="modalCancelBtn">Cancel</button>
      <a class="btn btn-whatsapp" href="${waUrl}" target="_blank" rel="noopener" id="openWhatsappLink">${ICON.whatsapp} Open WhatsApp</a>
    </div>
  `;
  modalOverlay.classList.add("show");
  document.getElementById("modalCloseBtn").addEventListener("click", closeModal);
  document.getElementById("modalCancelBtn").addEventListener("click", closeModal);
  document.getElementById("openWhatsappLink").addEventListener("click", () => {
    setTimeout(closeModal, 300);
    showToast("Opening WhatsApp...");
  });
}

/* =========================================================
   PRESCRIPTION HISTORY
========================================================= */
function renderRxHistory(){
  const wrap = document.getElementById("rxHistory");
  if (!selectedPatient){ wrap.innerHTML = ""; return; }

  const items = prescriptions.filter(p => p.patientId === selectedPatient.id).sort((a, b) => (a.date < b.date ? 1 : -1));

  if (!items.length){
    wrap.innerHTML = `<div class="empty-note">No previous prescriptions for this child yet.</div>`;
    return;
  }

  wrap.innerHTML = items.map((p, i) => `
    <div class="timeline-item">
      <div class="timeline-dot-wrap">
        <div class="timeline-dot"></div>
        ${i < items.length - 1 ? `<div class="timeline-line"></div>` : ""}
      </div>
      <div class="timeline-content">
        <div class="timeline-date">${formatDate(p.date)}</div>
        <div class="timeline-complaint">${p.medicines.length} medicine${p.medicines.length > 1 ? "s" : ""} prescribed</div>
        <div class="timeline-detail">${p.medicines.map(m => m.name).join(", ")}</div>
        <div class="timeline-actions">
          <button class="icon-btn" title="View" data-action="view" data-id="${p.id}">${ICON.eye}</button>
          <button class="icon-btn" title="Edit" data-action="edit" data-id="${p.id}">${ICON.edit}</button>
          <button class="icon-btn danger" title="Delete" data-action="delete" data-id="${p.id}">${ICON.trash}</button>
        </div>
      </div>
    </div>
  `).join("");
}

document.getElementById("rxHistory").addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-action]");
  if (!btn) return;
  const id = Number(btn.getAttribute("data-id"));
  const action = btn.getAttribute("data-action");
  const p = prescriptions.find(x => x.id === id);
  if (!p) return;

  if (action === "view") openViewModal(p);
  else if (action === "edit") openEditModal(p);
  else if (action === "delete") openDeleteModal(p);
});

/* =========================================================
   MODAL OVERLAY — View / Edit / Delete / Link / WhatsApp
========================================================= */
const modalOverlay = document.getElementById("modalOverlay");
const modalCard = document.getElementById("modalCard");

function closeModal(){
  modalOverlay.classList.remove("show");
  modalCard.innerHTML = "";
  modalCard.className = "modal-card";
}
modalOverlay.addEventListener("click", (e) => { if (e.target === modalOverlay) closeModal(); });

function openViewModal(p){
  modalCard.className = "modal-card";
  modalCard.innerHTML = `
    <div class="modal-head">
      <div class="modal-title"><span class="modal-icon">${ICON.eye}</span>Prescription Details</div>
      <button class="modal-close" id="modalCloseBtn">${ICON.x}</button>
    </div>
    <div class="detail-row"><span class="detail-label">Date</span><span class="detail-value">${formatDate(p.date)}</span></div>
    ${p.medicines.map(m => `
      <div class="detail-row" style="flex-direction:column; align-items:flex-start; gap:4px;">
        <span class="detail-value">${m.name}</span>
        <span class="detail-label" style="text-align:left;">${doseLabel(m)} &middot; ${m.duration || "—"} &middot; ${m.food}${m.instruction ? " &middot; " + m.instruction : ""}</span>
      </div>
    `).join("")}
    <div class="modal-actions"><button class="btn btn-outline" id="modalDoneBtn">Close</button></div>
  `;
  modalOverlay.classList.add("show");
  document.getElementById("modalCloseBtn").addEventListener("click", closeModal);
  document.getElementById("modalDoneBtn").addEventListener("click", closeModal);
}

function openEditModal(p){
  modalCard.className = "modal-card";
  modalCard.innerHTML = `
    <div class="modal-head">
      <div class="modal-title"><span class="modal-icon">${ICON.edit}</span>Edit Prescription</div>
      <button class="modal-close" id="modalCloseBtn">${ICON.x}</button>
    </div>
    <div class="form-field" style="margin-bottom:14px;">
      <label class="form-label" for="editRxDate">Date</label>
      <input class="form-input" type="date" id="editRxDate" value="${p.date}">
    </div>
    <div style="max-height:260px; overflow-y:auto; margin-bottom:14px;" id="editMedList">
      ${p.medicines.map((m, i) => `
        <div style="border:1px solid var(--border); border-radius:10px; padding:10px; margin-bottom:10px;" data-med="${i}">
          <input class="form-input" type="text" data-field="name" value="${m.name}" placeholder="Medicine name" style="margin-bottom:8px;">
          <input class="form-input" type="text" data-field="instruction" value="${m.instruction}" placeholder="Instruction">
        </div>
      `).join("")}
    </div>
    <div class="modal-actions">
      <button class="btn btn-outline" id="modalCancelBtn">Cancel</button>
      <button class="btn btn-primary" id="modalSaveBtn">Save Changes</button>
    </div>
  `;
  modalOverlay.classList.add("show");
  document.getElementById("modalCloseBtn").addEventListener("click", closeModal);
  document.getElementById("modalCancelBtn").addEventListener("click", closeModal);
  document.getElementById("modalSaveBtn").addEventListener("click", () => {
    p.date = document.getElementById("editRxDate").value;
    document.querySelectorAll("#editMedList [data-med]").forEach(block => {
      const i = Number(block.getAttribute("data-med"));
      block.querySelectorAll("[data-field]").forEach(inp => {
        p.medicines[i][inp.getAttribute("data-field")] = inp.value.trim();
      });
    });
    renderKPIs();
    renderRxHistory();
    closeModal();
    showToast("Prescription updated");
  });
}

function openDeleteModal(p){
  modalCard.className = "modal-card";
  modalCard.innerHTML = `
    <div class="modal-head">
      <div class="modal-title danger"><span class="modal-icon">${ICON.alertTriangle}</span>Delete Prescription?</div>
      <button class="modal-close" id="modalCloseBtn">${ICON.x}</button>
    </div>
    <p class="modal-text">This will permanently remove the prescription dated <strong>${formatDate(p.date)}</strong> for <strong>${selectedPatient ? selectedPatient.name : "this patient"}</strong>. This action cannot be undone.</p>
    <div class="modal-actions">
      <button class="btn btn-outline" id="modalCancelBtn">Cancel</button>
      <button class="btn btn-danger-outline" id="modalDeleteBtn">${ICON.trash} Delete</button>
    </div>
  `;
  modalOverlay.classList.add("show");
  document.getElementById("modalCloseBtn").addEventListener("click", closeModal);
  document.getElementById("modalCancelBtn").addEventListener("click", closeModal);
  document.getElementById("modalDeleteBtn").addEventListener("click", () => {
    prescriptions = prescriptions.filter(x => x.id !== p.id);
    renderKPIs();
    renderRxHistory();
    closeModal();
    showToast("Prescription deleted");
  });
}

/* =========================================================
   TOAST
========================================================= */
let toastTimer;
function showToast(message){
  const toast = document.getElementById("toast");
  document.getElementById("toastMsg").innerHTML = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
}

/* =========================================================
   INIT
========================================================= */
renderKPIs();
renderPatientSummary();
document.getElementById("rxSection").style.display = "none";