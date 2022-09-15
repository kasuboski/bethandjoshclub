<script>
	import Navbar from "$lib/navbar.svelte";
	import Header from "$lib/header.svelte";
</script>

<svelte:head>
	<title>Accommodations| Beth & Josh</title>
	<meta name="description" content="Accommodations"/>
	<meta property="og:image" content="/welcometotheclub.gif" />
</svelte:head>

<style>
.ourstory {
    display: flex; 
    flex: 5; 
    align-items: center; 
    justify-content: center; 
    flex-direction: column;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}

@media screen and (max-width: 900px) {
    h2, h3, p {
        min-width: 80%;
        text-align: center;
    }

    h2 {
        font-size: 1.25em;
    }

    h3, p {
        font-size: 1em;
    }
    .smalldivider {
        margin: 0;
        min-width: 75%;
    }
}

h2 {
    width: 50%;
    text-align: center;
    margin: .5em;
}

h3 {
    width: 50%;
    margin: 1em 0em 0em 0em;
}

.smalldivider {
		width: 50%;
		border-top: 1px dotted green;
	}

p {
    width: 50%;
}

</style>

<Header/>

<Navbar/>

<div class="ourstory">
    <div style="margin-top: 1%;">
        <img src="/images/gothicstroll.jpg" alt="Beth and Josh walking">
    </div>
    <br>
    <br>
    <hr class="smalldivider"/>
    <h2>Accommodations</h2>
    <hr class="smalldivider"/>
    <h3>Hyatt Place Downtown Milwaukee</h3>
    <p>
        Info
        Wedding Code
        Link
    </p>
    <br>
    <h3>The Brewhouse Inn & Suites</h3>
    <p>
        Info
        Wedding Code
        Link
    </p>
    <br>
</div>