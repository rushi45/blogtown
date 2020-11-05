module.exports = {

    reduceContent : content => content.slice(0,250) ,
    formatDate : (date) => {

        var d = new Date(date) ;
        return `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    }


}