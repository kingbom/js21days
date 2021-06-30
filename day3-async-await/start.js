(() => {
    //Callback
    const simulateAsyncAPICallback = (tex, timeout, callback) => {
         setTimeout(() => {
             console.log(tex);
             if (callback) callback();
         }, timeout);
    }

    const callbackFunc = () => {
        // Callback hell
        simulateAsyncAPICallback('A', 1000, () => {
            simulateAsyncAPICallback('B', 500, () => {
                simulateAsyncAPICallback('C', 100);
            });
        });
    }

    const simulateAsyncAPIPromise = (tex, timeout) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(tex);
                resolve();
            }, timeout);
        })
    }

    const promiseFunc = () => {
        simulateAsyncAPIPromise('A', 1000)
            .then(() => simulateAsyncAPIPromise('B', 500))
            .then(() => simulateAsyncAPIPromise('C', 100))
            .catch((error) => console.error(error));
    }

    const asyncFunc = async () => {
        try {
            await simulateAsyncAPIPromise('A', 1000);
            await simulateAsyncAPIPromise('B', 500);
            await simulateAsyncAPIPromise('C', 100);
        } catch (error) {
            console.error(error);
        }
    }

    // callbackFunc();
    // promiseFunc();
    asyncFunc();
})();