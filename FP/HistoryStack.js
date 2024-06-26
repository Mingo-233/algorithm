const HistoryManager = (() => {
    const createHistory = () => ({
        history: [],
        currentIndex: -1,
    });

    const pushState = (state, callback, historyObj) => {
        const { history, currentIndex } = historyObj;
        const newHistory = currentIndex < history.length - 1
            ? history.slice(0, currentIndex + 1)
            : history;
        return {
            history: [...newHistory, { state, callback }],
            currentIndex: currentIndex + 1,
        };
    };

    const back = (historyObj) => {
        const { currentIndex } = historyObj;
        if (currentIndex > 0) {
            return {
                ...historyObj,
                currentIndex: currentIndex - 1
            };
        }
        return historyObj;
    };

    const forward = (historyObj) => {
        const { history, currentIndex } = historyObj;
        if (currentIndex < history.length - 1) {
            const newIndex = currentIndex + 1;
            history[newIndex].callback(); // 调用回调函数
            return {
                ...historyObj,
                currentIndex: newIndex
            };
        }
        return historyObj;
    };

    const getCurrentState = (historyObj) => {
        const { history, currentIndex } = historyObj;
        if (currentIndex >= 0 && currentIndex < history.length) {
            return history[currentIndex].state;
        }
        return null;
    };

    const printCurrentHistory = (historyObj) => {
        const { history, currentIndex } = historyObj;
        console.log(`Current history: ${history.map(item => item.state).join(', ')}`);
        console.log(`Current index: ${currentIndex}`);
    };

    return {
        createHistory,
        pushState,
        back,
        forward,
        getCurrentState,
        printCurrentHistory,
    };
})();

// 使用示例
let myHistory = HistoryManager.createHistory();

const callback1 = () => console.log("Callback for Page 1 triggered");
const callback2 = () => console.log("Callback for Page 2 triggered");
const callback3 = () => console.log("Callback for Page 3 triggered");
const callback4 = () => console.log("Callback for Page 4 triggered");

myHistory = HistoryManager.pushState("Page 1", callback1, myHistory);
myHistory = HistoryManager.pushState("Page 2", callback2, myHistory);
myHistory = HistoryManager.pushState("Page 3", callback3, myHistory);

HistoryManager.printCurrentHistory(myHistory);

myHistory = HistoryManager.back(myHistory); // 回到 Page 2
HistoryManager.printCurrentHistory(myHistory);

myHistory = HistoryManager.back(myHistory); // 回到 Page 1
HistoryManager.printCurrentHistory(myHistory);

myHistory = HistoryManager.forward(myHistory); // 前进到 Page 2
HistoryManager.printCurrentHistory(myHistory);

myHistory = HistoryManager.pushState("Page 4", callback4, myHistory); // 添加 Page 4
HistoryManager.printCurrentHistory(myHistory);

myHistory = HistoryManager.back(myHistory); // 回到 Page 2
HistoryManager.printCurrentHistory(myHistory);