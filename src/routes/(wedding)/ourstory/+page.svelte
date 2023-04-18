<svelte:head>
	<title>Our Story | Beth & Josh</title>
	<meta name="description" content="Our Story" />
	<meta property="og:image" content="/welcometotheclub.gif" />
</svelte:head>

<div class="ourstory">
	<div style="text-align: center; margin-top: 1%; ">
		<img src="/images/waterreflection.jpg" alt="Beth and Josh in Gothic Quarter" />
	</div>
	<img src="/dividersimple.svg" alt="" style="height: 1.5em; margin-top: 1.5em;"/>
	<h2>Our Story</h2>

	<div class="thestory">
		<p>
			Beth and Josh's story starts when the two found themselves at several of the same college
			outings while attending UW-Madison. Beth, working as a student caterer, had befriended Josh's
			roommates without knowing that through her new friends, she would meet the man of her dreams.
			Josh, a shy computer engineering student known for his observational zingers, charmed Beth
			with his witty and dry remarks. Josh was truly smitten by Beth's sense of humor, and the two
			began dating their senior year of college.
		</p>
		<p>
			In 2022, after 6 years together, Josh proposed to Beth after a fancy dinner. Beth, of course,
			said yes, and the couple is excited to celebrate their next journey with you.
		</p>
		<img src="/images/ringhands.jpg" style="margin: 2em" alt="Beth and Josh in Gothic Quarter" />
	</div>
	<br />
	<br />
</div>

<style>
	* {
		font-family: Montserrat, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}
	.ourstory {
		display: flex;
		flex: 5;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.thestory {
		width: 80%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	@media screen and (max-width: 900px) {
		h2,
		p {
			min-width: 75%;
			animation: fadeIn ease 1.5s;
		}

		h2 {
			font-family: Merriweather;
			font-size: 1.5em;
			color: #424620;
			animation: fadeIn ease 1.5s;
		}

		p {
			font-size: 1em;
			width: 100%;
		}
	}

	@media screen and (min-width: 900px) {
		p {
			width: 60%;
		}
	}

	h2,
	p {
		animation: fadeIn ease 1.5s;
	}
	h2 {
		font-family: Merriweather;
		font-size: 2em;
		color: #424620;
		width: 40%;
		text-align: center;
	}

	img {
		max-width: 100%;
		height: auto;
		animation: fadeIn ease 1.5s;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
