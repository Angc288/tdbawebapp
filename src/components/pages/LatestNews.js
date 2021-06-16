
function LatestNews() {

    const newsItems = [
        { header: 'News Item 1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac posuere ante. Aliquam nunc sapien, egestas a tortor at, accumsan venenatis justo. Vivamus facilisis sit amet elit eu congue. In congue est non leo varius, sit amet rhoncus urna dignissim. Sed quis semper velit. Suspendisse id est et massa placerat sagittis at quis nisi. Nunc pharetra auctor iaculis. Praesent porta risus in magna sollicitudin venenatis.', link: '' },
        { header: 'News Item 2', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac posuere ante. Aliquam nunc sapien, egestas a tortor at, accumsan venenatis justo. Vivamus facilisis sit amet elit eu congue. In congue est non leo varius, sit amet rhoncus urna dignissim. Sed quis semper velit. Suspendisse id est et massa placerat sagittis at quis nisi. Nunc pharetra auctor iaculis. Praesent porta risus in magna sollicitudin venenatis.', link: '' },
        { header: 'News Item 3', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac posuere ante. Aliquam nunc sapien, egestas a tortor at, accumsan venenatis justo. Vivamus facilisis sit amet elit eu congue. In congue est non leo varius, sit amet rhoncus urna dignissim. Sed quis semper velit. Suspendisse id est et massa placerat sagittis at quis nisi. Nunc pharetra auctor iaculis. Praesent porta risus in magna sollicitudin venenatis.', link: '' },
        { header: 'News Item 4', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac posuere ante. Aliquam nunc sapien, egestas a tortor at, accumsan venenatis justo. Vivamus facilisis sit amet elit eu congue. In congue est non leo varius, sit amet rhoncus urna dignissim. Sed quis semper velit. Suspendisse id est et massa placerat sagittis at quis nisi. Nunc pharetra auctor iaculis. Praesent porta risus in magna sollicitudin venenatis.', link: '' }
    ]



    return (<div id="latestnews">
        {newsItems.map((item, i) => (
            <div>
                <h3>{item.header}</h3>
                <p>{item.text}</p>
            </div>
        ))}



    </div>
    );
}


export default LatestNews;
