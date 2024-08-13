function WorkTile(props) {
    const img = props.item.image
    const title = props.item.title
    const content = props.item.description
    const url = props.item.URL
    console.log(url)
    return (
        <>
            <div className="work-card">
                <img src={img} className="work-img"></img>
                <div className="work-title">{title}</div>
                <div className="work-content">{content}</div>
                <button onClick={() => window.open(url, "_blank")} className="work-btn">Check more</button>
            </div>
        </>

    );

}

export default WorkTile