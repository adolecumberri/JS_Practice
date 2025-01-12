let objeto = {var1:0,var2:10}
function referencia(objeto)
{objeto.var1=12;
 objeto.var2=12;
return objeto}

referencia(objeto)
console.log(objeto.var1)
console.log(objeto.var2)
