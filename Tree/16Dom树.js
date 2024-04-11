/* 
题目描述：给定一个dom树，输出这个dom树的全部节点数和最深层级
*/

function countNodesAndDepth(root) {
    let count = 0
    let maxDeep = 0
    function dfs(node, deep) {
        if (!node) return
        count++
        maxDeep = Math.max(deep, maxDeep)
        node.childNodes.forEach(el => {
            dfs(el, deep + 1)
        });
    }
    dfs(root, 0)

    return [count, maxDeep]
}
countNodesAndDepth(document.body)