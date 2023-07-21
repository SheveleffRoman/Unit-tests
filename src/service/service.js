const service = {
    push: (arr, item) => {
        arr[arr.length] = item;
    },
    slice: (arr, start, end) => {
        const  temp =[];
        if(!Array.isArray(arr)) {
            return new Error('not an array');
        }
        if(end === undefined || end > arr.length) {
            end = arr.length;
        }
        for (let i = start; i < end; i++) {
            service.push(temp, arr[i]);
        }
        return temp;

    }
}

module.exports = service;