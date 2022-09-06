<!-- https://www.freecodecamp.org/news/how-to-create-an-image-gallery-with-css-grid-e0f0fd666a5c/ -->

<script>
	import Navbar from "$lib/navbar.svelte";
	import Header from "$lib/header.svelte";
	import Weddinginfo from "$lib/weddinginfo.svelte";
</script>

<svelte:head>
	<title>Photos| Beth & Josh</title>
	<meta name="description" content="Photos"/>
	<meta property="og:image" content="/welcometotheclub.gif" />
</svelte:head>

<style>
    * {
        box-sizing: border-box;
    }
    
    div {
        margin: 0;
    }
    /* .header {
        text-align: center;
        padding: 32px;
    }  */
    
    .row {
        display: -ms-flexbox; /* IE10 */
        display: flex;
        -ms-flex-wrap: wrap; /* IE10 */
        flex-wrap: wrap;
        padding: 0 4px;
    }
    
    /* Create four equal columns that sits next to each other */
    .column {
        -ms-flex: 33%; /* IE10 */
        flex: 33%;
        max-width: 33%;
        padding: 0 4px;
    }
    
    .column img {
        margin-top: 8px;
        vertical-align: middle;
        width: 100%;
    }
    
    /* Responsive layout - makes a two column-layout instead of four columns */
    @media screen and (max-width: 800px) {
    .column {
        -ms-flex: 50%;
        flex: 50%;
        max-width: 50%;
        }
    }
    
    /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 600px) {
    .column {
        -ms-flex: 100%;
        flex: 100%;
        max-width: 100%;
        }
    }

    /* Was trying out this suggestion: https://stackoverflow.com/questions/39858998/zoom-in-and-out-on-mouse-click-with-css */
    </style>
    
    <Header/>

    <Navbar/>
    
    <!-- Photo Grid -->

    <div class="row"> 
        <div class="column">
        <img src="/images/bridgeface.jpg" style="width:100%" alt="bridge pic">
        <img src="/images/cathedralflying.jpg" style="width:100%" alt="cathedral pic">
        <img src="/images/standingScotland.JPG" style="width:100%" alt="Scotland pic pose Beth and Josh">
        <img src="/images/backtoback.jpg" style="width:100%" alt="Beth and Josh pic">
        <img src="/images/selfieMontserrat.jpg" style="width:100%" alt="Beth and Josh pic">
        <img src="/images/sittingchatting.jpg" style="width:100%" alt="Beth and Josh pic">
        <img src="/images/yellowpose.jpg" style="width:100%" alt="Beth and Josh pic">
        <img src="/images/standingmadrid.jpg" style="width:100%" alt="Beth and Josh pic">
        <img src="/images/gothicspin.jpg" style="width:100%" alt="Beth and Josh pic">
        
    </div>
    <div class="column">
        <img src="/images/bridgepose.jpg" style="width:100%" alt="Beth and Josh pic">
        <img src="/images/selfieStowe.jpg" style="width:100%" alt="Beth and Josh pic">
        <img src="/images/cathedralpose.jpg" style="width:100%" alt="Beth and Josh pic">
        <img src="/images/selfieMadrid.jpg" style="width:100%" alt="Beth and Josh pic">
        <img src="/images/ringhands.jpg" style="width:100%" alt="Beth and Josh pic">
        <img src="/images/facetoface.jpg" style="width:100%" alt="Beth and Josh pic">
        <img src="/images/fountainsillyjosh.jpg" style="width:100%" alt="Beth and Josh pic">
        <img src="/images/gothiccorridor.jpg" style="width:100%" alt="Beth and Josh pic">
        <img src="/images/kneeling.jpg" style="width:100%" alt="Beth and Josh pic">
        <img src="/images/gothicsnooty.jpg" style="width:100%" alt="Beth and Josh pic">
        
    </div>  
    <div class="column">
        <img src="/images/bornpose.jpg" style="width:100%" alt="Beth and Josh pic">
        <img src="/images/gothicdip.jpg" style="width:100%" alt="Beth and Josh pic">
        <img src="/images/retiropark.jpg" style="width:100%" alt="Beth and Josh pic">
        <img src="/images/gothicdoor.jpg" style="width:100%" alt="Beth and Josh pic">
        <img src="/images/gothicpointing.jpg" style="width:100%" alt="Beth and Josh pic">
        <img src="/images/paella.jpg" style="width:100%" alt="Beth and Josh pic">
        <img src="/images/waterreflection.jpg" style="width:100%" alt="Beth and Josh pic">
        <img src="/images/gothicstroll.jpg" style="width:100%" alt="Beth and Josh pic">
        <img src="/images/hangingout.jpg" style="width:100%" alt="Beth and Josh pic">

    </div>
    </div>
    