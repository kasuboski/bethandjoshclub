<script>
	import Navbar from "$lib/navbar.svelte";
	import Header from "$lib/header.svelte";
	import Weddinginfo from "$lib/weddinginfo.svelte";
</script>

<svelte:head>
	<title>Our Story | Beth & Josh</title>
	<meta name="description" content="Our Story"/>
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
    width: 30%;
    text-align: center;
}

.smalldivider {
		width: 60%;
		border-top: 1px dotted green;
	}

p {
    width: 60%;
}

</style>

<Header/>

<Navbar/>

<div class="ourstory">
<div style="margin-top: 1%;">
	<img src="/images/stairsSitting.jpg" alt="Beth and Josh sitting">
</div>
    <h2>Our Story</h2>
    <hr class="smalldivider"/>
    <p>
        Beth and Josh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin nibh sit amet commodo nulla facilisi. Ultrices tincidunt arcu non sodales neque sodales ut. Volutpat lacus laoreet non curabitur gravida. Libero id faucibus nisl tincidunt eget nullam non. Id consectetur purus ut faucibus. Quis viverra nibh cras pulvinar mattis. Est lorem ipsum dolor sit amet consectetur adipiscing elit. Odio eu feugiat pretium nibh. Et tortor consequat id porta nibh.
    </p>
    <br>
    <br>
</div>