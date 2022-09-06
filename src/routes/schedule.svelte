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
}

</style>

<Header/>

<Navbar/>

<div class="ourstory">
<div style="margin-top: 1%;">
	<img src="/images/cathedralflying.jpg" alt="Beth and Josh in Gothic Quarter">
</div>
    <h2> Wedding Schedule</h2>
    <br>
    <h3>Friday, August 25</h3>
    <hr class="smalldivider"/>
    <p>
        6:30PM
        Rehearsal Dinner
    </p>
    <br>
    <h3>Saturday, August 26</h3>
    <hr class="smalldivider"/>
    <p>
        4:00PM
        Ceremony
    </p>
    <br>
    <h3>Sunday, August 27</h3>
    <hr class="smalldivider"/>
    <p>
        10:00AM
        Brunch
    </p>
</div>