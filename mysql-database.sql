BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "employe" (
	"id_employe"	TEXT,
	"nom"	TEXT NOT NULL,
	"prenom"	TEXT NOT NULL,
	PRIMARY KEY("id_employe")
);
CREATE TABLE IF NOT EXISTS "login" (
	"email"	TEXT,
	"pass"	TEXT NOT NULL,
	"id_employe"	INTEGER NOT NULL,
	FOREIGN KEY("id_employe") REFERENCES "employe"("id_employe"),
	PRIMARY KEY("email")
);
INSERT INTO "employe" ("id_employe","nom","prenom") VALUES ('T100','abdellah','hajjam'),
 ('T101','kassab','yasser');
INSERT INTO "login" ("email","pass","id_employe") VALUES ('kassabyasser@gmail.com','zebii','T101');
COMMIT;
