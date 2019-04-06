module.exports = function(sequelize,DataTypes){
    //creates our social media table
    var socialMedia = sequelize.define("socialMedia",{
        twitter:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        instagram:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        facebook:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        other:{
            type:DataTypes.STRING,
            allowNull:true,
        },

    });

    socialMedia.associate = function(models){
        socialMedia.belongsTo(models.truck,{
            foreignKey:{
                allowNull:false
            }
        });

    };
    return socialMedia;
};