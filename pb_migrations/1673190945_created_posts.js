migrate((db) => {
  const collection = new Collection({
    "id": "5hi5fkd6xpqar12",
    "created": "2023-01-08 15:15:45.980Z",
    "updated": "2023-01-08 15:15:45.980Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "laixymtd",
        "name": "body",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": 256,
          "pattern": ""
        }
      }
    ],
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
  const collection = dao.findCollectionByNameOrId("5hi5fkd6xpqar12");

  return dao.deleteCollection(collection);
})
