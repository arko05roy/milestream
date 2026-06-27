/**
 * Contractor directory — only entries with verifiable explorer links.
 * Add entries here after on-chain Stack formation. Do not add mock data.
 */
const CONTRACTORS = [];

function renderContractors() {
  const el = document.getElementById("contractor-list");
  if (!CONTRACTORS.length) {
    el.className = "contractor-list empty";
    el.innerHTML = "<p>No contractors formed on-chain yet.</p>";
    return;
  }

  el.className = "contractor-list";
  el.innerHTML = CONTRACTORS.map((c) => `
    <div class="contractor-card">
      <strong>${c.contractorId}</strong>
      <div>${c.role || "Contractor"}</div>
      <a href="${c.explorerUrl}" target="_blank" rel="noopener">Verify on explorer</a>
    </div>
  `).join("");
}

renderContractors();
