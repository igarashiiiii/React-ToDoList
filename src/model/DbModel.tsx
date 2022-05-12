
//記載したToDoリストを追加する箱、MySQLへ移動予定
export interface dbModel {
  id: number;
  text: string;
  status: string;
}

//ToDoリストを記載しているときに呼ばれるuseStateの型宣言
