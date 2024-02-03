    const userName = document.querySelector("#name")
    const phone = document.querySelector("#phone")
    const cpf = document.querySelector("#cpf")
    const password = document.querySelector("#password")
    const btnCadastro = document.querySelector("#btn-cadastrar")

    const handleCadastro = () => {
        window.alert(`        Nome: ${userName.value}
        Email: ${email.value}
        Contato: ${phone.value}
        CPF: ${cpf.value}`)
    } 

    btnCadastro.addEventListener("click", () => {
        handleCadastro()
    })

    // Função de aplicação de máscaras (obtida na internet)

        function mask(o,f){
        v_obj=o
        v_fun=f
        setTimeout("execmask()",1)
        }

        function execmask(){
        v_obj.value=v_fun(v_obj.value)
        }

        function masktel(v){
        v=v.replace(/\D/g,"");
        v=v.replace(/^(\d{2})(\d)/g,"($1) $2");
        v=v.replace(/(\d)(\d{4})$/,"$1-$2");
        return v;
        }

        function maskcpf(v){ 
        v=v.replace(/\D/g,"");
        v=v.replace(/(\d{3})(\d)/,"$1.$2");
        v=v.replace(/(\d{3})(\d)/,"$1.$2");
        v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
        return v;
        }
        function maskemail(v){
        // v=v.replace (/\S+@\S+\.\S+/);
        console.log(email.value)
        return v;
        }

        function idcss( el ){
            return document.getElementById( el );
        }

        window.onload = function(){

            idcss('email').setAttribute('maxlength', 36);
            idcss('email').onkeyup = function(){
                mask( this, maskemail );
            }
                
            idcss('phone').setAttribute('maxlength', 15);
            idcss('phone').onkeyup = function(){
                mask( this, masktel );
            }
            
            idcss('cpf').setAttribute('maxlength', 14);
            idcss('cpf').onkeyup = function(){
                mask( this, maskcpf );
            }
        }
