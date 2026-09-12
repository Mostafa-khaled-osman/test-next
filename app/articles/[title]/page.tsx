export default async function specialArticle(props){
    console.log("***********************")
    const params = await props.params;
    console.log(params);
    return(
        <div className="main">
            <h1> special article</h1>
            <h1>{params.title}</h1>
        </div>
    )
}
