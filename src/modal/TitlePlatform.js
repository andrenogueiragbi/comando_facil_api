const { Model, DataTypes } = require('sequelize');


module.exports = (sequelize, _DataTypes) => {
    const PersonCrush = sequelize.define('PersonCrush',
      {},
      { timestamps: false },
    );
  
    PersonCrush.associate = (models) => {
      models.Crush.belongsToMany(models.Person, {
        as: 'persons',
        through: PersonCrush,
        foreignKey: 'crush_id',
        otherKey: 'person_id',
      });
      models.Person.belongsToMany(models.Crush, {
        as: 'crushers',
        through: PersonCrush,
        foreignKey: 'person_id',
        otherKey: 'crusher_id',
      });
    };
  
    return PersonCrush;
  };