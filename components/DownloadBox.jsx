
function DownloadBox(props) {

    return (
        <div className="two-column__sidebar-download">

            <div className="two-column__sidebar-download-img">
                <img
                    src={props.post.acf.image.sizes['thumbnail-big-155x155']}
                    alt={props.post.acf.image.alt}
                    width="300" height="300" />
            </div>

            <div className="two-column__sidebar-download-txt" dangerouslySetInnerHTML={{__html: props.post.acf.text_content}}>
            </div>

        </div>
    )

}

export default DownloadBox;