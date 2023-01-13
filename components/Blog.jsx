
function Blog(props) {

    return (
        <div className="blogs-section-container">

            <a href={props.post.link}>

                <div className="blogs-section-container-img">

                    <picture>

                        <source media="(max-width: 999px)" srcSet={props.post.acf.hero_image.sizes['thumbnail-big-155x155']} width="155" height="155" />
                        <source media="(min-width: 1000px)" srcSet={props.post.acf.hero_image.sizes['rectangle-300x180']} width="300" height="180" />

                        <img
                            src={props.post.acf.hero_image.link}
                            alt={props.post.acf.hero_image.alt}
                        />

                    </picture>

                </div>

                <div className="blogs-section-container-txt">
                    <h3>
                        {props.post.title.rendered}
                    </h3>
                    <p>
                        {props.post.date}
                    </p>
                </div>

            </a>

        </div>
    )
}

export default Blog;