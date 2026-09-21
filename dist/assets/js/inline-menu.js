(() => {
  'use strict';

  const categories = [
    { id: 'ensaladas', label: 'Ensaladas', note: 'Frescas y para compartir.' },
    { id: 'tapas', label: 'Tapas y entrantes', note: 'Pequeños bocados, grandes encuentros.' },
    { id: 'carnes', label: 'Carnes', note: 'Sabores intensos en cada plato.' },
    { id: 'pescados', label: 'Pescados y mariscos', note: 'Del mar a la mesa.' },
    { id: 'pasta', label: 'Pasta', note: 'Recetas para compartir.' },
    { id: 'infantil', label: 'Menú infantil', note: 'Opciones pensadas para los pequeños.' }
  ];

  const dishes = [
    { id: 'ensalada-rusa', category: 'ensaladas', name: 'Ensalada Rusa', price: '6,00 €', amount: 6 },
    { id: 'ensalada-mixta', category: 'ensaladas', name: 'Ensalada Mixta', price: '8,00 €', amount: 8 },
    { id: 'ensalada-griega', category: 'ensaladas', name: 'Ensalada Griega', price: '9,50 €', amount: 9.5 },
    { id: 'ensalada-cesar', category: 'ensaladas', name: 'Ensalada César', price: '9,50 €', amount: 9.5 },
    { id: 'ensalada-armenia', category: 'ensaladas', name: 'Ensalada Armenia', price: '12,00 €', amount: 12 },

    { id: 'gildas-vascas', category: 'tapas', name: 'Gildas Vascas (4 uds.)', price: '6,80 €', amount: 6.8 },
    { id: 'rollo-berenjena-queso-nueces', category: 'tapas', name: 'Rollo de berenjena con queso y nueces', price: '6,50 €', amount: 6.5 },
    { id: 'crepes-pollo-champinones', category: 'tapas', name: 'Crepes con pollo y champiñones (ud.)', price: '3,00 €', amount: 3 },
    { id: 'crepes-ternera', category: 'tapas', name: 'Crepes con ternera (ud.)', price: '3,50 €', amount: 3.5 },
    { id: 'marineras-anchoa', category: 'tapas', name: 'Marineras con anchoa del Cantábrico (3 uds.)', price: '8,40 €', amount: 8.4 },
    { id: 'croquetas-jamon', category: 'tapas', name: 'Croquetas de jamón con ensalada (3 uds.)', price: '8,90 €', amount: 8.9 },
    { id: 'croquetas-pollo', category: 'tapas', name: 'Croquetas de pollo con ensalada (3 uds.)', price: '8,90 €', amount: 8.9 },
    { id: 'txistorra-txakoli', category: 'tapas', name: 'Txistorra al txakoli de Navarra', price: '9,80 €', amount: 9.8 },
    { id: 'morcilla-burgos', category: 'tapas', name: 'Morcilla de Burgos a la plancha', price: '9,90 €', amount: 9.9 },
    { id: 'patatas-iwona', category: 'tapas', name: 'Patatas Iwona (bacon, huevo y queso rallado)', price: '9,90 €', amount: 9.9 },
    { id: 'patatas-pesto', category: 'tapas', name: 'Patatas en salsa pesto con aguacate, mango y queso fundido', price: '9,90 €', amount: 9.9 },
    { id: 'torre-berenjena', category: 'tapas', name: 'Torre de berenjena con crema de queso de cabra, nueces y miel de montaña', price: '9,60 €', amount: 9.6 },
    { id: 'huevos-txistorra', category: 'tapas', name: 'Huevos rotos con patatas y txistorra', price: '12,50 €', amount: 12.5 },
    { id: 'huevos-morcilla', category: 'tapas', name: 'Huevos rotos con patatas y morcilla de Burgos', price: '12,90 €', amount: 12.9 },
    { id: 'pimientos-piquillo-bacalao', category: 'tapas', name: 'Pimientos del piquillo rellenos de bacalao a la vizcaína', price: '12,90 €', amount: 12.9 },
    { id: 'plato-queso-jamon', category: 'tapas', name: 'Plato de queso y jamón', price: '14,50 €', amount: 14.5 },

    { id: 'pechuga-pollo', category: 'carnes', name: 'Pechuga de pollo a la plancha', price: '9,00 €', amount: 9 },
    { id: 'chuleta-cerdo', category: 'carnes', name: 'Chuleta de cerdo a la plancha', price: '9,90 €', amount: 9.9 },
    { id: 'muslitos-pollo-picante', category: 'carnes', name: 'Muslitos de alas de pollo campero en salsa picante', price: '9,80 €', amount: 9.8 },
    { id: 'pollo-milanesa', category: 'carnes', name: 'Pollo a la milanesa', price: '12,00 €', amount: 12 },
    { id: 'secreto-cerdo-frutos-bosque', category: 'carnes', name: 'Secreto de cerdo al horno con salsa de frutos del bosque', price: '12,50 €', amount: 12.5 },
    { id: 'solomillo-manzana', category: 'carnes', name: 'Solomillo de cerdo en salsa de manzana', price: '13,60 €', amount: 13.6 },
    { id: 'chuleta-cordero', category: 'carnes', name: 'Chuleta de cordero a la plancha', price: '17,00 €', amount: 17 },
    { id: 'entrecot', category: 'carnes', name: 'Entrecot', price: '21,00 €', amount: 21 },
    { id: 'chuleton-vaca', category: 'carnes', name: 'Chuletón de vaca a la plancha (precio por 100 g)', price: '4,90 € / 100 g', amount: null },

    { id: 'bonito-norte', category: 'pescados', name: 'Bonito del Norte con cebolla caramelizada o salsa verde (precio por 100 g)', price: '3,90 € / 100 g', amount: null },
    { id: 'lubina-horno', category: 'pescados', name: 'Lubina al horno (precio por 100 g)', price: '3,90 € / 100 g', amount: null },
    { id: 'dorada-plancha', category: 'pescados', name: 'Dorada a la plancha (precio por 100 g)', price: '3,90 € / 100 g', amount: null },
    { id: 'salmon-torre-verduras', category: 'pescados', name: 'Salmón a la plancha sobre torre de verduras y crema de limón con ajo', price: '16,80 €', amount: 16.8 },
    { id: 'pata-pulpo', category: 'pescados', name: 'Pata de pulpo a la plancha (precio por 10 g)', price: '0,90 € / 10 g', amount: null },
    { id: 'sepia-puerro-bacon', category: 'pescados', name: 'Sepia salteada con puerro y bacon', price: '11,90 €', amount: 11.9 },
    { id: 'revuelto-kokotxas-gambas', category: 'pescados', name: 'Revuelto de kokotxas con gambas', price: '16,50 €', amount: 16.5 },

    { id: 'espagueti-mango-aguacate-pesto', category: 'pasta', name: 'Espagueti con mango, aguacate y pesto', price: '12,00 €', amount: 12 },
    { id: 'espagueti-bolonesa', category: 'pasta', name: 'Espagueti boloñesa', price: '12,00 €', amount: 12 },
    { id: 'espagueti-carbonara', category: 'pasta', name: 'Espagueti carbonara', price: '13,00 €', amount: 13 },
    { id: 'espagueti-marinera', category: 'pasta', name: 'Espagueti marinera', price: '15,00 €', amount: 15 },

    { id: 'fingers-pollo', category: 'infantil', name: 'Fingers de pollo con huevo y patatas fritas', price: '9,80 €', amount: 9.8 },
    { id: 'pescado-rebozado', category: 'infantil', name: 'Pescado rebozado con patatas fritas', price: '8,90 €', amount: 8.9 }
  ];

  const storageKey = 'nomeolvides-delivery-selection-v1';
  const root = document.querySelector('[data-inline-menu]');
  if (!root) return;

  const categoryById = new Map(categories.map((category) => [category.id, category]));
  const dishById = new Map(dishes.map((dish) => [dish.id, dish]));
  const image = (dish) => `/assets/menu-dishes/${dish.id}.jpg`;
  const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
  const money = (value) => new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(value);

  let selectedCategory = 'tapas';
  let selection = loadSelection();

  function loadSelection() {
    try {
      const saved = JSON.parse(window.localStorage.getItem(storageKey) || '[]');
      return Array.isArray(saved) ? saved.filter((entry) => dishById.has(entry.id) && Number.isInteger(entry.quantity) && entry.quantity > 0) : [];
    } catch (_) {
      return [];
    }
  }

  function saveSelection() {
    try { window.localStorage.setItem(storageKey, JSON.stringify(selection)); } catch (_) { /* storage is optional */ }
  }

  function selectedItems() {
    return selection.map((entry) => ({ ...entry, dish: dishById.get(entry.id) })).filter((entry) => entry.dish);
  }

  function itemCount() {
    return selection.reduce((total, entry) => total + entry.quantity, 0);
  }

  function categoryTabs() {
    return categories.map((category) => `<button class="inline-menu__tab${category.id === selectedCategory ? ' is-active' : ''}" type="button" data-category="${category.id}" aria-pressed="${category.id === selectedCategory}">${escapeHtml(category.label)}</button>`).join('');
  }

  function dishCard(dish, mode = 'full') {
    const prompt = dish.amount === null ? 'Consultar para delivery' : 'Añadir a delivery';
    return `<article class="dish-card dish-card--${mode}">
      <button class="dish-card__image" type="button" data-open-dish="${dish.id}" aria-label="Ver ${escapeHtml(dish.name)}">
        <img src="${image(dish)}" alt="Imagen orientativa de ${escapeHtml(dish.name)}" loading="lazy" onerror="this.closest('.dish-card__image').classList.add('is-pending');this.remove();">
      </button>
      <div class="dish-card__copy">
        <p class="dish-card__category">${escapeHtml(categoryById.get(dish.category).label)}</p>
        <h3>${escapeHtml(dish.name)}</h3>
        <p class="dish-card__price">${escapeHtml(dish.price)}</p>
        <div class="dish-card__actions">
          <button class="text-button" type="button" data-open-dish="${dish.id}">Ver plato</button>
          <button class="add-button" type="button" data-add-dish="${dish.id}">${prompt} <span aria-hidden="true">+</span></button>
        </div>
      </div>
    </article>`;
  }

  function render() {
    const category = categoryById.get(selectedCategory);
    const featured = dishes.filter((dish) => dish.category === selectedCategory).slice(0, 3);
    root.innerHTML = `
      <div class="inline-menu__inner">
        <div class="inline-menu__topline">
          <p class="inline-menu__eyebrow">Cocina que une culturas</p>
          <button class="delivery-toggle" type="button" data-cart-toggle aria-expanded="false">Mi selección <span data-cart-count>${itemCount()}</span></button>
        </div>
        <div class="inline-menu__tabs" role="tablist" aria-label="Categorías de la carta">${categoryTabs()}</div>
        <div class="inline-menu__intro">
          <div><p class="inline-menu__label">${escapeHtml(category.label)}</p><h2>${escapeHtml(category.note)}</h2></div>
          <p>Elige un plato para ver su ficha o añádelo a tu selección de delivery.</p>
        </div>
        <div class="inline-menu__preview">${featured.map((dish) => dishCard(dish, 'preview')).join('')}</div>
        <div class="inline-menu__reveal">
          <button class="reveal-button" type="button" data-expand-menu aria-controls="full-menu"><span>Ver carta completa</span><small>${dishes.length} platos</small><b aria-hidden="true">↓</b></button>
        </div>
        <div id="full-menu" class="inline-menu__full" hidden></div>
        <aside class="delivery-cart" data-delivery-cart hidden aria-label="Selección para delivery"></aside>
      </div>
      <dialog class="dish-dialog" data-dish-dialog aria-labelledby="dish-dialog-title">
        <button class="dish-dialog__close" type="button" data-close-dish aria-label="Cerrar ficha">×</button>
        <div data-dish-dialog-content></div>
      </dialog>`;
    renderCart();
  }

  function renderFullMenu() {
    const target = root.querySelector('#full-menu');
    target.innerHTML = `<p class="inline-menu__full-note">Carta completa. Las imágenes son orientativas; disponibilidad, ingredientes y alérgenos se confirman con el restaurante.</p>${categories.map((category) => {
      const items = dishes.filter((dish) => dish.category === category.id);
      return `<details class="menu-category" open><summary><span>${escapeHtml(category.label)}</span><small>${items.length} platos</small><b aria-hidden="true">⌄</b></summary><div class="menu-category__grid">${items.map((dish) => dishCard(dish)).join('')}</div></details>`;
    }).join('')}`;
  }

  function openDish(id) {
    const dish = dishById.get(id);
    if (!dish) return;
    const dialog = root.querySelector('[data-dish-dialog]');
    const related = dishes.filter((candidate) => candidate.category === dish.category && candidate.id !== dish.id).slice(0, 4);
    dialog.querySelector('[data-dish-dialog-content]').innerHTML = `
      <div class="dish-dialog__layout">
        <div class="dish-dialog__photo"><img src="${image(dish)}" alt="Imagen orientativa de ${escapeHtml(dish.name)}" onerror="this.closest('.dish-dialog__photo').classList.add('is-pending');this.remove();"></div>
        <div class="dish-dialog__details">
          <p class="dish-dialog__eyebrow">${escapeHtml(categoryById.get(dish.category).label)}</p>
          <h2 id="dish-dialog-title">${escapeHtml(dish.name)}</h2>
          <p class="dish-dialog__notice">Ficha de plato: consulta con nuestro equipo los ingredientes exactos, alérgenos y disponibilidad del día.</p>
          <div class="dish-dialog__facts">
            <div><span>Precio</span><strong>${escapeHtml(dish.price)}</strong></div>
            <div><span>Para delivery</span><strong>${dish.amount === null ? 'Peso a confirmar' : 'Disponible para añadir'}</strong></div>
            <div><span>Imagen</span><strong>Orientativa</strong></div>
          </div>
          <button class="dish-dialog__add" type="button" data-add-dish="${dish.id}">${dish.amount === null ? 'Añadir para consultar' : 'Añadir a delivery'} <span aria-hidden="true">+</span></button>
          <div class="dish-dialog__related"><p>Más platos de ${escapeHtml(categoryById.get(dish.category).label)}</p>${related.map((relatedDish) => `<button type="button" data-open-dish="${relatedDish.id}"><span>${escapeHtml(relatedDish.name)}</span><em>${escapeHtml(relatedDish.price)}</em></button>`).join('')}</div>
        </div>
      </div>`;
    if (typeof dialog.showModal === 'function') dialog.showModal(); else dialog.setAttribute('open', '');
  }

  function addDish(id) {
    const dish = dishById.get(id);
    if (!dish) return;
    const existing = selection.find((entry) => entry.id === id);
    if (existing) existing.quantity += 1;
    else selection.push({ id, quantity: 1 });
    saveSelection();
    renderCart();
  }

  function adjustDish(id, delta) {
    const entry = selection.find((candidate) => candidate.id === id);
    if (!entry) return;
    entry.quantity += delta;
    selection = selection.filter((candidate) => candidate.quantity > 0);
    saveSelection();
    renderCart();
  }

  function renderCart() {
    const panel = root.querySelector('[data-delivery-cart]');
    const count = root.querySelector('[data-cart-count]');
    if (count) count.textContent = itemCount();
    const items = selectedItems();
    if (!items.length) {
      panel.innerHTML = `<div class="delivery-cart__head"><p>Mi selección de delivery</p><button type="button" data-cart-close aria-label="Cerrar">×</button></div><p class="delivery-cart__empty">Todavía no has añadido platos.</p>`;
      return;
    }
    const estimatedTotal = items.reduce((total, item) => total + (item.dish.amount === null ? 0 : item.dish.amount * item.quantity), 0);
    const hasWeightPrices = items.some((item) => item.dish.amount === null);
    panel.innerHTML = `<div class="delivery-cart__head"><p>Mi selección de delivery <span>${itemCount()}</span></p><button type="button" data-cart-close aria-label="Cerrar">×</button></div>
      <div class="delivery-cart__items">${items.map((item) => `<div class="delivery-cart__item"><div><strong>${escapeHtml(item.dish.name)}</strong><small>${escapeHtml(item.dish.price)}${item.dish.amount === null ? ' · importe a confirmar' : ''}</small></div><div class="quantity"><button type="button" data-adjust-dish="${item.dish.id}" data-delta="-1" aria-label="Quitar una unidad">−</button><span>${item.quantity}</span><button type="button" data-adjust-dish="${item.dish.id}" data-delta="1" aria-label="Añadir una unidad">+</button></div></div>`).join('')}</div>
      <div class="delivery-cart__total"><span>Subtotal estimado</span><strong>${money(estimatedTotal)}</strong></div>
      ${hasWeightPrices ? '<p class="delivery-cart__note">Los platos con precio por peso se confirman antes del pedido.</p>' : ''}
      <button class="delivery-cart__copy" type="button" data-copy-selection>Copiar selección</button>`;
  }

  async function copySelection() {
    const lines = selectedItems().map((item) => `${item.quantity} × ${item.dish.name} — ${item.dish.price}`);
    const text = `NoMeOlvides — selección para delivery\n${lines.join('\n')}`;
    const button = root.querySelector('[data-copy-selection]');
    try {
      await navigator.clipboard.writeText(text);
      if (button) button.textContent = 'Selección copiada';
    } catch (_) {
      if (button) button.textContent = 'Copia la lista manualmente';
    }
  }

  root.addEventListener('click', (event) => {
    const target = event.target.closest('button');
    if (!target) return;
    if (target.dataset.category) {
      selectedCategory = target.dataset.category;
      render();
      return;
    }
    if (target.dataset.expandMenu !== undefined) {
      const full = root.querySelector('#full-menu');
      renderFullMenu();
      full.hidden = false;
      root.classList.add('is-expanded');
      target.closest('.inline-menu__reveal').hidden = true;
      full.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    if (target.dataset.openDish) { openDish(target.dataset.openDish); return; }
    if (target.dataset.closeDish !== undefined) {
      const dialog = root.querySelector('[data-dish-dialog]');
      if (typeof dialog.close === 'function') dialog.close(); else dialog.removeAttribute('open');
      return;
    }
    if (target.dataset.addDish) { addDish(target.dataset.addDish); return; }
    if (target.dataset.adjustDish) { adjustDish(target.dataset.adjustDish, Number(target.dataset.delta)); return; }
    if (target.dataset.cartToggle !== undefined) {
      const panel = root.querySelector('[data-delivery-cart]');
      panel.hidden = !panel.hidden;
      target.setAttribute('aria-expanded', String(!panel.hidden));
      return;
    }
    if (target.dataset.cartClose !== undefined) {
      root.querySelector('[data-delivery-cart]').hidden = true;
      root.querySelector('[data-cart-toggle]').setAttribute('aria-expanded', 'false');
      return;
    }
    if (target.dataset.copySelection !== undefined) copySelection();
  });

  render();
})();
