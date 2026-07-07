protectPage();
/* =========================================================
   ICONS
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
  stethoscope: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3v6a4 4 0 004 4 4 4 0 004-4V3"/><path d="M12 13v3a5 5 0 005 5 5 5 0 005-5"/><circle cx="20" cy="6" r="2"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>`,
  edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/></svg>`,
  ruler: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="8" rx="1.5"/><path d="M7 8v3M11 8v3M15 8v3"/></svg>`,
  weight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/></svg>`,
  scale: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21h16"/><path d="M6 21V9l6-6 6 6v12"/><path d="M9 21v-6h6v6"/></svg>`,
  head: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="9" cy="10" r="0.6" fill="currentColor"/><path d="M8 15c1.2 1 2.6 1.5 4 1.5s2.8-.5 4-1.5"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`,
  logout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5 5-5.5"/></svg>`
};

/* =========================================================
   SIDEBAR NAV (same structure across all module pages)
========================================================= */
const sidebarItems = [
  { type: "link",  icon: ICON.home,        label: "Dashboard",         href: "../dashboard.html" },
  { type: "group", icon: ICON.users,       label: "Children",         key: "children", children: [
      { label: "All Children",   href: "../child registration/all-children/childp.html" },
      { label: "Register Child", href: "../child registration/registerchild/registerchild.html" }
    ]
  },
  { type: "link",  icon: ICON.calendar,    label: "Appointments",      href: "../appointment/appointment.html" },
  { type: "link",  icon: ICON.stethoscope, label: "Consultations",     href: "opd.html" },
  { type: "link",  icon: ICON.clipboard,   label: "Prescriptions",     href: "../prescription/prescription.html" },
  { type: "link",  icon: ICON.syringe,     label: "Vaccinations",      href: "../vaccination.html" },
  { type: "link",  icon: ICON.activity,    label: "Growth Monitoring", href: "../Growth/growth.html" },
  { type: "link",  icon: ICON.file,        label: "Reports",           href: "../reports.html" },
  { type: "link",  icon: ICON.receipt,     label: "Billing",           href: "../billing.html" },
  { type: "link",  icon: ICON.userPlus,    label: "User Management",   href: "../user.html" },
  { type: "action", icon: ICON.logout,      label: "Logout",            action: "logout" }
];

const currentPage = (location.pathname.split("/").pop() || "growth.html").toLowerCase();

document.getElementById("headerMeta").innerHTML = `
  <span>${ICON.calendar} July 7, 2026 &middot; 10:40</span>
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

document.getElementById("addGrowthBtn").innerHTML = `${ICON.plus} Add Growth Record`;

/* =========================================================
   MOCK DATA — children + their growth history
========================================================= */
const children = [
  { id:"P-1042", name:"Aarav Kapoor" },
  { id:"P-1088", name:"Diya Sharma" },
  { id:"P-1101", name:"Vihaan Reddy" }
];

let growthData = {
  "P-1042": [
    { date:"2026-01-10", height:68.0, weight:7.8, head:42.0, doctor:"Dr. Ananya Sharma", notes:"Routine checkup" },
    { date:"2026-03-12", height:71.2, weight:8.4, head:43.1, doctor:"Dr. Ananya Sharma", notes:"" },
    { date:"2026-05-14", height:73.5, weight:8.9, head:43.9, doctor:"Dr. Rohan Mehta",   notes:"" },
    { date:"2026-07-02", height:75.8, weight:9.4, head:44.5, doctor:"Dr. Ananya Sharma", notes:"Healthy growth trend" }
  ],
  "P-1088": [
    { date:"2026-02-05", height:64.0, weight:6.9, head:41.2, doctor:"Dr. Rohan Mehta", notes:"" },
    { date:"2026-04-08", height:67.1, weight:7.5, head:42.0, doctor:"Dr. Rohan Mehta", notes:"" },
    { date:"2026-06-10", height:69.8, weight:8.0, head:42.7, doctor:"Dr. Kavita Nair", notes:"" }
  ],
  "P-1101": [
    { date:"2026-03-01", height:60.5, weight:6.0, head:40.0, doctor:"Dr. Kavita Nair", notes:"" },
    { date:"2026-06-01", height:65.2, weight:6.9, head:41.4, doctor:"Dr. Kavita Nair", notes:"Slightly below average, monitor" }
  ]
};

let currentChildId = children[0].id;

function currentChild(){ return children.find(c => c.id === currentChildId); }
function currentRecords(){
  return (growthData[currentChildId] || []).slice().sort((a,b) => new Date(a.date) - new Date(b.date));
}

function initials(name){ return name.split(" ").map(w => w[0]).slice(0,2).join("").toUpperCase(); }

function calcBMI(heightCm, weightKg){
  const h = heightCm / 100;
  return +(weightKg / (h * h)).toFixed(1);
}

function bmiTag(bmi){
  if (bmi < 14.5) return { cls:"low",    label:"Low" };
  if (bmi > 18.5) return { cls:"high",   label:"High" };
  return { cls:"normal", label:"Normal" };
}

/* =========================================================
   SEARCH CHILD (dropdown suggestions, click-to-select)
========================================================= */
const searchInput = document.getElementById("searchChild");
const searchDropdown = document.getElementById("searchDropdown");

function renderSearchDropdown(query){
  const q = query.trim().toLowerCase();

  // empty query -> show the full child list so the box still feels useful
  const matches = q
    ? children.filter(c => c.name.toLowerCase().includes(q) || c.id.toLowerCase().includes(q))
    : children;

  if (!matches.length){
    searchDropdown.innerHTML = `<div class="search-empty">No child found matching "${query}"</div>`;
    searchDropdown.classList.add("show");
    return;
  }

  searchDropdown.innerHTML = matches.map(c => `
    <div class="search-option ${c.id === currentChildId ? "selected" : ""}" data-id="${c.id}">
      <div class="so-avatar">${initials(c.name)}</div>
      <div>
        <div class="so-name">${c.name}</div>
        <div class="so-id">${c.id}</div>
      </div>
      <span class="so-check">${ICON.check}</span>
    </div>
  `).join("");

  searchDropdown.querySelectorAll(".search-option").forEach(opt => {
    opt.addEventListener("click", () => {
      const id = opt.getAttribute("data-id");
      const child = children.find(c => c.id === id);
      currentChildId = id;
      searchInput.value = child.name;
      closeSearchDropdown();
      renderAll();
    });
  });

  searchDropdown.classList.add("show");
}

function closeSearchDropdown(){ searchDropdown.classList.remove("show"); }

searchInput.addEventListener("input", (e) => renderSearchDropdown(e.target.value));
searchInput.addEventListener("focus", (e) => renderSearchDropdown(e.target.value));

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter"){
    const q = searchInput.value.trim().toLowerCase();
    const match = q
      ? children.find(c => c.name.toLowerCase().includes(q) || c.id.toLowerCase().includes(q))
      : null;
    if (match){
      currentChildId = match.id;
      searchInput.value = match.name;
      closeSearchDropdown();
      renderAll();
    }
  } else if (e.key === "Escape"){
    closeSearchDropdown();
  }
});

// close dropdown when clicking anywhere outside the search box
document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-wrap")) closeSearchDropdown();
});

/* =========================================================
   CHILD BANNER
========================================================= */
function renderBanner(){
  const child = currentChild();
  const records = currentRecords();
  const latest = records[records.length - 1];
  document.getElementById("childBanner").innerHTML = `
    <div class="avatar-lg">${initials(child.name)}</div>
    <div>
      <div class="cb-name">${child.name}</div>
      <div class="cb-meta">${child.id} &middot; ${records.length} growth record${records.length === 1 ? "" : "s"} on file
        ${latest ? " &middot; last measured " + latest.date : ""}</div>
    </div>
  `;
}

/* =========================================================
   CURRENT DETAILS (KPI cards) — derived from latest record
========================================================= */
function renderKPIs(){
  const records = currentRecords();
  const latest = records[records.length - 1];
  const prev = records[records.length - 2];

  const kpiData = [
    { label:"Current Height",             value: latest ? latest.height + " cm" : "—", icon: ICON.ruler,  delta: prev ? (latest.height - prev.height).toFixed(1) + " cm since last visit" : "No previous record" },
    { label:"Current Weight",             value: latest ? latest.weight + " kg" : "—", icon: ICON.scale,  delta: prev ? (latest.weight - prev.weight).toFixed(1) + " kg since last visit" : "No previous record" },
    { label:"Current BMI",                value: latest ? calcBMI(latest.height, latest.weight) : "—", icon: ICON.activity, delta: latest ? bmiTag(calcBMI(latest.height, latest.weight)).label + " range" : "" },
    { label:"Head Circumference",         value: latest ? latest.head + " cm" : "—", icon: ICON.head, delta: prev ? (latest.head - prev.head).toFixed(1) + " cm since last visit" : "No previous record" }
  ];

  document.getElementById("kpiRow").innerHTML = kpiData.map(k => `
    <div class="card kpi-card">
      <div class="kpi-icon">${k.icon}</div>
      <div class="kpi-label">${k.label}</div>
      <div class="kpi-value">${k.value}</div>
      <div class="kpi-sub">${k.delta}</div>
    </div>
  `).join("");
}

/* =========================================================
   GENERIC LINE CHART RENDERER (reused for height/weight/bmi)
========================================================= */
function drawLineChart(svgId, tooltipId, data, key, unit, color, opts){
  const svg = document.getElementById(svgId);
  const tooltip = document.getElementById(tooltipId);
  const vb = svg.viewBox.baseVal;
  const W = vb.width || 760, H = vb.height || 220;
  const padL = 34, padR = 12, padT = 14, padB = 26;
  const plotW = W - padL - padR, plotH = H - padT - padB;

  if (!data.length){
    svg.innerHTML = `<text x="${W/2}" y="${H/2}" text-anchor="middle" class="axis-label">No data yet for this child</text>`;
    tooltip.style.display = "none";
    return;
  }

  const values = data.map(d => key === "bmi" ? calcBMI(d.height, d.weight) : d[key]);
  const minVal = Math.min(...values) * 0.92;
  const maxVal = Math.max(...values) * 1.08;
  const range = maxVal - minVal || 1;
  const stepX = data.length > 1 ? plotW / (data.length - 1) : 0;
  const singlePoint = data.length === 1;

  const xy = (i, val) => {
    const x = singlePoint ? padL + plotW / 2 : padL + i * stepX;
    const y = padT + plotH - ((val - minVal) / range) * plotH;
    return [x, y];
  };

  let svgHTML = "";
  const gridCount = 4;
  for (let g = 0; g <= gridCount; g++) {
    const y = padT + (plotH / gridCount) * g;
    svgHTML += `<line x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}" class="grid-line"/>`;
  }

  data.forEach((d, i) => {
    const [x] = xy(i, 0);
    const label = d.date.slice(5); // MM-DD
    svgHTML += `<text x="${x}" y="${H - 6}" text-anchor="middle" class="axis-label">${label}</text>`;
  });

  const pathD = data.map((d, i) => {
    const [x, y] = xy(i, values[i]);
    return (i === 0 ? "M" : "L") + x.toFixed(1) + " " + y.toFixed(1);
  }).join(" ");

  // soft area fill under the line
  if (!singlePoint) {
    const [x0] = xy(0, 0);
    const [xN] = xy(data.length - 1, 0);
    const areaD = pathD + ` L ${xN.toFixed(1)} ${(padT + plotH).toFixed(1)} L ${x0.toFixed(1)} ${(padT + plotH).toFixed(1)} Z`;
    svgHTML += `<path d="${areaD}" fill="${color}" opacity="0.08" stroke="none"/>`;
    svgHTML += `<path d="${pathD}" fill="none" stroke="${color}" stroke-width="2.5"/>`;
  }

  const dots = data.map((d, i) => {
    const [x, y] = xy(i, values[i]);
    return `<circle class="pt" data-i="${i}" cx="${x}" cy="${y}" r="4" fill="${color}" style="cursor:pointer"/>`;
  }).join("");
  svgHTML += dots;

  svg.innerHTML = svgHTML;

  svg.querySelectorAll(".pt").forEach(pt => {
    pt.addEventListener("mousemove", (e) => {
      const i = pt.getAttribute("data-i");
      const d = data[i];
      tooltip.style.display = "block";
      tooltip.style.left = e.offsetX + 12 + "px";
      tooltip.style.top = e.offsetY - 10 + "px";
      tooltip.innerHTML = `<strong>${d.date}</strong><br>${values[i]}${unit}`;
    });
    pt.addEventListener("mouseleave", () => tooltip.style.display = "none");
  });
}

function renderCharts(){
  const records = currentRecords();
  drawLineChart("heightChart", "heightTooltip", records, "height", " cm", "#6C63FF");
  drawLineChart("weightChart", "weightTooltip", records, "weight", " kg", "#4F8EF7");
  drawLineChart("bmiChart", "bmiTooltip", records, "bmi", "", "#A78BFA");
}

/* =========================================================
   HISTORY TABLE
========================================================= */
let currentTableData = [];

function renderTable(){
  const records = currentRecords().slice().reverse(); // most recent first
  currentTableData = records;
  const body = document.getElementById("growthTableBody");

  if (!records.length){
    body.innerHTML = `<tr class="empty-row"><td colspan="7">No growth records found for this child yet.</td></tr>`;
    document.getElementById("resultCount").textContent = "0 records";
    return;
  }

  body.innerHTML = records.map((r, i) => {
    const bmi = calcBMI(r.height, r.weight);
    const tag = bmiTag(bmi);
    return `
      <tr>
        <td>${r.date}</td>
        <td>${r.height}</td>
        <td>${r.weight}</td>
        <td><span class="bmi-tag ${tag.cls}">${bmi} &middot; ${tag.label}</span></td>
        <td>${r.head}</td>
        <td>${r.doctor}</td>
        <td>
          <div class="row-actions">
            <button class="icon-btn" title="View" data-action="view" data-i="${i}">${ICON.eye}</button>
            <button class="icon-btn" title="Edit" data-action="edit" data-i="${i}">${ICON.edit}</button>
            <button class="icon-btn danger" title="Delete" data-action="delete" data-i="${i}">${ICON.trash}</button>
          </div>
        </td>
      </tr>
    `;
  }).join("");

  document.getElementById("resultCount").textContent = `${records.length} record${records.length === 1 ? "" : "s"}`;

  body.querySelectorAll("[data-action='view']").forEach(btn => {
    btn.addEventListener("click", (e) => openViewGrowth(currentTableData[e.currentTarget.getAttribute("data-i")]));
  });
  body.querySelectorAll("[data-action='edit']").forEach(btn => {
    btn.addEventListener("click", (e) => openEditGrowth(currentTableData[e.currentTarget.getAttribute("data-i")]));
  });
  body.querySelectorAll("[data-action='delete']").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const rec = currentTableData[e.currentTarget.getAttribute("data-i")];
      growthData[currentChildId] = growthData[currentChildId].filter(r => r !== rec);
      showToast(`Growth record for ${rec.date} deleted`);
      renderAll();
    });
  });
}

/* =========================================================
   ADD / EDIT MODAL
========================================================= */
const growthOverlay = document.getElementById("growthModalOverlay");
const growthModalTitle = document.getElementById("growthModalTitle");
const saveGrowthBtn = document.getElementById("saveGrowthBtn");

function fillGrowthForm(rec){
  document.getElementById("fDate").value = rec ? rec.date : "";
  document.getElementById("fHeight").value = rec ? rec.height : "";
  document.getElementById("fWeight").value = rec ? rec.weight : "";
  document.getElementById("fHead").value = rec ? rec.head : "";
  document.getElementById("fDoctor").value = rec ? rec.doctor : "Dr. Ananya Sharma";
  document.getElementById("fNotes").value = rec ? rec.notes : "";
}

function openAddGrowth(){
  document.getElementById("fEditIndex").value = "";
  growthModalTitle.textContent = "Add Growth Record";
  saveGrowthBtn.textContent = "Save Record";
  fillGrowthForm(null);
  growthOverlay.classList.add("show");
}

let editingRecordRef = null;

function openEditGrowth(rec){
  editingRecordRef = rec;
  growthModalTitle.textContent = "Edit Growth Record";
  saveGrowthBtn.textContent = "Update Record";
  fillGrowthForm(rec);
  growthOverlay.classList.add("show");
}

function closeGrowthModal(){ growthOverlay.classList.remove("show"); editingRecordRef = null; }

document.getElementById("addGrowthBtn").addEventListener("click", openAddGrowth);
document.getElementById("closeGrowthModal").addEventListener("click", closeGrowthModal);
document.getElementById("cancelGrowthModal").addEventListener("click", closeGrowthModal);
growthOverlay.addEventListener("click", (e) => { if (e.target === growthOverlay) closeGrowthModal(); });

saveGrowthBtn.addEventListener("click", () => {
  const date = document.getElementById("fDate").value;
  const height = parseFloat(document.getElementById("fHeight").value);
  const weight = parseFloat(document.getElementById("fWeight").value);
  const head = parseFloat(document.getElementById("fHead").value);
  const doctor = document.getElementById("fDoctor").value;
  const notes = document.getElementById("fNotes").value;

  if (!date || isNaN(height) || isNaN(weight) || isNaN(head)) {
    showToast("Please fill date, height, weight and head circumference");
    return;
  }

  if (editingRecordRef) {
    editingRecordRef.date = date;
    editingRecordRef.height = height;
    editingRecordRef.weight = weight;
    editingRecordRef.head = head;
    editingRecordRef.doctor = doctor;
    editingRecordRef.notes = notes;
    showToast(`Growth record for ${date} updated`);
  } else {
    if (!growthData[currentChildId]) growthData[currentChildId] = [];
    growthData[currentChildId].push({ date, height, weight, head, doctor, notes });
    showToast(`Growth record for ${date} added`);
  }

  closeGrowthModal();
  renderAll();
});

/* =========================================================
   VIEW MODAL (read-only, with hand-off to edit)
========================================================= */
const viewGrowthOverlay = document.getElementById("viewGrowthOverlay");
let viewingRecord = null;

function openViewGrowth(rec){
  viewingRecord = rec;
  const bmi = calcBMI(rec.height, rec.weight);
  const tag = bmiTag(bmi);
  document.getElementById("vDate").textContent = rec.date;
  document.getElementById("vDoctor").textContent = rec.doctor;
  document.getElementById("vHeight").textContent = rec.height + " cm";
  document.getElementById("vWeight").textContent = rec.weight + " kg";
  document.getElementById("vBmi").innerHTML = `<span class="bmi-tag ${tag.cls}">${bmi} &middot; ${tag.label}</span>`;
  document.getElementById("vHead").textContent = rec.head + " cm";
  document.getElementById("vNotes").textContent = rec.notes || "—";
  viewGrowthOverlay.classList.add("show");
}

function closeViewGrowth(){ viewGrowthOverlay.classList.remove("show"); viewingRecord = null; }

document.getElementById("closeViewGrowth").addEventListener("click", closeViewGrowth);
document.getElementById("closeViewGrowth2").addEventListener("click", closeViewGrowth);
viewGrowthOverlay.addEventListener("click", (e) => { if (e.target === viewGrowthOverlay) closeViewGrowth(); });

document.getElementById("viewToEditGrowthBtn").addEventListener("click", () => {
  if (!viewingRecord) return;
  closeViewGrowth();
  openEditGrowth(viewingRecord);
});

/* =========================================================
   TOAST
========================================================= */
let toastTimer;
function showToast(msg){
  const toast = document.getElementById("toast");
  document.getElementById("toastMsg").textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}

/* =========================================================
   MASTER RENDER
========================================================= */
function renderAll(){
  renderBanner();
  renderKPIs();
  renderCharts();
  renderTable();
}

searchInput.value = currentChild().name;
renderAll();