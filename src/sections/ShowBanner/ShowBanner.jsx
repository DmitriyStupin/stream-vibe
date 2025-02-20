import MovieBannerCard from "@/components/MovieBannerCard"

const ShowBanner = () => {
  const titleId = 'show-banner-title'

  return (
    <section 
      className="container"
      aria-labelledby={titleId}
    >
      <MovieBannerCard
        title="Stranger Things"
        description="When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
        TitleTag="h1"
        titleId={titleId}
        imgSrc='/src/assets/images/movie-banner/3.jpg'
        isSmallPaddingY
      >

      </MovieBannerCard>
    </section>
  )
}

export default ShowBanner