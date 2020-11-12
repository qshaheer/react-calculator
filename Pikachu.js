//INIT
sequelize init

//GENERATE
sequelize model:generate --name item --attributes name:string,price:integer,stock:integer

//MIGRATE
sequelize db:migrate

//CREATE SPECIFIC MIGRATION
sequelize migration:create --name name_of_your_migration

//UNDO SPECIFIC MIGRATION
db:migrate:undo --name 20180704124934-create-branch.js

//RENAME OR ADD Column MIGRATION
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.renameColumn(
        'users',
        'photo',
        'photoContent')
    ],
      queryInterface.addColumn(
        'users',
        'contentType',
        { type: Sequelize.STRING }, {
        after: 'photoContent' // after option is only supported by MySQL
     }),
);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([ 
      queryInterface.renameColumn(
        'users',
        'photoContent',
        'photo'),
      queryInterface.removeColumn(
      'users',
      'contentType'
    ),
  ]);
  }
};

//add ForeignKey Relation

return queryInterface.addColumn(
  'Products', // name of Source model
  'CategoryId', // name of the key we're adding 
  {
    type: Sequelize.UUID,
    references: {
      model: 'Category', // name of Target model
      key: 'id', // key in Target model that we're referencing
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  }
)

mongodump --uri mongodb+srv://production:JofilbQzS1zsdsdc@cappythingsnecessary-1.7jia5.mongodb.net/cappy-stage

mongorestore -d cappy-stage dump/cappy-stage/ --noIndexRestore

