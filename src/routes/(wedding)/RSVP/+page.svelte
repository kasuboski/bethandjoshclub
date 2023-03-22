<svelte:head>
	<title>RSVP | Beth & Josh</title>
	<meta name="description" content="Beth and Josh" />
	<meta property="og:image" content="/welcometotheclub.gif" />
</svelte:head>

<div style="display:flex;justify-content: center; margin-top: 2em;">
	<img src="/images/gothicdip.jpg" alt="Beth and Josh in Gothic Quarter" />
</div>

<div class="divider">
	<img src="/dividersimple.svg" alt="" style="height: 1.5em; margin-bottom: 1em;"/>
</div>
<div class="rsvpform">
	
	<iframe
		src="https://forms.monday.com/forms/embed/0ce992c37e3e542c313b6de73b82c392?r=use1"
		title="rsvp"
		width="1000"
		height="800"
		style="border: 0; box-shadow: 0px rgba(0,0,0,0);"
		alt="rsvp form"
	/>
</div>

<style>
	* {
		animation: fadeIn ease 1.5s;
	}

	.divider {
		text-align: center;
		margin-top: 2em;
		margin-bottom: -1em;
	}
	.rsvpform {
		font-family: Montserrat, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		display: flex;
		flex: 5;
		justify-content: center;
		padding: 0;
		width: 100%;
		text-align: center;
	}

	img {
		max-width: 100%;
		height: auto;
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
