

export default function Newbook() {
  return (
    <>
      <div className="main-wrapper ">
        <section className="page-title bg-1">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="block text-center">
                  <span className="text-white">Add new book</span>
                  <ul className="list-inline">
                    <li className="list-inline-item"><a href="/" className="text-white">Home</a></li>
                    <li className="list-inline-item"><span className="text-white">/</span></li>
                    <li className="list-inline-item"><a href="/add" className="text-white-50">Add new book</a></li>
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


                  <h3 className="text-md mb-4">Add new book</h3>

                  <div className="form-group">
                    <input name="title" type="text" className="form-control" placeholder="Your Book title" />
                  </div>

                  <div className="form-group">
                    <input type="file" className="form-control" placeholder="Your image" />
                  </div>

                  <textarea className="form-control mb-3" name="comment" id="comment" placeholder="book details"></textarea>

                  <button className="btn btn-main" name="submit" type="submit">add</button>
                </form>

              </div>


            </div>
          </div>
        </section>




      </div>
    </>
  )
}
