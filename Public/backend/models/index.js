const { Sequelize } = require('sequelize');
const UserModel = require('./User');
const StoreModel = require('./Store');
const RatingModel = require('./Rating');
const config = require('../config/db');

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: 'postgres',
  logging: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = UserModel(sequelize, Sequelize);
db.Store = StoreModel(sequelize, Sequelize);
db.Rating = RatingModel(sequelize, Sequelize);

// Relationships
db.User.hasMany(db.Rating);
db.Rating.belongsTo(db.User);

db.Store.hasMany(db.Rating);
db.Rating.belongsTo(db.Store);

db.Store.belongsTo(db.User, { as: 'owner', foreignKey: 'ownerId' });

module.exports = db;
