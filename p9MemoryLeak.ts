//1. Global Variables ki wajah se Memory Leak
//2. Event Listener Remove na karna
//3. setInterval / setTimeout Cleanup na karna
//4. Closures ki wajah se Memory Leak
//5. Detached DOM Elements
//6. Large Cache / Map Never Clearing

/* 
    A memory leak occurs when memory is allocated but not released even after it is no longer needed. 
    It happens due to retained references such as global variables, event listeners, timers, subscriptions,
    closures, and large caches. We can avoid memory leaks by cleaning up event listeners, 
    unsubscribing RxJS subscriptions, clearing timers, removing references, and optimizing cache usage.

    Memory leak tab hota hai jab unused object memory me pada rehta hai kyunki uska reference kahin saved hota hai. 
    Isko avoid karne ke liye event listener remove karna, interval clear karna, RxJS unsubscribe karna, 
    cache clean karna aur unnecessary references hataana chahiye.

    "If reference exists, garbage collector cannot clean memory." --- Rule

*/
class MemoryLeakDemo {
    private data: any;
    constructor() {
        this.data = new Array(100).fill("data");
    }

    addData() {
        if(this.data.length>1){
            this.data = [];
        }
        this.data.push("more data");
        console.log(`Data length: ${this.data.length}`);
    }
}

const demo = new MemoryLeakDemo();
setInterval(() => {
    demo.addData();
}, 1000);
