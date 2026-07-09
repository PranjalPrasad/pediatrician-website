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
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 13.5a7.7 7.7 0 000-3l2-1.5-2-3.4-2.3.9a7.5 7.5 0 00-2.6-1.5L14 2h-4l-.5 2.5a7.5 7.5 0 00-2.6 1.5l-2.3-.9-2 3.4 2 1.5a7.7 7.7 0 000 3l-2 1.6 2 3.4 2.3-1a7.5 7.5 0 002.6 1.5L10 22h4l.5-2.5a7.5 7.5 0 002.6-1.5l2.3 1 2-3.4z"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.5-7 8-7s8 3 8 7"/></svg>`,
  userPlus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21c0-4 3-7 7-7s7 3 7 7"/><path d="M18 8v6M15 11h6"/></svg>`,
  stethoscope: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3v6a4 4 0 004 4 4 4 0 004-4V3"/><path d="M12 13v3a5 5 0 005 5 5 5 0 005-5"/><circle cx="20" cy="6" r="2"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`,
  logout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>`
};

/* =========================================================
   SIDEBAR ROUTING (same structure as the dashboard)
========================================================= */
const sidebarItems = [
  { type: "link",  icon: ICON.home,        label: "Dashboard",         href: "../../dashboard.html" },
  { type: "group", icon: ICON.users,       label: "Children",         key: "children", children: [
      { label: "All Children",   href: "../../all-children/childp.html" },
      { label: "Register Child", href: "registerchild.html" }
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

const currentPage = (location.pathname.split("/").pop() || "registerchild.html").toLowerCase();

/* =========================================================
   LOGGED-IN USER — reads the SAME storage auth.js writes to.
   auth.js exposes: isAuthenticated(), login(), logout(),
   protectPage(), getCurrentUser() (storage key: "clinicUser").
   NOTE: earlier versions of this file defined their OWN
   getCurrentUser() against a different key ("currentUser"),
   which silently overrode auth.js's version and is why the
   profile box and logout never reflected the real session.
   That local override has been removed — we call auth.js's
   getCurrentUser() directly.
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
  const fallback = { name: "Doctor", email: "", role: "" };
  if (typeof window.getCurrentUser === "function") {
    return window.getCurrentUser() || fallback;
  }
  return fallback;
}

const currentUser = currentClinicUser();
const CLINIC_NAME = "Sunshine Pediatric Clinic";

/* =========================================================
   HEADER META (dynamic date + dynamic user/clinic)
========================================================= */
function renderHeaderMeta() {
  const todayStr = new Date().toLocaleDateString("en-IN", {
    year: "numeric", month: "long", day: "numeric"
  });
  document.getElementById("headerMeta").innerHTML = `
    <span>${ICON.calendar} ${todayStr}</span>
    <span>${ICON.user} ${currentUser.name || "Doctor"}</span>
    <span>${ICON.activity} ${CLINIC_NAME}</span>
  `;
}
renderHeaderMeta();

/* =========================================================
   SIDEBAR PROFILE (dynamic)
========================================================= */
function renderSidebarProfile() {
  document.getElementById("profileAvatar").textContent = initialsFromName(currentUser.name);
  document.getElementById("profileName").textContent = currentUser.name || "";
  document.getElementById("profileEmail").textContent = currentUser.email || "";
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
    btn.addEventListener("click", () => {
      if (item.action === "logout") openLogoutOverlay();
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

/* =========================================================
   SIDEBAR OPEN/CLOSE (default open on load, responsive drawer on mobile)
========================================================= */
const sidebar = document.getElementById("sidebar");
const sidebarBackdrop = document.getElementById("sidebarBackdrop");
const MOBILE_BREAKPOINT = 760;

function isMobile() {
  return window.innerWidth <= MOBILE_BREAKPOINT;
}

function syncBackdrop() {
  const shouldShow = isMobile() && sidebar.classList.contains("expanded");
  sidebarBackdrop.classList.toggle("show", shouldShow);
}

function openSidebar() {
  sidebar.classList.add("expanded");
  syncBackdrop();
}

function closeSidebar() {
  sidebar.classList.remove("expanded");
  syncBackdrop();
}

// Sidebar is expanded by default on every page load (desktop and mobile).
openSidebar();

document.getElementById("sidebarToggle").addEventListener("click", () => {
  sidebar.classList.contains("expanded") ? closeSidebar() : openSidebar();
});

// Tapping the backdrop (mobile) closes the drawer, like a standard nav drawer.
sidebarBackdrop.addEventListener("click", closeSidebar);

window.addEventListener("resize", syncBackdrop);

/* =========================================================
   LOGOUT OVERLAY — delegates to auth.js's logout()
========================================================= */
const logoutOverlay = document.getElementById("logoutOverlay");
document.querySelector("#logoutOverlay .logout-modal-icon").innerHTML = ICON.logout;

function openLogoutOverlay() { logoutOverlay.classList.add("show"); }
function closeLogoutOverlay() { logoutOverlay.classList.remove("show"); }

document.getElementById("logoutCancelBtn").addEventListener("click", closeLogoutOverlay);
logoutOverlay.addEventListener("click", (e) => { if (e.target === logoutOverlay) closeLogoutOverlay(); });

document.getElementById("logoutConfirmBtn").addEventListener("click", () => {
  performLogout();
});

function performLogout() {
    if (typeof window.logout === "function") {
        window.logout();
    } else {
        console.error("auth.js not loaded — logout() unavailable");
    }
}

/* =========================================================
   REGISTRATION STEPPER
========================================================= */
(function () {
  "use strict";

  const totalSteps = 5;
  let currentStep = 1;

  const steps      = document.querySelectorAll(".step");
  const panels     = document.querySelectorAll(".step-panel");
  const prevBtn    = document.getElementById("prevBtn");
  const nextBtn    = document.getElementById("nextBtn");
  const saveChildBtn = document.getElementById("saveChildBtn");
  const saveDraftBtn = document.getElementById("saveDraftBtn");
  const toast      = document.getElementById("toast");
  const form       = document.getElementById("regForm");

  function goToStep(step) {
    currentStep = Math.min(Math.max(step, 1), totalSteps);

    panels.forEach(p => p.classList.toggle("active", Number(p.dataset.panel) === currentStep));

    steps.forEach(s => {
      const n = Number(s.dataset.step);
      s.classList.toggle("active", n === currentStep);
      s.classList.toggle("done", n < currentStep);
    });

    prevBtn.style.visibility = currentStep === 1 ? "hidden" : "visible";

    const isReview = currentStep === totalSteps;
    nextBtn.hidden = isReview;
    saveChildBtn.hidden = !isReview;

    if (isReview) buildReview();

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  steps.forEach(s => {
    s.addEventListener("click", () => {
      const n = Number(s.dataset.step);
      if (n <= currentStep) goToStep(n);
    });
  });

  document.querySelectorAll("[data-goto]").forEach(btn => {
    btn.addEventListener("click", () => goToStep(Number(btn.dataset.goto)));
  });

  nextBtn.addEventListener("click", () => {
    const activePanel = document.querySelector(`.step-panel[data-panel="${currentStep}"]`);
    const requiredFields = activePanel.querySelectorAll("[required]");
    for (const f of requiredFields) {
      if (!f.value) { f.reportValidity(); f.focus(); return; }
    }
    goToStep(currentStep + 1);
  });

  prevBtn.addEventListener("click", () => goToStep(currentStep - 1));

  let toastTimer;
  function showToast(msg) {
    clearTimeout(toastTimer);
    toast.textContent = msg;
    toast.classList.add("show");
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
  }
  saveDraftBtn.addEventListener("click", () => showToast("Draft saved"));

  /* Patient ID (auto) */
  (function generatePatientId() {
    const year = new Date().getFullYear();
    const rand = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("patientId").value = `CH-${year}-${rand}`;
  })();

  /* Age auto-calculation */
  const dobInput = document.getElementById("dob");
  const ageInput = document.getElementById("age");
  dobInput.addEventListener("change", () => {
    if (!dobInput.value) { ageInput.value = ""; return; }
    const dob = new Date(dobInput.value);
    const today = new Date();
    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    if (today.getDate() < dob.getDate()) months--;
    if (months < 0) { years--; months += 12; }
    ageInput.value = years > 0 ? `${years} yr${years > 1 ? "s" : ""} ${months} mo` : `${months} mo`;
  });

  /* Photo upload preview */
  let photoDataUrl = null;
  const photoBox = document.getElementById("photoBox");
  const photoInput = document.getElementById("childPhoto");
  const photoPreview = document.getElementById("photoPreview");
  const photoPlaceholder = document.getElementById("photoPlaceholder");
  photoBox.addEventListener("click", () => photoInput.click());
  photoInput.addEventListener("change", () => {
    const file = photoInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      photoDataUrl = e.target.result;
      photoPreview.src = photoDataUrl;
      photoPreview.hidden = false;
      photoPlaceholder.hidden = true;
    };
    reader.readAsDataURL(file);
  });

  /* BMI auto-calculation */
  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");
  const bmiInput = document.getElementById("bmi");
  function calcBmi() {
    const h = parseFloat(heightInput.value) / 100;
    const w = parseFloat(weightInput.value);
    bmiInput.value = (h > 0 && w > 0) ? (w / (h * h)).toFixed(1) : "";
  }
  heightInput.addEventListener("input", calcBmi);
  weightInput.addEventListener("input", calcBmi);

  /* Vaccination table (dynamic rows) */
  const vaccineBody = document.getElementById("vaccineBody");
  const addVaccineRow = document.getElementById("addVaccineRow");
  const statusOptions = ["Completed", "Due", "Pending", "Overdue"];

  function createVaccineRow() {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><input type="text" name="vaccineName" placeholder="e.g. BCG"></td>
      <td><input type="date" name="vaccineDue"></td>
      <td><input type="date" name="vaccineGiven"></td>
      <td><input type="text" name="vaccineDoctor" placeholder="Doctor"></td>
      <td>
        <select name="vaccineStatus">
          ${statusOptions.map(s => `<option value="${s}">${s}</option>`).join("")}
        </select>
      </td>
      <td><input type="date" name="vaccineNextDue"></td>
      <td><button type="button" class="row-delete" title="Delete row">✕</button></td>
    `;
    tr.querySelector(".row-delete").addEventListener("click", () => tr.remove());
    vaccineBody.appendChild(tr);
  }
  addVaccineRow.addEventListener("click", createVaccineRow);
  createVaccineRow();

  /* Review builder */
  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
  }
  function reviewItem(label, value) {
    return `<div class="review-item"><span class="k">${label}</span><span class="v">${value ? escapeHtml(value) : ""}</span></div>`;
  }
  function val(id) {
    const el = document.getElementById(id);
    return el ? el.value : "";
  }

  function buildReview() {
    document.getElementById("reviewBasic").innerHTML = [
      reviewItem("Patient ID", val("patientId")),
      reviewItem("Child Name", val("childName")),
      reviewItem("Gender", val("gender")),
      reviewItem("Date of Birth", val("dob")),
      reviewItem("Age", val("age")),
      reviewItem("Blood Group", val("bloodGroup")),
      reviewItem("Parent Name", val("parentName")),
      reviewItem("Father Name", val("fatherName")),
      reviewItem("Mother Name", val("motherName")),
      reviewItem("Mobile", val("mobile")),
      reviewItem("Email", val("email")),
      reviewItem("Emergency Contact", val("emergencyContact")),
      reviewItem("Address", val("address")),
    ].join("");

    document.getElementById("reviewMedical").innerHTML = [
      reviewItem("Birth Weight (kg)", val("birthWeight")),
      reviewItem("Delivery Type", val("deliveryType")),
      reviewItem("Premature?", val("premature")),
      reviewItem("Past Illness", val("pastIllness")),
      reviewItem("Allergies", val("allergies")),
      reviewItem("Hospital Admission", val("hospitalAdmission")),
      reviewItem("Current Medicines", val("currentMedicines")),
      reviewItem("Chronic Disease", val("chronicDisease")),
      reviewItem("Family Disease", val("familyDisease")),
      reviewItem("Development Milestones", val("milestones")),
    ].join("");

    document.getElementById("reviewGrowth").innerHTML = [
      reviewItem("Height (cm)", val("height")),
      reviewItem("Weight (kg)", val("weight")),
      reviewItem("BMI", val("bmi")),
      reviewItem("Head Circumference (cm)", val("headCirc")),
      reviewItem("Notes", val("growthNotes")),
    ].join("");

    const reviewVaccineBody = document.getElementById("reviewVaccineBody");
    reviewVaccineBody.innerHTML = "";
    vaccineBody.querySelectorAll("tr").forEach(row => {
      const cells = row.querySelectorAll("input, select");
      const [name, due, given, doctor, status, nextDue] = cells;
      const statusClass = {
        Completed: "status-completed", Due: "status-due",
        Pending: "status-pending", Overdue: "status-overdue"
      }[status.value] || "status-pending";

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${escapeHtml(name.value) || "—"}</td>
        <td>${due.value || "—"}</td>
        <td>${given.value || "—"}</td>
        <td>${escapeHtml(doctor.value) || "—"}</td>
        <td><span class="status-pill ${statusClass}">${status.value}</span></td>
        <td>${nextDue.value || "—"}</td>
      `;
      reviewVaccineBody.appendChild(tr);
    });
  }

  /* =========================================================
     SAVE — writes the finished registration into the SAME
     localStorage key ("pedClinicChildren") that the All
     Children page (childp.js) reads, so a new registration
     shows up there immediately without any extra wiring.
  ========================================================= */
  const STORE_KEY = "pedClinicChildren";

  function loadStoredChildren() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      const list = raw ? JSON.parse(raw) : [];
      return Array.isArray(list) ? list : [];
    } catch (e) {
      console.warn("Could not read children store:", e);
      return [];
    }
  }

  function collectVaccinesFromTable() {
    const vaccines = [];
    vaccineBody.querySelectorAll("tr").forEach(row => {
      const cells = row.querySelectorAll("input, select");
      const [name, due, given, doctor, status, nextDue] = cells;
      if (!name.value) return;
      vaccines.push({
        name: name.value, due: due.value, given: given.value,
        doctor: doctor.value, status: status.value, nextDue: nextDue.value
      });
    });
    return vaccines;
  }

  function buildChildRecord() {
    const height = val("height");
    const weight = val("weight");
    return {
      id: (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : `child-${Date.now()}`,
      patientId: val("patientId"),
      name: val("childName"),
      gender: val("gender"),
      dob: val("dob"),
      age: val("age"),
      bloodGroup: val("bloodGroup"),
      parentName: val("parentName"),
      fatherName: val("fatherName"),
      motherName: val("motherName"),
      mobile: val("mobile"),
      email: val("email"),
      emergencyContact: val("emergencyContact"),
      address: val("address"),
      photo: photoDataUrl,
      birthWeight: val("birthWeight"),
      deliveryType: val("deliveryType"),
      premature: val("premature"),
      pastIllness: val("pastIllness"),
      allergies: val("allergies"),
      hospitalAdmission: val("hospitalAdmission"),
      currentMedicines: val("currentMedicines"),
      chronicDisease: val("chronicDisease"),
      familyDisease: val("familyDisease"),
      milestones: val("milestones"),
      height: height, weight: weight, bmi: val("bmi"), headCirc: val("headCirc"), growthNotes: val("growthNotes"),
      vaccines: collectVaccinesFromTable(),
      growthHistory: (height && weight) ? [{ date: new Date().toISOString().slice(0,10), h: Number(height), w: Number(weight), bmi: val("bmi"), doctor: currentUser.name || "Front Desk" }] : [],
      appointments: [],
      consultations: [],
      prescriptions: [],
      documents: [],
      billing: [],
      registeredDate: new Date().toISOString().slice(0, 10)
    };
  }

  form.addEventListener("submit", e => {
    e.preventDefault();

    const list = loadStoredChildren();
    const record = buildChildRecord();
    list.unshift(record);
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(list));
    } catch (err) {
      console.error("Could not save child record:", err);
      showToast("Could not save — storage error");
      return;
    }

    showToast("Child registered successfully");
    setTimeout(() => {
      window.location.href = "../all-children/childp.html";
    }, 700);
  });

  goToStep(1);
})();