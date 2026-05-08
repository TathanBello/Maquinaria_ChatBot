/**
 * @param {{ title: string; subtitle?: string; badge?: string; bgImage?: string; actions?: string }} opts
 */
export function buildHeroHTML(opts) {
  const bg = opts.bgImage || 'https://placehold.co/1200x500/1c2530/4a7c2e?text=HeavyAI';
  return `
    <section class="hero animate-fade-in">
      <div class="hero__media" style="background-image:url('${bg}')"></div>
      <div class="hero__gradient"></div>
      <div class="hero__content">
        ${opts.badge ? `<div class="hero__badge"><i class="fa-solid fa-microchip" aria-hidden="true"></i> ${opts.badge}</div>` : ''}
        <h1>${opts.title}</h1>
        ${opts.subtitle ? `<p class="lead">${opts.subtitle}</p>` : ''}
        ${opts.actions ? `<div class="hero__actions">${opts.actions}</div>` : ''}
      </div>
    </section>
  `;
}
