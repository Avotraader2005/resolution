
    // calculer cramer //
    function cramer(){
        var  a=parseInt(document.getElementById("a").value);
        var  b=parseInt(document.getElementById("b").value);
        var  c=parseInt(document.getElementById("c").value);
        
        var  j=parseInt(document.getElementById("j").value);

        var  d=parseInt(document.getElementById("d").value);
        var  e=parseInt(document.getElementById("e").value);
        var  f=parseInt(document.getElementById("f").value);
        
        var  k=parseInt(document.getElementById("k").value);

        var  g=parseInt(document.getElementById("g").value);
        var  h=parseInt(document.getElementById("h").value);
        var  i=parseInt(document.getElementById("i").value);
        
        var  l=parseInt(document.getElementById("l").value);

        var delta_x=parseFloat((e*j*i)+(b*f*l)+(c*k*h)-(i*k*b)-(j*f*h)-(c*e*l));
        var delta_y=parseFloat((a*k*i)+(j*f*g)+(c*d*l)-(i*d*j)-(l*f*a)-(g*k*c));
        var delta_z=parseFloat((a*e*l)+(b*k*g)+(j*d*h)-(l*d*b)-(h*k*a)-(j*e*g));

        var delta_d=parseFloat((a*e*i)+(b*f*g)+(c*d*h)-(i*d*b)-(h*f*a)-(c*e*g));
        
        var x=delta_x/delta_d;
        var y=delta_y/delta_d;
        var z=delta_z/delta_d;


        document.getElementById("x").value = "X = "+ x.toFixed(3);
        document.getElementById("y").value = "Y = "+ y.toFixed(3);
        document.getElementById("z").value = "Z = "+ z.toFixed(3);

        document.getElementById("delta_x").value = "delta_X = " + delta_x.toFixed(3);
        document.getElementById("delta_y").value = "delta_Y = " + delta_y.toFixed(3);
        document.getElementById("delta_z").value = "delta_Z = " + delta_z.toFixed(3);
    }
