<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>New Notepad</title>
    <link rel="stylesheet" href="css.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.14/codemirror.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.14/codemirror.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.14/mode/javascript/javascript.min.js"></script>
</head>
<body>
<div class="container">
    <h1 class="main">< Notepad.js ></h1>
    <h5>A Simple yet elegant Javascript code editor</h5>
    <div style="margin-top:100px;display:flex;flex-direction: row;gap:30px;">
        <div id="editor"></div>
        <textarea id="consoleOutput"></textarea>
    </div>



</div>

<div style="text-align: center;">

    <a href="info.html">< Info ></a>
    <a href="styles.html">< Styles ></a>

    <a class="proj" href="proj.html">< Project Settings ></a>
    <a href="https://github.com/that0therGuy">< @that0therguy ></a>

</div>
<script src='index.js'></script>
<script>

    let editor = CodeMirror(document.getElementById('editor'), {
        mode: "javascript",
        theme: "default",
        lineNumbers: true
    });
    const savedCode = localStorage.getItem('code');
    if (savedCode) {
        editor.setValue(savedCode);
    }
    document.querySelector('a').addEventListener('click',()=>{

        localStorage.setItem('code',editor.getValue());
    })

    function checkforbloom(){

        if (localStorage.getItem('bloom')==='true'){
            document.querySelector('#editor').style.boxShadow='0 0 25px rgba(97, 0, 128, .4)';

            document.querySelector('textarea').style.boxShadow='0 0 25px rgba(97, 0, 128, .4)';

        }else{
            document.querySelector("#editor").style.boxShadow='0 0 25px rgba(42, 0, 54, 0.3)'

            document.querySelector("textarea").style.boxShadow='0 0 25px rgba(42, 0, 54, 0.3)'
        }
        /*if (localStorage.getItem('mode')==='true'){
            document.querySelector('h1').style.webkitBackgroundClip = 'text';
            document.querySelector('h1').style.webkitTextFillColor = 'transparent';
            document.querySelector('h5').style.webkitBackgroundClip = 'text';
            document.querySelector('h5').style.webkitTextFillColor = 'transparent';
            document.body.style.background='linear-gradient(to top left, rgba(0,0,0,1) 0%, rgba(47,0,70,1) 100%)';
            document.querySelector('h5').style.background='linear-gradient(90deg, rgba(219,219,219,1) 0%, rgba(182,31,255,.8) 100%)';


        }else{
            document.querySelector('h1').style.background='linear-gradient(90deg, rgba(40,0,74,1) 0%, rgba(9,0,13,1) 100%)';
            document.querySelector('h1').style.webkitBackgroundClip = 'text';
            document.querySelector('h1').style.color = 'transparent';

            document.querySelector('h5').style.background='linear-gradient(90deg, rgba(40,0,74,1) 0%, rgba(9,0,13,1) 100%)';
            document.querySelector('h5').style.backgroundClip= 'text';
            document.querySelector('h5').style.color = 'transparent';
            document.body.style.background='linear-gradient(90deg, rgba(139,0,255,1) 0%, rgba(200,87,255,1) 100%)'


        }*/
    }
    checkforbloom()
    document.querySelector('#consoleOutput').style.height= document.querySelector('#editor').style.height;
    document.querySelector('#consoleOutput').value ='';
    // Redirection of console.log to textarea
    // Redirection of console.log to textarea
    (function() {
        const originalLog = console.log;
        console.log = function(message) {
            document.querySelector('#consoleOutput').value += message + '\n';
            originalLog.apply(console, arguments);
        };
    })();

    // Initialize CodeMirror editor

    document.querySelector('.main').addEventListener('click',()=>{

        const code = editor.getValue();
        try {
            document.querySelector('#consoleOutput').value =''
            const result = eval(code);
            if (code.includes('this is the best ide!')){
                let ma= document.createElement('marquee');
                ma.textContent='thanks!'
                ma.style.color='red';
                document.body.querySelector('.container').appendChild(ma)
            }




        } catch (error) {
            console.log('Error: ' + error);
        }
    })


</script>
</body>
</html>
