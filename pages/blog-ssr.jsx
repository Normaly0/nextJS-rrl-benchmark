import Head from "next/head";

import Blog from "../components/Blog";
import TeaserBox from "../components/TeaserBox";

export default function Home(props) {
    
    return (
            <>
                <Head>
                    <title>Blog Page SSG</title>
                    <meta name="description" content="Pillar Page SSG" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <main className="rrl_maincontent">

                    <section className="rrl_maincontent_hero">

                        <div className="rrl_maincontent_hero-img">
                            <picture>

                                <source media="(max-width: 399px)" srcSet={props.data.acf.hero_image.sizes['mobile-345x195']} width="345" height="195" />
                                <source media="(min-width: 400px) and (max-width: 709px)" srcSet={props.data.acf.hero_image.sizes['medium-625x350']} width="625" height="350" />
                                <source media="(min-width: 710px)" srcSet={props.data.acf.hero_image.sizes['blogpost-710x455']} width="710" height="455" />

                                <img
                                    src={props.data.acf.hero_image.link}
                                    alt={props.data.acf.hero_image.alt}
                                    style={{width: '50%'}}
                                />

                            </picture>
                        </div>

                        <div className="rrl_maincontent_hero-txt">

                            <a href="https://rrl-2022.eobiont.opalstacked.com/category/rauchmelderpflicht/" rel="category tag">Rauchmelderpflicht</a>

                            <h1>
                                {props.data.title.rendered}
                            </h1>

                            <p>
                                {props.data.date}
                            </p>

                            <p>
                                - some Author
                            </p>

                        </div>

                    </section>

                    <section className="rrl_maincontent_section">

                        <div className="two-column_header">

                            {/* <h2>
                                
                            </h2> */}

                        </div>

                        <div className="two-column">

                            <div className="two-column__main">

                                <div dangerouslySetInnerHTML={{__html: props.data.acf.content_area[0].content}}></div>

                            </div>

                        </div>

                    </section>

                    <section className="rrl_maincontent_section">

                        <div className="two-column_header">

                            <h2>
                                {props.data.acf.content_area[1].section_header}
                            </h2>

                        </div>

                        <div className="two-column">

                            <div className="two-column__main">

                                <div dangerouslySetInnerHTML={{__html: props.data.acf.content_area[1].content}}></div>

                            </div>

                        </div>

                    </section>

                    <section className="rrl_maincontent_section">

                        <div className="two-column_header">

                            <h2>
                                {props.data.acf.content_area[2].section_header}
                            </h2>

                        </div>

                        <div className="two-column">

                            <div className="two-column__main">

                                <div dangerouslySetInnerHTML={{__html: props.data.acf.content_area[2].content}}></div>

                            </div>

                        </div>

                    </section>

                    <section className="rrl_maincontent_section">

                        <div className="two-column_header">

                            <h2>
                                {props.data.acf.content_area[3].section_header}
                            </h2>

                        </div>

                        <div className="two-column">

                            <div className="two-column__main">

                                <div dangerouslySetInnerHTML={{__html: props.data.acf.content_area[3].content}}></div>

                            </div>

                        </div>

                    </section>

                    <section className="rrl_maincontent_section">

                        <div className="two-column_header">

                            <h2>
                                {props.data.acf.content_area[4].section_header}
                            </h2>

                        </div>

                        <div className="two-column">

                            <div className="two-column__main">

                                <div dangerouslySetInnerHTML={{__html: props.data.acf.content_area[4].content}}></div>

                                <fieldset className="two-column__main-highlight">

                                    <legend className="two-column__main-highlight__header">
                                        {props.data.acf.content_area[4].definition_header}
                                    </legend>

                                    <span className="two-column__main-highlight__content" dangerouslySetInnerHTML={{__html: props.data.acf.content_area[4].definition_content}}>

                                    </span>

                                </fieldset>

                            </div>

                        </div>

                    </section>

                    <section className="rrl_maincontent_section">

                        <div className="two-column_header">

                            <h2>
                                {props.data.acf.content_area[5].section_header}
                            </h2>

                        </div>

                        <div className="two-column">

                            <div className="two-column__main">

                                <div dangerouslySetInnerHTML={{__html: props.data.acf.content_area[5].content}}></div>

                            </div>

                        </div>

                    </section>

                    <section className="rrl_maincontent_section">

                        <div className="two-column_header">

                            <h2>
                                {props.data.acf.content_area[6].section_header}
                            </h2>

                        </div>

                        <div className="two-column">

                            <div className="two-column__main">

                                <div dangerouslySetInnerHTML={{__html: props.data.acf.content_area[6].content}}></div>

                            </div>

                        </div>

                    </section>

                    <TeaserBox post={props.teaser} acf={props.data.acf.content_area[7]}/>

                    <section className="rrl_maincontent_section full-width">

                        <p className="blogs-section__header">
                            {props.data.acf.content_area[8].blog_post_heading}
                        </p>

                        <div className="blogs-section">

                            {
                                [...props.data.acf.content_area[8].blog_posts].map((el, i) => {
                                    return(
                                        <Blog post={props.blog} key={i}/>
                                    )
                                })
                            }

                        </div>

                    </section>

                </main>
            </>
    )
}


export async function getServerSideProps(params) {

    const res = await fetch('https://rrl-2022.eobiont.opalstacked.com/wp-json/wp/v2/posts/15346?acf_format=standard');
    const data = await res.json();

    const resTeaser = await fetch('https://rrl-2022.eobiont.opalstacked.com/wp-json/wp/v2/posts/544?acf_format=standard');
    const teaser = await resTeaser.json();

    const resBlog = await fetch('https://rrl-2022.eobiont.opalstacked.com/wp-json/wp/v2/posts/479?acf_format=standard');
    const blog = await resBlog.json();

    return {
        props: {
            data,
            teaser,
            blog
        }
    }

}