migrate((db) => {
  const collection = new Collection({
    "id": "0mfl7htdx0wfhvc",
    "created": "2023-04-03 13:59:10.544Z",
    "updated": "2023-04-03 13:59:10.544Z",
    "name": "nfl_teams",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fzjm1nob",
        "name": "team_name",
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
        "id": "npvh2ywe",
        "name": "logo_link",
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
  const collection = dao.findCollectionByNameOrId("0mfl7htdx0wfhvc");

  return dao.deleteCollection(collection);
})
