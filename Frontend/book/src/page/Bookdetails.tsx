import Navbar from "../componement/Navbar";

export default function Bookdetails() {
  return (
    <>
      <Navbar />
      <div className="main-wrapper ">
      
        <section className="section blog-wrap bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-12 mb-5">
                    <div className="single-blog-item">
                      <img src="images/blog/2.jpg" alt="" className="img-fluid rounded" />

                        <div className="blog-item-content bg-white p-5">
                          

                          <h2 className="mt-3 mb-4"><a href="blog-single.html">Improve design with typography?</a></h2>
                          <p className="lead mb-4">Non illo quas blanditiis repellendus laboriosam minima animi. Consectetur accusantium pariatur repudiandae!</p>

                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus natus, consectetur? Illum libero vel nihil nisi quae, voluptatem, sapiente necessitatibus distinctio voluptates, iusto qui. Laboriosam autem, nam voluptate in beatae.</p>

                          <h3 className="quote">A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.</h3>

                          <p className="lead mb-4 font-weight-normal text-black">The same is true as we experience the emotional sensation of stress from our first instances of social rejection ridicule. We quickly learn to fear and thus automatically.</p>

                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, rerum beatae repellat tenetur incidunt quisquam libero dolores laudantium. Nesciunt quis itaque quidem, voluptatem autem eos animi laborum iusto expedita sapiente.</p>


                        </div>
                    </div>
                  </div>


                </div>
              </div>
              
            </div>
          </div>
        </section>





      </div>
    </>
  )
}
