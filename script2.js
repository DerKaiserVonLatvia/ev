function F0(){
    var canvas = document.getElementById("canvas1");
    var c = canvas.getContext("2d");


    var xc = canvas1.width / 2; var yc = canvas1.height / 2;

    c.clearRect(0, 0, 2*xc, 2*yc);

    c.beginPath();


    c.moveTo(10, yc); c.lineTo(2 * xc - 10, yc);
    c.moveTo(xc, 10); c.lineTo(xc, 2 * yc - 10);
    c.stroke();
    c.closePath();
    var N = parseInt(input1.value);


    for(let i = 1; i<=N; i++)
    {
        c.fillStyle = "Purple";
        c.strokeStyle = "Pink";
        c.beginPath();
        c.ellipse(xc, (i*45)-50, 20,20,0, 0 , 2*Math.PI);
        c.closePath()
        c.stroke();
        c.fill();
        c.closePath();
    }
}
