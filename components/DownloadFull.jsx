
function DownloadFull(props) {
    
    return (
        <section className="rrl_maincontent_section">

            <p className="download-post__header">
                
            </p>

            <div className="download-post">

                <div className="download-post__img">
                    <img
                        src={props.post.acf.image.sizes['square-300x300']}
                        alt={props.post.acf.image.alt}
                        width="300"
                        height="300" />
                </div>

                <div className="download-post__txt" dangerouslySetInnerHTML={{__html: props.post.acf.text_content}}>

                </div>

            </div>

        </section>
    )
}

export default DownloadFull;