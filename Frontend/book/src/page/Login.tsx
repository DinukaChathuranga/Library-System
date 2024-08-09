
export default function Login() {
    return (
        <>
            <div className="main-wrapper ">
                <section className="page-title bg-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="block text-center">
                                    <span className="text-white">Login</span>
                                    <h1 className="text-capitalize mb-4 text-lg">Get in Touch</h1>
                                    <ul className="list-inline">
                                        <li className="list-inline-item"><a href="/" className="text-white">Home</a></li>
                                        <li className="list-inline-item"><span className="text-white">/</span></li>
                                        <li className="list-inline-item"><a href="/login" className="text-white-50">Login</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="contact-form-wrap section">
                    <div className="container">
                        <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <form id="contact-form" className="contact__form" method="post" action="mail.php">

                                   
                                    <h3 className="text-md mb-4">Login Form</h3>
                                    <div className="form-group">
                                        <input name="email" type="email" className="form-control" placeholder="Email Address" />
                                    </div>

                                    <div className="form-group">
                                        <input name="pwd" type="password" className="form-control" placeholder="Your password" />
                                    </div>

                                    <button className="btn btn-main" name="submit" type="submit">Login</button>
                                </form>
                                <h6 className="mt-3"><a href="/sign"> You have not an account ?</a></h6>
                            </div>
                            
                           
                        </div>
                    </div>
                </section>




            </div>
        </>
    )
}
