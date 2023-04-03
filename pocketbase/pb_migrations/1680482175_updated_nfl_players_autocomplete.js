migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r9l3whuf0snlnxp")

  collection.options = {
    "query": "SELECT n.id, \"a\", \"b\" AS \"nbd\"  from nfl_players n"
  }

  // remove
  collection.schema.removeField("ozqpdzys")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wwldrgyf",
    "name": "a",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "re33enu0",
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
    "query": "SELECT n.id, \"a\" AS \"nbd\"  from nfl_players n"
  }

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

  // remove
  collection.schema.removeField("wwldrgyf")

  // remove
  collection.schema.removeField("re33enu0")

  return dao.saveCollection(collection)
})
