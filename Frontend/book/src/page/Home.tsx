import Navbar from "../componement/Navbar";
import Heropart from "../componement/Heropart";
import Onebook from "../componement/Onebook";

export default function Home() {
    return (
        <>

            <Navbar />

            <div className="main-wrapper ">

                <Heropart />

                <section className="section blog-wrap bg-gray">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">


                                    <Onebook />
                                    <Onebook />
                                    <Onebook />
                                    <Onebook />
                                    <Onebook />



                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </div>

        </>
    )
}
