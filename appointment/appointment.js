// protectPage();

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
  logout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>`
};

/* =========================================================
   SIDEBAR — same structure/menu as the dashboard
========================================================= */
const sidebarItems = [
  { type: "link",  icon: ICON.home,        label: "Dashboard",         href: "../dashboard.html" },
  { type: "group", icon: ICON.users,       label: "Children",         key: "children", children: [
      { label: "All Children",   href: "../child registration/all-children/childp.html" },
      { label: "Register Child", href: "../child registration/registerchild/registerchild.html" }
    ]
  },
  { type: "link",  icon: ICON.calendar,    label: "Appointments",      href: "appointment.html" },
  { type: "link",  icon: ICON.stethoscope, label: "Consultations",     href: "../consultation/opd.html" },
  { type: "link",  icon: ICON.clipboard,   label: "Prescriptions",     href: "../prescription/prescription.html" },
  { type: "link",  icon: ICON.syringe,     label: "Vaccinations",      href: "../vaccination.html" },
  { type: "link",  icon: ICON.activity,    label: "Growth Monitoring", href: "../Growth/growth.html" },
  { type: "link",  icon: ICON.file,        label: "Reports",           href: "../reports.html" },
  { type: "link",  icon: ICON.receipt,     label: "Billing",           href: "../billing.html" },
  { type: "link",  icon: ICON.userPlus,    label: "User Management",   href: "../user.html" },
  { type: "action", icon: ICON.logout,      label: "Logout",            action: "logout" }
];

const currentPage2 = (location.pathname.split("/").pop() || "appointment.html").toLowerCase();

const sidebarNav = document.getElementById("sidebarNav");
sidebarNav.style.display = "contents";

sidebarItems.forEach(item => {
  if (item.type === "link") {
    const a = document.createElement("a");
    const isActive = item.href.toLowerCase() === currentPage2;
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
      if (item.action === "logout") performLogout();
    });
    sidebarNav.appendChild(btn);
    return;
  }
  const childActive = item.children.some(c => c.href.toLowerCase() === currentPage2);
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
    const isActive = c.href.toLowerCase() === currentPage2;
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
   SIDEBAR OPEN/CLOSE — open by default on load, toggle on
   the corner icon to open/close, backdrop closes it on mobile
========================================================= */
const sidebar = document.getElementById("sidebar");
const sidebarBackdrop = document.getElementById("sidebarBackdrop");

sidebar.classList.add("expanded");
sidebarBackdrop.classList.add("show");

document.getElementById("sidebarToggle").addEventListener("click", () => {
  sidebar.classList.toggle("expanded");
  sidebarBackdrop.classList.toggle("show");
});

sidebarBackdrop.addEventListener("click", () => {
  sidebar.classList.remove("expanded");
  sidebarBackdrop.classList.remove("show");
});

/* =========================================================
   LOGOUT — safe wrapper around the global logout() from
   auth.js, with a confirm step and a working fallback
========================================================= */
function performLogout(){
  const confirmed = window.confirm("Are you sure you want to logout?");
  if (!confirmed) return;

  try {
    if (typeof logout === "function") {
      logout();
    } else {
      sessionStorage.clear();
      localStorage.removeItem("authToken");
      localStorage.removeItem("token");
      window.location.href = "../login.html";
    }
  } catch (err) {
    console.error("Logout failed:", err);
    window.location.href = "../login.html";
  }
}

/* =========================================================
   HEADER META
========================================================= */
document.getElementById("headerMeta").innerHTML = `
  <span>${ICON.calendar} July 7, 2026 &middot; 10:15</span>
  <span>${ICON.user} Front Desk &mdash; Receptionist</span>
  <span>${ICON.activity} Sunshine Pediatric Clinic</span>
`;

/* =========================================================
   MOCK DATA
========================================================= */
const doctors = ["Dr. Ananya Sharma", "Dr. Rohan Mehta", "Dr. Kavita Nair"];

const patients = [
  { id: "PC-1042", name: "Aarav Kapoor",  age: "3 yrs",  parent: "Rohit Kapoor" },
  { id: "PC-1043", name: "Diya Sharma",   age: "1.5 yrs",parent: "Neha Sharma" },
  { id: "PC-1044", name: "Vihaan Patel",  age: "5 yrs",  parent: "Meera Patel" },
  { id: "PC-1045", name: "Ishaan Verma",  age: "7 mo",   parent: "Sanjay Verma" },
  { id: "PC-1046", name: "Anaya Iyer",    age: "4 yrs",  parent: "Priya Iyer" },
  { id: "PC-1047", name: "Reyansh Gupta", age: "2 yrs",  parent: "Amit Gupta" }
];

let appointments = [
  { id: 1, patient: patients[0], doctor: "Dr. Ananya Sharma", date: "2026-07-07", time: "10:30", reason: "Fever & cough",        priority: "Urgent",    status: "Upcoming" },
  { id: 2, patient: patients[1], doctor: "Dr. Rohan Mehta",   date: "2026-07-07", time: "11:00", reason: "Routine vaccination",  priority: "Routine",   status: "Upcoming" },
  { id: 3, patient: patients[2], doctor: "Dr. Kavita Nair",   date: "2026-07-06", time: "09:15", reason: "Growth check-up",      priority: "Routine",   status: "Completed" },
  { id: 4, patient: patients[3], doctor: "Dr. Ananya Sharma", date: "2026-07-06", time: "15:45", reason: "High fever",           priority: "Emergency", status: "Completed" },
  { id: 5, patient: patients[4], doctor: "Dr. Rohan Mehta",   date: "2026-07-05", time: "12:00", reason: "Skin allergy",         priority: "Urgent",    status: "Cancelled" },
  { id: 6, patient: patients[5], doctor: "Dr. Kavita Nair",   date: "2026-07-05", time: "16:30", reason: "Follow-up consult",    priority: "Routine",   status: "Missed" }
];
let nextId = appointments.length + 1;

/* =========================================================
   KPI CARDS
========================================================= */
function renderKPIs(){
  const today = "2026-07-07";
  const kpis = [
    { label: "Today's Appointments", value: appointments.filter(a => a.date === today).length, icon: ICON.calendar },
    { label: "Upcoming",             value: appointments.filter(a => a.status === "Upcoming").length, icon: ICON.activity },
    { label: "Completed",            value: appointments.filter(a => a.status === "Completed").length, icon: ICON.check },
    { label: "Cancelled / Missed",   value: appointments.filter(a => a.status === "Cancelled" || a.status === "Missed").length, icon: ICON.x }
  ];
  const row = document.getElementById("kpiRow");
  row.innerHTML = kpis.map(k => `
    <div class="card kpi-card">
      <div class="kpi-icon">${k.icon}</div>
      <div class="kpi-label">${k.label}</div>
      <div class="kpi-value">${k.value}</div>
    </div>
  `).join("");
}

/* =========================================================
   BOOKING FORM
========================================================= */
const patientSearch = document.getElementById("patientSearch");
const suggestList = document.getElementById("suggestList");
let selectedPatient = null;

const doctorSelect = document.getElementById("doctorSelect");
doctorSelect.innerHTML = `<option value="">Select doctor</option>` + doctors.map(d => `<option value="${d}">${d}</option>`).join("");

patientSearch.addEventListener("input", () => {
  const q = patientSearch.value.trim().toLowerCase();
  selectedPatient = null;
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
  selectedPatient = p;
  patientSearch.value = `${p.name} (${p.id})`;
  suggestList.classList.remove("show");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-wrap")) suggestList.classList.remove("show");
});

let selectedPriority = "Routine";
document.querySelectorAll(".priority-pill").forEach(pill => {
  pill.addEventListener("click", () => {
    document.querySelectorAll(".priority-pill").forEach(p => p.classList.remove("active"));
    pill.classList.add("active");
    selectedPriority = pill.getAttribute("data-p");
  });
});

const bookingForm = document.getElementById("bookingForm");
const formErrorEl = document.getElementById("formError");

function resetBookingForm(){
  bookingForm.reset();
  patientSearch.value = "";
  suggestList.classList.remove("show");
  suggestList.innerHTML = "";
  selectedPatient = null;
  formErrorEl.textContent = "";
  selectedPriority = "Routine";
  document.querySelectorAll(".priority-pill").forEach(p => p.classList.remove("active"));
  document.querySelector('.priority-pill[data-p="Routine"]').classList.add("active");
  document.getElementById("dateInput").value = "2026-07-07";
  document.getElementById("timeInput").value = "10:30";
}

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formErrorEl.textContent = "";

  const doctor = doctorSelect.value;
  const date = document.getElementById("dateInput").value;
  const time = document.getElementById("timeInput").value;
  const reason = document.getElementById("reasonInput").value.trim();
  const notes = document.getElementById("notesInput").value.trim();

  if (!selectedPatient){ formErrorEl.textContent = "Please search and select a registered child."; return; }
  if (!doctor){ formErrorEl.textContent = "Please select a doctor."; return; }
  if (!date || !time){ formErrorEl.textContent = "Please choose date and time."; return; }
  if (!reason){ formErrorEl.textContent = "Please enter a reason for visit."; return; }

  const bookedPatient = selectedPatient;

  appointments.unshift({
    id: nextId++,
    patient: selectedPatient,
    doctor, date, time, reason,
    priority: selectedPriority,
    status: "Upcoming",
    notes
  });

  currentPage = 1;
  renderKPIs();
  renderTable();
  showToast(`Appointment booked for ${bookedPatient.name} with ${doctor}`);

  // Fully clear the form so old details never linger after booking
  resetBookingForm();
});

document.getElementById("clearFormBtn").addEventListener("click", resetBookingForm);

/* =========================================================
   APPOINTMENT LIST — search + status tabs + advanced
   filters + pagination
========================================================= */
let activeStatus = "All";
let filterDoctor = "All";
let filterPriority = "All";
let filterDateFrom = "";
let filterDateTo = "";
let currentPage = 1;
let pageSize = 5;

const listSearchInput = document.getElementById("listSearch");
const statusTabs = document.querySelectorAll(".status-tab");
const filterDoctorSelect = document.getElementById("filterDoctor");
const filterPrioritySelect = document.getElementById("filterPriority");
const filterDateFromInput = document.getElementById("filterDateFrom");
const filterDateToInput = document.getElementById("filterDateTo");
const pageSizeSelect = document.getElementById("pageSizeSelect");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");

filterDoctorSelect.innerHTML = `<option value="All">All Doctors</option>` + doctors.map(d => `<option value="${d}">${d}</option>`).join("");

statusTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    statusTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    activeStatus = tab.getAttribute("data-status");
    currentPage = 1;
    renderTable();
  });
});

listSearchInput.addEventListener("input", () => {
  currentPage = 1;
  renderTable();
});

filterDoctorSelect.addEventListener("change", () => {
  filterDoctor = filterDoctorSelect.value;
  currentPage = 1;
  renderTable();
});

filterPrioritySelect.addEventListener("change", () => {
  filterPriority = filterPrioritySelect.value;
  currentPage = 1;
  renderTable();
});

filterDateFromInput.addEventListener("change", () => {
  filterDateFrom = filterDateFromInput.value;
  currentPage = 1;
  renderTable();
});

filterDateToInput.addEventListener("change", () => {
  filterDateTo = filterDateToInput.value;
  currentPage = 1;
  renderTable();
});

pageSizeSelect.addEventListener("change", () => {
  pageSize = Number(pageSizeSelect.value);
  currentPage = 1;
  renderTable();
});

resetFiltersBtn.addEventListener("click", () => {
  listSearchInput.value = "";
  activeStatus = "All";
  statusTabs.forEach(t => t.classList.remove("active"));
  document.querySelector('.status-tab[data-status="All"]').classList.add("active");

  filterDoctor = "All";
  filterPriority = "All";
  filterDateFrom = "";
  filterDateTo = "";
  filterDoctorSelect.value = "All";
  filterPrioritySelect.value = "All";
  filterDateFromInput.value = "";
  filterDateToInput.value = "";

  currentPage = 1;
  renderTable();
});

function initials(name){
  return name.split(" ").map(n => n[0]).slice(0,2).join("").toUpperCase();
}

function renderTable(){
  const q = listSearchInput.value.trim().toLowerCase();

  let rows = appointments.filter(a => {
    const statusMatch = activeStatus === "All" || a.status === activeStatus;
    const searchMatch = !q ||
      a.patient.name.toLowerCase().includes(q) ||
      a.doctor.toLowerCase().includes(q) ||
      a.patient.id.toLowerCase().includes(q);
    const doctorMatch = filterDoctor === "All" || a.doctor === filterDoctor;
    const priorityMatch = filterPriority === "All" || a.priority === filterPriority;
    const dateFromMatch = !filterDateFrom || a.date >= filterDateFrom;
    const dateToMatch = !filterDateTo || a.date <= filterDateTo;
    return statusMatch && searchMatch && doctorMatch && priorityMatch && dateFromMatch && dateToMatch;
  });

  rows = rows.slice().sort((a, b) => (a.date + a.time < b.date + b.time ? 1 : -1));

  const totalItems = rows.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  if (currentPage > totalPages) currentPage = totalPages;
  if (currentPage < 1) currentPage = 1;

  const startIdx = (currentPage - 1) * pageSize;
  const pageRows = rows.slice(startIdx, startIdx + pageSize);

  const tbody = document.getElementById("apptTableBody");

  if (!pageRows.length){
    tbody.innerHTML = `<tr class="empty-row"><td colspan="6">No appointments match this filter.</td></tr>`;
    renderPagination(0, 1);
    return;
  }

  tbody.innerHTML = pageRows.map(a => `
    <tr>
      <td>
        <div class="patient-cell">
          <div class="patient-avatar">${initials(a.patient.name)}</div>
          <div>
            <div class="patient-name">${a.patient.name}</div>
            <div class="patient-sub">${a.patient.id} &middot; ${a.patient.age}</div>
          </div>
        </div>
      </td>
      <td>${a.doctor}</td>
      <td>${formatDate(a.date)}</td>
      <td>${formatTime(a.time)}</td>
      <td><span class="status-badge ${a.status}"><span class="dot-sm2"></span>${a.status}</span></td>
      <td>
        <div class="row-actions">
          <button class="icon-btn" title="View" data-action="view" data-id="${a.id}">${ICON.eye}</button>
          <button class="icon-btn" title="Edit" data-action="edit" data-id="${a.id}">${ICON.edit}</button>
          <button class="icon-btn danger" title="Delete" data-action="delete" data-id="${a.id}">${ICON.trash}</button>
        </div>
      </td>
    </tr>
  `).join("");

  renderPagination(totalItems, totalPages);
}

function renderPagination(totalItems, totalPages){
  const wrap = document.getElementById("paginationWrap");
  if (!totalItems){
    wrap.innerHTML = `<div class="pagination-info">No appointments to show</div>`;
    return;
  }

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  const maxButtons = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
  let endPage = Math.min(totalPages, startPage + maxButtons - 1);
  startPage = Math.max(1, endPage - maxButtons + 1);

  let pageButtons = "";
  for (let p = startPage; p <= endPage; p++){
    pageButtons += `<button class="page-btn${p === currentPage ? " active" : ""}" data-page="${p}">${p}</button>`;
  }

  wrap.innerHTML = `
    <div class="pagination-info">Showing ${startItem}-${endItem} of ${totalItems} appointments</div>
    <div class="pagination-controls">
      <button class="page-btn" id="prevPageBtn" ${currentPage === 1 ? "disabled" : ""}>Prev</button>
      ${startPage > 1 ? `<button class="page-btn" data-page="1">1</button>${startPage > 2 ? '<span class="page-ellipsis">…</span>' : ""}` : ""}
      ${pageButtons}
      ${endPage < totalPages ? `${endPage < totalPages - 1 ? '<span class="page-ellipsis">…</span>' : ""}<button class="page-btn" data-page="${totalPages}">${totalPages}</button>` : ""}
      <button class="page-btn" id="nextPageBtn" ${currentPage === totalPages ? "disabled" : ""}>Next</button>
    </div>
  `;

  wrap.querySelectorAll(".page-btn[data-page]").forEach(btn => {
    btn.addEventListener("click", () => {
      currentPage = Number(btn.getAttribute("data-page"));
      renderTable();
    });
  });

  const prevBtn = document.getElementById("prevPageBtn");
  const nextBtn = document.getElementById("nextPageBtn");
  if (prevBtn) prevBtn.addEventListener("click", () => { if (currentPage > 1){ currentPage--; renderTable(); } });
  if (nextBtn) nextBtn.addEventListener("click", () => { if (currentPage < totalPages){ currentPage++; renderTable(); } });
}

function formatDate(iso){
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

function formatTime(t){
  const [h, m] = t.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const h12 = ((h + 11) % 12) + 1;
  return `${h12}:${String(m).padStart(2,"0")} ${period}`;
}

document.getElementById("apptTableBody").addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-action]");
  if (!btn) return;
  const id = Number(btn.getAttribute("data-id"));
  const action = btn.getAttribute("data-action");
  const appt = appointments.find(a => a.id === id);
  if (!appt) return;

  if (action === "view") openViewModal(appt);
  else if (action === "edit") openEditModal(appt);
  else if (action === "delete") openDeleteModal(appt);
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

function openViewModal(appt){
  modalCard.innerHTML = `
    <div class="modal-head">
      <div class="modal-title">
        <span class="modal-icon">${ICON.eye}</span>
        Appointment Details
      </div>
      <button class="modal-close" id="modalCloseBtn">${ICON.x}</button>
    </div>
    <div class="detail-row"><span class="detail-label">Patient</span><span class="detail-value">${appt.patient.name} (${appt.patient.id})</span></div>
    <div class="detail-row"><span class="detail-label">Age</span><span class="detail-value">${appt.patient.age}</span></div>
    <div class="detail-row"><span class="detail-label">Parent</span><span class="detail-value">${appt.patient.parent}</span></div>
    <div class="detail-row"><span class="detail-label">Doctor</span><span class="detail-value">${appt.doctor}</span></div>
    <div class="detail-row"><span class="detail-label">Date</span><span class="detail-value">${formatDate(appt.date)}</span></div>
    <div class="detail-row"><span class="detail-label">Time</span><span class="detail-value">${formatTime(appt.time)}</span></div>
    <div class="detail-row"><span class="detail-label">Reason</span><span class="detail-value">${appt.reason}</span></div>
    <div class="detail-row"><span class="detail-label">Priority</span><span class="detail-value">${appt.priority}</span></div>
    <div class="detail-row"><span class="detail-label">Status</span><span class="detail-value"><span class="status-badge ${appt.status}"><span class="dot-sm2"></span>${appt.status}</span></span></div>
    ${appt.notes ? `<div class="detail-row"><span class="detail-label">Notes</span><span class="detail-value">${appt.notes}</span></div>` : ""}
    <div class="modal-actions">
      <button class="btn btn-outline" id="modalDoneBtn">Close</button>
    </div>
  `;
  modalOverlay.classList.add("show");
  document.getElementById("modalCloseBtn").addEventListener("click", closeModal);
  document.getElementById("modalDoneBtn").addEventListener("click", closeModal);
}

function openEditModal(appt){
  modalCard.innerHTML = `
    <div class="modal-head">
      <div class="modal-title">
        <span class="modal-icon">${ICON.edit}</span>
        Edit Appointment
      </div>
      <button class="modal-close" id="modalCloseBtn">${ICON.x}</button>
    </div>
    <div class="form-field" style="margin-bottom:14px;">
      <label class="form-label">Patient</label>
      <input class="form-input" type="text" value="${appt.patient.name} (${appt.patient.id})" disabled>
    </div>
    <div class="form-field" style="margin-bottom:14px;">
      <label class="form-label" for="editDoctor">Doctor</label>
      <select class="form-select" id="editDoctor">
        ${doctors.map(d => `<option value="${d}" ${d === appt.doctor ? "selected" : ""}>${d}</option>`).join("")}
      </select>
    </div>
    <div class="form-field" style="margin-bottom:14px;">
      <label class="form-label" for="editDate">Date</label>
      <input class="form-input" type="date" id="editDate" value="${appt.date}">
    </div>
    <div class="form-field" style="margin-bottom:14px;">
      <label class="form-label" for="editTime">Time</label>
      <input class="form-input" type="time" id="editTime" value="${appt.time}">
    </div>
    <div class="form-field" style="margin-bottom:14px;">
      <label class="form-label" for="editReason">Reason</label>
      <input class="form-input" type="text" id="editReason" value="${appt.reason}">
    </div>
    <div class="form-field" style="margin-bottom:14px;">
      <label class="form-label" for="editStatus">Status</label>
      <select class="form-select" id="editStatus">
        ${["Upcoming","Completed","Cancelled","Missed"].map(s => `<option value="${s}" ${s === appt.status ? "selected" : ""}>${s}</option>`).join("")}
      </select>
    </div>
    <div class="form-field" style="margin-bottom:4px;">
      <label class="form-label">Priority</label>
      <div class="priority-group" id="editPriorityGroup">
        ${["Routine","Urgent","Emergency"].map(p => `<button type="button" class="priority-pill${p === appt.priority ? " active" : ""}" data-p="${p}">${p}</button>`).join("")}
      </div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-outline" id="modalCancelBtn">Cancel</button>
      <button class="btn btn-primary" id="modalSaveBtn">Save Changes</button>
    </div>
  `;
  modalOverlay.classList.add("show");

  let editPriority = appt.priority;
  modalCard.querySelectorAll("#editPriorityGroup .priority-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      modalCard.querySelectorAll("#editPriorityGroup .priority-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      editPriority = pill.getAttribute("data-p");
    });
  });

  document.getElementById("modalCloseBtn").addEventListener("click", closeModal);
  document.getElementById("modalCancelBtn").addEventListener("click", closeModal);
  document.getElementById("modalSaveBtn").addEventListener("click", () => {
    appt.doctor = document.getElementById("editDoctor").value;
    appt.date = document.getElementById("editDate").value;
    appt.time = document.getElementById("editTime").value;
    appt.reason = document.getElementById("editReason").value.trim() || appt.reason;
    appt.status = document.getElementById("editStatus").value;
    appt.priority = editPriority;
    renderKPIs();
    renderTable();
    closeModal();
    showToast(`Appointment for ${appt.patient.name} updated`);
  });
}

function openDeleteModal(appt){
  modalCard.innerHTML = `
    <div class="modal-head">
      <div class="modal-title danger">
        <span class="modal-icon">${ICON.alertTriangle}</span>
        Delete Appointment?
      </div>
      <button class="modal-close" id="modalCloseBtn">${ICON.x}</button>
    </div>
    <p class="modal-text">This will permanently remove the appointment for <strong>${appt.patient.name}</strong> with <strong>${appt.doctor}</strong> on <strong>${formatDate(appt.date)}</strong>. This action cannot be undone.</p>
    <div class="modal-actions">
      <button class="btn btn-outline" id="modalCancelBtn">Cancel</button>
      <button class="btn btn-danger-outline" id="modalDeleteBtn">${ICON.trash} Delete</button>
    </div>
  `;
  modalOverlay.classList.add("show");
  document.getElementById("modalCloseBtn").addEventListener("click", closeModal);
  document.getElementById("modalCancelBtn").addEventListener("click", closeModal);
  document.getElementById("modalDeleteBtn").addEventListener("click", () => {
    appointments = appointments.filter(a => a.id !== appt.id);
    currentPage = 1;
    renderKPIs();
    renderTable();
    closeModal();
    showToast(`Appointment for ${appt.patient.name} deleted`);
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
document.getElementById("dateInput").min = "2026-07-07";
pageSizeSelect.value = String(pageSize);
renderKPIs();
renderTable();