migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kwe2zfc3n8f2rdd")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kwe2zfc3n8f2rdd")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
