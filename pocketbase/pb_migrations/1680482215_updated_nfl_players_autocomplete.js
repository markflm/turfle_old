migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r9l3whuf0snlnxp")

  collection.options = {
    "query": "SELECT n.id, (\"a\", \"B\")  AS \"nbd\"  from nfl_players n"
  }

  // remove
  collection.schema.removeField("ic68fx2n")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y0otmd9n",
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
    "query": "SELECT n.id, (\"a\" + \"B\")  AS \"nbd\"  from nfl_players n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ic68fx2n",
    "name": "nbd",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("y0otmd9n")

  return dao.saveCollection(collection)
})
