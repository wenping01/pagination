

export default function Pagination({ photosPerPage, totalPhotos, paginate, currentPage }) {
    const pageNumber = []
    for (let i =1; i<= Math.ceil(totalPhotos/photosPerPage); i++) {
        pageNumber.push(i)
    }
    return <ul className="flex justify-center">
        { pageNumber.map((number, key) => (
                <li key={key} className="">
                    <a onClick={() => paginate(number)} className={"border-inherit rounded-sm p-2 cursor-pointer " + (number == currentPage ? "text-blue-500" : "text-blue-300")}>{number}</a>
                </li>
            )
        )}
    </ul>
}