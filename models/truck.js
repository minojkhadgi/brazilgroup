module.exports =function(sequelize, DataTypes){
    //create truck table
    var Truck = sequelize.define("truck",{
        truckName:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        desc:{
            type: DataTypes.TEXT,
            allowNull:true,
        },
        category:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        lisencePlate:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        pictureURL:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        menuURl:{
            type: DataTypes.STRING,
            allowNull:true,
        },
    });
    Truck.associate= function(models){
        Truck.belongsTo(models.user,{
            foreignKey:{
                allowNull:false
            }
        });
        Truck.hasOne(models.Location,{
            foreignKey:"TruckId"
        });
    };
    return Truck
};