migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kwe2zfc3n8f2rdd")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t0ioicdd",
    "name": "team",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kwe2zfc3n8f2rdd")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t0ioicdd",
    "name": "teamname",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
