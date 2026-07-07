/* =========================================================
   ICON LIBRARY (same style as dashboard — minimal stroke icons)
========================================================= */
const ICON = {
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6"/><circle cx="17" cy="9" r="2.6"/><path d="M15 20c0-2.4 1-4.2 2.7-5.2"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18"/><path d="M8 3v4M16 3v4"/></svg>`,
  syringe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2l4 4-3 3-2-2"/><path d="M17 7l-9.5 9.5"/><path d="M4 20l2.5-2.5"/><path d="M9 12l3 3M11 10l3 3"/></svg>`,
  activity: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l2 7 4-14 2 7h6"/></svg>`,
  clipboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="4" width="14" height="17" rx="2"/><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h6"/></svg>`,
  file: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h9l5 5v15H6z"/><path d="M15 2v5h5"/></svg>`,
  receipt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 2h14v20l-3-2-2 2-2-2-2 2-2-2-3 2z"/><path d="M8 8h8M8 12h8"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 13.5a7.7 7.7 0 000-3l2-1.5-2-3.4-2.3.9a7.5 7.5 0 00-2.6-1.5L14 2h-4l-.5 2.5a7.5 7.5 0 00-2.6 1.5l-2.3-.9-2 3.4 2 1.5a7.7 7.7 0 000 3l-2 1.6 2 3.4 2.3-1a7.5 7.5 0 002.6 1.5L10 22h4l.5-2.5a7.5 7.5 0 002.6-1.5l2.3 1 2-3.4z"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.5-7 8-7s8 3 8 7"/></svg>`,
  userPlus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21c0-4 3-7 7-7s7 3 7 7"/><path d="M18 8v6M15 11h6"/></svg>`,
  stethoscope: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3v6a4 4 0 008 0V3"/><path d="M12 13v3a5 5 0 0010 0"/><circle cx="20" cy="6" r="2"/></svg>`,
  filter: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16l-6 8v6l-4 2v-8z"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`,
  logout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>`,
  edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/></svg>`,
  key: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="15" r="4"/><path d="M10.5 12.5L20 3M17 6l3 3M14 9l2.5 2.5"/></svg>`
};

/* =========================================================
   SIDEBAR NAV (same structure/order as dashboard reference)
========================================================= */
const sidebarItems = [
  { type: "link", icon: ICON.home, label: "Dashboard", href: "../dashboard.html" },
  { type: "group", icon: ICON.users, label: "Children", key: "children", children: [
      { label: "All Children", href: "../child registration/all-children/childp.html" },
      { label: "Register Child", href: "../child registration/registerchild/registerchild.html" }
    ]
  },
  { type: "link", icon: ICON.calendar, label: "Appointments", href: "../appointment/appointment.html" },
  { type: "link", icon: ICON.stethoscope, label: "Consultations", href: "../consultation/opd.html" },
  { type: "link", icon: ICON.clipboard, label: "Prescriptions", href: "../prescription/prescription.html" },
  { type: "link", icon: ICON.syringe, label: "Vaccinations", href: "../vaccination.html" },
  { type: "link", icon: ICON.activity, label: "Growth Monitoring", href: "../Growth/growth.html" },
  { type: "link", icon: ICON.file, label: "Reports", href: "../reports.html" },
  { type: "link", icon: ICON.receipt, label: "Billing", href: "../billing.html" },
  { type: "link", icon: ICON.userPlus, label: "User Management", href: "user.html" },
  { type: "action", icon: ICON.logout, label: "Logout", action: "logout" }
];

const currentPage = (location.pathname.split("/").pop() || "user.html").toLowerCase();

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
      if (item.action === "logout") openOverlay(logoutOverlay);
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
  parent.innerHTML = item.icon + `<span class="nav-label">${item.label}</span>` + `<span class="nav-chevron">${ICON.chevron}</span>`;
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
document.getElementById("sidebarToggle").addEventListener("click", () => {
  sidebar.classList.toggle("expanded");
});

/* =========================================================
   HEADER META
========================================================= */
document.getElementById("headerMeta").innerHTML = `
  <span>${ICON.calendar} July 7, 2026 &middot; 10:15</span>
  <span>${ICON.user} Dr. Ananya Sharma (Admin)</span>
  <span>${ICON.activity} Sunshine Pediatric Clinic</span>
`;

/* =========================================================
   MOCK DATA — staff / users
========================================================= */
let users = [
  { id: 1, name: "Dr. Ananya Sharma", role: "Admin",         phone: "98765 43210", email: "ananya.sharma@clinic.com", status: "Active",   photo: "" },
  { id: 2, name: "Dr. Rohan Mehta",   role: "Doctor",        phone: "91234 56780", email: "rohan.mehta@clinic.com",   status: "Active",   photo: "" },
  { id: 3, name: "Dr. Kavita Nair",   role: "Doctor",        phone: "99887 66554", email: "kavita.nair@clinic.com",   status: "Active",   photo: "" },
  { id: 4, name: "Priya Deshmukh",    role: "Receptionist",  phone: "90909 12345", email: "priya.d@clinic.com",       status: "Active",   photo: "" },
  { id: 5, name: "Sameer Kulkarni",   role: "Receptionist",  phone: "88990 11223", email: "sameer.k@clinic.com",      status: "Inactive", photo: "" },
  { id: 6, name: "Dr. Neha Kapoor",   role: "Doctor",        phone: "97654 32109", email: "neha.kapoor@clinic.com",   status: "Inactive", photo: "" }
];

let nextId = users.length + 1;

const roleOptions = ["Admin", "Doctor", "Receptionist"];
const statusOptions = ["Active", "Inactive"];

/* current table filter state */
const filterState = { role: "All Roles", status: "All Status", search: "" };

/* =========================================================
   KPI CARDS
========================================================= */
function renderKPIs(){
  const total = users.length;
  const admins = users.filter(u => u.role === "Admin").length;
  const doctors = users.filter(u => u.role === "Doctor").length;
  const receptionists = users.filter(u => u.role === "Receptionist").length;

  const cards = [
    { label: "Total Staff",     value: total,         icon: ICON.users },
    { label: "Admins",          value: admins,        icon: ICON.settings },
    { label: "Doctors",         value: doctors,       icon: ICON.stethoscope },
    { label: "Receptionists",   value: receptionists, icon: ICON.userPlus }
  ];

  const kpiRow = document.getElementById("kpiRow");
  kpiRow.innerHTML = "";
  cards.forEach(c => {
    const div = document.createElement("div");
    div.className = "card kpi-card";
    div.innerHTML = `
      <div class="kpi-icon">${c.icon}</div>
      <div class="kpi-label">${c.label}</div>
      <div class="kpi-value">${c.value}</div>
    `;
    kpiRow.appendChild(div);
  });
}

/* =========================================================
   HELPERS
========================================================= */
function initials(name){
  return name.replace(/^Dr\.\s*/i, "").split(" ").filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join("");
}

function roleClass(role){
  return "role-" + role.toLowerCase();
}

function statusClass(status){
  return "status-" + status.toLowerCase();
}

function showToast(message){
  const toast = document.getElementById("toast");
  toast.innerHTML = `<span class="dot"></span>${message}`;
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("show"), 2600);
}

/* =========================================================
   TABLE RENDERING
========================================================= */
function getFilteredUsers(){
  return users.filter(u => {
    const roleMatch = filterState.role === "All Roles" || u.role === filterState.role;
    const statusMatch = filterState.status === "All Status" || u.status === filterState.status;
    const q = filterState.search.trim().toLowerCase();
    const searchMatch = !q || u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || u.phone.toLowerCase().includes(q);
    return roleMatch && statusMatch && searchMatch;
  });
}

function renderTable(){
  const tbody = document.getElementById("userTableBody");
  const emptyState = document.getElementById("emptyState");
  const resultCount = document.getElementById("resultCount");
  const filtered = getFilteredUsers();

  tbody.innerHTML = "";

  if (!filtered.length){
    emptyState.style.display = "block";
    resultCount.textContent = "0 users found";
    return;
  }

  emptyState.style.display = "none";
  resultCount.textContent = `${filtered.length} of ${users.length} users`;

  filtered.forEach(u => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><div class="row-avatar">${u.photo ? `<img src="${u.photo}" alt="${u.name}">` : initials(u.name)}</div></td>
      <td>
        <div class="user-name">${u.name}</div>
      </td>
      <td><span class="role-badge ${roleClass(u.role)}">${u.role}</span></td>
      <td>${u.phone}</td>
      <td>${u.email}</td>
      <td><span class="status-badge ${statusClass(u.status)}"><span class="dot"></span>${u.status}</span></td>
      <td>
        <div class="action-icons">
          <button class="icon-btn edit-btn" title="Edit" data-id="${u.id}">${ICON.edit}</button>
          <button class="icon-btn warning reset-btn" title="Reset Password" data-id="${u.id}">${ICON.key}</button>
          <button class="icon-btn danger delete-btn" title="Delete" data-id="${u.id}">${ICON.trash}</button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });

  tbody.querySelectorAll(".edit-btn").forEach(btn => btn.addEventListener("click", () => openEditModal(Number(btn.dataset.id))));
  tbody.querySelectorAll(".delete-btn").forEach(btn => btn.addEventListener("click", () => openDeleteConfirm(Number(btn.dataset.id))));
  tbody.querySelectorAll(".reset-btn").forEach(btn => btn.addEventListener("click", () => openResetConfirm(Number(btn.dataset.id))));
}

/* =========================================================
   SEARCH ICON + INPUT
========================================================= */
document.getElementById("searchIcon").innerHTML = ICON.search;
document.getElementById("searchInput").addEventListener("input", (e) => {
  filterState.search = e.target.value;
  renderTable();
});

/* =========================================================
   GENERIC MINI-DROPDOWN BUILDER
   Builds a filter/select control with options and a callback
========================================================= */
function buildMiniSelect({ selectEl, dropdownEl, labelEl, options, current, onSelect }){
  function paint(){
    dropdownEl.innerHTML = "";
    options.forEach(opt => {
      const optEl = document.createElement("div");
      optEl.className = "mini-option" + (opt === labelEl.textContent ? " selected" : "");
      optEl.textContent = opt;
      optEl.addEventListener("click", (e) => {
        e.stopPropagation();
        labelEl.textContent = opt;
        dropdownEl.querySelectorAll(".mini-option").forEach(o => o.classList.remove("selected"));
        optEl.classList.add("selected");
        dropdownEl.classList.remove("show");
        selectEl.classList.remove("open");
        onSelect(opt);
      });
      dropdownEl.appendChild(optEl);
    });
  }
  labelEl.textContent = current;
  paint();

  selectEl.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = dropdownEl.classList.contains("show");
    closeAllMiniDropdowns();
    if (!isOpen){
      dropdownEl.classList.add("show");
      selectEl.classList.add("open");
    }
  });
}

function closeAllMiniDropdowns(except){
  document.querySelectorAll(".mini-dropdown").forEach(dd => { if (dd !== except) dd.classList.remove("show"); });
  document.querySelectorAll(".mini-select").forEach(sel => sel.classList.remove("open"));
}

document.addEventListener("click", () => closeAllMiniDropdowns());

/* Role filter */
buildMiniSelect({
  selectEl: document.getElementById("roleFilterSelect"),
  dropdownEl: document.getElementById("roleFilterDropdown"),
  labelEl: document.getElementById("roleFilterLabel"),
  options: ["All Roles", ...roleOptions],
  current: "All Roles",
  onSelect: (val) => { filterState.role = val; renderTable(); }
});

/* Status filter */
buildMiniSelect({
  selectEl: document.getElementById("statusFilterSelect"),
  dropdownEl: document.getElementById("statusFilterDropdown"),
  labelEl: document.getElementById("statusFilterLabel"),
  options: ["All Status", ...statusOptions],
  current: "All Status",
  onSelect: (val) => { filterState.status = val; renderTable(); }
});

/* =========================================================
   ADD / EDIT USER MODAL
========================================================= */
const userModalOverlay = document.getElementById("userModalOverlay");
const userModalTitle = document.getElementById("userModalTitle");
const fieldName = document.getElementById("fieldName");
const fieldPhone = document.getElementById("fieldPhone");
const fieldEmail = document.getElementById("fieldEmail");
const fieldPassword = document.getElementById("fieldPassword");
const passwordField = document.getElementById("passwordField");
const photoPreview = document.getElementById("photoPreview");
const photoInitials = document.getElementById("photoInitials");
const photoInput = document.getElementById("photoInput");
const formError = document.getElementById("formError");

let editingUserId = null;
let pendingPhotoData = "";

function openOverlay(el){ el.classList.add("show"); }
function closeOverlay(el){ el.classList.remove("show"); }

/* role select inside the form */
let selectedRole = "";
buildMiniSelect({
  selectEl: document.getElementById("fieldRoleSelect"),
  dropdownEl: document.getElementById("fieldRoleDropdown"),
  labelEl: document.getElementById("fieldRoleLabel"),
  options: roleOptions,
  current: "Select role",
  onSelect: (val) => { selectedRole = val; }
});

/* status select inside the form */
let selectedStatus = "Active";
buildMiniSelect({
  selectEl: document.getElementById("fieldStatusSelect"),
  dropdownEl: document.getElementById("fieldStatusDropdown"),
  labelEl: document.getElementById("fieldStatusLabel"),
  options: statusOptions,
  current: "Active",
  onSelect: (val) => { selectedStatus = val; }
});

function resetForm(){
  fieldName.value = "";
  fieldPhone.value = "";
  fieldEmail.value = "";
  fieldPassword.value = "";
  photoInput.value = "";
  pendingPhotoData = "";
  photoPreview.innerHTML = `<span id="photoInitials">?</span>`;
  formError.textContent = "";
  selectedRole = "";
  selectedStatus = "Active";
  document.getElementById("fieldRoleLabel").textContent = "Select role";
  document.getElementById("fieldStatusLabel").textContent = "Active";
  document.querySelectorAll("#fieldRoleDropdown .mini-option").forEach(o => o.classList.remove("selected"));
  document.querySelectorAll("#fieldStatusDropdown .mini-option").forEach(o => {
    o.classList.toggle("selected", o.textContent === "Active");
  });
}

function openAddModal(){
  editingUserId = null;
  resetForm();
  userModalTitle.textContent = "Add User";
  passwordField.style.display = "flex";
  openOverlay(userModalOverlay);
}

function openEditModal(id){
  const u = users.find(x => x.id === id);
  if (!u) return;
  editingUserId = id;
  resetForm();
  userModalTitle.textContent = "Edit User";
  passwordField.style.display = "none";

  fieldName.value = u.name;
  fieldPhone.value = u.phone;
  fieldEmail.value = u.email;
  selectedRole = u.role;
  selectedStatus = u.status;
  document.getElementById("fieldRoleLabel").textContent = u.role;
  document.getElementById("fieldStatusLabel").textContent = u.status;

  if (u.photo){
    photoPreview.innerHTML = `<img src="${u.photo}" alt="${u.name}">`;
    pendingPhotoData = u.photo;
  } else {
    photoPreview.innerHTML = `<span>${initials(u.name)}</span>`;
  }

  openOverlay(userModalOverlay);
}

document.getElementById("addUserBtn").addEventListener("click", openAddModal);
document.getElementById("userModalClose").addEventListener("click", () => closeOverlay(userModalOverlay));
document.getElementById("userModalCancel").addEventListener("click", () => closeOverlay(userModalOverlay));
userModalOverlay.addEventListener("click", (e) => { if (e.target === userModalOverlay) closeOverlay(userModalOverlay); });

photoInput.addEventListener("change", () => {
  const file = photoInput.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    pendingPhotoData = reader.result;
    photoPreview.innerHTML = `<img src="${pendingPhotoData}" alt="preview">`;
  };
  reader.readAsDataURL(file);
});

document.getElementById("userModalSave").addEventListener("click", () => {
  const name = fieldName.value.trim();
  const phone = fieldPhone.value.trim();
  const email = fieldEmail.value.trim();

  if (!name || !phone || !email || !selectedRole){
    formError.textContent = "Please fill in name, role, phone and email.";
    return;
  }
  if (!editingUserId && !fieldPassword.value.trim()){
    formError.textContent = "Please set a temporary password for the new user.";
    return;
  }

  if (editingUserId){
    const u = users.find(x => x.id === editingUserId);
    u.name = name;
    u.role = selectedRole;
    u.phone = phone;
    u.email = email;
    u.status = selectedStatus;
    u.photo = pendingPhotoData;
    showToast("User updated successfully.");
  } else {
    users.push({
      id: nextId++,
      name, role: selectedRole, phone, email,
      status: selectedStatus,
      photo: pendingPhotoData
    });
    showToast("User added successfully.");
  }

  closeOverlay(userModalOverlay);
  renderKPIs();
  renderTable();
});

/* =========================================================
   DELETE CONFIRM
========================================================= */
const deleteOverlay = document.getElementById("deleteOverlay");
document.getElementById("deleteIcon").innerHTML = ICON.trash;
let userIdToDelete = null;

function openDeleteConfirm(id){
  const u = users.find(x => x.id === id);
  if (!u) return;
  userIdToDelete = id;
  document.getElementById("deleteMessage").textContent = `This will permanently remove ${u.name} from the system.`;
  openOverlay(deleteOverlay);
}

document.getElementById("deleteCancelBtn").addEventListener("click", () => closeOverlay(deleteOverlay));
deleteOverlay.addEventListener("click", (e) => { if (e.target === deleteOverlay) closeOverlay(deleteOverlay); });

document.getElementById("deleteConfirmBtn").addEventListener("click", () => {
  users = users.filter(u => u.id !== userIdToDelete);
  closeOverlay(deleteOverlay);
  renderKPIs();
  renderTable();
  showToast("User deleted.");
});

/* =========================================================
   RESET PASSWORD CONFIRM
========================================================= */
const resetOverlay = document.getElementById("resetOverlay");
document.getElementById("resetIcon").innerHTML = ICON.key;
let userIdToReset = null;

function openResetConfirm(id){
  const u = users.find(x => x.id === id);
  if (!u) return;
  userIdToReset = id;
  document.getElementById("resetMessage").textContent = `A new temporary password will be generated and sent to ${u.email}.`;
  openOverlay(resetOverlay);
}

document.getElementById("resetCancelBtn").addEventListener("click", () => closeOverlay(resetOverlay));
resetOverlay.addEventListener("click", (e) => { if (e.target === resetOverlay) closeOverlay(resetOverlay); });

document.getElementById("resetConfirmBtn").addEventListener("click", () => {
  closeOverlay(resetOverlay);
  showToast("Password reset link sent.");
});

/* =========================================================
   LOGOUT OVERLAY
========================================================= */
const logoutOverlay = document.getElementById("logoutOverlay");
document.getElementById("logoutIcon").innerHTML = ICON.logout;
document.getElementById("logoutCancelBtn").addEventListener("click", () => closeOverlay(logoutOverlay));
logoutOverlay.addEventListener("click", (e) => { if (e.target === logoutOverlay) closeOverlay(logoutOverlay); });
document.getElementById("logoutConfirmBtn").addEventListener("click", () => { window.location.href = "login.html"; });

/* =========================================================
   INITIAL RENDER
========================================================= */
renderKPIs();
renderTable();