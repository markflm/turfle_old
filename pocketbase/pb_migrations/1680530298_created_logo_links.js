migrate((db) => {
  const collection = new Collection({
    "id": "ujcnam7ter4j871",
    "created": "2023-04-03 13:58:18.113Z",
    "updated": "2023-04-03 13:58:18.113Z",
    "name": "logo_links",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jnu7td89",
        "name": "image_url",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "o2v1cmug",
        "name": "team_name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ujcnam7ter4j871");

  return dao.deleteCollection(collection);
})
