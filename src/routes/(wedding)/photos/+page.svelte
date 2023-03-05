<!-- https://www.freecodecamp.org/news/how-to-create-an-image-gallery-with-css-grid-e0f0fd666a5c/ -->
<script>
	import { LightboxGallery, GalleryImage, GalleryThumbnail } from 'svelte-lightbox';

	const images_col1 = [
		'gothicdance.jpg',
		'yellowpose.jpg',
		'borncorridorpose.jpeg',
		'bridgeface.jpg',
		'selfieWembley.jpg',
		'cathedralflying.jpg',
		'standingScotland.JPG',
		'backtoback.jpg',
		'selfieMontserrat.jpg',
		'sittingchatting.jpg',
		'standingmadrid.jpg',
		'gothicspin.jpg',
		'collage.jpeg',
		'stairsdescending.jpg',
		'selfieKayaking.jpeg'
	];

	const images_col2 = [
		'bridgepose.jpg',
		'selfieStowe.jpg',
		'cathedralpose.jpg',
		'selfieMadrid.jpg',
		'ringhands.jpg',
		'selfieCool.jpg',
		'facetoface.jpg',
		'selfieScotland.jpeg',
		'fountainsillyjosh.jpg',
		'gothiccorridor.jpg',
		'kneeling.jpg',
		'selfieWurstfest.jpeg',
		'stairsSitting.jpg',
		'selfieGermany.jpeg',
		'gothicnosey.jpeg',
		'selfieAustin.jpg',
		'gothicsuperhero.jpeg'
	];

	const images_col3 = [
		'bornpose.jpg',
		'gothicdip.jpg',
		'retiropark.jpg',
		'selfieBW.jpeg',
		'gothicdoor.jpg',
		'gothicpointing.jpg',
		'paella.jpg',
		'gothicpromphoto.jpeg',
		'waterreflection.jpg',
		'gothicstroll.jpg',
		'hangingout.jpg',
		'gothicsnooty.jpg',
		'selfieCheers.jpeg',
		'gothicjoshpointing.jpeg'
	];
</script>

<svelte:head>
	<title>Photos | Beth & Josh</title>
	<meta name="description" content="Photos" />
	<meta property="og:image" content="/welcometotheclub.gif" />
</svelte:head>

<!-- Photo Grid -->
<div class="row">
	<LightboxGallery>
		<svelte:fragment slot="thumbnail">
			<div class="column">
				{#each images_col1 as image, i}
					<GalleryThumbnail id={i}>
						<img src="/images/{image}" style="width:100%" alt="Beth and Josh" />
					</GalleryThumbnail>
				{/each}
			</div>
			<div class="column">
				{#each images_col2 as image, i}
					<GalleryThumbnail id={images_col1.length + i}>
						<img src="/images/{image}" style="width:100%" alt="Beth and Josh" />
					</GalleryThumbnail>
				{/each}
			</div>
			<div class="column">
				{#each images_col3 as image, i}
					<GalleryThumbnail id={images_col1.length + images_col2.length + i}>
						<img src="/images/{image}" style="width:100%" alt="Beth and Josh" />
					</GalleryThumbnail>
				{/each}
			</div>
		</svelte:fragment>
		{#each images_col1 as image, i}
			<GalleryImage>
				<img src="/images/{image}" style="width:100%" alt="Beth and Josh" />
			</GalleryImage>
		{/each}
		{#each images_col2 as image, i}
			<GalleryImage>
				<img src="/images/{image}" style="width:100%" alt="Beth and Josh" />
			</GalleryImage>
		{/each}
		{#each images_col3 as image, i}
			<GalleryImage>
				<img src="/images/{image}" style="width:100%" alt="Beth and Josh" />
			</GalleryImage>
		{/each}
	</LightboxGallery>
</div>

<style>
	* {
		box-sizing: border-box;
		animation: fadeIn ease 1.5s;
	}

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
	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
