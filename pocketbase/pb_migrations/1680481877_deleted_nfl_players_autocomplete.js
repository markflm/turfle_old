migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5ua7sah7l42a6z5");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "5ua7sah7l42a6z5",
    "created": "2023-04-03 00:29:55.677Z",
    "updated": "2023-04-03 00:29:55.677Z",
    "name": "nfl_players_autocomplete",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qh2uneb4",
        "name": "field",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "kwe2zfc3n8f2rdd",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "wucecwsz",
        "name": "autocomplete_string",
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
})
