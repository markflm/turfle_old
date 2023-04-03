migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0mfl7htdx0wfhvc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bobvmhur",
    "name": "abbrv",
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
  const collection = dao.findCollectionByNameOrId("0mfl7htdx0wfhvc")

  // remove
  collection.schema.removeField("bobvmhur")

  return dao.saveCollection(collection)
})
