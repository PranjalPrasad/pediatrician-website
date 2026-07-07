/* =========================================================
   ICON LIBRARY (same hand-drawn stroke set as the dashboard)
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
  logout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>`
};

/* =========================================================
   SIDEBAR — same structure/menu as the dashboard
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

const currentPage = (location.pathname.split("/").pop() || "opd.html").toLowerCase();

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
  { id: "PC-1042", name: "Aarav Kapoor",  age: "3 yrs",   parent: "Rohit Kapoor",  phone: "+91 98765 43210", blood: "B+",  weight: "14.2 kg", height: "94 cm",  lastVisit: "2026-06-28", allergies: ["Penicillin"] },
  { id: "PC-1043", name: "Diya Sharma",   age: "1.5 yrs", parent: "Neha Sharma",   phone: "+91 91234 56780", blood: "O+",  weight: "10.5 kg", height: "78 cm",  lastVisit: "2026-06-30", allergies: [] },
  { id: "PC-1044", name: "Vihaan Patel",  age: "5 yrs",   parent: "Meera Patel",   phone: "+91 99887 76655", blood: "A+",  weight: "17.8 kg", height: "108 cm", lastVisit: "2026-07-01", allergies: ["Peanuts", "Dust"] },
  { id: "PC-1045", name: "Ishaan Verma",  age: "7 mo",    parent: "Sanjay Verma",  phone: "+91 90000 11223", blood: "AB+", weight: "8.1 kg",  height: "68 cm",  lastVisit: "2026-06-20", allergies: [] },
  { id: "PC-1046", name: "Anaya Iyer",    age: "4 yrs",   parent: "Priya Iyer",    phone: "+91 98123 45678", blood: "B-",  weight: "15.6 kg", height: "101 cm", lastVisit: "2026-06-25", allergies: ["Lactose"] },
  { id: "PC-1047", name: "Reyansh Gupta", age: "2 yrs",   parent: "Amit Gupta",    phone: "+91 97654 32109", blood: "O-",  weight: "12.3 kg", height: "86 cm",  lastVisit: "2026-07-03", allergies: [] }
];

const commonSymptoms = ["Fever", "Cough", "Cold", "Vomiting", "Diarrhea", "Rash", "Ear Pain", "Loss of Appetite"];

let consultations = [
  { id: 1, patientId: "PC-1042", date: "2026-06-28", complaint: "Fever & cough since 2 days", symptoms: ["Fever","Cough"], diagnosis: "Viral upper respiratory infection", notes: "Advise fluids and rest. Review in 3 days if fever persists.", followUp: "2026-07-01" },
  { id: 2, patientId: "PC-1044", date: "2026-07-01", complaint: "Skin rash on arms", symptoms: ["Rash"], diagnosis: "Contact dermatitis, likely allergic", notes: "Avoid known allergens. Prescribed antihistamine.", followUp: "2026-07-08" },
  { id: 3, patientId: "PC-1047", date: "2026-07-03", complaint: "Loose motions since morning", symptoms: ["Diarrhea","Loss of Appetite"], diagnosis: "Mild gastroenteritis", notes: "ORS advised, monitor hydration.", followUp: "2026-07-06" }
];
let nextConsultId = consultations.length + 1;

let selectedPatient = null;
let currentSymptoms = [];

/* =========================================================
   KPI CARDS
========================================================= */
function renderKPIs(){
  const today = "2026-07-07";
  const kpis = [
    { label: "Today's Consultations", value: consultations.filter(c => c.date === today).length, icon: ICON.stethoscope },
    { label: "Follow-ups Due",        value: consultations.filter(c => c.followUp && c.followUp <= today).length, icon: ICON.calendar },
    { label: "Total Consultations",   value: consultations.length, icon: ICON.clipboard },
    { label: "Patients Seen",         value: new Set(consultations.map(c => c.patientId)).size, icon: ICON.users }
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
  renderHistory();
  document.getElementById("consultationSection").style.display = "block";
}

function renderPatientSummary(){
  const box = document.getElementById("patientSummaryBox");
  if (!selectedPatient){
    box.innerHTML = `
      <div class="summary-empty">
        <div class="summary-empty-icon">${ICON.search}</div>
        <p>Search and select a registered child above to view their summary and start a consultation.</p>
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
          <div class="summary-stat"><div class="summary-stat-label">Last Visit</div><div class="summary-stat-value">${formatDate(p.lastVisit)}</div></div>
          <div class="summary-stat"><div class="summary-stat-label">Weight</div><div class="summary-stat-value">${p.weight}</div></div>
          <div class="summary-stat"><div class="summary-stat-label">Height</div><div class="summary-stat-value">${p.height}</div></div>
        </div>
        <div style="margin-top:10px;">
          <span class="detail-label" style="font-size:11px; color:var(--muted);">Allergies:</span><br>
          ${p.allergies.length ? p.allergies.map(a => `<span class="allergy-pill">${ICON.alertTriangle}${a}</span>`).join("") : `<span style="font-size:12px; color:var(--muted);">None recorded</span>`}
        </div>
      </div>
    </div>
  `;
}

/* =========================================================
   SYMPTOM TAG INPUT
========================================================= */
const tagInputWrap = document.getElementById("tagInputWrap");
const tagInput = document.getElementById("tagInput");

function renderSymptomTags(){
  tagInputWrap.querySelectorAll(".symptom-tag").forEach(t => t.remove());
  currentSymptoms.forEach(s => {
    const tag = document.createElement("span");
    tag.className = "symptom-tag";
    tag.innerHTML = `${s}<button type="button" data-s="${s}">${ICON.x}</button>`;
    tagInputWrap.insertBefore(tag, tagInput);
  });
}

function addSymptom(value){
  const v = value.trim();
  if (!v || currentSymptoms.includes(v)) return;
  currentSymptoms.push(v);
  renderSymptomTags();
}

tagInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === ","){
    e.preventDefault();
    addSymptom(tagInput.value);
    tagInput.value = "";
  } else if (e.key === "Backspace" && !tagInput.value && currentSymptoms.length){
    currentSymptoms.pop();
    renderSymptomTags();
  }
});

tagInputWrap.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-s]");
  if (btn){
    currentSymptoms = currentSymptoms.filter(s => s !== btn.getAttribute("data-s"));
    renderSymptomTags();
  } else {
    tagInput.focus();
  }
});

document.getElementById("symptomSuggest").innerHTML = commonSymptoms.map(s => `<button type="button" class="symptom-chip" data-s="${s}">+ ${s}</button>`).join("");
document.getElementById("symptomSuggest").addEventListener("click", (e) => {
  const chip = e.target.closest(".symptom-chip");
  if (chip) addSymptom(chip.getAttribute("data-s"));
});

/* =========================================================
   CONSULTATION FORM
========================================================= */
const consultForm = document.getElementById("consultForm");
const consultError = document.getElementById("consultError");

function resetConsultForm(){
  consultForm.reset();
  currentSymptoms = [];
  renderSymptomTags();
  consultError.textContent = "";
  document.getElementById("visitDateInput").value = "2026-07-07";
  document.getElementById("followUpInput").value = "";
}

consultForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSave(false);
});

document.getElementById("generatePrescriptionBtn").addEventListener("click", () => {
  handleSave(true);
});

function handleSave(goToPrescription){
  consultError.textContent = "";
  if (!selectedPatient){ consultError.textContent = "Please select a patient first."; return; }

  const complaint = document.getElementById("complaintInput").value.trim();
  const diagnosis = document.getElementById("diagnosisInput").value.trim();
  const notes = document.getElementById("notesInput").value.trim();
  const date = document.getElementById("visitDateInput").value;
  const followUp = document.getElementById("followUpInput").value;

  if (!complaint){ consultError.textContent = "Please enter the chief complaint."; return; }
  if (!diagnosis){ consultError.textContent = "Please enter a diagnosis."; return; }

  consultations.unshift({
    id: nextConsultId++,
    patientId: selectedPatient.id,
    date, complaint,
    symptoms: [...currentSymptoms],
    diagnosis, notes, followUp
  });

  renderKPIs();
  renderHistory();
  showToast(goToPrescription
    ? `Consultation saved. Opening Prescription module for ${selectedPatient.name}...`
    : `Consultation saved for ${selectedPatient.name}`);
  resetConsultForm();

  if (goToPrescription){
    setTimeout(() => { window.location.href = "prescription.html"; }, 900);
  }
}

document.getElementById("clearConsultBtn").addEventListener("click", resetConsultForm);

/* =========================================================
   CONSULTATION HISTORY (TIMELINE)
========================================================= */
function renderHistory(){
  const wrap = document.getElementById("historyTimeline");
  if (!selectedPatient){ wrap.innerHTML = ""; return; }

  const items = consultations
    .filter(c => c.patientId === selectedPatient.id)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  if (!items.length){
    wrap.innerHTML = `<div class="empty-note">No previous consultations for this child yet.</div>`;
    return;
  }

  wrap.innerHTML = items.map((c, i) => `
    <div class="timeline-item">
      <div class="timeline-dot-wrap">
        <div class="timeline-dot"></div>
        ${i < items.length - 1 ? `<div class="timeline-line"></div>` : ""}
      </div>
      <div class="timeline-content">
        <div class="timeline-date">${formatDate(c.date)}${c.followUp ? ` &middot; Follow-up: ${formatDate(c.followUp)}` : ""}</div>
        <div class="timeline-complaint">${c.complaint}</div>
        <div class="timeline-detail"><strong>Symptoms:</strong> ${c.symptoms.length ? c.symptoms.join(", ") : "—"}</div>
        <div class="timeline-detail"><strong>Diagnosis:</strong> ${c.diagnosis}</div>
        ${c.notes ? `<div class="timeline-detail"><strong>Notes:</strong> ${c.notes}</div>` : ""}
        <div class="timeline-actions">
          <button class="icon-btn" title="View" data-action="view" data-id="${c.id}">${ICON.eye}</button>
          <button class="icon-btn" title="Edit" data-action="edit" data-id="${c.id}">${ICON.edit}</button>
          <button class="icon-btn danger" title="Delete" data-action="delete" data-id="${c.id}">${ICON.trash}</button>
        </div>
      </div>
    </div>
  `).join("");
}

document.getElementById("historyTimeline").addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-action]");
  if (!btn) return;
  const id = Number(btn.getAttribute("data-id"));
  const action = btn.getAttribute("data-action");
  const c = consultations.find(x => x.id === id);
  if (!c) return;

  if (action === "view") openViewModal(c);
  else if (action === "edit") openEditModal(c);
  else if (action === "delete") openDeleteModal(c);
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

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

function openViewModal(c){
  modalCard.innerHTML = `
    <div class="modal-head">
      <div class="modal-title">
        <span class="modal-icon">${ICON.eye}</span>
        Consultation Details
      </div>
      <button class="modal-close" id="modalCloseBtn">${ICON.x}</button>
    </div>
    <div class="detail-row"><span class="detail-label">Visit Date</span><span class="detail-value">${formatDate(c.date)}</span></div>
    <div class="detail-row"><span class="detail-label">Chief Complaint</span><span class="detail-value">${c.complaint}</span></div>
    <div class="detail-row"><span class="detail-label">Symptoms</span><span class="detail-value">${c.symptoms.length ? c.symptoms.join(", ") : "—"}</span></div>
    <div class="detail-row"><span class="detail-label">Diagnosis</span><span class="detail-value">${c.diagnosis}</span></div>
    ${c.notes ? `<div class="detail-row"><span class="detail-label">Doctor Notes</span><span class="detail-value">${c.notes}</span></div>` : ""}
    <div class="detail-row"><span class="detail-label">Follow Up</span><span class="detail-value">${c.followUp ? formatDate(c.followUp) : "—"}</span></div>
    <div class="modal-actions">
      <button class="btn btn-outline" id="modalDoneBtn">Close</button>
    </div>
  `;
  modalOverlay.classList.add("show");
  document.getElementById("modalCloseBtn").addEventListener("click", closeModal);
  document.getElementById("modalDoneBtn").addEventListener("click", closeModal);
}

function openEditModal(c){
  modalCard.innerHTML = `
    <div class="modal-head">
      <div class="modal-title">
        <span class="modal-icon">${ICON.edit}</span>
        Edit Consultation
      </div>
      <button class="modal-close" id="modalCloseBtn">${ICON.x}</button>
    </div>
    <div class="form-field" style="margin-bottom:14px;">
      <label class="form-label" for="editDate">Visit Date</label>
      <input class="form-input" type="date" id="editDate" value="${c.date}">
    </div>
    <div class="form-field" style="margin-bottom:14px;">
      <label class="form-label" for="editComplaint">Chief Complaint</label>
      <input class="form-input" type="text" id="editComplaint" value="${c.complaint}">
    </div>
    <div class="form-field" style="margin-bottom:14px;">
      <label class="form-label" for="editSymptoms">Symptoms (comma separated)</label>
      <input class="form-input" type="text" id="editSymptoms" value="${c.symptoms.join(", ")}">
    </div>
    <div class="form-field" style="margin-bottom:14px;">
      <label class="form-label" for="editDiagnosis">Diagnosis</label>
      <textarea class="form-textarea" id="editDiagnosis">${c.diagnosis}</textarea>
    </div>
    <div class="form-field" style="margin-bottom:14px;">
      <label class="form-label" for="editNotes">Doctor Notes</label>
      <textarea class="form-textarea" id="editNotes">${c.notes || ""}</textarea>
    </div>
    <div class="form-field" style="margin-bottom:4px;">
      <label class="form-label" for="editFollowUp">Follow Up Date</label>
      <input class="form-input" type="date" id="editFollowUp" value="${c.followUp || ""}">
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
    c.date = document.getElementById("editDate").value;
    c.complaint = document.getElementById("editComplaint").value.trim() || c.complaint;
    c.symptoms = document.getElementById("editSymptoms").value.split(",").map(s => s.trim()).filter(Boolean);
    c.diagnosis = document.getElementById("editDiagnosis").value.trim() || c.diagnosis;
    c.notes = document.getElementById("editNotes").value.trim();
    c.followUp = document.getElementById("editFollowUp").value;
    renderKPIs();
    renderHistory();
    closeModal();
    showToast("Consultation updated");
  });
}

function openDeleteModal(c){
  modalCard.innerHTML = `
    <div class="modal-head">
      <div class="modal-title danger">
        <span class="modal-icon">${ICON.alertTriangle}</span>
        Delete Consultation?
      </div>
      <button class="modal-close" id="modalCloseBtn">${ICON.x}</button>
    </div>
    <p class="modal-text">This will permanently remove the consultation from <strong>${formatDate(c.date)}</strong> for <strong>${selectedPatient ? selectedPatient.name : "this patient"}</strong>. This action cannot be undone.</p>
    <div class="modal-actions">
      <button class="btn btn-outline" id="modalCancelBtn">Cancel</button>
      <button class="btn btn-danger-outline" id="modalDeleteBtn">${ICON.trash} Delete</button>
    </div>
  `;
  modalOverlay.classList.add("show");
  document.getElementById("modalCloseBtn").addEventListener("click", closeModal);
  document.getElementById("modalCancelBtn").addEventListener("click", closeModal);
  document.getElementById("modalDeleteBtn").addEventListener("click", () => {
    consultations = consultations.filter(x => x.id !== c.id);
    renderKPIs();
    renderHistory();
    closeModal();
    showToast("Consultation deleted");
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
document.getElementById("consultationSection").style.display = "none";