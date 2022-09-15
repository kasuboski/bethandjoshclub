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
.mainstuff {
    display: flex; 
    flex: 5; 
    align-items: center; 
    justify-content: center; 
    flex-direction: column;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}

@media screen and (max-width: 900px) {
    h2, h3, p, .smalldivider {
        min-width: 75%;
    }

    h2 {
        font-size: 1.1em;
    }

    h3 {
        font-size: 1em;
    }

    p {
        font-size: 1em;
    }

    .smalldivider {
        margin: 0;
    }
}

img {
    max-width: 100%; 
    height: auto;
}
h2 {
    width: 55%;
    text-align: center;
    margin: .5em;
}

h3 {
    width: 55%;
    text-align: left;
    margin-bottom: 0;
}

.smalldivider {
		width: 55%;
		border-top: 1px dotted green;
	}

p {
    width: 55%;
    text-align: left;
}

</style>

<Header/>

<Navbar/>

<div class="mainstuff">
    <div style="text-align: center; margin-top: 1%;">
        <img src="/images/gothicpointing.jpg" alt="Beth and Josh pointing at you">
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