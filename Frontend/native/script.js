let games = [];

const searchInput = document.getElementById('searchInput');
const yearFilter = document.getElementById('yearFilter');
const sortFilter = document.getElementById('sortFilter');
const gameGrid = document.getElementById('gameGrid');
const emptyState = document.getElementById('emptyState');
const gameCount = document.getElementById('gameCount');

function getIgrs(rating) {
  if (rating >= 9.5) return { label: 'SU', color: 'bg-[#34c759]' };
  if (rating >= 9.0) return { label: '18+', color: 'bg-[#ff3b30]' };
  if (rating >= 8.5) return { label: '13+', color: 'bg-[#ff9500]' };
  return { label: '7+', color: 'bg-[#ffcc00]' };
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function renderCards(data) {
  if (data.length === 0) {
    gameGrid.innerHTML = '';
    emptyState.classList.remove('hidden');
    gameCount.textContent = '';
    return;
  }
  emptyState.classList.add('hidden');
  gameCount.textContent = `${data.length} game`;

  gameGrid.innerHTML = data.map(game => {
    const igrs = getIgrs(game.rating);
    return `
      <div class="bg-white border border-[#e9e7e2] p-6 hover:border-[#1a1c1e] transition-all duration-300 group cursor-pointer">
        <div class="flex items-start justify-between mb-4">
          <span class="font-mono text-[10px] uppercase tracking-wider bg-[#1a1c1e] text-[#fcfbf9] px-2 py-1">${escapeHtml(game.game_code)}</span>
          <span class="font-mono text-xs text-[#8a8881]">${game.year}</span>
        </div>
        <h3 class="font-serif text-xl font-semibold mb-4 group-hover:text-[#ff3b30] transition-colors">${escapeHtml(game.name)}</h3>
        <div class="flex items-center justify-between">
          <div class="flex items-baseline gap-1.5">
            <span class="text-lg font-mono font-bold text-[#1a1c1e]">${game.rating}</span>
            <span class="text-yellow-400 text-sm">&#9733;</span>
          </div>
          <span class="font-mono text-[10px] uppercase tracking-wider ${igrs.color}/10 text-white px-2 py-1 rounded-full" style="background:${igrs.color}20;color:${igrs.color}">${igrs.label}</span>
        </div>
      </div>
    `;
  }).join('');
}

function filterAndSort() {
  const search = searchInput.value.toLowerCase().trim();
  const year = yearFilter.value;
  const sort = sortFilter.value;

  let filtered = games.filter(g => {
    const matchSearch = g.name.toLowerCase().includes(search) || g.game_code.toLowerCase().includes(search);
    const matchYear = year === 'all' || String(g.year) === year;
    return matchSearch && matchYear;
  });

  const [field, dir] = sort.split('-');
  filtered.sort((a, b) => {
    let val = 0;
    if (field === 'name') val = a.name.localeCompare(b.name);
    else if (field === 'rating') val = a.rating - b.rating;
    else if (field === 'year') val = a.year - b.year;
    return val;
  });
  if (dir === 'desc') filtered.reverse();

  renderCards(filtered);
}

function populateYearFilter() {
  const years = [...new Set(games.map(g => g.year))].sort((a, b) => b - a);
  yearFilter.innerHTML = '<option value="all">Semua Tahun</option>' +
    years.map(y => `<option value="${y}">${y}</option>`).join('');
}

async function loadGames() {
  try {
    const res = await fetch(`${CONFIG.API_BASE_URL}/game`);
    if (!res.ok) throw new Error('API unavailable');
    const json = await res.json();
    games = json.payload.data;
  } catch {
    console.warn('Backend tidak tersedia, pakai dummy.json');
    const res = await fetch('dummy.json');
    const json = await res.json();
    games = json.payload.data;
  }
  populateYearFilter();
  filterAndSort();
}

loadGames();

searchInput.addEventListener('input', filterAndSort);
yearFilter.addEventListener('change', filterAndSort);
sortFilter.addEventListener('change', filterAndSort);
