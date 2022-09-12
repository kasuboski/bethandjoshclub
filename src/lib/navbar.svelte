<script>
        import { page } from '$app/stores';
    </script>


<style>
.navbar {
		display:flex;
		flex: 1;
		justify-content: center;
		width:100%;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}
	.active {
		color: rgb(30, 106, 40);
	}

	ul {
		display:flex;
		justify-content: space-between; 
		width:60%;
		padding: 0;
	}

	a {
		text-decoration: none;
		color: black;
		margin: 0;
	}

	hr {
		width: 90%;
		border-top: 2px dotted green;
		margin-top: 2%;
		margin-bottom: 3%;
	}
</style>

<nav class="navbar">
	<ul>
		<a href="/home" class:active="{$page.url.pathname.includes("/home")}">Home</a>
		<a href="/RSVP" class:active="{$page.url.pathname.includes("/RSVP")}">RSVP</a>
		<a href="/ourstory" class:active="{$page.url.pathname.includes("/ourstory")}">Our Story</a>
		<a href="/schedule" class:active="{$page.url.pathname.includes("/schedule")}">Schedule</a>
		<a href="/accommodations" class:active="{$page.url.pathname.includes("/accommodations")}">Accommodations</a>
		<a href="/questions" class:active="{$page.url.pathname.includes("/questions")}">Q&A</a>
		<a href="/photos" class:active="{$page.url.pathname.includes("/photos")}">Photos</a>
		<a href="/registry" class:active="{$page.url.pathname.includes("/registry")}">Registry</a>
	</ul>
</nav>

<hr/>