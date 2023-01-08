migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5hi5fkd6xpqar12")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5hi5fkd6xpqar12")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
