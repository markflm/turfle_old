migrate((db) => {
  const collection = new Collection({
    "id": "r9l3whuf0snlnxp",
    "created": "2023-04-03 00:35:34.681Z",
    "updated": "2023-04-03 00:35:34.681Z",
    "name": "nfl_players_autocomplete",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fk0pm8pl",
        "name": "nbd",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT n.id, n.age AS \"nbd\"  from nfl_players n"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("r9l3whuf0snlnxp");

  return dao.deleteCollection(collection);
})
