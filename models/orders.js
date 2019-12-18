// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Orders = sequelize.define('orders', {
    shippingStatus: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    beingProcessedAt: {
      type: DataTypes.DATE,
    },
    readyForShippingAt: {
      type: DataTypes.DATE,
    },
    inTransitAt: {
      type: DataTypes.DATE,
    },
    shippedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'orders',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v5/reference-guide/relationships#adding-relationships.
  Orders.associate = (models) => {
    Orders.belongsTo(models.products, {
      foreignKey: {
        name: 'productId',
        field: 'product_id',
      },
      as: 'product',
    });
    Orders.belongsTo(models.customers, {
      foreignKey: {
        name: 'customerId',
        field: 'customer_id',
      },
      as: 'customer',
    });
    Orders.belongsTo(models.deliveries, {
      foreignKey: {
        name: 'deliveryId',
        field: 'delivery_id',
      },
      as: 'delivery',
    });
  };

  return Orders;
};