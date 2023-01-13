function PromoBox(props) {

    return (
        <div className="two-column__sidebar-promo">

            <div className="two-column__sidebar-promo-img">
                <img
                    src={props.post.acf.image.sizes['rectangle-300x180']}
                    alt={props.post.acf.image.alt}
                    width="300"
                    height="300"
                />
            </div>

            <div className="two-column__sidebar-promo-txt">

                <p>
                    {props.post.acf.title}
                </p>

                <p>
                    {props.post.acf.header}
                </p>

                <p>
                    {props.post.acf.subtitle}
                </p>

                <div dangerouslySetInnerHTML={{__html: props.post.acf.content}}></div>

                {
                    props.post.acf.radio === 'link' &&

                    <a className="two-column__sidebar-promo-txt__btn" href="<?php echo get_field('link_button', $post_id)['url'] ?>">

                    </a>
                }

                {
                    props.post.acf.radio === 'download' &&

                    <button
                        className="two-column__sidebar-promo-txt__btn"
                        data-url="<?php the_field('download_file', $post_id) ?>"
                        data-disclaimer="<?php the_field('disclaimer', $post_id); ?>"
                    >
                        Download
                    </button>

                }

            </div>

        </div>
    )
}

export default PromoBox;