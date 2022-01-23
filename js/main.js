const toggleMobileMenu = () => {
	const mobileMenu = document.querySelector('.mobilemenu');
	const mobileMenuSidebar = document.querySelector('.mobilemenu__sidebar');

	document.body.classList.contains('overflow-hidden')
		? document.body.classList.remove('overflow-hidden')
		: document.body.classList.add('overflow-hidden');

	mobileMenu.classList.contains('mobilemenu__open')
		? mobileMenu.classList.remove('mobilemenu__open')
		: mobileMenu.classList.add('mobilemenu__open');

	mobileMenuSidebar.classList.contains('mobilemenu__sidebar-active')
		? mobileMenuSidebar.classList.remove('mobilemenu__sidebar-active')
		: mobileMenuSidebar.classList.add('mobilemenu__sidebar-active');
};

const hideMobileMenu = () => {
	const mobileMenu = document.querySelector('.mobilemenu');
	const mobileMenuSidebar = document.querySelector('.mobilemenu__sidebar');

	mobileMenu.classList.contains('mobilemenu__open') &&
		mobileMenu.classList.remove('mobilemenu__open');

	mobileMenuSidebar.classList.contains('mobilemenu__sidebar-active') &&
		mobileMenuSidebar.classList.remove('mobilemenu__sidebar-active');

	document.body.classList.contains('overflow-hidden') &&
		document.body.classList.remove('overflow-hidden');
};

const toggleThemeMode = () => {
	const btn = document.querySelector('#mode-btn');
	const lightThemeIcon = btn.querySelector('#mode-btn .light');
	const darkThemeIcon = btn.querySelector('#mode-btn .dark');
	const currentTheme = btn.dataset.theme;

	if (currentTheme === 'light') {
		darkThemeIcon.classList.contains('hidden') &&
			darkThemeIcon.classList.replace('hidden', 'block');
		lightThemeIcon.classList.contains('block') &&
			lightThemeIcon.classList.replace('block', 'hidden');
		btn.dataset.theme = 'dark';
		document.documentElement.dataset.theme = 'dark';
		localStorage.setItem('theme', 'dark');
	} else {
		darkThemeIcon.classList.contains('block') &&
			darkThemeIcon.classList.replace('block', 'hidden');
		lightThemeIcon.classList.contains('hidden') &&
			lightThemeIcon.classList.replace('hidden', 'block');
		btn.dataset.theme = 'light';
		document.documentElement.dataset.theme = 'light';
		localStorage.setItem('theme', 'light');
	}
};

const setTheme = () => {
	const currentTheme = localStorage.getItem('theme') || 'light';
	const btn = document.querySelector('#mode-btn');
	const lightThemeIcon = btn.querySelector('#mode-btn .light');
	const darkThemeIcon = btn.querySelector('#mode-btn .dark');
	btn.dataset.theme = currentTheme;
	document.documentElement.dataset.theme = currentTheme;
	if (currentTheme === 'light') {
		darkThemeIcon.classList.contains('block') &&
			darkThemeIcon.classList.replace('block', 'hidden');
		lightThemeIcon.classList.contains('hidden') &&
			lightThemeIcon.classList.replace('hidden', 'block');
	} else {
		darkThemeIcon.classList.contains('hidden') &&
			darkThemeIcon.classList.replace('hidden', 'block');
		lightThemeIcon.classList.contains('block') &&
			lightThemeIcon.classList.replace('block', 'hidden');
	}
};

function main() {
	setTheme(); // set theme

	const mobileMenuBtn = document.querySelector('#menu-btn');
	mobileMenuBtn.addEventListener('click', toggleMobileMenu);
	const mobileMenuOverlay = document.querySelector('.mobilemenu__overlay');
	mobileMenuOverlay.addEventListener('click', hideMobileMenu);
	const hideMobileMenuBtn = document.querySelector('#hide-mobilemenu');
	hideMobileMenuBtn.addEventListener('click', hideMobileMenu);

	// mobile menu links
	const mobileMenuLinks = document.querySelectorAll('.mobilemenu__link');
	mobileMenuLinks.forEach((link) => {
		link.addEventListener('click', hideMobileMenu);
	});

	// theme mode button
	const modeBtn = document.querySelector('#mode-btn');
	modeBtn.addEventListener('click', toggleThemeMode);

	// scroll to top
	const scrollToTop = document.getElementById('scroll-top');
	window.addEventListener('scroll', () => {
		scrollToTop.style.opacity = window.scrollY > 500 ? 1 : 0;
	});

	scrollToTop.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	});

	// copyright year text
	document.getElementById('copyright-year').innerText =
		new Date().getFullYear();
}

main();
