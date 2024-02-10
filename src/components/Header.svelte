<script>
<<<<<<< HEAD
	import { onMount } from 'svelte';

	onMount(() => {
		const header = document.querySelector('#header');

		function toggleHeaderClass() {
			if (window.scrollY > 0) {
				header.classList.add('active');
			} else {
				header.classList.remove('active');
			}
		}

		toggleHeaderClass();

		window.addEventListener('scroll', toggleHeaderClass);

		return () => {
			window.removeEventListener('scroll', toggleHeaderClass);
		};
	});
</script>

<header id="header">
	<div class="header__wrap">
		<a href="#!" class="header__logo">
			<img src="/icons/logo-plane.svg" alt="plane" class="header__logo-pic" />
			<div class="header__logo-text">
				<h4 class="header__logo-name">JetSet Journey</h4>
				<p class="header__logo-slogan">Where Dreams Take Flight</p>
			</div>
		</a>
		<nav class="header__nav">
			<a href="#!" class="header__link">Main</a>
			<a href="#!" class="header__link">Services</a>
			<a href="#!" class="header__link">About</a>
			<a href="#!" class="header__link">FAQ</a>
			<a href="./views/contact-us.html" class="header__link">Contact Us</a>
		</nav>
		<div id="vertical-line"></div>
		<button class="header__travel">Plan your trip</button>
	</div>
</header>

<style>
	#header {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 999;
		transition: all 0.3s;
	}
	#header.active {
		background: var(--dark-blue);
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
	}

	.header__wrap {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 17px 32px;
	}

	.header__logo {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.header__logo-text {
		margin: 1px 0 0 5px;
	}

	.header__logo-name {
		color: var(--sky-blue);
		font-family: 'Lato';
		font-size: 15px;
		font-weight: 500;
		letter-spacing: 2px;
	}

	.header__logo-slogan {
		font-family: 'Lato';
		font-size: 12px;
		font-weight: 500;
		line-height: 18px;
	}

	.header__nav {
		display: flex;
		justify-content: flex-end;
		flex-grow: 1;
		margin-right: 28px;
		gap: 32px;
	}

	.header__link {
		position: relative;
		font-weight: 500;
		transition: color 0.2s;
	}
	.header__link:hover {
		color: var(--sky-blue);
	}
	.header__link::before {
		content: '';
		position: absolute;
		display: block;
		width: 100%;
		height: 1px;
		bottom: 0;
		left: 0;
		background-color: var(--sky-blue);
		transform: scaleX(0);
		transition: transform 0.3s ease;
	}
	.header__link:hover::before {
		transform: scaleX(1);
	}

	.header__travel {
		font-weight: 500;
		padding: 10px 14px;
		background-color: transparent;
		border: #fff 1px solid;
		border-radius: 4px;
		transition: all 0.3s;
	}
	.header__travel:hover {
		background-color: var(--night-blue);
		border: var(--night-blue) 1px solid;
	}

	#vertical-line {
		content: '';
		height: 24px;
		width: 1px;
		background: #fff;
		margin-right: 28px;
	}
</style>
=======

</script>

<header id="header">
    <div class="header__wrap">
        <a href="./index.html#intro" class="header__logo">
            <img src="./img/svg/logo-plane.svg" alt="plane" class="header__logo-pic">
            <div class="header__logo-text">
                <h4 class="header__logo-name">
                    JetSet Journey
                </h4>
                <p class="header__logo-slogan">
                    Where Dreams Take Flight
                </p>
            </div>
        </a>
        <nav class="header__nav">
            <a href="#intro" class="header__link">Main</a>
            <a href="#description" class="header__link">Services</a>
            <a href="#about" class="header__link">About</a>
            <a href="#!" class="header__link">FAQ</a>
            <a href="./views/contact-us.html" class="header__link">Contact Us</a>
        </nav>
        <div id="vertical-line"></div>
        <button class="header__travel">Plan your trip</button>
    </div>
</header>
>>>>>>> bbebd1e6848503e34b1de4dca49d0455742f3564
