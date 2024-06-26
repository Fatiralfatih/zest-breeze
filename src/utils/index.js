import moment from "moment";

const removeElementHtml = (data) => {
    return [data].toString().replace(/<\/?[^>]+(>|$)/g, '')
}

const getDateHumans = (date) => {
    return moment(new Date(date)).startOf('minutes').fromNow();
}

export {
    getDateHumans,
    removeElementHtml,
}