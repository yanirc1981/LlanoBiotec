const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'Product',
    {
code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  account_group: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  stock_control: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  tax_classification: {
    type: DataTypes.STRING,
    defaultValue: 'Taxed',
  },
  tax_included: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  tax_consumption_value: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  taxes_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  prices_currency_code: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  prices_price_list_position: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  unit: {
    type: DataTypes.STRING,
    defaultValue: '94',
  },
  
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  
 
  tariff: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: true,
  },
},
    {
      timestamps: false,
      indexes: [
        
      ],
    }
  );
};
