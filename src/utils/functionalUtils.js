const delayExecution = (resolver) => {
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            resolve(resolver);
        }, 5000);
    });
};

export default {
    delayExecution,
}