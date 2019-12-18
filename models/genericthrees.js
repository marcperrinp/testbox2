// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Genericthrees = sequelize.define('genericthrees', {
    id: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('nextval(genericthrees_id_seq::regclass)'),
    },
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    generictwoId: {
      type: DataTypes.INTEGER,
    },
    meta: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    description: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'genericthrees',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v5/reference-guide/relationships#adding-relationships.
  Genericthrees.associate = (models) => {
  };

  return Genericthrees;
};
