<script>
	import { page } from '$app/stores';

	export let href = '';
	export let display = '';

	$: isActivePage = $page.url.pathname.includes(href);
</script>

<a href={href} class:active={isActivePage}>{#if isActivePage}<img src="leafindicator.svg" alt="active leaf"/>{/if}{display}</a>

<style>
	.active {
		color: #70712f;
		font-weight: 600;
	}

	a {
		text-decoration: none;
		color: #70712f;
		margin: 0em 0.25em;
		position: relative;
	}

	a img {
		max-width: 1.5rem;
		position: absolute;
		left: -2rem;
	}

	@media screen and (max-width: 900px) {
		a {
			font-size: 1em;
			margin-top: 0.25em;
		}
		
		a img {
			left: 1.4rem;
		}
	}
</style>
