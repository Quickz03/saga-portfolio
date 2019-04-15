CREATE TABLE "tags" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL
);

CREATE TABLE "projects" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL,
    "description" varchar(2048),
    "thumbnail" varchar(2048), 
    "website" varchar(2048),
    "github" varchar(2048),
    "date_completed" date,
    "tag_id" INT REFERENCES "tags"
);

INSERT INTO "tags" ("name") 
VALUES ('React'), ('jQuery'), ('Node'), ('SQL'), ('Redux'), ('HTML');


INSERT INTO "projects"
    ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
VALUES
    ('Redux-Saga-Garden', 'made an epic garden using react-redux sagas', 'picture', 'url', 'https://github.com/Quickz03/redux-saga-garden', '4-11-19', 5 );

INSERT INTO "projects"
    ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
VALUES
    ('Redux-Gallery', 'made app using react with the ability to click on a picture and flip to a description of that picture, and like the picture', 'picture', 'url', 'https://github.com/Quickz03/react-gallery', '3-31-19', 4 );



SELECT "projects"."id", "projects"."name" as "name",
    "projects"."description" as "description",
    "projects"."thumbnail" as "thumbnail",
    "projects"."website" as "website",
    "projects"."github" as "github",
    "projects"."date_completed" as "date",
    "tags"."name" as "tags"
FROM "projects"
    JOIN "tags" on "projects"."tag_id"="tags"."id";


SELECT * FROM "tags" ORDER BY "id";