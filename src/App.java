public class App {
    public static void main(String[] args) {
        AccountManager manager = new AccountManager();

        //データ追加
        manager.addAccount("test1", "abc012", "弱");
        manager.addAccount("test2", "wf7bTif2i!", "強");

        //データ表示
        manager.showAccounts();
        System.out.println();

        //データ更新(上書き)
        manager.addAccount("test1", "ABC012", "弱");

        //データ表示(確認用)
        manager.showAccounts();

        //データ削除
        manager.deleteAccount("test1");
        manager.deleteAccount("test2");

        
    }
}
