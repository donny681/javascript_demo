function myFunction(){
    var x = 911 + 7 + "Porsche";
    var y="human"+911+8
    var person={firstName:"Bill",
                lastName:"Gates",
                age:62,eyeColor:"blue",
                FUllName:function(){
                    return this.firstName+" "+this.lastName;
    }
};
    // var x=7;
    // x+=8;
    var z=123e34
    // document.write(x)
    // document.write("\r\n")
    // document.write(z)
    // console.log("console log"+z)
    // window.alert("window alert")
    document.getElementById("demo").innerHTML = cal(77);
    document.getElementById("demo").innerHTML = person.FUllName();
    document.getElementById("demo").innerHTML = Date();
}

function cal(num){
    return (5/9)*(num-4);
}
