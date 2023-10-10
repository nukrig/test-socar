import Content from "../../Content/Content"
import Footer from "../../Footer/Footer"
import Header from "../../Header/Header"

function HomePage({ changeDesign,setChangeDesign,toggleDesign }){

    return (
        <div>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}

export default HomePage