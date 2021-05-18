export const calculateOffset = (perPage, currentPage) => {
    return perPage * currentPage;
};

export const calculatePageCount = (perPage, totalPages) => {
    return Math.ceil(totalPages / perPage);
};
