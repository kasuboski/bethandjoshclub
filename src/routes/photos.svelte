<!-- https://www.freecodecamp.org/news/how-to-create-an-image-gallery-with-css-grid-e0f0fd666a5c/ -->

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
.gallery {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 5vw);
    grid-gap: 15px;

}
.gallery__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.gallery__item--1 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
}

.gallery__item--2 {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
}
.gallery__item--3 {
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 6;
}
.gallery__item--4 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 6;
}
.gallery__item--5 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 6;
    grid-row-end: 9;
}

.gallery__item--6 {
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 6;
    grid-row-end: 9;
}
</style>

<Header/>

<Navbar/>

<div class="gallery">
    <div class=”gallery”>
        <figure class="gallery__item gallery__item--1">
            <img src="/images/stairsSitting.jpg" class="gallery__img" alt="Image 1">
        </figure>
        <figure class="gallery__item gallery__item--2">
            <img src="/images/stairsSitting.jpg" class="gallery__img" alt="Image 2">
        </figure>
        <figure class="gallery__item gallery__item--3">
            <img src="/images/stairsSitting.jpg" class="gallery__img" alt="Image 3">
        </figure>
        <figure class="gallery__item gallery__item--4">
            <img src="/images/stairsSitting.jpg" class="gallery__img" alt="Image 4">
        </figure>
        <figure class="gallery__item gallery__item--5">
            <img src="/images/stairsSitting.jpg" class="gallery__img" alt="Image 5">
        </figure>
        <figure class="gallery__item gallery__item--6">
            <img src="/images/stairsSitting.jpg" class="gallery__img" alt="Image 6">
        </figure>
    </div>

</div>
