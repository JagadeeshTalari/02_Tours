import Tour from "./Tour";

const Tours = ({ tours, isRefetchfunc, updateList }) => {
  return (
    <section>
      {tours.length !== 0 ? (
        <div className="title">
          <h2>Our Tours</h2>
          <div className="title-underline"></div>
        </div>
      ) : (
        <div className="title">
          <h2>No Tours Available</h2>
          <div className="title-underline"></div>
          <button
            style={{ marginTop: "2rem" }}
            className="btn"
            onClick={isRefetchfunc}
          >
            Refresh
          </button>
        </div>
      )}

      <div className="tours">
        {tours.length !== 0
          ? tours.map((tour) => {
              return <Tour key={tour.id} tour={tour} updateList={updateList} />;
            })
          : null}
      </div>
    </section>
  );
};
export default Tours;
