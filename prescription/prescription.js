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
  logout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>`
};

/* =========================================================
   SIDEBAR
========================================================= */
const sidebarItems = [
  { type: "link",  icon: ICON.home,        label: "Dashboard",         href: "index.html" },
  { type: "group", icon: ICON.users,       label: "Children",         key: "children", children: [
      { label: "All Children",   href: "patients.html" },
      { label: "Register Child", href: "registration.html" }
    ]
  },
  { type: "link",  icon: ICON.calendar,    label: "Appointments",      href: "appointments.html" },
  { type: "link",  icon: ICON.stethoscope, label: "Consultations",     href: "opd.html" },
  { type: "link",  icon: ICON.clipboard,   label: "Prescriptions",     href: "prescription.html" },
  { type: "link",  icon: ICON.syringe,     label: "Vaccinations",      href: "vaccination.html" },
  { type: "link",  icon: ICON.activity,    label: "Growth Monitoring", href: "growth.html" },
  { type: "link",  icon: ICON.file,        label: "Reports",           href: "reports.html" },
  { type: "link",  icon: ICON.receipt,     label: "Billing",           href: "billing.html" },
  { type: "link",  icon: ICON.userPlus,    label: "User Management",   href: "user.html" },
  { type: "link",  icon: ICON.settings,    label: "Settings",          href: "settings.html" },
  { type: "action", icon: ICON.logout,      label: "Logout",            action: "logout" }
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
    btn.addEventListener("click", () => { if (item.action === "logout") window.location.href = "login.html"; });
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
    ]
  },
  {
    id: 2, patientId: "PC-1044", date: "2026-07-01",
    medicines: [
      { name: "Cetirizine Drops", m: true, a: false, n: false, duration: "7 days", food: "After Food", instruction: "10 drops once daily" }
    ]
  }
];
let nextRxId = prescriptions.length + 1;

let selectedPatient = null;
let currentMeds = [];
let nextRowId = 1;

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

function selectPatient(p){
  selectedPatient = p;
  patientSearch.value = `${p.name} (${p.id})`;
  renderPatientSummary();
  document.getElementById("rxSection").style.display = "block";
  currentMeds = [];
  addMedicineRow();
  renderRxTable();
  renderRxHistory();
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

/* =========================================================
   SAVE / PRINT
========================================================= */
const rxError = document.getElementById("rxError");

function getValidMeds(){
  return currentMeds.filter(r => r.name.trim());
}

document.getElementById("saveRxBtn").addEventListener("click", () => {
  rxError.textContent = "";
  if (!selectedPatient){ rxError.textContent = "Please select a patient first."; return; }
  const meds = getValidMeds();
  if (!meds.length){ rxError.textContent = "Please add at least one medicine with a name."; return; }

  prescriptions.unshift({
    id: nextRxId++,
    patientId: selectedPatient.id,
    date: "2026-07-07",
    medicines: meds.map(m => ({ ...m }))
  });

  renderKPIs();
  renderRxHistory();
  showToast(`Prescription saved for ${selectedPatient.name}`);
  currentMeds = [];
  addMedicineRow();
});

document.getElementById("printRxBtn").addEventListener("click", () => {
  rxError.textContent = "";
  if (!selectedPatient){ rxError.textContent = "Please select a patient first."; return; }
  const meds = getValidMeds();
  if (!meds.length){ rxError.textContent = "Please add at least one medicine before printing."; return; }
  buildPrintArea(selectedPatient, "2026-07-07", meds);
  window.print();
});

function doseLabel(m){
  const parts = [];
  if (m.m) parts.push("Morning");
  if (m.a) parts.push("Afternoon");
  if (m.n) parts.push("Night");
  return parts.length ? parts.join(" · ") : "As directed";
}

function buildPrintArea(patient, date, meds){
  const area = document.getElementById("printArea");
  area.innerHTML = `
    <div class="rx-print-sheet">
      <div class="rx-print-head">
        <div>
          <div class="rx-clinic-name">Sunshine Pediatric Clinic</div>
          <div class="rx-clinic-sub">123 MG Road, Pune, Maharashtra &middot; +91 98220 00000</div>
        </div>
        <div>
          <div class="rx-doc-name">Dr. Ananya Sharma</div>
          <div class="rx-doc-sub">MBBS, MD (Pediatrics) &middot; Reg. No. MH-24681</div>
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
      <div class="rx-print-footer">Generated via Pediatric Clinic Management System &middot; Please follow the dosage as prescribed.</div>
    </div>
  `;
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
   MODAL OVERLAY — View / Edit / Delete
========================================================= */
const modalOverlay = document.getElementById("modalOverlay");
const modalCard = document.getElementById("modalCard");

function closeModal(){
  modalOverlay.classList.remove("show");
  modalCard.innerHTML = "";
}
modalOverlay.addEventListener("click", (e) => { if (e.target === modalOverlay) closeModal(); });

function openViewModal(p){
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