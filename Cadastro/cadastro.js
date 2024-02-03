    const form = document.querySelector("#form")
    const username = document.querySelector("#name")
    const email = document.querySelector("#email")
    const phone = document.querySelector("#phone")
    const cpf = document.querySelector("#cpf")
    const btnCadastro = document.querySelector("#btn-cadastrar")

    const handleCadastro = () => {
        if(username.value && email.value && phone.value && cpf.value) {
            window.alert(`        Nome: ${username.value}
            Email: ${email.value}
            Contato: ${phone.value}
            CPF: ${cpf.value}`)
        } else {
            console.log("Preencha todos os campos...")
        }
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
