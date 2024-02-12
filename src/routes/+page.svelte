<script>
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
</script>

<head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Lato&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
		rel="stylesheet"
	/>
</head>

<Header />

<main class="main">
	<section id="intro">
		<div class="wrapper-full">
			<div class="intro__wrap">
				<div class="intro__image">
					<img src="/images/intro-village.jpg" class="intro__image-pic" alt="village" />
				</div>
				<div class="intro__text">
					<h1 class="intro__text-title">Discover Ukraine:</h1>
					<h2 class="intro__text-subtitle">An amazing journey awaits!</h2>
				</div>
			</div>
		</div>
	</section>

	<section id="description">
		<div class="wrapper">
			<div class="description__wrap">
				<div class="description__offer">
					<p class="description__text">
						Introducing JetSet Journey, your premier travel agency located in Kherson. We specialize
						in creating unforgettable travel experiences for our clients, offering personalized
						itineraries, exclusive deals, and top-notch customer service. Whether you're planning a
						relaxing beach getaway or an adventurous expedition, JetSet Journey is here to make your
						travel dreams a reality. Contact us today to start planning your next unforgettable
						journey.
					</p>
					<button class="description__book">Book Now</button>
				</div>
				<h2 class="description__title">Our Services</h2>
				<div class="description__services">
					<a href="#!" class="description__item">
						<img src="/images/description-girl.jpg" alt="girl" class="description__item-pic" />
						<h3 class="description__item-title">Customized Travel Packages</h3>
						<p class="description__item-text">
							Let us plan your dream vacation with our personalized travel packages tailored to your
							preferences.
						</p>
					</a>
					<a href="#!" class="description__item">
						<img
							src="/images/description-luggage.jpg"
							alt="luggage"
							class="description__item-pic"
						/>
						<h3 class="description__item-title">Guided Tours and Excursions</h3>
						<p class="description__item-text">
							Explore the best attractions with our knowledgeable guides and curated excursions for
							an unforgettable experience.
						</p>
					</a>
					<a href="#!" class="description__item">
						<img
							src="/images/description-stuff.jpg"
							alt="travelling stuff"
							class="description__item-pic"
						/>
						<h3 class="description__item-title">Consultation and Assistance</h3>
						<p class="description__item-text">
							Receive expert advice and support from our travel specialists to ensure a smooth and
							stress-free journey.
						</p>
					</a>
				</div>
			</div>
		</div>
	</section>

	<section id="gallery">
		<div class="wrapper">
			<div class="gallery__wrap">
				<a href="/images/gallery-night-mountains.jpg" class="gallery__image" target="_blank">
					<img
						src="/images/gallery-night-mountains.jpg"
						alt="night mountains"
						class="gallery__image-pic"
					/>
				</a>
				<a href="/images/gallery-plane.jpg" class="gallery__image" target="_blank">
					<img src="/images/gallery-plane.jpg" alt="" class="gallery__image-pic" />
				</a>
				<a href="/images/gallery-sunrise.jpg" class="gallery__image" target="_blank">
					<img src="/images/gallery-sunrise.jpg" alt="" class="gallery__image-pic" />
				</a>
				<a href="/images/gallery-church.jpg" class="gallery__image" target="_blank">
					<img src="/images/gallery-church.jpg" alt="" class="gallery__image-pic" />
				</a>
				<a href="/images/gallery-forest.jpg" class="gallery__image" target="_blank">
					<img src="/images/gallery-forest.jpg" alt="" class="gallery__image-pic" />
				</a>
				<a href="/images/gallery-nature.jpg" class="gallery__image" target="_blank">
					<img src="/images/gallery-nature.jpg" alt="" class="gallery__image-pic" />
				</a>
			</div>
		</div>
	</section>

	<section id="feedbacks">
		<div class="wrapper">
			<div class="feedbacks__wrap">
				<div class="feedbacks__slider">
					<div class="slider__item">
						<div class="slider__text">
							My experience with JetSet Journey was nothing short of exceptional. Their
							knowledgeable staff helped me plan the perfect itinerary, ensuring every moment of my
							vacation was filled with adventure and relaxation. I can't wait to book my next trip
							with them!
						</div>
						<div class="slider__author">— Andrew</div>
					</div>
					<div class="slider__item">
						<div class="slider__text">
							JetSet Journey is an exceptional ukrainian travel agency! Their attention to detail
							and personalized service made my trip unforgettable. I am grateful for their expertise
							and highly recommend them for all your travel needs. Thank you, JetSet Journey!
						</div>
						<div class="slider__author">— Sofia</div>
					</div>
					<div class="slider__item">
						<div class="slider__text">
							JetSet Journey truly understands the art of travel. Their dedication to customer
							satisfaction is evident in every aspect of their service, making them my go-to agency
							for all my travel needs. I couldn't be happier with my vacation, thanks to their
							expertise and professionalism.
						</div>
						<div class="slider__author">— Mark</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="about">
		<div class="wrapper">
			<div class="about__wrap">
				<img src="/images/about-airport.jpg" alt="airport" class="about__image" />
				<div class="about__text">
					<h2 class="about__title">About Us</h2>
					<p class="about__info">
						JetSet Journey is a premier travel agency located in Kherson, 65. With a passion for
						creating unforgettable travel experiences, we specialize in curating personalized
						itineraries that cater to the unique preferences and needs of our clients.
						<br /><br />
						Our team of experienced travel experts is dedicated to providing exceptional service and
						ensuring every detail of your trip is meticulously planned. Whether you're seeking a relaxing
						beach getaway, an adventurous safari, or a cultural exploration, we are here to turn your
						travel dreams into reality. Trust JetSet Journey to deliver a seamless and unforgettable
						journey from start to finish.
					</p>
				</div>
			</div>
		</div>
	</section>
</main>

<Footer />

<body>
	<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
	<script src="/src/scripts/slick.min.js"></script>
	<script src="/src/scripts/script.js"></script>
</body>

<style>
	@import '/styles/styles.css';
</style>
