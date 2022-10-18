<script>
	import { page } from '$app/stores';
</script>

<nav class="navbar">
	<ul>
		<a href="/home" class:active={$page.url.pathname.includes('/home')}>Home</a>
		<a href="/rsvp" class:active={$page.url.pathname.includes('/rsvp')}>RSVP</a>
		<a href="/ourstory" class:active={$page.url.pathname.includes('/ourstory')}>Our Story</a>
		<a href="/schedule" class:active={$page.url.pathname.includes('/schedule')}>Schedule</a>
		<a href="/travel" class:active={$page.url.pathname.includes('/travel')}>Travel</a>
		<a href="/questions" class:active={$page.url.pathname.includes('/questions')}>Q&A</a>
		<a href="/photos" class:active={$page.url.pathname.includes('/photos')}>Photos</a>
		<a href="/registry" class:active={$page.url.pathname.includes('/registry')}>Registry</a>
	</ul>
</nav>

<hr />

<!-- need to add responsive menu, max width of 900px will need to be hamburger menu -->
<style>
	.navbar {
		display: flex;
		flex: 1;
		justify-content: center;
		width: 100%;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}
	.active {
		color: rgb(30, 106, 40);
	}

	ul {
		display: flex;
		justify-content: space-between;
		width: 60%;
		padding: 0;
	}

	a {
		text-decoration: none;
		color: black;
		margin: 0em 0.25em;
	}

	hr {
		width: 90%;
		border-top: 2px dotted green;
		margin-top: 2%;
		margin-bottom: 3%;
	}

	@media screen and (max-width: 900px) {
		ul {
			flex-direction: column;
			text-align: center;
		}
		a {
			font-size: 1em;
			margin-top: 0.25em;
		}
	}
</style>
