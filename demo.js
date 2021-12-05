/*查找数据域为某一特定值的结点
*/
/*一棵二叉搜索树
      6
    3     8
  2  4   7  9
      5
*/
const tree = {
  val: 6,
  left: {
    val: 3,
    left: {
      val: 2,
    },
    right: {
      val: 4,
      right: {
        val: 5
      }
    }
  },
  right: {
    val: 8,
    left: {
      val: 7,
    },
    right: {
      val: 9
    }
  }
};

