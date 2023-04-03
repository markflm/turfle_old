migrate((db) => {
  const collection = new Collection({
    "id": "2zjj85gky4rif5z",
    "created": "2023-04-03 00:28:28.856Z",
    "updated": "2023-04-03 00:28:28.856Z",
    "name": "nfl_players_autocomplete",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xgcttjxx",
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
        "id": "kkfarbyn",
        "name": "autocomplete_suggestion",
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
  const collection = dao.findCollectionByNameOrId("2zjj85gky4rif5z");

  return dao.deleteCollection(collection);
})
