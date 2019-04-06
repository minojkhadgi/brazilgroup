module.exports = function (sequelize, DataTypes) {
  //creating our location table

  var Location = sequelize.define("Location", {
    lat: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValues: 0,
      validate: {
        isFloat: true,
        len: [1]
      }
    },
    lon: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValues: 0,
      validate: {
        isFloat: true,
        len: [1]
      }
    },
    updateTime: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        isDate: true,
        len: [1]
      }
    }

  });

  Location.associate = function (models) {
    Location.belongsTo(model.Truck, {
      foreignKey: {
        allowNull: false
      }
    })
  }
  return Location;
};
