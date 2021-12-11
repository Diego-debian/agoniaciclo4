function regresar(){
    window.location.href = "../index.html";
}

function registros(){
    if($("#userEmail").val() === "" && $("#userPassword1").val()==="" && $("#userPassword2").val()==="" && $("#userName").val()===""){
        alert("Los campos no pueden estar vacios Vacios");
    }else if ($("#userEmail").val() === "" || $("#userPassword1").val()==="" || $("#userPassword2").val()==="" || $("#userName").val()===""){
            alert("Los campos no pueden estar vacios Vacios");  
    }
    else{
        $.ajax({
            type: 'GET',
	       /** url: "http://localhost:8080/api/user/" + $("#userEmail").val(),
            * 
            */
            url: "http://152.70.223.94:8080/api/user/" + $("#userEmail").val(),
            contentType: "application/json;  charset=utf-8",
            dataType: 'json',
            success: function (response) {
                if(response === true){
                    alert("Usted ya esta registrado o el correo ya existe.");
                    console.log("Correo exise " + response);
                    window.location.reload();
                }
                else{
                    if($("#userPassword1").val() !== $("#userPassword2").val()){
                        alert("Los contraseñas no coinciden.")
                    }
                    else{
                        Register();
                    }

                }
                
            },
        });
    }
}

function Register(){
    let objetoJS={
        email:$("#userEmail").val(),
        password:$("#userPassword1").val(),
        name:$("#userName").val()
    }
    console.log("Estoy acá");
    $.ajax({
        type:'POST',
        /** url:"http://localhost:8080/api/user/new",
         * 
         */ 
        url:"http://152.70.223.94:8080/api/user/new",
    
        contentType: "application/json;  charset=utf-8",
        dataType: 'json',
        data: JSON.stringify(objetoJS),
            
        success:function(response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctameente");    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
            alert("No se guardo correctameente, mire que las categorias esten bien" + errorThrown);
    
    
        }
        });
}
