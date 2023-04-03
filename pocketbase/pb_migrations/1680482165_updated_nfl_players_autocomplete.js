migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r9l3whuf0snlnxp")

  collection.options = {
    "query": "SELECT n.id, \"a\" AS \"nbd\"  from nfl_players n"
  }

  // remove
  collection.schema.removeField("fk0pm8pl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ozqpdzys",
    "name": "nbd",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r9l3whuf0snlnxp")

  collection.options = {
    "query": "SELECT n.id, n.age AS \"nbd\"  from nfl_players n"
  }

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("ozqpdzys")

  return dao.saveCollection(collection)
})
