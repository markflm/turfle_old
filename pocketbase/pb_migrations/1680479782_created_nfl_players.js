migrate((db) => {
  const collection = new Collection({
    "id": "kwe2zfc3n8f2rdd",
    "created": "2023-04-02 23:56:22.974Z",
    "updated": "2023-04-02 23:56:22.974Z",
    "name": "nfl_players",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0uduftlx",
        "name": "name",
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
        "id": "ss2z9cbs",
        "name": "team",
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
        "id": "fk0pm8pl",
        "name": "age",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "8reysghs",
        "name": "position",
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
        "id": "z1gopa0x",
        "name": "teamimageurl",
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
        "id": "heyr9diz",
        "name": "ispotd",
        "type": "bool",
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
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("kwe2zfc3n8f2rdd");

  return dao.deleteCollection(collection);
})
