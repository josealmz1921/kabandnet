import ReactPaginate from 'react-paginate';

const Paginate = () => {
    return (
        <div className='conten-pagination'>
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={85}
            marginPagesDisplayed={3}
            pageRangeDisplayed={7}
            // onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
            />
        </div>
    );
}

export default Paginate;


