const indexdb = window.indexedDB || window.mozIndexdb

let db

const request = indexdb.open('budget', 1)

request.onupgradeneeded = ({target}) => {
    let db = target.result
    db.createObjectStore('pending', {autoIncrement:true})
}

const { old } = tarrget;
const new = target.new