var bcrypt = require("bcrypt-nodejs");
var validator = require("validator");

module.exports = functin(sequelize.DataTypes){
    //creates our user table
    var User = sequelize.define("user", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
            //using hook to handle the email with validation package

        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isTruckOwner: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue:false,
        },
    });
    //for email user validation 
    User.hook("beforeValidate",function(user){
        if(user.email.indexOf("@gmail.com")!= -1){
            return sequelize.promise.resolve(user);
        }
        if(validator.isEmail(user.email)){
            return sequelize.promise.resolve(user);
        }else{
            return sequelize.promise.reject("Validation Error: invalid email");
         }
    });
    //user prototype method to check if our user password is valid
    User.prototype.validPassword= function(password){
        return bcrypt.compareSync(password,this.password);
    };
    //pre table creation hook to hash the user password
    User.hook("beforeCreate",function(user){
        user.password= bcrypt.hashSync(user.password, bcrypt.genSaltSync(12),null);
    });
    return User;
}