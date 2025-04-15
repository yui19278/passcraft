# passcraft
https://docs.google.com/document/d/1Q2kq-GOi3uF9o_w9XYD1DSBa9xBkdN4Iww7uigG5-aU/edit?hl=ja&tab=t.0

テーブルは以下のSQL文で作成しました。
CREATE TABLE "accounts" (
	"accountname"	TEXT,
	"password"	TEXT NOT NULL,
	"strength"	TEXT NOT NULL,
	PRIMARY KEY("accountname")
);
また、既に登録されているアカウント名が追加されようとすると、現時点では上書きして登録されます。
