import { useEffect } from "react";
import Head from "next/head";
import useSWR from 'swr'

export default function Home() {

    async function fetcher() {

        const res = await fetch('https://rrl-2022.eobiont.opalstacked.com/wp-json/wp/v2/posts/15346?acf_format=standard');
        const json = await res.json();

        return json

    }
    
    const { data, error, isLoading } = useSWR('wp-json/wp/v2/main', fetcher);

    useEffect(() => {
        
        if (isLoading) return

        console.log(data.acf.content_area);

    }, [isLoading])


    return (
        isLoading
            ? 
            <>
                <Head>
                    <title>Blog Page CSR</title>
                    <meta name="description" content="Blog Page CSR" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <div className="loading">Loading</div>
            </>
            : <>
                <Head>
                    <title>Blog Page CSR</title>
                    <meta name="description" content="Pillar Page CSR" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <main className="rrl_maincontent">

                    <section className="rrl_maincontent_hero">

                        <div className="rrl_maincontent_hero-img">
                            <picture>

                                <source media="(max-width: 399px)" srcSet={data.acf.hero_image.sizes['mobile-345x195']} width="345" height="195" />
                                <source media="(min-width: 400px) and (max-width: 709px)" srcSet={data.acf.hero_image.sizes['medium-625x350']} width="625" height="350" />
                                <source media="(min-width: 710px)" srcSet={data.acf.hero_image.sizes['blogpost-710x455']} width="710" height="455" />

                                <img
                                    src={data.acf.hero_image.link}
                                    alt={data.acf.hero_image.alt}
                                    style={{width: '50%'}}
                                />

                            </picture>
                        </div>

                        <div className="rrl_maincontent_hero-txt">

                            <a href="https://rrl-2022.eobiont.opalstacked.com/category/rauchmelderpflicht/" rel="category tag">Rauchmelderpflicht</a>

                            <h1>
                                {data.title.rendered}
                            </h1>

                            <p>
                                {data.date}
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

                                <div dangerouslySetInnerHTML={{__html: data.acf.content_area[0].content}}></div>

                                {/* <fieldset className="two-column__main-highlight">

                                    <legend className="two-column__main-highlight__header">

                                    </legend>

                                    <p className="two-column__main-highlight__content">

                                    </p>

                                </fieldset> */}

                            </div>

                        </div>

                    </section>

                    <section className="rrl_maincontent_section">

                        <div className="two-column_header">

                            <h2>
                                {data.acf.content_area[1].section_header}
                            </h2>

                        </div>

                        <div className="two-column">

                            <div className="two-column__main">

                                <div dangerouslySetInnerHTML={{__html: data.acf.content_area[1].content}}></div>

                                {/* <fieldset className="two-column__main-highlight">

                                    <legend className="two-column__main-highlight__header">

                                    </legend>

                                    <p className="two-column__main-highlight__content">

                                    </p>

                                </fieldset> */}

                            </div>

                        </div>

                    </section>

                    <section className="rrl_maincontent_section">

                        <div className="two-column_header">

                            <h2>
                                {data.acf.content_area[2].section_header}
                            </h2>

                        </div>

                        <div className="two-column">

                            <div className="two-column__main">

                                <div dangerouslySetInnerHTML={{__html: data.acf.content_area[2].content}}></div>

                                {/* <fieldset className="two-column__main-highlight">

                                    <legend className="two-column__main-highlight__header">

                                    </legend>

                                    <p className="two-column__main-highlight__content">

                                    </p>

                                </fieldset> */}

                            </div>

                        </div>

                    </section>

                    <section className="rrl_maincontent_section">

                        <div className="two-column_header">

                            <h2>
                                {data.acf.content_area[3].section_header}
                            </h2>

                        </div>

                        <div className="two-column">

                            <div className="two-column__main">

                                <div dangerouslySetInnerHTML={{__html: data.acf.content_area[3].content}}></div>

                                {/* <fieldset className="two-column__main-highlight">

                                    <legend className="two-column__main-highlight__header">

                                    </legend>

                                    <p className="two-column__main-highlight__content">

                                    </p>

                                </fieldset> */}

                            </div>

                        </div>

                    </section>

                    <section className="rrl_maincontent_section">

                        <div className="two-column_header">

                            <h2>
                                {data.acf.content_area[4].section_header}
                            </h2>

                        </div>

                        <div className="two-column">

                            <div className="two-column__main">

                                <div dangerouslySetInnerHTML={{__html: data.acf.content_area[4].content}}></div>

                                <fieldset className="two-column__main-highlight">

                                    <legend className="two-column__main-highlight__header">
                                        {data.acf.content_area[4].definition_header}
                                    </legend>

                                    <span className="two-column__main-highlight__content" dangerouslySetInnerHTML={{__html: data.acf.content_area[4].definition_content}}>

                                    </span>

                                </fieldset>

                            </div>

                        </div>

                    </section>

                    <section className="rrl_maincontent_section">

                        <div className="two-column_header">

                            <h2>
                                {data.acf.content_area[5].section_header}
                            </h2>

                        </div>

                        <div className="two-column">

                            <div className="two-column__main">

                                <div dangerouslySetInnerHTML={{__html: data.acf.content_area[5].content}}></div>

                            </div>

                        </div>

                    </section>

                    <section className="rrl_maincontent_section">

                        <div className="two-column_header">

                            <h2>
                                {data.acf.content_area[6].section_header}
                            </h2>

                        </div>

                        <div className="two-column">

                            <div className="two-column__main">

                                <div dangerouslySetInnerHTML={{__html: data.acf.content_area[6].content}}></div>

                            </div>

                        </div>

                    </section>

                    <TeaserBox id={data.acf.content_area[7].pagepost_link.ID} acf={data.acf.content_area[7]}/>

                    <section className="rrl_maincontent_section full-width">

                        <p className="blogs-section__header">
                            {data.acf.content_area[8].blog_post_heading}
                        </p>

                        <div className="blogs-section">

                            {
                                [...data.acf.content_area[8].blog_posts].map((el, i) => {
                                    return(
                                        <Blog post={el.post.ID} key={i}/>
                                    )
                                })
                            }

                        </div>

                    </section>

                </main>
            </>
    )
}


function TeaserBox(props) {

    async function fetcher() {

        const res = await fetch('https://rrl-2022.eobiont.opalstacked.com/wp-json/wp/v2/posts/' + props.id + '?acf_format=standard');
        const json = await res.json();

        return json
    }
    
    const { data, error, isLoading } = useSWR('wp-json/wp/v2/posts', fetcher);

    return (
        isLoading
        ? <section className="rrl_maincontent_section teaser-box" style={{height: '290px'}}>Loading</section>
        :
        <section className="rrl_maincontent_section teaser-box">

            <a className="teaser-box-container" href={data.link}>

                <p className="teaser-box-container__header">
                    {props.header}
                </p>

                <div className="teaser-box-container__img">

                    <picture>

                        <source media="(max-width: 450px)" srcSet={data.acf.hero_image.sizes['mobile-345x195']} width="345" height="195" />
                        <source media="(min-width: 451px)" srcSet={data.acf.hero_image.sizes['medium-625x350']} width="625" height="350" />

                        <img
                            src={data.acf.hero_image.link}
                            alt={data.acf.hero_image.alt}
                        />

                    </picture>

                </div>

                <div className="teaser-box-container__txt">
                    <h3>
                        {data.title.rendered}
                    </h3>
                    <p>
                        {data.acf.excerpt}
                    </p>
                </div>

            </a>

        </section>
    )

}

function Blog(props) {

    async function fetcher() {

        const res = await fetch('https://rrl-2022.eobiont.opalstacked.com/wp-json/wp/v2/posts/' + props.post + '?acf_format=standard');
        const json = await res.json();

        return json

    }
    
    const { data, error, isLoading } = useSWR('wp-json/wp/v2/' + props.post, fetcher);

    return (
        isLoading
        ? <div className="blogs-section-container" style={{height: '279px'}}>Loading</div>
        :
        <div className="blogs-section-container">

            <a href={data.link}>

                <div className="blogs-section-container-img">

                    <picture>

                        <source media="(max-width: 999px)" srcSet={data.acf.hero_image.sizes['thumbnail-big-155x155']} width="155" height="155" />
                        <source media="(min-width: 1000px)" srcSet={data.acf.hero_image.sizes['rectangle-300x180']} width="300" height="180" />

                        <img
                            src={data.acf.hero_image.link}
                            alt={data.acf.hero_image.alt}
                        />

                    </picture>

                </div>

                <div className="blogs-section-container-txt">
                    <h3>
                        {data.title.rendered}
                    </h3>
                    <p>
                        {data.date}
                    </p>
                </div>

            </a>

        </div>
    )
}