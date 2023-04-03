migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kwe2zfc3n8f2rdd")

  // remove
  collection.schema.removeField("ss2z9cbs")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kwe2zfc3n8f2rdd")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
