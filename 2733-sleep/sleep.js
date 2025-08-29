/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
             resolve(Date.now())
        }, millis)
    })

    return promise1
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */