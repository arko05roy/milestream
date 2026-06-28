/**
 * MileStream demo app — formation moment + directory + GrowStreams gigs.
 * On-chain contractors: add to ON_CHAIN_CONTRACTORS after real Stack formation.
 * Demo formations: stored in localStorage, always labeled "mocked for demo".
 */

const ON_CHAIN_CONTRACTORS = [];

const STORAGE_KEY = "milestream_demo";
const HACD_PATTERN = /^[A-Z]{6}$/;
const STACK_COST_HAC = 50;
const MSTR_PER_LOT = 5000;

const routes = {
  "/": renderHome,
  "/form": renderForm,
  "/directory": renderDirectory,
  "/gig": renderGig,
  "/proof": renderProof,
};

// ── Storage ──────────────────────────────────────────────────────────

function loadDemo() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveDemo(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getDemoContractors() {
  return loadDemo().contractors || [];
}

function getDemoGigs() {
  return loadDemo().gigs || [];
}

function addDemoContractor(record) {
  const data = loadDemo();
  data.contractors = data.contractors || [];
  const exists = data.contractors.some((c) => c.contractorId === record.contractorId);
  if (exists) return false;
  data.contractors.push(record);
  saveDemo(data);
  return true;
}

function addDemoGig(gig) {
  const data = loadDemo();
  data.gigs = data.gigs || [];
  data.gigs.push(gig);
  saveDemo(data);
}

// ── Router ─────────────────────────────────────────────────────────

function parseRoute() {
  const hash = location.hash.slice(1) || "/";
  const [path, query] = hash.split("?");
  const params = new URLSearchParams(query || "");
  return { path: path || "/", params };
}

function navigate(path) {
  location.hash = path;
}

function setActiveNav(path) {
  document.querySelectorAll(".nav-links a").forEach((a) => {
    const route = a.getAttribute("data-route");
    a.classList.toggle("active", path.startsWith(`/${route}`));
  });
}

function render() {
  const { path, params } = parseRoute();
  const handler = routes[path] || routes["/"];
  setActiveNav(path);
  handler(params);
}

window.addEventListener("hashchange", render);
window.addEventListener("load", render);

// ── Helpers ────────────────────────────────────────────────────────

function el(tag, attrs = {}, children = "") {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "className") node.className = v;
    else if (k === "html") node.innerHTML = v;
    else if (k.startsWith("on")) node.addEventListener(k.slice(2).toLowerCase(), v);
    else node.setAttribute(k, v);
  }
  if (typeof children === "string") node.innerHTML = children;
  else if (children) node.append(...(Array.isArray(children) ? children : [children]));
  return node;
}

function formatTime(iso) {
  return new Date(iso).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function receiptHtml(record) {
  const statusClass = record.status === "formed" ? "status-formed" : "status-mocked";
  const statusLabel = record.status === "formed" ? "formed on-chain" : "mocked for demo";
  return `
    <div class="receipt">
      <h3>Formation receipt</h3>
      <div class="meta-row">
        <span class="meta-label">Contractor ID</span>
        <span class="meta-value">${record.contractorId}</span>
      </div>
      <div class="meta-row">
        <span class="meta-label">MSTR formed</span>
        <span class="meta-value">${record.mstrAmount.toLocaleString()}</span>
      </div>
      <div class="meta-row">
        <span class="meta-label">Stack cost</span>
        <span class="meta-value">${record.stackCostHac} HAC</span>
      </div>
      <div class="meta-row">
        <span class="meta-label">Formed at</span>
        <span class="meta-value">${formatTime(record.formedAt)}</span>
      </div>
      <div class="meta-row">
        <span class="meta-label">Status</span>
        <span class="meta-value"><span class="${statusClass}">${statusLabel}</span></span>
      </div>
      ${record.explorerUrl ? `
      <div class="meta-row">
        <span class="meta-label">Explorer</span>
        <span class="meta-value"><a href="${record.explorerUrl}" target="_blank" rel="noopener">Verify</a></span>
      </div>` : ""}
    </div>`;
}

function contractorCard(c, isDemo) {
  const proofLink = `#/proof?id=${c.contractorId}&demo=${isDemo ? "1" : "0"}`;
  const gigLink = `#/gig?contractor=${c.contractorId}`;
  const statusBadge = isDemo
    ? '<span class="status-mocked">mocked for demo</span>'
    : '<span class="status-formed">on-chain</span>';

  return `
    <div class="contractor-card">
      <div class="id">${c.contractorId}</div>
      <div class="role">${c.role || "Contractor"}${c.skills ? ` · ${c.skills}` : ""}</div>
      <div style="margin-top:0.5rem">${statusBadge}</div>
      <div class="card-actions">
        <a class="btn" href="${proofLink}">View proof</a>
        <a class="btn primary" href="${gigLink}">Fund gig</a>
        ${c.explorerUrl ? `<a class="btn" href="${c.explorerUrl}" target="_blank" rel="noopener">Explorer</a>` : ""}
      </div>
    </div>`;
}

// ── Views ──────────────────────────────────────────────────────────

function renderHome() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <header>
      <p class="eyebrow">HACD Incubator Season 2 · GrowStreams</p>
      <h1>Freelancer trust, formed through HACD.</h1>
      <p class="lead">PoW-backed contractor credentials + GrowStreams milestone payments for $50–$500 gigs.</p>
      <div class="actions">
        <a class="btn primary" href="#/form">Form credential</a>
        <a class="btn" href="#/directory">Browse directory</a>
        <a class="btn" href="https://hacd.it/launchpad" target="_blank" rel="noopener">HACD Launchpad</a>
        <a class="btn" href="https://www.growstreams.xyz/app/projects/HACD" target="_blank" rel="noopener">GrowStreams Quest</a>
      </div>
    </header>

    <section class="stats">
      <div class="stat"><span class="num">200</span><span class="label">HACD lots</span></div>
      <div class="stat"><span class="num">5,000</span><span class="label">MSTR per lot</span></div>
      <div class="stat"><span class="num">50</span><span class="label">HAC formation cost</span></div>
      <div class="stat"><span class="num">1M</span><span class="label">MSTR hard cap</span></div>
    </section>

    <section>
      <h2>The problem</h2>
      <p>Freelancers on Telegram, Discord, and informal platforms deliver work and never get paid. "Verified" badges are free to fake.</p>
    </section>

    <section>
      <h2>How it works</h2>
      <ol class="steps">
        <li><strong>Form</strong> — Stack MSTR on HACD (${STACK_COST_HAC} HAC per lot). Your 6-letter HACD name becomes your Contractor ID.</li>
        <li><strong>Verify</strong> — Formation is permanent on <a href="https://explorer.hacash.org" target="_blank" rel="noopener">explorer.hacash.org</a>.</li>
        <li><strong>Get paid</strong> — Clients fund milestone streams via <a href="https://www.growstreams.xyz" target="_blank" rel="noopener">GrowStreams</a> (25% start, 75% delivery).</li>
      </ol>
    </section>

    <section>
      <h2>Try the formation moment</h2>
      <p class="note">Stack a demo credential in under a minute. Real on-chain formation happens on the HACD Launchpad after approval.</p>
      <div class="actions">
        <a class="btn primary" href="#/form">Start formation →</a>
      </div>
    </section>`;
}

function renderForm() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <section>
      <p class="eyebrow">Formation moment</p>
      <h1>Form your contractor credential</h1>
      <p class="lead">Your 6-letter HACD name becomes a permanent Contractor ID. Stack cost: ${STACK_COST_HAC} HAC → ${MSTR_PER_LOT.toLocaleString()} MSTR.</p>
      <p class="note">This demo mocks the Stack step. Live formation uses <a href="https://hacd.it/launchpad" target="_blank" rel="noopener">hacd.it/launchpad</a>.</p>

      <form id="formation-form" style="margin-top:1.5rem">
        <div class="form-group">
          <label for="hacd-name">HACD name (Contractor ID)</label>
          <input id="hacd-name" type="text" maxlength="6" placeholder="e.g. ARKORO" autocomplete="off" />
          <p class="hint">6 uppercase letters A–Z. This is your unique PoW-mined container name.</p>
        </div>
        <div class="form-group">
          <label for="role">Role</label>
          <input id="role" type="text" placeholder="e.g. Frontend developer" />
        </div>
        <div class="form-group">
          <label for="skills">Skills (optional)</label>
          <input id="skills" type="text" placeholder="e.g. React, design systems" />
        </div>
        <div class="actions">
          <button type="submit" class="btn primary" id="stack-btn">Stack MSTR</button>
        </div>
      </form>
      <div id="formation-result"></div>
    </section>`;

  const nameInput = document.getElementById("hacd-name");
  nameInput.addEventListener("input", () => {
    nameInput.value = nameInput.value.toUpperCase().replace(/[^A-Z]/g, "").slice(0, 6);
  });

  document.getElementById("formation-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const contractorId = nameInput.value.trim();
    const role = document.getElementById("role").value.trim() || "Contractor";
    const skills = document.getElementById("skills").value.trim();
    const resultEl = document.getElementById("formation-result");
    const btn = document.getElementById("stack-btn");

    if (!HACD_PATTERN.test(contractorId)) {
      resultEl.innerHTML = `<p class="note" style="color:var(--warn)">Enter exactly 6 uppercase letters for your HACD name.</p>`;
      return;
    }

    const allIds = [
      ...ON_CHAIN_CONTRACTORS.map((c) => c.contractorId),
      ...getDemoContractors().map((c) => c.contractorId),
    ];
    if (allIds.includes(contractorId)) {
      resultEl.innerHTML = `<p class="note" style="color:var(--warn)">Contractor ID <span class="mono">${contractorId}</span> is already taken.</p>`;
      return;
    }

    btn.disabled = true;
    resultEl.innerHTML = `<div class="forming">Stacking MSTR on HACD ${contractorId}…</div>`;

    setTimeout(() => {
      const record = {
        contractorId,
        role,
        skills,
        mstrAmount: MSTR_PER_LOT,
        stackCostHac: STACK_COST_HAC,
        formedAt: new Date().toISOString(),
        status: "mocked",
      };
      addDemoContractor(record);

      resultEl.innerHTML = `
        ${receiptHtml(record)}
        <p style="margin-top:1rem">Your Contractor ID is now in the directory. Share your proof page with clients.</p>
        <div class="actions">
          <a class="btn primary" href="#/proof?id=${contractorId}&demo=1">Open proof page</a>
          <a class="btn" href="#/directory">View directory</a>
        </div>`;
      btn.disabled = false;
    }, 1800);
  });
}

function renderDirectory() {
  const app = document.getElementById("app");
  const onChain = ON_CHAIN_CONTRACTORS;
  const demo = getDemoContractors();

  const onChainHtml = onChain.length
    ? `<div class="contractor-grid">${onChain.map((c) => contractorCard(c, false)).join("")}</div>`
    : `<p class="empty-state">No contractors formed on-chain yet. After HACD Labs approval, Stack on the <a href="https://hacd.it/launchpad" target="_blank" rel="noopener">Launchpad</a>.</p>`;

  const demoHtml = demo.length
    ? `<div class="contractor-grid">${demo.map((c) => contractorCard(c, true)).join("")}</div>`
    : `<p class="empty-state">No demo formations yet. <a href="#/form">Form a credential</a> to try the flow.</p>`;

  app.innerHTML = `
    <section>
      <p class="eyebrow">Contractor directory</p>
      <h1>Verified contractors</h1>
      <p class="lead">Each Contractor ID is a unique HACD name with a permanent formation record. Costly to fake, easy to verify.</p>

      <p class="section-label">On-chain (${onChain.length})</p>
      ${onChainHtml}

      <p class="section-label">Demo formations (${demo.length})</p>
      <p class="note">Demo entries are stored locally and labeled mocked. They are not on explorer.hacash.org.</p>
      ${demoHtml}
    </section>`;
}

function renderProof(params) {
  const id = params.get("id");
  const isDemo = params.get("demo") === "1";
  const app = document.getElementById("app");

  let record = null;
  if (isDemo) {
    record = getDemoContractors().find((c) => c.contractorId === id);
  } else {
    record = ON_CHAIN_CONTRACTORS.find((c) => c.contractorId === id);
  }

  if (!record) {
    app.innerHTML = `
      <section>
        <h1>Contractor not found</h1>
        <p class="note">No formation record for <span class="mono">${id || "—"}</span>.</p>
        <div class="actions"><a class="btn" href="#/directory">Back to directory</a></div>
      </section>`;
    return;
  }

  app.innerHTML = `
    <section>
      <p class="eyebrow">Public proof — reviewer view</p>
      <h1>Contractor <span class="mono">${record.contractorId}</span></h1>
      <p class="lead">${record.role}${record.skills ? ` · ${record.skills}` : ""}</p>
      <p class="note">Anyone can open this page to verify the contractor's HACD formation record — not just the contractor.</p>

      ${receiptHtml(record)}

      <section style="margin-top:1.25rem;background:var(--bg)">
        <h3>Why this can't be faked</h3>
        <p>Each Contractor ID is tied to a PoW-mined HACD container. Formation cost (${STACK_COST_HAC} HAC) makes mass fake profiles expensive. Formation time cannot be backdated.</p>
      </section>

      <div class="actions" style="margin-top:1rem">
        <a class="btn primary" href="#/gig?contractor=${record.contractorId}">Fund a gig</a>
        <a class="btn" href="#/directory">Directory</a>
        ${record.explorerUrl ? `<a class="btn" href="${record.explorerUrl}" target="_blank" rel="noopener">Explorer</a>` : ""}
      </div>
    </section>`;
}

function renderGig(params) {
  const preselected = params.get("contractor") || "";
  const allContractors = [
    ...ON_CHAIN_CONTRACTORS.map((c) => ({ ...c, isDemo: false })),
    ...getDemoContractors().map((c) => ({ ...c, isDemo: true })),
  ];

  const app = document.getElementById("app");

  if (!allContractors.length) {
    app.innerHTML = `
      <section>
        <h1>Start a gig</h1>
        <p class="note">No contractors in the directory yet. <a href="#/form">Form a credential</a> first.</p>
      </section>`;
    return;
  }

  const options = allContractors
    .map((c) => `<option value="${c.contractorId}" ${c.contractorId === preselected ? "selected" : ""}>${c.contractorId} — ${c.role}${c.isDemo ? " (demo)" : ""}</option>`)
    .join("");

  app.innerHTML = `
    <section>
      <p class="eyebrow">GrowStreams milestone</p>
      <h1>Fund a gig</h1>
      <p class="lead">Clients fund a payment stream: 25% on job start, 75% on delivery confirmation.</p>
      <p class="note">This demo simulates stream creation. Live payments use <a href="https://www.growstreams.xyz" target="_blank" rel="noopener">GrowStreams</a> on Vara.</p>

      <form id="gig-form" style="margin-top:1.5rem">
        <div class="form-group">
          <label for="contractor">Contractor</label>
          <select id="contractor">${options}</select>
        </div>
        <div class="form-group">
          <label for="title">Gig title</label>
          <input id="title" type="text" placeholder="e.g. Landing page redesign" required />
        </div>
        <div class="form-group">
          <label for="amount">Total amount (USDT)</label>
          <input id="amount" type="number" min="50" max="500" step="1" value="200" required />
          <p class="hint">MileStream targets $50–$500 informal gigs.</p>
        </div>

        <p class="section-label" style="margin-top:0">Milestone split</p>
        <div class="milestone-bar"><div class="start"></div><div class="delivery"></div></div>
        <div class="milestone-legend">
          <span>25% on start</span>
          <span>75% on delivery</span>
        </div>

        <div class="actions" style="margin-top:1.25rem">
          <button type="submit" class="btn primary">Create stream (demo)</button>
        </div>
      </form>
      <div id="gig-result"></div>
    </section>`;

  document.getElementById("gig-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const contractorId = document.getElementById("contractor").value;
    const title = document.getElementById("title").value.trim();
    const amount = Number(document.getElementById("amount").value);
    const startPay = Math.round(amount * 0.25);
    const deliveryPay = amount - startPay;

    const gig = {
      id: `gig-${Date.now()}`,
      contractorId,
      title,
      amount,
      milestones: [
        { label: "Job start", percent: 25, amount: startPay, status: "pending" },
        { label: "Delivery", percent: 75, amount: deliveryPay, status: "locked" },
      ],
      createdAt: new Date().toISOString(),
      status: "demo",
    };
    addDemoGig(gig);

    document.getElementById("gig-result").innerHTML = `
      <div class="receipt">
        <h3>Stream created (demo)</h3>
        <div class="meta-row"><span class="meta-label">Gig</span><span class="meta-value">${title}</span></div>
        <div class="meta-row"><span class="meta-label">Contractor</span><span class="meta-value">${contractorId}</span></div>
        <div class="meta-row"><span class="meta-label">Total</span><span class="meta-value">$${amount} USDT</span></div>
        <div class="meta-row"><span class="meta-label">On start</span><span class="meta-value">$${startPay} (25%)</span></div>
        <div class="meta-row"><span class="meta-label">On delivery</span><span class="meta-value">$${deliveryPay} (75%)</span></div>
        <div class="meta-row"><span class="meta-label">Status</span><span class="meta-value"><span class="status-mocked">demo — not on GrowStreams</span></span></div>
      </div>
      <p style="margin-top:1rem">For live streams, fund via GrowStreams after wallet connect.</p>
      <div class="actions">
        <a class="btn primary" href="https://www.growstreams.xyz/app/projects/HACD" target="_blank" rel="noopener">Open GrowStreams</a>
        <a class="btn" href="#/proof?id=${contractorId}&demo=1">Contractor proof</a>
      </div>`;
  });
}
