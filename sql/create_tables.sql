-- Adminer 4.8.1 PostgreSQL 14.3 (Debian 14.3-1.pgdg110+1) dump

\connect "test";

DROP TABLE IF EXISTS "producers";
CREATE TABLE "public"."producers" (
    "id" integer NOT NULL,
    "name" character varying NOT NULL,
    "message" character varying NOT NULL
) WITH (oids = false);

DROP TABLE IF EXISTS "consumers";
CREATE TABLE "public"."consumers" (
    "id" integer NOT NULL,
    "name" character varying NOT NULL,
    "message" character varying NOT NULL
) WITH (oids = false);

INSERT INTO "producers" ("id", "name", "message") VALUES
(1, 'Nichu',	'Hi Man'),
(2, 'Karthi',	'Hi'),
(3, 'Yashit',	'Hi Bro'),
(4, 'Bas',	'Vanakkam'),
(5, 'Vineeth',	'Vanakkam Thozhare'),
(6, 'Ritika', 'BRUH'),
(10,'xyz','123');

-- 2022-06-20 10:19:45.34979+00
