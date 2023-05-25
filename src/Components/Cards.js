import 'bootstrap/dist/css/bootstrap.min.css';
import "./Cards.css"
import Navbar from "./Navbar";
function Cards (){
    return(
        <>
        <Navbar/>

           <div className="card-container">
                <div className="card-one"> 
                   <p>  Cards 1 </p> 
                </div>
                <div className="card-one"> 
                   <p>  Cards 1 </p> 
                </div>
                <div className="card-one"> 
                   <p>  Cards 1 </p> 
                </div>
                <div className="card-one"> 
                   <p>  Cards 1 </p> 
                </div>
           </div>

           <hr/>
           <div className="row row-cols-4 row-cols-md-5 g-1">
        <div className="card text-bg-primary mb-3">
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Primary card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card text-bg-secondary mb-3">
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Secondary card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card text-bg-success mb-3">
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Success card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card text-bg-danger mb-3">
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Danger card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card text-bg-warning mb-3">
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Warning card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card text-bg-info mb-3">
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Info card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card text-bg-light mb-3">
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Light card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card text-bg-dark mb-3">
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Dark card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>

      <hr/>
      <div className="row-2 row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card h-100">
            <img src={""} className="img-size" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="..." className="img-size" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </div>
          </div>
        </div>
      </div>


        </>
    )
};

export default Cards;