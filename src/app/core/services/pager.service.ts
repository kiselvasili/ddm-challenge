import * as _ from 'lodash';

export class PagerService {
    getPager(totalItems: number, currentPage: number = 1, pageSize: number) {
        let totalPages = Math.ceil(totalItems / pageSize);

        let startPage: number, endPage: number;
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        let pages = _.range(startPage, endPage + 1);

        return {
            currentPage: currentPage,
            totalPages: totalPages,
            pages: pages
        };
    }
}