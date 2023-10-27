import './menu.css';

function menu() {
	const menuSection = document.createElement('section');
	menuSection.classList.add('content-section');
	menuSection.innerHTML = `
		<h2 class="text-theme text-uppercase text-center">Galley Grub</h2>
		<div class="menu-items mt-2">
			<div>
				<ul>
					<li>
						<div class="menu-line">
							<p class="text-uppercase">Krabby Patty</p>
							<span class="menu-middle"></span>
							<p>1.25</p>
						</div>
						<div class="menu-line ml-2">
							<p class="menu-add-on">w/sea cheese</p>
							<span class="menu-middle"></span>
							<p>1.25</p>
						</div>
					</li>
					<li class="mt-1">
						<div class="menu-line">
							<p class="text-uppercase">Double Krabby Patty</p>
							<span class="menu-middle"></span>
							<p>2.00</p>
						</div>
						<div class="menu-line ml-2">
							<p class="menu-add-on">w/sea cheese</p>
							<span class="menu-middle"></span>
							<p>2.25</p>
						</div>
					</li>
					<li class="mt-1">
						<div class="menu-line">
							<p class="text-uppercase">Triple Krabby Patty</p>
							<span class="menu-middle"></span>
							<p>3.00</p>
						</div>
						<div class="menu-line ml-2">
							<p class="menu-add-on">w/sea cheese</p>
							<span class="menu-middle"></span>
							<p>3.25</p>
						</div>
					</li>
				</ul>
				<section class="mt-2">
					<h3 class="fw-400 text-uppercase">Coral Bits</h3>
					<ul>
						<li class="menu-line mt-1">
							<p>Small</p>
							<span class="menu-middle"></span>
							<p>1.00</p>
						</li>
						<li class="menu-line">
							<p>Medium</p>
							<span class="menu-middle"></span>
							<p>1.25</p>
						</li>
						<li class="menu-line">
							<p>Large</p>
							<span class="menu-middle"></span>
							<p>1.50</p>
						</li>
					</ul>
				</section>
				<ul class="mt-2">
					<li>
						<div class="menu-line">
							<p class="text-uppercase">Kelp Rings</p>
							<span class="menu-middle"></span>
							<p>1.50</p>
						</div>
						<div class="menu-line ml-2">
							<p class="menu-add-on">salty sauce</p>
							<span class="menu-middle"></span>
							<p>.50</p>
						</div>
					</li>
				</ul>
			</div>
			<div>
				<ul>
					<li class="menu-line">
						<p class="text-uppercase">Krabby Meal</p>
						<div class="menu-middle"></div>
						<p class="menu-item-price">3.50</p>
					</li>
					<li class="menu-line">
						<p class="text-uppercase">Double Krabby M</p>
						<div class="menu-middle"></div>
						<p class="menu-item-price">3.75</p>
					</li>
					<li class="menu-line">
						<p class="text-uppercase">Triple Krabby Me</p>
						<div class="menu-middle"></div>
						<p class="menu-item-price">4.00</p>
					</li>
					<li class="menu-line">
						<p class="text-uppercase">Salty Sea Dog</p>
						<div class="menu-middle"></div>
						<p class="menu-item-price">1.25</p>
					</li>
					<li class="menu-line">
						<p class="text-uppercase">Footlong</p>
						<div class="menu-middle"></div>
						<p class="menu-item-price">2.00</p>
					</li>
					<li class="menu-line">
						<p class="text-uppercase">Sailors Surprise</p>
						<div class="menu-middle"></div>
						<p class="menu-item-price">3.00</p>
					</li>
					<li class="menu-line ml-1">
						<p class="text-uppercase">Golden Loaf</p>
						<div class="menu-middle"></div>
						<p class="menu-item-price">2.00</p>
					</li>
					<li class="menu-line ml-2">
						<p>w/sauce</p>
						<div class="menu-middle"></div>
						<p>2.50</p>
					</li>
					<li class="mt-2">
						<div class="menu-line">
							<p class="text-uppercase">Kelp Shake</p>
							<div class="menu-middle"></div>
							<p class="menu-item-price">2.00</p>
						</div>
					</li>
				</ul>
				<section class="seaform-soda-content mt-1">
					<h3 class="fw-400 text-uppercase text-center">Seaform Soda</h3>
					<ul class="mt-1">
						<li class="menu-line">
							<p>Small</p>
							<span class="menu-middle"></span>
							<p>1.00</p>
						</li>
						<li class="menu-line">
							<p>Medium</p>
							<span class="menu-middle"></span>
							<p>1.25</p>
						</li>
						<li class="menu-line">
							<p>Large</p>
							<span class="menu-middle"></span>
							<p>1.50</p>
						</li>
					</ul>
				</section>
			</div>
		</div>
	`;
	return menuSection;
}

export default menu;
