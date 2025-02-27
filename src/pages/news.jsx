import Header from "../components/Header";
export default function News() {
  return (
    <>
      <Header />
      <div class="container mt-4">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            

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
                <a
                  href="https://www.youtube.com/watch?v=o-YBDTqX_ZU"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>
                    You'll never believe what this person did to lose 850 pounds
                    in 30 seconds
                  </p>
                  <img
                    src="https://placehold.co/500x300"
                    class="img-fluid rounded"
                    alt="Post Image"
                  />
                </a>
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
                <a
                  href="https://www.youtube.com/watch?v=o-YBDTqX_ZU"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>
                    President of Whoville declares war on the Grinch.
                  </p>
                  <img
                    src="https://placehold.co/500x300"
                    class="img-fluid rounded"
                    alt="Post Image"
                  />
                </a>
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
