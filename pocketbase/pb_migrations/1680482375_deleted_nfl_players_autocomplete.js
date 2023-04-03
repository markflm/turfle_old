migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("r9l3whuf0snlnxp");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "r9l3whuf0snlnxp",
    "created": "2023-04-03 00:35:34.681Z",
    "updated": "2023-04-03 00:37:05.531Z",
    "name": "nfl_players_autocomplete",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ccmqqluj",
        "name": "nbd",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT n.id, (\"a\")  AS \"nbd\"  from nfl_players n"
    }
  });

  return Dao(db).saveCollection(collection);
})
