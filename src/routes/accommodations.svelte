<script>
	import Navbar from "$lib/navbar.svelte";
	import Header from "$lib/header.svelte";
	import Weddinginfo from "$lib/weddinginfo.svelte";
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

h2 {
    width: 40%;
    text-align: center;
}

h3 {
    width: 40%;
    text-align: left;
}

.smalldivider {
		width: 40%;
		border-top: 1px dotted green;
	}

p {
    width: 40%;
    text-align: left;
}

</style>

<Header/>

<Navbar/>

<div class="ourstory">
    <div style="margin-top: 1%;">
        <img src="/images/stairsSitting.jpg" alt="Beth and Josh sitting">
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