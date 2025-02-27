import Header from "../components/Header";
export default function Art() {
  return (
    <>
    
      <Header />
      <div class="container mt-4">
        <div class="row">
          <div class="col-md-12">
            <div class="card p-3 mb-3">
              <textarea
                class="form-control"
                rows="3"
                placeholder="What's on your mind?"
              ></textarea>
              <button class="btn btn-primary mt-2">Post</button>
            </div>


            
        <h3 class="text-center mt-5">Art Posts</h3>
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col">
            <div class="card">
              <img
                src="https://placehold.co/300x300"
                class="card-img-top art-img"
                alt="Art Image"
              />
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="https://placehold.co/300x300"
                class="card-img-top art-img"
                alt="Art Image"
              />
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="https://placehold.co/100x300"
                class="card-img-top art-img"
                alt="Art Image"
              />
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="https://placehold.co/400x300"
                class="card-img-top art-img"
                alt="Art Image"
              />
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
      
    </>
  );
}
