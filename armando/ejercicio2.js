let objeto = {var1:0,var2:10}
function referencia({var1,var2}=objeto)
{var1=var1+15;
    objeto.var1=var1;
 var2=var2-5;
 objeto.var2=var2;
return objeto}

referencia(objeto)
console.log(objeto.var1)
console.log(objeto.var2)