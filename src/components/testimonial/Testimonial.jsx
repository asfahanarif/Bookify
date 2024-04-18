/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mb-10">
        {/* main  */}
        <div className="container px-5 py-10 mx-auto">
          {/* Heading  */}
          <h1 className=" text-center text-3xl font-bold text-black">
            Testimonial
          </h1>
          {/* para  */}
          <h2 className=" text-center text-2xl font-semibold mb-10">
            What our <span className=" text-pink-500">customers</span> are
            saying
          </h2>

          <div className="flex flex-wrap -m-4">
            {/* Testimonial 1 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="img/asfahan.png"
                />
                <p className="leading-relaxed">
                  The Bookify digital novel print is a modern take on the
                  traditional printed book. This product features a full-color, digital printing process that brings the story to life with vibrant images and sharp text. The compact size and durable cover make it easy to take on-the-go, allowing you to enjoy your favorite novels wherever you go.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Asfahan Arif
                </h2>
                <p className="text-gray-500">Software Engineer</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://www.devknus.com/img/gawri.png"
                />
                <p className="leading-relaxed">
                  Bookify’s digital printing process also ensures that the
                  book is long-lasting, making it a great choice for avid
                  readers. Whether you’re looking to escape into a world of
                  fiction or to get lost in a gripping mystery, Bookify
                  digital novel print is the perfect choice for anyone who wants the best of both worlds – the tactile experience of a traditional book and the convenience of digital reading.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Maryam Nawaz
                </h2>
                <p className="text-gray-500">Politician</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://firebasestorage.googleapis.com/v0/b/devknus-official-database.appspot.com/o/images%2FScreenshot%202023-07-07%20at%202.20.32%20PM-modified.png?alt=media&token=324ddd80-2b40-422c-9f1c-1c1fa34943fa"
                />
                <p className="leading-relaxed">
                  We are still in our initial days and we are relentlessly
                  focused on growing more catalogues and constantly improvising customer experience in Pakistan. We trust, you will be by our side always.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Abdullah
                </h2>
                <p className="text-gray-500">Publisher</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
