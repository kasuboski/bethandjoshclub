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
    width: 60%;
    text-align: center;
}

h3 {
    width: 60%;
    text-align: left;
    margin-bottom: 0;
}

.smalldivider {
		width: 60%;
		border-top: 1px dotted green;
	}

p {
    width: 60%;
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
    <h2>Questions</h2>
    <hr class="smalldivider"/>
    <h3>Can I bring a date?</h3>
    <p>
        Yes! Please have your date fill out an RSVP.
    </p>
    <h3>Are kids welcome?</h3>
    <p>
        Absolutely! Please indicate the number of kids and any highchairs needed on your RSVP.
    </p>
    <h3>Can I bring a date?</h3>
    <p>
        Yes! Please have your date fill out an RSVP.
    </p>
    <h3>Are kids welcome?</h3>
    <p>
        Absolutely! Please indicate the number of kids and any highchairs needed on your RSVP.
    </p>
    <h3>Can I bring a date?</h3>
    <p>
        Yes! Please have your date fill out an RSVP.
    </p>
    <h3>Are kids welcome?</h3>
    <p>
        Absolutely! Please indicate the number of kids and any highchairs needed on your RSVP.
    </p>
    <h3>Can I bring a date?</h3>
    <p>
        Yes! Please have your date fill out an RSVP.
    </p>
    <h3>Are kids welcome?</h3>
    <p>
        Absolutely! Please indicate the number of kids and any highchairs needed on your RSVP.
    </p>
    <br>
</div>