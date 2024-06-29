import React from "react";
import "./nav.css";
function Contact() {
  return (
    <>
      <div className="about-img" style={{height:'55vh'}}></div>
      <div className="form-box d-flex">
        <form className="row g-3" style={{ width: "6000px" }}>
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="col-12">
            <label htmlFor="feedback" className="form-label">
              How can we help you
            </label>
            <textarea name="feedback" className="form-control" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="inputCity" />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>

        <div className="about-info m-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vel
            ut eius non molestias aut rem officia iusto provident consequuntur,
            dolore similique cum repellendus doloremque ducimus consequatur sint
            quaerat voluptate? Doloribus reprehenderit dignissimos amet ipsam
            molestias voluptates iste voluptas, consequuntur repellat non
            eligendi impedit mollitia soluta, ut possimus provident ab molestiae
            perferendis dicta ea neque deleniti nobis aut! Tempora, distinctio?
            Culpa, fuga eaque voluptatem, voluptates fugiat eligendi quidem enim
            unde dolor sint dolorum? Necessitatibus hic doloremque magni, aut,
            et vel vero cum ut eaque incidunt ratione molestiae, tempora quia
            illum. Laborum facere aliquid cum, aperiam amet commodi quasi
            distinctio, dolores vero fuga, nulla autem excepturi minus
            doloremque. Enim, sapiente non earum, officiis eaque ex adipisci
            iure, quos perferendis rem eligendi? Perspiciatis, eum. Vel dolorum
            itaque esse, ab architecto impedit beatae ut voluptatem, libero amet
            nostrum porro hic quod molestias ad eius veritatis? Provident, enim
            atque ex nemo et tempora libero.
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
