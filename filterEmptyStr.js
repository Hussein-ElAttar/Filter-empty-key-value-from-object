function filterEmptyStr(obj) {
    let filterdObj = {}
    const keyValueArray = Object.entries(obj)
    for (let i = 0; i < keyValueArray.length; i++) {
        let key = keyValueArray[i][0]
        let value = keyValueArray[i][1]

        if (value.constructor === String) {
            if (value !== "") {
                filterdObj = { ...filterdObj, [key]: value }
            }
        }
		else if (value.constructor === Number) {
            if (value !== NaN) {
                filterdObj = { ...filterdObj, [key]: value }
            }
        }
        else if (value.constructor === Array) {
            filterdObj = {
                ...filterdObj, [key]: value.map(keyValueArray2 =>
                    filterEmptyStr(keyValueArray2)).filter(keyValueArray3 =>
                        Object.keys(keyValueArray3).length > 0)
            }
        }
        else if (value.constructor === Object) {
            filterdObj = { ...filterdObj, [key]: filterEmptyStr(value) }
        }
    }
    return filterdObj
}
