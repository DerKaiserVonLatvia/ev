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
        c.ellipse((550/N)*i, 125, 250/N,150/N,0, 0 , Math.PI);
        c.closePath()
        c.stroke();
        c.fill();
        c.closePath();
    }
}


function F1(){
    var canvas = document.getElementById("canvas2");
    var c = canvas.getContext("2d");

    var xc = canvas1.width / 2; var yc = canvas1.height / 2;

    c.clearRect(0, 0, 2*xc, 2*yc);
 
    var N = parseInt(input1.value);


    for(let i = 1; i<=N; i++)
    {
        if (i%2==0)
        {
            c.fillStyle = "Purple";
            c.strokeStyle = "Pink";
        }else{
            c.fillStyle = "Red";
            c.strokeStyle = "Black";
        }

        c.beginPath();
        c.ellipse((550/N)*i, 120, 250/N,150/N,0, 0 , Math.PI);
        c.closePath()
        c.stroke();
        c.fill();
        c.closePath();


        c.beginPath();

        c.lineTo((550/N)*i, 120);
        c.lineTo(((550/N)*i)+100/N, 120-100/N);
        c.lineTo((550/N)*i, 120-500/N)
        c.fill();
        c.stroke();
        c.closePath();
    }
    

}


function F2(){
    var canvas = document.getElementById("canvas3");
    var c = canvas.getContext("2d");

    var xc = canvas1.width / 2; var yc = canvas1.height / 2;

    c.clearRect(0, 0, 2*xc, 2*yc);
 
    var N = parseInt(input1.value);
    var M = parseInt(input2.value);

    let sizeX = 20;
    let sizeY = 20;
    let offset = 10;

    for (let x=1; x<=N; x++)
    {
        for (let y=1; y<=M; y++)
        {
            c.beginPath();

            c.fillStyle="red";
            c.strokeStyle="white"
            c.lineTo(sizeX*y+offset*y, sizeY*x+offset*x);
            c.lineTo(sizeX*y+sizeX+offset*y, sizeY*x+offset*x);
            c.lineTo(sizeX*y+offset*y, sizeY*x+sizeY+offset*x)
            c.fill();
            c.stroke();
            c.closePath();
            c.beginPath();

            c.fillStyle="yellow";
            c.strokeStyle="white"
            c.lineTo(sizeX*y+sizeX+offset*y, sizeY*x+offset*x);
            c.lineTo(sizeX*y+sizeX+offset*y, sizeY*x+sizeY+offset*x);
            c.lineTo(sizeX*y+offset*y, sizeY*x+sizeY+offset*x)
            c.fill();
            c.stroke();
            c.closePath();

        }
    }
}


function F3(){
    var canvas = document.getElementById("canvas4");
    var c = canvas.getContext("2d");
    var xc = canvas1.width / 2; var yc = canvas1.height / 2;

    var xc = canvas1.width / 2; var yc = canvas1.height / 2;

    c.clearRect(0, 0, 2*xc, 2*yc);
    c.beginPath();


    c.moveTo(10, yc); c.lineTo(2 * xc - 10, yc);
    c.moveTo(xc, 10); c.lineTo(xc, 2 * yc - 10);
    c.stroke();
    c.closePath();


    let start = -Math.PI;
    c.beginPath();
    for(let i = start; i<Math.PI; i+=.01)
    {
        let y = Math.sin(i);

        c.fillRect(xc+i*60, yc+y*60, 2, 2);
    }
}


function F4(){
    var canvas = document.getElementById("canvas5");
    var c = canvas.getContext("2d");
    var xc = canvas1.width / 2; var yc = canvas1.height / 2;

    var xc = canvas1.width / 2; var yc = canvas1.height / 2;

    c.clearRect(0, 0, 2*xc, 2*yc);



    let start = -Math.PI;
    c.beginPath();
    for(let i = start; i<Math.PI; i+=.01)
    {
        let y = Math.sin(-i);

        c.fillRect(xc+i*60, yc+y*60, 2, 2);
    }


    let startX = xc;
    let startY = 0;
    c.strokeStyle="Red";
    for(let i = -Math.PI; i<Math.PI; i+=.1)
    {
        let y = Math.sin(-i);

        c.beginPath();
        c.moveTo(startX, startY); c.lineTo(xc+i*60, yc+y*60);
        c.stroke();
        c.closePath();
    }
     startX = xc;
     startY = yc*2;
    c.strokeStyle="White";
    for(let i = -Math.PI; i<Math.PI; i+=.1)
    {
        let y = Math.sin(-i);

        c.beginPath();
        c.moveTo(startX, startY); c.lineTo(xc+i*60, yc+y*60);
        c.stroke();
        c.closePath();
    }

}



