# passcraft
https://docs.google.com/document/d/1Q2kq-GOi3uF9o_w9XYD1DSBa9xBkdN4Iww7uigG5-aU/edit?hl=ja&tab=t.0

テーブルは以下のSQL文で作成しました。
CREATE TABLE "accounts" (
	"accountname"	TEXT,　　//主キー 重複・空値不可
	"password"	TEXT NOT NULL,　//空値不可
	"strength"	TEXT NOT NULL,  //空値不可
	PRIMARY KEY("accountname")
);
また、既に登録されているアカウント名が追加されようとすると、現時点では上書きして登録されます。

登録の際の引数は、アカウント名、パスワード、パスワードの強度の順です。

/libにsqlite-jdbc-3.49.1.0.jarを追加してください。
バージョンは3.49.1.0

ダウンロードURL
https://github.com/xerial/sqlite-jdbc/releases