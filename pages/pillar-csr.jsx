import { useEffect } from "react";
import Head from "next/head";
import useSWR from 'swr'

export default function Home() {

    

    async function fetcher() {

        const res = await fetch('https://rrl-2022.eobiont.opalstacked.com/wp-json/wp/v2/pages?slug="pillar-page"&acf_format=standard');
        const json = await res.json();

        return json

    }
    
    const { data, error, isLoading } = useSWR('wp-json/wp/v2/pages', fetcher);

    useEffect(() => {
        
        if (isLoading) return

        console.log(data[0].acf);

    }, [isLoading])


    return (
        isLoading
            ? 
            <>
                <Head>
                    <title>Pillar Page CSR</title>
                    <meta name="description" content="Pillar Page CSR" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <div className="loading">Loading</div>
            </>
            : <>
                <Head>
                    <title>Pillar Page CSR</title>
                    <meta name="description" content="Pillar Page CSR" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <main className="rrl_maincontent">

                    <section className="rrl_maincontent_hero">

                        <picture>

                            <source media="(max-width: 450px)" srcSet={data[0].acf.hero_image.sizes['mobile-345x195']} width="345" height="195"/>
                            <source media="(min-width: 451px) and (max-width: 799px)" srcSet={data[0].acf.hero_image.sizes['medium-625x350']} width="625" height="350"/>
                            <source media="(min-width: 800px) and (max-width: 1000px)" srcSet={data[0].acf.hero_image.sizes['blogpost-710x455']} width="710" height="455"/>
                            <source media="(min-width: 1001px)" srcSet={data[0].acf.hero_image.sizes['large-950x425']} width="950" height="425"/>

                            <img
                                src={data[0].acf.hero_image.link}
                                alt={data[0].acf.hero_image.alt}
                            />

                        </picture>

                    </section>

                    <section className="rrl_maincontent_section" id="#1">

                        <div className="two-column_header">

                            <p>
                                {data[0].acf.content_area[0].sidebar_header}
                            </p>

                            <h2>

                            </h2>

                        </div>

                        {/* <div className="two-column__hero">

                            <picture>

                                <img
                                    src=""
                                    alt=""
                                />

                            </picture>

                        </div> */}

                        <div className="two-column">

                            <div className="two-column__sidebar">

                                {/* <p className="two-column__sidebar-header">

                                </p>
                                <div className="two-column__sidebar-img">

                                    <picture>

                                        <img
                                            src=""
                                            alt=""
                                        />

                                    </picture>

                                </div>

                                <div className="two-column__sidebar-download">

                                    <div className="two-column__sidebar-download-img">
                                        <img
                                            src=""
                                            alt=""
                                            width="300" height="300" />
                                    </div>

                                    <div className="two-column__sidebar-download-txt">

                                    </div>

                                </div>

                                <div className="two-column__sidebar-promo">

                                    <div className="two-column__sidebar-promo-img">
                                        <img
                                            src=""
                                            alt="<"
                                            width="300"
                                            height="300"
                                        />
                                    </div>



                                    <div className="two-column__sidebar-promo-img-square">
                                        <img
                                            src=""
                                            alt=""
                                            width="300"
                                            height="300"
                                        />
                                    </div>

                                    <div className="two-column__sidebar-promo-txt">

                                        <p>

                                        </p>

                                        <p>

                                        </p>

                                        <p>

                                        </p>

                                        <div>

                                        </div>


                                        <a className="two-column__sidebar-promo-txt__btn" href="<?php echo get_field('link_button', $post_id)['url'] ?>">

                                        </a>



                                        <button
                                            className="two-column__sidebar-promo-txt__btn"
                                            data-url="<?php the_field('download_file', $post_id) ?>"
                                            data-disclaimer="<?php the_field('disclaimer', $post_id); ?>"
                                        >
                                            Download
                                        </button>


                                    </div>

                                </div>

                                <fieldset className="two-column__sidebar-highlight">

                                    <legend className="two-column__sidebar-highlight__header">

                                    </legend>

                                    <p className="two-column__sidebar-highlight__content">

                                    </p>

                                </fieldset> */}

                            </div>

                            <div className="two-column__main" dangerouslySetInnerHTML={{__html: data[0].acf.content_area[0].content}}>

                            </div>

                            {/* <div className="two-column__full-img">

                                <picture>

                                    <img
                                        src=""
                                        alt=""
                                    />

                                </picture>

                            </div> */}

                            {/* <fieldset className="two-column__highlight">
                                <legend className="two-column__highlight__header">

                                </legend>

                                <p className="two-column__highlight__content">

                                </p>
                            </fieldset> */}

                            {/* <div className="two-column__main">

                                <fieldset className="two-column__main-highlight">

                                    <legend className="two-column__main-highlight__header">

                                    </legend>

                                    <p className="two-column__main-highlight__content">

                                    </p>

                                </fieldset>

                            </div> */}

                        </div>

                    </section>

                    <section className="rrl_maincontent_section toc">
                        {
                            data[0].acf.content_area.map((el, i) => {
                                if (el.section_header) {
                                    return (
                                        <a href={'#' + i} key={i}>
                                            <div className="toc__container">
                                                <p>{'Teil' + i + ':'}</p>
                                                <p>{el.section_header}</p>
                                            </div>
                                        </a>
                                    )
                                }
                            })
                        }
                    </section>

                    <section className="rrl_maincontent_section" id="#2">

                        <div className="two-column_header">

                            <p>
                                Teil 1
                            </p>

                            <h2>
                                {data[0].acf.content_area[2].section_header}
                            </h2>

                        </div>

                        <div className="two-column">

                            <div className="two-column__sidebar">

                                <PromoBox id={data[0].acf.content_area[2].promo_box} />

                            </div>

                            <div className="two-column__main" dangerouslySetInnerHTML={{__html: data[0].acf.content_area[2].content}}>

                            </div>

                        </div>

                    </section>

                    <TeaserBox post={data[0].acf.content_area[3]} />

                    <section className="rrl_maincontent_section" id="#3">

                        <div className="two-column_header">

                            <p>
                                Teil 2:
                            </p>

                            <h2>
                                {data[0].acf.content_area[4].section_header}
                            </h2>

                        </div>

                        <div className="two-column__hero">

                            <picture>

                                <source media="(max-width: 450px)" srcSet={data[0].acf.content_area[4].image_settings.image.sizes['mobile-345x195']} width="345" height="195" />
                                <source media="(min-width: 451px) and (max-width: 799px)" srcSet={data[0].acf.content_area[4].image_settings.image.sizes['medium-625x350']} width="625" height="350" />
                                <source media="(min-width: 800px) and (max-width: 1000px)" srcSet={data[0].acf.content_area[4].image_settings.image.sizes['blogpost-710x455']} width="710" height="455" />
                                <source media="(min-width: 1001px)" srcSet={data[0].acf.content_area[4].image_settings.image.sizes['large-950x425']} width="950" height="425" />

                                <img
                                    src={data[0].acf.content_area[4].image_settings.image.link}
                                    alt={data[0].acf.content_area[4].image_settings.image.alt}
                                />

                            </picture>

                        </div>

                        <div className="two-column">

                            <div className="two-column__sidebar">

                            </div>

                            <div className="two-column__main">

                                <div dangerouslySetInnerHTML={{__html: data[0].acf.content_area[4].content}}></div>

                                <fieldset className="two-column__main-highlight">

                                    <legend className="two-column__main-highlight__header">
                                        {data[0].acf.content_area[4].definition_header}
                                    </legend>

                                    <p className="two-column__main-highlight__content" dangerouslySetInnerHTML={{__html: data[0].acf.content_area[4].definition_content}}>
                                    </p>

                                </fieldset>

                            </div>

                        </div>

                    </section>

                    <section className="rrl_maincontent_section" id="#4">

                        <div className="two-column_header">

                            <p>
                                Teil 3:
                            </p>

                            <h2>
                                {data[0].acf.content_area[5].section_header}
                            </h2>

                        </div>


                        <div className="two-column">

                            <div className="two-column__sidebar">

                               <DownloadBox post={data[0].acf.content_area[5].download_post.ID} />

                            </div>

                            <div className="two-column__main" dangerouslySetInnerHTML={{__html: data[0].acf.content_area[5].content}}>

                            </div>

                        </div>

                    </section>

                    <section className="rrl_maincontent_section floor-plan txt-align-left">

                        <div>
                            <div className="floor-plan__img">
                                <img
                                    src={data[0].acf.content_area[6].main_img.sizes['medium-625x350']}
                                    alt={data[0].acf.content_area[6].main_img.alt}
                                    width="625"
                                    height="350" />
                            </div>
                            <p className="floor-plan__img-caption">
                                {data[0].acf.content_area[6].main_img.caption}
                            </p>
                        </div>

                        <div className="floor-plan__txt">

                            <p className="floor-plan__txt-header">
                                {data[0].acf.content_area[6].sidebar_title}
                            </p>

                            {
                                [...data[0].acf.content_area[6].sidebar_content].map((el, i) => {
                                    return (
                                        <div className="floor-plan__txt-row" key={i}>
                                            <div className="floor-plan__txt-row-img">
                                                <img src="/assets/rrl_infogr_legende_mindestschutz.png" alt="" width="20" height="20" />
                                            </div>
                                            <div className="floor-plan__txt-row-container" dangerouslySetInnerHTML={{__html: el.text}}>
                                            </div>
                                        </div>      
                                    )
                                })
                            }

                        </div>

                    </section>

                    <section className="rrl_maincontent_section" id="#5">

                        <div className="two-column_header">

                            <p>
                                Teil 4:
                            </p>

                            <h2>
                                {data[0].acf.content_area[7].section_header}
                            </h2>

                        </div>

                        <div className="two-column content-align-left">

                            <div className="two-column__sidebar">

                                <div className="two-column__sidebar-img">

                                    <picture>

                                        <source media="(max-width: 450px)" srcSet={data[0].acf.content_area[7].image_settings.image.sizes['mobile-345x195']} width="345" height="195" />
                                        <source media="(min-width: 451px) and (max-width: 799px)" srcSet={data[0].acf.content_area[7].image_settings.image.sizes['medium-625x350']} width="625" height="350" />
                                        <source media="(min-width: 800px) and (max-width: 949px)" srcSet={data[0].acf.content_area[7].image_settings.image.sizes['square-300x300']} width="300" height="300" />
                                        <source media="(min-width: 950px)" srcSet={data[0].acf.content_area[7].image_settings.image.sizes['medium-625x350']} width="625" height="350" />

                                        <img
                                            src={data[0].acf.content_area[7].image_settings.image.url}
                                            alt={data[0].acf.content_area[7].image_settings.image.alt}
                                        />

                                    </picture>

                                </div>

                            </div>

                            <div className="two-column__main" dangerouslySetInnerHTML={{__html: data[0].acf.content_area[7].content}}>

                            </div>

                        </div>

                    </section>

                    <section className="rrl_maincontent_section icon-element">

                        <div className="icon-element__header">
                            <p>
                                Teil 5:
                            </p>
                            <h2>
                                {data[0].acf.content_area[7].section_header}
                            </h2>
                        </div>

                        {
                            [...data[0].acf.content_area[8].content].map((el, i) => {
                                return (
                                    <div className="icon-element__container" key={i}>

                                        <div className="icon-element__container-img">
                                            <img
                                                src={el.icon.link}
                                                alt={el.icon.alt}
                                                width="90"
                                                height="90"
                                            />
                                        </div>

                                        <p className="icon-element__container-txt" dangerouslySetInnerHTML={{__html: el.text}}></p>

                                    </div>      
                                )
                            })
                        }

                    </section>

                    <section className="rrl_maincontent_section" id="#6">

                        <div className="two-column_header">

                            <p>
                                Teil 6:
                            </p>

                            <h2>
                                {data[0].acf.content_area[9].section_header}
                            </h2>

                        </div>

                        <div className="two-column__hero">

                            <picture>

                                <source media="(max-width: 450px)" srcSet={data[0].acf.content_area[9].image_settings.image.sizes['mobile-345x195']} width="345" height="195" />
                                <source media="(min-width: 451px) and (max-width: 799px)" srcSet={data[0].acf.content_area[9].image_settings.image.sizes['medium-625x350']} width="625" height="350" />
                                <source media="(min-width: 800px) and (max-width: 1000px)" srcSet={data[0].acf.content_area[9].image_settings.image.sizes['blogpost-710x455']} width="710" height="455" />
                                <source media="(min-width: 1001px)" srcSet={data[0].acf.content_area[9].image_settings.image.sizes['large-950x425']} width="950" height="425" />

                                <img
                                    src={data[0].acf.content_area[9].image_settings.image.link}
                                    alt={data[0].acf.content_area[9].image_settings.image.alt}
                                />

                            </picture>

                        </div>

                        <div className="two-column">

                            <div className="two-column__sidebar">

                                <fieldset className="two-column__sidebar-highlight">

                                    <legend className="two-column__sidebar-highlight__header">
                                        {data[0].acf.content_area[9].definition_header}
                                    </legend>

                                    <p className="two-column__sidebar-highlight__content" dangerouslySetInnerHTML={{__html: data[0].acf.content_area[9].definition_content}}>
                                    </p>

                                </fieldset>

                            </div>

                            <div className="two-column__main" dangerouslySetInnerHTML={{__html: data[0].acf.content_area[9].content}}>
                            </div>

                        </div>

                    </section>

                    <section className="rrl_maincontent_section full-width">

                        <p className="blogs-section__header">
                            {data[0].acf.content_area[10].blog_post_heading}
                        </p>

                        <div className="blogs-section">

                            {
                                [...data[0].acf.content_area[10].blog_posts].map((el, i) => {
                                    return(
                                        <Blog post={el.post.ID} key={i}/>
                                    )
                                })
                            }

                        </div>

                    </section>

                    <DownloadFull post={data[0].acf.content_area[11].post.ID} />

                    <section className="rrl_maincontent_section info-section" id="#7">

                        <div className="info-section__header">
                            <p>
                                Teil 7:
                            </p>
                            <h2>
                                {data[0].acf.content_area[12].section_header}
                            </h2>
                        </div>

                        {
                            [...data[0].acf.content_area[12].info_box].map((el, i) => {
                                return (
                                    <div className="info-section__container" key={i}>
                                        <p>
                                            {el.title}
                                        </p>

                                        <div className="info-section__container-content" dangerouslySetInnerHTML={{__html: el.content}}>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </section>

                    <section className="rrl_maincontent_section table" id="#8">

                        <div className="table__header">
                            <p>
                                Teil 8:
                            </p>
                            <h2>
                                {data[0].acf.content_area[13].section_header}
                            </h2>
                        </div>

                        <div className="table__container">

                            <div className="table__container-head">
                                <p>BUNDESLAND</p>
                                <p>PFLICHT FÜR NEUBAUTEN</p>
                                <p>PFLICHT FÜR BESTANDSBAUTEN</p>
                                <p>ZUSTÄNDIG FÜR INSTALLATION</p>
                                <p>ZUSTÄNDIG WARTUNG</p>
                            </div>

                            {
                                [...data[0].acf.content_area[13].rows].map((el, i) => {
                                    return (
                                        <div className="table__container-row" key={i}>
                                            <a href={el.bundesland.url}>{el.bundesland.title}</a>
                                            <p className="table__container-row-titleMobile">PFLICHT FÜR NEUBAUTEN</p>
                                            <p>{el.pflicht_fur_neubauten}</p>
                                            <p className="table__container-row-titleMobile">PFLICHT FÜR BESTANDSBAUTEN</p>
                                            <p>{el.pflicht_fur_bestandsbauten}</p>
                                            <p className="table__container-row-titleMobile">ZUSTÄNDIG FÜR INSTALLATION</p>
                                            <p>{el.zustandig_fur_installation}</p>
                                            <p className="table__container-row-titleMobile">ZUSTÄNDIG WARTUNG</p>
                                            <p>{el.zustandig_fur_wartung}</p>
                                        </div>
                                    )
                                })
                            }

                        </div>

                    </section>

                </main>
            </>
    )
}


function PromoBox(props) {

    async function fetcher() {

        const res = await fetch('https://rrl-2022.eobiont.opalstacked.com/wp-json/wp/v2/promo_box/' + props.id + '?acf_format=standard');
        const json = await res.json();

        return json

    }
    
    const { data, error, isLoading } = useSWR('wp-json/wp/v2/promo_box', fetcher);

    return (
        
        isLoading
        ? <div className="two-column__Sidebar-promo" style={{height: '320px'}}>Loading</div>
        : 
        <div className="two-column__sidebar-promo">

            <div className="two-column__sidebar-promo-img">
                <img
                    src={data.acf.image.sizes['rectangle-300x180']}
                    alt={data.acf.image.alt}
                    width="300"
                    height="300"
                />
            </div>

            <div className="two-column__sidebar-promo-txt">

                <p>
                    {data.acf.title}
                </p>

                <p>
                    {data.acf.header}
                </p>

                <p>
                    {data.acf.subtitle}
                </p>

                <div dangerouslySetInnerHTML={{__html: data.acf.content}}></div>

                {
                    data.acf.radio === 'link' &&

                    <a className="two-column__sidebar-promo-txt__btn" href="<?php echo get_field('link_button', $post_id)['url'] ?>">

                    </a>
                }

                {
                    data.acf.radio === 'download' &&

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

function TeaserBox(props) {

    async function fetcher() {

        const res = await fetch('https://rrl-2022.eobiont.opalstacked.com/wp-json/wp/v2/posts/' + props.post.pagepost_link.ID + '?acf_format=standard');
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
                    {props.post.header}
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

function DownloadBox(props) {

    async function fetcher() {

        const res = await fetch('https://rrl-2022.eobiont.opalstacked.com/wp-json/wp/v2/downloads/' + props.post + '?acf_format=standard');
        const json = await res.json();

        return json

    }
    
    const { data, error, isLoading } = useSWR('wp-json/wp/v2/downloads', fetcher);

    return (
        isLoading
        ? <div className="two-column__sidebar-download" style={{height: '350px'}}>Loading</div>
        :
        <div className="two-column__sidebar-download">

            <div className="two-column__sidebar-download-img">
                <img
                    src={data.acf.image.sizes['thumbnail-big-155x155']}
                    alt={data.acf.image.alt}
                    width="300" height="300" />
            </div>

            <div className="two-column__sidebar-download-txt" dangerouslySetInnerHTML={{__html: data.acf.text_content}}>
            </div>

        </div>
    )

}

function DownloadFull(props) {
    async function fetcher() {

        const res = await fetch('https://rrl-2022.eobiont.opalstacked.com/wp-json/wp/v2/downloads/' + props.post + '?acf_format=standard');
        const json = await res.json();

        return json

    }
    
    const { data, error, isLoading } = useSWR('wp-json/wp/v2/' + props.post, fetcher);

    return (
        isLoading
        ? <section className="rrl_maincontent_section" style={{height: '310px'}}></section>
        :
        <section className="rrl_maincontent_section">

            <p className="download-post__header">
                
            </p>

            <div className="download-post">

                <div className="download-post__img">
                    <img
                        src={data.acf.image.sizes['square-300x300']}
                        alt={data.acf.image.alt}
                        width="300"
                        height="300" />
                </div>

                <div className="download-post__txt" dangerouslySetInnerHTML={{__html: data.acf.text_content}}>

                </div>

            </div>


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