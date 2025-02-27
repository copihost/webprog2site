import Header from "../components/Header";


export default function Home() {
    return (
      <>
        <Header />
        <div class="container mt-4">
          <div class="row">
            <div class="col-md-8 offset-md-2">
              <div class="card p-3 mb-3">
                <textarea
                  class="form-control"
                  rows="3"
                  placeholder="What's on your mind?"
                ></textarea>
                <button class="btn btn-primary mt-2">Post</button>
              </div>

              <div class="card mb-3">
                <div class="card-body">
                  <div class="d-flex align-items-center mb-2">
                    <img
                      src="https://placehold.co/50x50"
                      class="rounded-circle me-2"
                      alt="User"
                    />
                    <strong>John Doe</strong>
                  </div>
                  <p>Enjoying the beautiful sunset! #nature #sunset</p>
                  <img
                    src="https://placehold.co/500x300"
                    class="img-fluid rounded"
                    alt="Post Image"
                  />
                  <div class="d-flex justify-content-between mt-2">
                    <button class="btn btn-outline-primary btn-sm">Like</button>
                    <button class="btn btn-outline-secondary btn-sm">
                      Comment
                    </button>
                  </div>
                </div>
              </div>

              <div class="card mb-3">
                <div class="card-body">
                  <div class="d-flex align-items-center mb-2">
                    <img
                      src="https://placehold.co/50x50"
                      class="rounded-circle me-2"
                      alt="User"
                    />
                    <strong>Jane Smith</strong>
                  </div>
                  <p>Had an amazing time at the beach today!</p>
                  <div class="d-flex justify-content-between mt-2">
                    <button class="btn btn-outline-primary btn-sm">Like</button>
                    <button class="btn btn-outline-secondary btn-sm">
                      Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}