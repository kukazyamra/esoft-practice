function deepCopy(obj, clonedObjects = {}) {
    if (typeof obj !== 'object' || obj == null) {
        return obj;
    }
    if (clonedObjects[obj]) {
        return clonedObjects[obj];
    }
    if (Array.isArray(obj)) {
        let result = []
        for (let i = 0; i < obj.length; i++) {
            result.push(deepCopy(obj[i]));
        }
        return result;
    }
    if (obj instanceof Date) {
        let result = new Date();
        result.setTime(obj.getTime());
        return result;
    }
    if (obj instanceof Set) {
        return new Set(deepCopy(Array.from(obj)))
    }
    if (obj instanceof Map) {
        return new Map(deepCopy(Array.from(obj)));
    }
    const result = Object.create(Object.getPrototypeOf(obj))
    for (const prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            result[prop] = deepCopy(obj[prop])
        }
    }
    return result;
}