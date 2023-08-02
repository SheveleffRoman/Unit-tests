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
    },
    filter: (arr, callback) => {
        let result = [];
        for (let i = 0; i<arr.length; i++) {
          if (callback(arr[i])) {
            result[result.length] = arr[i];
          }
        }
        return result;
    },
    forEach(arr, callback) {
        for (let i = 0; i < arr.length; i += 1) {
            callback(arr[i], i, arr);
        }
    },
    hasProp(obj, property) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key) && key === property) {
              return true;
            }
          }
          return false;
    }
}

module.exports = service;