
function TeaserBox(props) {

    return (
        <section className="rrl_maincontent_section teaser-box">

            <a className="teaser-box-container" href={props.post.link}>

                <p className="teaser-box-container__header">
                    {props.post.header}
                </p>

                <div className="teaser-box-container__img">

                    <picture>

                        <source media="(max-width: 450px)" srcSet={props.post.acf.hero_image.sizes['mobile-345x195']} width="345" height="195" />
                        <source media="(min-width: 451px)" srcSet={props.post.acf.hero_image.sizes['medium-625x350']} width="625" height="350" />

                        <img
                            src={props.post.acf.hero_image.link}
                            alt={props.post.acf.hero_image.alt}
                        />

                    </picture>

                </div>

                <div className="teaser-box-container__txt">
                    <h3>
                        {props.post.title.rendered}
                    </h3>
                    <p>
                        {props.post.acf.excerpt}
                    </p>
                </div>

            </a>

        </section>
    )

}

export default TeaserBox;