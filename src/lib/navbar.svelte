<script>
	import Navlink from "./navlink.svelte";
</script>

<nav class="navbar">
	<ul>
		<Navlink href="/home" display="Home"/>
		<Navlink href="/RSVP" display="RSVP" />
		<Navlink href="/ourstory" display="Our Story" />
		<Navlink href="/schedule" display="Schedule" />
		<Navlink href="/travel" display="Travel" />
		<Navlink href="/questions" display="Q&A" />
		<Navlink href="/photos" display="Photos" />
		<Navlink href="/registry" display="Registry" />
	</ul>
</nav>

<!-- <hr /> -->

<!-- need to add responsive menu, max width of 900px will need to be hamburger menu -->
<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap');
	.navbar {
		display: flex;
		flex: 1;
		justify-content: center;
		width: 100%;
		font-family: Montserrat, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		margin-bottom: 1.5em;
	}

	ul {
		display: flex;
		justify-content: space-between;
		width: 60%;
		padding: 0;
	}

	@media screen and (max-width: 900px) {
		ul {
			flex-direction: column;
			text-align: center;
		}
	}
</style>
